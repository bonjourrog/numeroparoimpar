const express = require("express");
const morgan = require("morgan");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const cookie = require("cookie-parser");
const app = express();

const userRoutes = require("./routes/user.routes");

app.set("port", process.env.PORT || 5000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(flash());
app.use(cookie());
app.use(
  session({
    secret: "secretsecret",
    resave: false,
    saveUninitialize: false,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.message = req.flash("message");
  res.locals.number = req.flash("number");
  next();
});

app.use("/", userRoutes);

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
