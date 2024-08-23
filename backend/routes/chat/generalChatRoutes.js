const express = require("express");
const router = express.Router();

const {
	protect,
	admin,
	superAdmin,
} = require("../../middleware/authMiddleware.js");

const {
	saveGeneralMessage,
	getGeneralMessage,
} = require("../../controllers/chat/generalChatController.js");

router
	.route("/")
	.post([protect], saveGeneralMessage)
	.get([protect], getGeneralMessage);

module.exports = router;
