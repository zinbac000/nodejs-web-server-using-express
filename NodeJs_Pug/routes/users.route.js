const express = require("express");
const controller = require("../controllers/users.controller");
const validation = require("../validations/users.validate");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/search", controller.search);

router.get("/:id", controller.detail);

router.post("/create", validation.postCreate, controller.postCreate);

module.exports = router;
