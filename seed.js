"use strict";

const mongoose = require("mongoose"),
  Course = require("./models/course"),
  User = require("./models/user");

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/confetti_cuisine"
);

const coursesToSeed = [
  {
    title: "Chocolate World",
    description: "Dive into the divine world of sweet and bitter chocolate making.",
    cost: 22,
    maxStudents: 14
  },
  {
    title: "Pasta Boat",
    description: "Swim through original recipes and paddle your way through linguine",
    cost: 43,
    maxStudents: 8
  },
  {
    title: "Hot Potato",
    description: "Potatoes are back and they are hot! Learn 7 different ways you can make potatoes relevant again.",
    cost: 12,
    maxStudents: 28
  }
];

const usersToSeed = [
  {
    name: { first: "Jon", last: "Wexler" },
    email: "jon@test.com",
    zipCode: 10011,
    password: "password123"
  },
  {
    name: { first: "Chef", last: "Confetti" },
    email: "chef@confetti.com",
    zipCode: 90210,
    password: "password123"
  }
];

async function runSeed() {
  try {
    await Course.deleteMany({});
    await mongoose.connection.collection("users").deleteMany({});
    console.log("Database cleared. Seeding courses...");

    const createdCourses = await Course.create(coursesToSeed);
    console.log(`Successfully seeded ${createdCourses.length} courses.`);
    console.log("Generating encrypted passport credentials for seeding...");

    const nativeUsers = [];
    for (const data of usersToSeed) {
      const tempUser = new User({
        name: data.name,
        email: data.email,
        zipCode: data.zipCode
      });

      // hash and salt strings without .save() or .pre() hooks
      const encryptedUser = await new Promise((resolve, reject) => {
        tempUser.setPassword(data.password, (err, updatedInstance) => {
          if (err) reject(err);
          resolve(updatedInstance);
        });
      });

      nativeUsers.push({
        name: encryptedUser.name,
        email: encryptedUser.email,
        zipCode: encryptedUser.zipCode,
        salt: encryptedUser.salt,
        hash: encryptedUser.hash,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // encrypted items directly into the MongoDB
    const result = await mongoose.connection.collection("users").insertMany(nativeUsers);
    console.log(`Successfully seeded ${result.insertedCount} passport-ready users.`);
    console.log("SUCCESS: Seeding completed safely.");

  } catch (error) {
    console.log(`Error seeding data: ${error.message}`);
  } finally {
    console.log("Closing database connection...");
    mongoose.connection.close();
  }
}

runSeed();
