const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { CharacterSheet, User } = require("../models");
const {
	abilityModifier,
	backgrounds: optionBackgrounds,
	alignment: optionAlignment,
	sex: optionSex,
	skin: optionSkin,
	hair: optionHair,
	eyes: optionEyes,
	skills: optionSkills,
	maxSkills,
	races: optionRaces,
	subraces: optionSubraces,
	subclasses: optionSubclasses,
	classDefault,
	raceDefault,
} = require("../utils");

/**
 * @desc	Create a new character Sheet
 * @route	POST /api/v1/character-sheet
 * @access	Private
 */
const createCharacterSheet = asyncHandler(async (req, res) => {
	const userId = req.user._id.toString();
	const {
		homebrew,
		characterFirstName,
		characterLastName,
		ideals,
		bonds,
		flaws,
		backgrounds,
		specialBackground,
		feature,
		primaryClass,
		subclass,
		skills,
		race,
		subrace,
		strength,
		dexterity,
		constitution,
		intelligence,
		wisdom,
		charisma,
		alignment,
		personalityTraits,
		age,
		height,
		weight,
		sex,
		skin,
		hair,
		eyes,
		backstory,
	} = req.body;

	const user = await User.findById(userId);

	if (!user) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`No user found with id ${userId}.`);
	}

	if (
		!characterFirstName ||
		!characterLastName ||
		!ideals ||
		!bonds ||
		!flaws ||
		!backgrounds ||
		!primaryClass ||
		!feature.title ||
		!feature.description ||
		!subclass ||
		!skills ||
		!race ||
		!strength ||
		!dexterity ||
		!constitution ||
		!intelligence ||
		!wisdom ||
		!charisma ||
		!alignment ||
		!personalityTraits ||
		!age ||
		!height ||
		!weight ||
		!sex ||
		!skin ||
		!hair ||
		!eyes ||
		!backstory
	) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`One of the required fields were not filled out.`);
	}

	if (characterFirstName.length > 30 || characterLastName.length > 30) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's names must be less than or equal to 30 characters each.`
		);
	}

	if (
		personalityTraits[0].length > 250 ||
		personalityTraits[1].length > 250
	) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's personaility trait must be less than or equal to 250 characters each.`
		);
	}

	if (personalityTraits.length !== 2) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`You have more than or not enough of the allotted personality traits.`
		);
	}

	if (ideals.length > 500 || bonds.length > 500 || flaws.length > 500) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's ideal, bond, and flaw must be less than or equal to 500 characters each.`
		);
	}

	if (specialBackground.title && specialBackground.title.length > 50) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's special background title must be less than or equal to 50 characters.`
		);
	}

	if (
		specialBackground.description &&
		specialBackground.description.length > 500
	) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's special background description must be less than or equal to 500 characters.`
		);
	}

	if (feature.title.length > 50) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's feature title must be less than or equal to 50 characters.`
		);
	}

	if (feature.description.length > 500) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's feature description must be less than or equal to 500 characters.`
		);
	}

	if (backstory.length > 2000) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`The character's backstory must be less than or equal to 100 characters.`
		);
	}

	if (age < 1 || age > 300) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`Your age must be between 1 and 300.`);
	}

	if (height < 25 || height > 300) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`Your height must be between 25 and 300.`);
	}

	if (weight < 50 || weight > 500) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`Your height must be between 50 and 500.`);
	}

	if (
		strength < 3 ||
		strength > 21 ||
		dexterity < 3 ||
		dexterity > 21 ||
		constitution < 3 ||
		constitution > 21 ||
		intelligence < 3 ||
		intelligence > 21 ||
		wisdom < 3 ||
		wisdom > 21 ||
		charisma < 3 ||
		charisma > 21
	) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`One of the ability scores are out of the acceptable range (3-21): \nStrength: ${strength} \nDexterity: ${dexterity} \nConstitution: ${constitution} \nIntelligence: ${intelligence} \nWisdom: ${wisdom} \nCharisma: ${charisma}`
		);
	}

	if (!optionBackgrounds.includes(backgrounds)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid background.`);
	}

	if (!optionAlignment.includes(alignment)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid alignment.`);
	}

	if (!optionSex.includes(sex)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid sex.`);
	}

	if (!optionSkin.includes(skin)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid skin color/type.`);
	}

	if (!optionHair.includes(hair)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid hair color.`);
	}

	if (!optionEyes.includes(eyes)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid eye color.`);
	}

	if (!Object.keys(optionSkills).includes(primaryClass)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid class.`);
	}

	if (!optionSubclasses[primaryClass].includes(subclass)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid subclass.`);
	}

	if (skills.length !== maxSkills[primaryClass]) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`You must have the correct number of skills allotted to your class.`
		);
	}

	if (
		skills.filter((skill) => !optionSkills[primaryClass].includes(skill))
			.length > 0
	) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(
			`You must have the correct skills allotted to your class.`
		);
	}

	if (!optionRaces.includes(race)) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`You must select a valid race.`);
	}

	if (optionSubraces[race]) {
		if (!subrace) {
			res.status(StatusCodes.BAD_REQUEST);
			throw new Error(`The subrace field was not filled out.`);
		}

		if (!optionSubraces[race].includes(subrace)) {
			res.status(StatusCodes.BAD_REQUEST);
			throw new Error(`A valid subrace for an ${race} was not selected.`);
		}
	} else {
		if (subrace) {
			res.status(StatusCodes.BAD_REQUEST);
			throw new Error(`This race does not have a subrace.`);
		}
	}

	// Needed to be added: proficiencyBonus and toolProficiency

	// class determinants
	const savingThrowProficiency = classDefault[primaryClass].savingThrowPro;
	const hitDie = classDefault[primaryClass].hitDie;
	const armorProficiency = classDefault[primaryClass].armorPro;
	const weaponProficiency = classDefault[primaryClass].weaponPro;

	const formattedRace = race.replaceAll(" ", "_").replaceAll("-", "0");
	// race determinants
	const languages = raceDefault[formattedRace].languages;
	const speed = raceDefault[formattedRace].speed;
	const transportationCapability =
		raceDefault[formattedRace].transportationCapability;

	const hitDieMax = parseInt(hitDie.slice(2));
	const constitutionModifier = abilityModifier(constitution);

	const hitPointMax = hitDieMax + constitutionModifier;
	const currentHitPoints = hitPointMax;

	const characterSheet = await CharacterSheet.create({
		homebrew,
		characterFirstName,
		characterLastName,
		ideals,
		bonds,
		flaws,
		backgrounds,
		specialBackground,
		feature,
		primaryClass,
		subclass,
		skills,
		race,
		subrace,
		strength,
		dexterity,
		constitution,
		intelligence,
		wisdom,
		charisma,
		savingThrowProficiency,
		hitDie,
		hitPointMax,
		currentHitPoints,
		alignment,
		personalityTraits,
		languages,
		speed,
		transportationCapability,
		age,
		height,
		weight,
		sex,
		skin,
		hair,
		eyes,
		armorProficiency,
		weaponProficiency,
		backstory,
		user: user._id,
	});
	await characterSheet.save();
	user.characters.push(characterSheet._id);
	await user.save();
	res.status(StatusCodes.CREATED).json({ characterSheet });
});

