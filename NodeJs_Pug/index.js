require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/users.route");
const authRouter = require("./routes/auth.route");
const path = require("path");
const authMiddleware = require("./middlewares/auth.middleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", authMiddleware.requireAuth, (req, res) => {
  res.render("index");
});

app.use("/auth", authRouter);
app.use("/users", authMiddleware.requireAuth, userRouter);

app.listen(3000, () => {
  console.log("Server listenting at port 3000");
});
