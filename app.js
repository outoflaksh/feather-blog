const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");
const initializePassport = require("./config/passport-config");

//MONGODB CONNECTION
connectDB();

initializePassport(passport);

const PORT = process.env.PORT || 3000;

const app = express();

//STATIC
app.use(express.static("public"));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//BODYPARSER
app.use(express.urlencoded({ extended: false }));

//METHOD OVERRIDE
app.use(methodOverride("_method"));

//EXPRESS SESSION
app.use(
  session({
    secret: "secretkey",
    resave: true,
    saveUninitialized: true,
  })
);

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//AUTHENTICATION VIEW
app.use(function (req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  if (req.isAuthenticated()) {
    res.locals.loggedUsername = req.user.username;
  }

  next();
});

//ROUTES
app.use("/", require("./routes/index"));
app.use("/posts", require("./routes/posts"));
app.use("/users", require("./routes/users"));

app.listen(PORT, console.log(`Server up and running on port ${PORT}`));
