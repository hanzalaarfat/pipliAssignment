const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/userController");
const upload = require("../middleware/upload");

router.post("/add", usercontroller.AdddataManually);
router.post("/csv", upload.single("file"), usercontroller.AdddataByCSVfile);

module.exports = router;
