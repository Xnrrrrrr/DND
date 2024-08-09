const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { Spell } = require("../models");

/**
 * @desc	Creates spell
 * @route	POST /api/v1/spell
 * @access	Private --- Super Admin
 */
const createSpell = asyncHandler(async (req, res) => {
	const {
		name,
		level,
		school,
		castingTime,
		range,
		components,
		duration,
		description,
	} = req.body;
	if (
		!name ||
		!level ||
		!school ||
		!castingTime ||
		!range ||
		!components ||
		!duration ||
		!description
	) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`Please fill out all required fields.`);
	}
	const spell = new Spell({
		name,
		level,
		school,
		castingTime,
		range,
		components,
		duration,
		description,
	});
	await spell.save();
	res.status(StatusCodes.CREATED).json({ spell });
});

/**
 * @desc	Get a spell
 * @route	GET /api/v1/spell
 * @access	Private --- Admin
 */
const getAllSpells = asyncHandler(async (req, res) => {
	const spells = await Spell.find({}).select("-__v").sort("name");
	res.status(StatusCodes.OK).json({ count: spells.length, spells });
});

/**
 * @desc	Updates a spell
 * @route	PUT /api/v1/spell/:spellId
 * @access	Private --- Super Admin
 */
const updateSpell = asyncHandler(async (req, res) => {
	const { spellId } = req.params;
	const {
		name,
		level,
		school,
		castingTime,
		range,
		components,
		duration,
		description,
	} = req.body;
	const spell = await Spell.findByIdAndUpdate(
		spellId,
		{
			name,
			level,
			school,
			castingTime,
			range,
			components,
			duration,
			description,
		},
		{ new: true }
	);
	if (!spell) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error(`No spell found with an id of ${spellId}.`);
	}
	res.status(StatusCodes.OK).json({ spell });
});

/**
 * @desc	Deletes a spell
 * @route	PUT /api/v1/spell/:spellId
 * @access	Private --- Super Admin
 */
const deleteSpell = asyncHandler(async (req, res) => {
	const { spellId } = req.params;
	const spell = await Spell.findByIdAndDelete(spellId);
	if (!spell) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error(`No spell found with an id of ${spellId}.`);
	}
	res.status(StatusCodes.OK).json({ msg: `Spell deleted.` });
});

module.exports = {
	createSpell,
	getAllSpells,
	updateSpell,
	deleteSpell,
};
