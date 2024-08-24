const express = require("express");
const { register, verifyToken, login } = require("../controllers/userController");
const upload = require("../middleware/ImageUpload");
const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello");
});
// router.post("/register", upload.single("avatar"), register);
router.post("/register", register);
router.post("/login",login)
router.get("/verify-token/:token", verifyToken)
module.exports = router;
