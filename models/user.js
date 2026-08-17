"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose").default,
  Subscriber = require("./subscriber");

var userSchema = new Schema(
  {
    name: {
      first: { type: String, trim: true },
      last: { type: String, trim: true }
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    zipCode: {
      type: Number,
      min: [1000, "Zip code too short"],
      max: 99999
    },
    subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }]
  },
  {
    timestamps: true
  }
);

userSchema.virtual("fullName").get(function() {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.pre("save", async function() {
  let user = this;
  if (user.subscribedAccount === undefined) {
    try {
      const subscriber = await Subscriber.findOne({ email: user.email });
      if (subscriber) {
        user.subscribedAccount = subscriber;
      }
    } catch (error) {
      console.log(`Error in connecting subscriber: ${error.message}`);
      throw error;
    }
  }
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
