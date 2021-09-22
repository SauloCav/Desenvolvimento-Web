const express = require("express");
const router = express.Router();

const controller = require("../controllers/post-controller");

router.get("/", controller.get);
//router.get("/search", controller.getByNameAndPrice);
router.get("/:id", controller.getById);
router.post("/", controller.post);

module.exports = router;
