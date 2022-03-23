const {
    signUp,
    getdata
} = require("../controller/signupController");

const router = require("express").Router();

router.post("/signup", signUp);
router.get("/get", getdata)


module.exports = router;