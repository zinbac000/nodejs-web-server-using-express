const { users } = require("../db");

module.exports.index = (req, res) => {
  res.render("users/index", { users: users.value() });
};

module.exports.create = (req, res) => {
  res.render("users/createUser");
};

module.exports.detail = (req, res) => {
  let user = users.find({ id: req.params.id }).value();
  console.log(req.params.id);
  res.render("users/detail", { user });
};

module.exports.postCreate = (req, res) => {
  users.insert(req.body).write();
  res.redirect("/users");
};

module.exports.search = (req, res) => {
  let { q } = req.query;
  let filteredUsers = users.value().filter((user) => user.name.toLowerCase().includes(q.toLowerCase().trim()));
  res.render("users/index", {
    users: filteredUsers,
    q
  });
};
