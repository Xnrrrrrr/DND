const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { GeneralMessage } = require("../../models");

/**
 * @desc	Create a general message
 * @route	POST /api/v1/general
 * @access	Private
 */
const saveGeneralMessage = asyncHandler(async (req, res) => {
	const { sender, role, content } = req.body;
	const message = new GeneralMessage({ sender, role, content });
	await message.save();

	const count = await GeneralMessage.countDocuments();
	if (count > 30) {
		const oldestMessage = await GeneralMessage.findOne().sort({ timestamp: 1 });
		if (oldestMessage) {
			await oldestMessage.remove();
		}
	}

	res.status(StatusCodes.OK).json({ msg: "Message Saved" });
});

/**
 * @desc	Get general message(s)
 * @route	GET /api/v1/general
 * @access	Private
 */
const getGeneralMessage = asyncHandler(async (req, res) => {
	const messages = await GeneralMessage.find().sort({ timestamp: -1 }).limit(30);
	res.status(StatusCodes.OK).json(messages.reverse());
});

module.exports = {
	saveGeneralMessage,
	getGeneralMessage,
}
