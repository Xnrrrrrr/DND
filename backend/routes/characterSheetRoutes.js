const express = require("express");
const router = express.Router();

const {
	protect,
	admin,
	superAdmin,
} = require("../middleware/authMiddleware.js");

const {
	createCharacterSheet,
	getAllUserCharacterSheets,
	getAllCharacterSheets,
	updateCharacterSheet,
	deleteCharacterSheet,
} = require("../controllers/characterSheetController.js");

router
	.route("/")
	.post([protect], createCharacterSheet)
	.get([protect, admin], getAllCharacterSheets);
router.route("/user").get([protect], getAllUserCharacterSheets);
router
	.route("/:characterSheetId")
	.put([protect, superAdmin], updateCharacterSheet)
	.delete([protect, superAdmin], deleteCharacterSheet);

module.exports = router;
