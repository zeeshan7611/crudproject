const { login ,home, update} = require("../controller/loginController");
const { checkToken } = require("../../authentication/tokenValidation");

const router = require("express").Router();

router.post("/login", login);
router.get("/home",checkToken, home);
router.post("/update", checkToken, update);

module.exports = router;