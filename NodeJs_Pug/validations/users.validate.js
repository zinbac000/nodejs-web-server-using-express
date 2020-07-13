module.exports.postCreate = (req, res, next) => {
  let errors = [];
  if (req.body.name === "") {
    errors.push("Name is required");
  }

  if (req.body.age === "") {
    errors.push("Age is required");
  }
  if (errors.length) {
    res.render("users/createUser", { errors, user: req.body });
  } else {
    next();
  }
};
