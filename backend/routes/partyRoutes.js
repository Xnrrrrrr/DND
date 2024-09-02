const express = require("express");
const router = express.Router();

const {
	protect,
	admin,
	superAdmin,
} = require("../middleware/authMiddleware.js");

const {
	createParty,
	getParties,
	joinParty,
	getParty,
	leaveParty,
	deleteParty,
} = require("../controllers/partyController.js");

router
	.route("/")
	.post([protect], createParty)
	.get([protect], getParties)
	.delete([protect], deleteParty);
router.route("/:partyId").get([protect], getParty);
router.route("/:partyId/leave").put([protect], leaveParty);
router.route("/join").post([protect], joinParty);

module.exports = router;