/**
 * @desc	Get all of a user's character sheets
 * @route	Get /api/v1/character-sheet/user
 * @access	Private
 */
const getAllUserCharacterSheets = asyncHandler(async (req, res) => {
	const userId = req.user._id.toString();

	const user = await User.findById(userId);

	if (!user) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`No user found with id ${userId}.`);
	}

	const characterSheets = await CharacterSheet.find({
		_id: { $in: user.characters },
	});

	res.status(StatusCodes.OK).json({ characterSheets });
});

/**
 * @desc	Get all character sheets
 * @route	Get /api/v1/character-sheet
 * @access	Private --- admin
 */
const getAllCharacterSheets = asyncHandler(async (req, res) => {
	const characterSheets = await CharacterSheet.find({})
		.select("-__v")
		.sort("name");
	res.status(StatusCodes.OK).json({
		count: characterSheets.length,
		characterSheets,
	});
});

/**
 * @desc	Updates a user's character sheet
 * @route	PUT /api/v1/character-sheet
 * @access	Private
 */
const updateCharacterSheet = asyncHandler(async (req, res) => {
	res.status(StatusCodes.OK).json({});
});

/**
 * @desc	Deletes a user's character sheet
 * @route	DELETE /api/v1/character-sheet/:characterSheetId
 * @access	Private
 */
const deleteCharacterSheet = asyncHandler(async (req, res) => {
	const { characterSheetId } = req.params;

	const characterSheet = await CharacterSheet.findById(characterSheetId);

	if (!characterSheet) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error(
			`No characterSheet found with an id of ${characterSheetId}.`
		);
	}

	const userId = characterSheet.user;
	const user = await User.findById(userId);

	if (!user) {
		res.status(StatusCodes.BAD_REQUEST);
		throw new Error(`No user found with id ${userId}.`);
	}

	user.characters = user.characters.filter(
		(c) => c.toString() !== characterSheetId.toString()
	);
	await user.save();

	// Remove from campaign here

	await CharacterSheet.findByIdAndDelete(characterSheet._id);

	res.status(StatusCodes.OK).json({ msg: `Character sheet deleted.` });
});

module.exports = {
	createCharacterSheet,
	getAllUserCharacterSheets,
	getAllCharacterSheets,
	updateCharacterSheet,
	deleteCharacterSheet,
};
