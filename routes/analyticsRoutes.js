const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");

const router = express.Router();

//Get Blood DAta Record
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);

module.exports = router;
