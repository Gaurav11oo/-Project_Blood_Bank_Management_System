const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarListController,
  gethospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//Routes
const router = express.Router();

//Get || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);
//Get || hospital LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  gethospitalListController
);
//Get || ORG LIST
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

//DELETE DONAR
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);

//EXPORT
module.exports = router;
