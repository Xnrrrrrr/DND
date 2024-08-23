const mongoose = require("mongoose");

const generalMessageSchema = new mongoose.Schema({
	sender: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
		maxlength: [100, "A chat message must not exceed 100 characters."],
	},
	timestamp: {
		type: Date,
		default: Date.now,
		expires: 3600,
	},
});

generalMessageSchema.index({ timestamp: 1 }, { expiresAfterSeconds: 3600 });
generalMessageSchema.index({ timestamp: 1 });

const GeneralMessage = mongoose.model("GeneralMessage", generalMessageSchema);

module.exports = GeneralMessage;
