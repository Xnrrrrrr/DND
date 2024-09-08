const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { Party, User, CharacterSheet } = require("../models");

/**
 * @desc	Creates a new party
 * @route	POST /api/v1/party
 * @access	Private
 */
const createParty = asyncHandler(async (req, res) => {
	const { gameMaster, passwordProtected, password, homebrew, maxCharacters } =
		req.body;
	if (
		!gameMaster ||
		passwordProtected === undefined ||
		homebrew === undefined ||
		!maxCharacters
	) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`One of the required fields were not filled out.`);
	}

	const user = await User.findById(req.user._id).select("-__v -password");

	if (!user) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("User not found for party request.");
	}

	if (user.username !== gameMaster) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			"Your username does not match the gameMaster username."
		);
	}

	if (password && password.length > 100) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error("Your password length is too long.");
	}

	if (passwordProtected && !password) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error("You must provide a password if your party is password protected.");
	}

	const existingParty = await Party.findOne({ gameMasterId: user._id });

	if (existingParty) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error("An active party already exists with this GM.");
	}

	const party = await Party.create({
		gameMasterId: user._id,
		gameMaster,
		passwordProtected,
		password,
		homebrew,
		maxCharacters,
	});
	await party.save();

	res.status(StatusCodes.OK).json({ party });
});

/**
 * @desc	Gets all party
 * @route	Get /api/v1/party
 * @access	Private
 */
const getParties = asyncHandler(async (req, res) => {
	const parties = await Party.find()
		.select("-__v")
		.populate({ path: "characters.user", select: "-__v -password" })
		.populate({
			path: "characters.characterSheet",
			select: "-__v",
		});
	res.status(StatusCodes.OK).json({ parties });
});

/**
 * @desc	Joins a party
 * @route	POST /api/v1/party/join
 * @access	Private
 */
const joinParty = asyncHandler(async (req, res) => {
	const { password, characterSheetId, partyId } = req.body;
	const user = await User.findById(req.user._id).select("-__v -password");

	if (!user) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("User not found for party request.");
	}

	const party = await Party.findById(partyId);

	if (!party) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("Party not found.");
	}

	const isUserInParty = party.characters.some(
		(c) => c.user.toString() === req.user._id.toString()
	);

	if (isUserInParty) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error("You are already in this party.");
	}

	// Needs to be tested
	const isUserInAnotherParty = await Party.findOne({
		"characters.user": req.user._id,
		_id: { $ne: partyId },
	});

	if (isUserInAnotherParty) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error("You are already in another party.");
	}

	if (party.passwordProtected) {
		if (!password || password !== party.password) {
			res.status(StatusCodes.UNAUTHORIZED);
			throw new Error("Incorrect or missing password.");
		}
	}

	const characterSheet = await CharacterSheet.findById(characterSheetId);

	if (!characterSheet) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error(
			`No Character sheet found with an id of ${characterSheetId}.`
		);
	}

	if (!party.homebrew && characterSheet.homebrew) {
		res.status(StatusCodes.FORBIDDEN);
		throw new Error("This party does not allow homebrew characters.");
	}

	if (party.characters.length === party.maxCharacters) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error("This party is full.");
	}

	party.characters.push({
		user: req.user._id.toString(),
		characterSheet: characterSheetId,
	});
	await party.save();
	res.status(StatusCodes.OK).json({ msg: "sent" });
});

/**
 * @desc	Gets a party by id
 * @route	Get /api/v1/party/:partyId
 * @access	Private
 */
const getParty = asyncHandler(async (req, res) => {
	const { partyId } = req.params;
	const party = await Party.findById(partyId)
		.select("-__v")
		.populate({ path: "characters.user", select: "-__v -password" })
		.populate({
			path: "characters.characterSheet",
			select: "-__v",
		});

	if (!party) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("Party not found.");
	}

	res.status(StatusCodes.OK).json({ party });
});

/**
 * @desc	Allows a user to leave a party
 * @route	PUT /api/v1/party/:partyId/leave
 * @access	Private
 */
const leaveParty = asyncHandler(async (req, res) => {
	const { partyId } = req.params;
	const user = await User.findById(req.user._id).select("-__v -password");

	if (!user) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("User not found for party request.");
	}

	const party = await Party.findById(partyId);

	if (!party) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("Party not found.");
	}

	party.characters = party.characters.filter(
		(character) => character.user.toString() !== req.user._id.toString()
	);

	await party.save();

	res.status(StatusCodes.OK).json({
		msg: `${user.username} left the party.`,
	});
});

/**
 * @desc	Kick a User
 * @route	PUT /api/v1/party/:partyId/kick
 * @access	Private
 */
const kickFromParty = asyncHandler(async (req, res) => {
	const { partyId } = req.params;
	const { playerId, playerUsername } = req.body;
	const user = await User.findById(req.user._id).select("-__v -password");

	if (!user) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("User not found for party request.");
	}

	const party = await Party.findById(partyId);

	if (!party) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("Party not found.");
	}

	if (user._id.toString() !== party.gameMasterId.toString()) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error("Only the game master can kick users.");
	}

	if (user._id.toString() === playerId.toString()) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			"The game master may not kick themselves from their own party."
		);
	}

	party.characters = party.characters.filter(
		(character) => character.user.toString() !== playerId.toString()
	);

	await party.save();

	res.status(StatusCodes.OK).json({
		msg: `${playerUsername || playerId} has been kicked.`,
	});
});

/**
 * @desc	Removes a party
 * @route	DELETE /api/v1/party
 * @access	Private
 */
const deleteParty = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id).select("-__v -password");

	if (!user) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("User not found for party request.");
	}

	const existingParty = await Party.findOneAndDelete({
		gameMasterId: user._id,
	});

	if (!existingParty) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`A party does not exist for ${user.username}.`);
	}

	res.status(StatusCodes.OK).json({
		msg: `Party deleted for ${user.username}.`,
	});
});

module.exports = {
	createParty,
	getParties,
	joinParty,
	getParty,
	leaveParty,
	kickFromParty,
	deleteParty,
};
