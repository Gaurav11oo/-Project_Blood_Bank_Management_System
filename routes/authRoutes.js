const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
router.post("/register", registerController);

//login || post
router.post("/login", loginController);

//Get Current user || GET
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
