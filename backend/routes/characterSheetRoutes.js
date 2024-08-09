const express = require("express");
const router = express.Router();

const {
	protect,
	admin,
	superAdmin,
} = require("../middleware/authMiddleware.js");

const {
	createCharacterSheet,
} = require("../controllers/characterSheetController.js");

router.route("/").post([protect], createCharacterSheet)

module.exports = router;