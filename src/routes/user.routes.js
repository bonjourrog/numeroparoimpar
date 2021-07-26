const { Router } = require("express");
const router = Router();

const controller = require("../controllers/user.controller");

router.get("/", controller.index);
router.post("/verify", controller.verifyResult);

module.exports = router;
