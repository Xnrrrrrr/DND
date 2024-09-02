const mongoose = require("mongoose");

const PartySchema = new mongoose.Schema(
	{
		gameMasterId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		gameMaster: {
			type: String,
			required: true,
		},
		passwordProtected: {
			type: Boolean,
			required: true,
		},
		password: {
			type: String,
			maxlength: [100, "Your password must be less than 100 characters."],
		},
		homebrew: {
			type: Boolean,
			required: true,
		},
		maxCharacters: {
			type: Number,
			min: 2,
			max: 8,
			required: true,
		},
		characters: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
					required: true,
				},
				characterSheet: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "CharacterSheet",
					default: null, // For the game master, this can be null
				},
			},
		],
	},
	{ timestamps: true }
);

PartySchema.pre("save", function (next) {
	if (this.characters.length > this.maxCharacters) {
		return next(
			new Error(
				`Number of characters exceeds the maximum allowed (${this.maxCharacters}).`
			)
		);
	}

	next();
});

PartySchema.pre("save", function (next) {
	const gameMasterExists = this.characters.some(
		(character) => character.user.toString() === this.gameMasterId.toString()
	);

	if (!gameMasterExists) {
		this.characters.unshift({ user: this.gameMasterId, characterSheet: null });
	}

	next();
});

PartySchema.index({ createdAt: 1 }, { expiresAfterSeconds: 86400 });

const Party = mongoose.model("Party", PartySchema);

module.exports = Party;
