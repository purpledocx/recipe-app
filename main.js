"use strict";

const express = require("express");
const layouts = require("express-ejs-layouts");
const app = express();
const router = require("./routes/index");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const connectFlash = require("connect-flash");
const { Server } = require("socket.io");
const User = require("./models/user");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/confetti_cuisine"
);

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.use(morgan("combined"));
app.use(layouts);
app.use(express.static("public"));


app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use(cookieParser("secretCuisine123"));
app.use(
  expressSession({
    secret: "secretCuisine123",
    cookie: {
      maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
  })
);
app.use(connectFlash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  res.locals.flashMessages = req.flash();
  next();
});

app.use("/", router);

const server = app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

const io = new Server(server);
const chatController = require("./controllers/chatController")(io);