<div align="center">

# 🎉 Confetti Cuisine

### A Node.js & Express web application for booking cooking classes

<p align="center">
  Built with a classic Model-View-Controller (MVC) architecture, featuring user authentication, real-time community chat, server-rendered EJS views, and seamless class booking.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js Badge" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge" />
  <img src="https://img.shields.io/badge/Passport.js-00D26A?style=for-the-badge&logo=passport&logoColor=black" alt="Passport.js Badge" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io Badge" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS Badge" />
</p>

</div>

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Runtime & Framework** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="18" height="18" valign="middle" /> [Node.js](https://nodejs.org/) &nbsp;•&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="18" height="18" valign="middle" /> [Express.js](https://expressjs.com/) |
| **Database & ORM** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="18" height="18" valign="middle" /> [MongoDB](https://www.mongodb.com/) &nbsp;•&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="18" height="18" valign="middle" /> [Mongoose](https://mongoosejs.com/) |
| **Auth & Security** | 🔐 [Passport.js](https://www.passportjs.org/) (`passport-local-mongoose`) |
| **Templating** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ejs/ejs-original.svg" width="18" height="18" valign="middle" /> [EJS](https://ejs.co/) (`express-ejs-layouts`) |
| **Real-Time** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" width="18" height="18" valign="middle" /> [Socket.io](https://socket.io/) |
| **Tooling** | `express-validator` • `morgan` • `connect-flash` |

---

## Features

- **User Authentication:** Secure user registration, login, and session management powered by **Passport.js**.
- **Book Cooking Classes:** Users can browse available cooking classes and manage their bookings.
- **Live Community Chat:** Real-time communication powered by **Socket.io**. Chat history is persistently saved to MongoDB, and users automatically see the last 10 messages upon joining.
- **Dynamic Server-Rendered UI:** Fast rendering and reusable layouts via **EJS**.
- **Interactive UI:** Real-time form validation (`express-validator`) and notification popups (`connect-flash`).
- **Data Seeding:** Built-in seed scripts for rapid local database setup.

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14+ recommended) and npm
* A running **MongoDB** instance (local or cloud-hosted via [MongoDB Atlas](https://www.mongodb.com/atlas/database)). 

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/purpledocx/confetti_cuisine.git](https://github.com/purpledocx/confetti_cuisine.git)
   cd confetti_cuisine

```

2. **Install dependencies**
```bash
npm install

```


3. **Configure environment variables**
Create a `.env` file (or set variables in your shell) for any required config, such as:
* `MONGO_URI` (Your MongoDB connection string)
* `PORT` (e.g., 3000)
* `SESSION_SECRET` (For express-session/Passport)


4. **(Optional) Seed the database**
Populate your MongoDB database with sample class data:
```bash
node seed.js

```


5. **Start the application**
```bash
node main.js

```


Open your browser at the port logged in the console (commonly `http://localhost:3000`).

---

## Deployment

This repository includes a `Procfile` ready for **Heroku** deployment:

```bash
heroku create
git push heroku master

```

> **Important:** Remember to set required environment variables (like your MongoDB Atlas connection string and Session Secret) on your Heroku app via `heroku config:set KEY=VALUE`.

---

## Project Structure

```text
confetti_cuisine/
├── controllers/       # Request-handling logic
├── models/            # Mongoose schemas (Users, Classes, Chat Messages)
├── public/            # Static assets (CSS, client-side JS including Socket.io client)
├── routes/            # Express route definitions
├── views/             # Server-rendered EJS templates & layouts
├── main.js            # Express & Socket.io server entry point
├── seed.js            # Script to seed MongoDB with sample data
├── Procfile           # Heroku process definition
├── package.json
└── package-lock.json

```
