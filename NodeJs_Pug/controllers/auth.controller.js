const users = require("../db");
const md5 = require("md5");

module.exports.login = (req, res) => {
  res.render("auth/login");
};

module.exports.postLogin = (req, res) => {
  let { username, password } = req.body;
  let errors = [];
  let user = users.find({ username }).value();
  if (!user) {
    errors.push("User does not exist");
  }

  if (user && user.password !== md5(password)) {
    errors.push("Wrong password!");
  }

  if (errors.length) {
    res.render("auth/login", { errors, account: req.body });
    return;
  }

  res.cookie("userId", user.id, { signed: true });
  res.redirect("/users");
};
