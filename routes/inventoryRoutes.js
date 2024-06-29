const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsControllers,
  getHospitalController,
  getOrganisationControllers,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);
// router.get("/create-inventory", authMiddleware, createInventoryController);

//Get All Blood Record
router.get("/get-inventory", authMiddleware, getInventoryController);

//Get All Blood Record
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//Get Hospital Blood Record
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//Get Donar Record
router.get("/get-donars", authMiddleware, getDonarsControllers);

//Get Hospital Records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//Get Organisation Records
router.get("/get-organisation", authMiddleware, getOrganisationControllers);

//Get Hospital Records
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
