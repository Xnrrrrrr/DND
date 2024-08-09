const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { CharacterSheet } = require("../models");

/**
 * @desc	Create a new character Sheet
 * @route	POST /api/v1/character-sheet
 * @access	Private
 */
const createCharacterSheet = asyncHandler(async (req, res) => {
	// a lot of shit

	// No checks needed

	// const characterSheet = await CharacterSheet({ ... });

	res.status(StatusCodes.OK).json({ msg: 'It works' });
});

/**
 * @desc	Get a user's character sheet
 * @route	Get /api/v1/character-sheet
 * @access	Private
 */


/**
 * @desc	Update a user's character sheet
 * @route	PUT /api/v1/character-sheet
 * @access	Private
 */


/**
 * @desc	Delete user and associated data
 * @route	DELETE /api/v1/character-sheet
 * @access	Private
 */


module.exports = {
	createCharacterSheet,
};
