const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const session = require("express-session");
const isSignedIn = require("./middleware/is-sign-in");
const passUserToView = require("./middleware/pass-user-to-view");
const mongoose = require("mongoose");
const methodOverRide = require("method-override");
const port = process.env.PORT ? process.env.PORT : 3000;


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(
    `Database is connected its name is : ${mongoose.connection.name}`
  );
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverRide("_method"));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.set("view engine", "ejs"); // Set EJS as the default view engine
app.use(passUserToView);
// require("controller")
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

app.use((req, res, next) => {
  if (req.session.messages) {
    res.locals.messages = req.session.messages;
    req.session.messages = null;
  } else {
    res.locals.messages = null;
  }
  next();
});

app.get("/", (req, res) => {
  res.render("auth/sign-in.ejs");
});


app.listen(port, () => {
  console.log(`localhost:${port}`);
});
