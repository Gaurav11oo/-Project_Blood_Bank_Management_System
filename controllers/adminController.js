const userModel = require("../models/userModel");

//Get donar list
const getDonarListController = async (req, res) => {
  try {
    const donarData = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: donarData.length,
      message: "Donar List Fetched Successfully!!!",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Donar List API",
      error,
    });
  }
};

//Get Hospital list
const gethospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: hospitalData.length,
      message: "Hospital List Fetched Successfully!!!",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List API",
      error,
    });
  }
};

//Get ORG list
const getOrgListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: orgData.length,
      message: "ORG List Fetched Successfully!!!",
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In ORG List API",
      error,
    });
  }
};
//DELETE DONAR
const deleteDonarController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Record Deleted Successfully!!!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error While Deleting",
      error,
    });
  }
};

module.exports = {
  getDonarListController,
  gethospitalListController,
  getOrgListController,
  deleteDonarController,
};
