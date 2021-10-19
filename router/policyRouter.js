const express = require("express");
const router = express.Router();
const Policycontroller = require("../controller/userController");

router.post("/add", Policycontroller.AddManuallyPolicy);
router.post("/csv", Policycontroller.AddPolicyByCVSfile);

module.exports = router;
