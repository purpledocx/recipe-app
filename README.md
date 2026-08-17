<div align="center">

# Recipe App

### A Node.js web application for browsing, creating, and managing recipes

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint Badge" />
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku Badge" />
</p>

</div>

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Runtime & Language** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="18" height="18" valign="middle" /> [Node.js](https://nodejs.org/) &nbsp;•&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="18" height="18" valign="middle" /> [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Database & ORM** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="18" height="18" valign="middle" /> [MongoDB](https://www.mongodb.com/) &nbsp;•&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="18" height="18" valign="middle" /> [Mongoose](https://mongoosejs.com/) |
| **Architecture** | 🏗️ MVC Pattern (`controllers/`, `models/`, `routes/`, `views/`) |
| **Tooling & Code Quality** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="18" height="18" valign="middle" /> [ESLint](https://eslint.org/) &nbsp;•&nbsp; <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="22" height="22" valign="middle" /> [npm](https://www.npmjs.com/) |
| **Deployment** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" width="18" height="18" valign="middle" /> [Heroku](https://www.heroku.com/) (`Procfile`) |

> **Note:** Exact dependencies and versions are defined in [`package.json`](./package.json) — check there for the specific web framework, templating engine, and database driver in use.
## Features

- **Browse & View:** Explore the full catalog of created recipes
- **CRUD Operations:** Easily create, edit, and delete recipe entries
- **Server-Rendered Views:** Fast rendering via `views/` templates
- **Data Seeding:** Built-in seed scripts for rapid local setup

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14+ recommended) and npm
* A running database instance, if the app connects to one (see `models/` for the schema and `seed.js` for how sample data is loaded)

### Installation & Setup

1. **Clone the repository**
```bash
git clone [https://github.com/purpledocx/recipe-app.git](https://github.com/purpledocx/recipe-app.git)
cd recipe-app

```


2. **Install dependencies**
```bash
npm install

```


3. **Configure environment variables**
Create a `.env` file (or set variables in your shell) for any required config, such as a database connection string and port. Check `main.js` and `models/` for expected variable names.
4. **(Optional) Seed the database**
```bash
node seed.js

```


5. **Start the application**
```bash
node main.js

```


Open your browser at the port logged in the console (commonly `http://localhost:3000`).

---

## Linting

Run ESLint across the codebase to check formatting and syntax rules:

```bash
npx eslint .

```

---

## Deployment

This repository includes a `Procfile` ready for **Heroku** deployment:

```bash
heroku create
git push heroku master

```

> Remember to set required environment variables (e.g., database connection string) on your Heroku app via `heroku config:set KEY=VALUE`.

---

## Project Structure

```text
recipe-app/
├── controllers/       # Request-handling logic
├── models/            # Data models / schemas
├── public/            # Static assets (CSS, client-side JS, images)
├── routes/            # Route definitions
├── views/             # Server-rendered templates
├── main.js            # Application entry point
├── seed.js            # Script to seed the database with sample data
├── Procfile           # Heroku process definition
├── .eslintrc.js       # ESLint configuration
├── package.json
└── package-lock.json
```
