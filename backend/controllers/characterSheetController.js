const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { CharacterSheet } = require("../models");

/**
 * @desc	Create a new character Sheet
 * @route	POST /api/v1/character-sheet
 * @access	Private
 */
const createCharacterSheet = asyncHandler(async (req, res) => {
	const { skills, characterFirstName, characterLastName, ideals, bonds, religion, flaws, backgrounds, primaryClass, subClass, armorClass, currentHitPoints, temporaryHitPoints, equipment, race, inspiration, dexterity, intelligence, wisdom, charisma, strength, proficiencyBonus, savingThrows, alignment, background, features, personalityTraits, languages, exoticLanguage, age, height, weight, skin, hair, eyes, proficiencies, characterAppearance, characterBackstory, allies, organizations,   } = req.body;
    if (
        !skills || 
        !characterFirstName || 
        !characterLastName || 
        !ideals || 
        !bonds || 
        !religion || 
        !flaws || 
        !backgrounds || 
        !primaryClass || 
        !subClass || 
        !armorClass || 
        !currentHitPoints || 
        !temporaryHitPoints || 
        !equipment || 
        !race || 
        !inspiration || 
        !dexterity || 
        !intelligence || 
        !wisdom || 
        !charisma || 
        !strength || 
        !proficiencyBonus || 
        !savingThrows || 
        !alignment || 
        !background || 
        !features || 
        !personalityTraits || 
        !languages || 
        !exoticLanguage || 
        !age || 
        !height || 
        !weight || 
        !skin || 
        !hair || 
        !eyes || 
        !proficiencies || 
        !characterAppearance || 
        !characterBackstory || 
        !allies || 
        !organizations
    ) 
    {
        res.status(StatusCodes.BAD_REQUEST);// a lot of shit
    }
    const characterSheet = new CharacterSheet({
        skills,
        characterFirstName,
        characterLastName,
        ideals,
        bonds,
        religion,
        flaws,
        backgrounds,
        primaryClass,
        subClass,
        armorClass,
        currentHitPoints,
        temporaryHitPoints,
        equipment,
        race,
        inspiration,
        dexterity,
        intelligence,
        wisdom,
        charisma,
        strength,
        proficiencyBonus,
        savingThrows,
        alignment,
        background,
        features,
        personalityTraits,
        languages,
        exoticLanguage,
        age,
        height,
        weight,
        skin,
        hair,
        eyes,
        proficiencies,
        characterAppearance,
        characterBackstory,
        allies,
        organizations,

    });
    await characterSheet.save();
    res.status(StatusCodes.CREATED).json({ characterSheet });

});

	// No checks needed

	// const characterSheet = await CharacterSheet({ ... });
// why tf is all of this here? didnt i fix this above? ^
	//res.status(StatusCodes.OK).json({ msg: 'It works' });
//});

/**
 * @desc	Get a user's character sheet
 * @route	Get /api/v1/character-sheet
 * @access	Private
 */
const getAllCharacterSheets = asyncHandler(async (req, res) => {
    const characterSheets = await CharacterSheet.find({}).select('-__v').sort('name');
    res.status(StatusCodes.OK).json({ count: characterSheets.length, characterSheets });
});

/**
 * @desc	Update a user's character sheet
 * @route	PUT /api/v1/character-sheet
 * @access	Private
 */
const updateCharacterSheet = asyncHandler(async (req, res) => {
    const { characterSheetId } = req.params;
    const { skills, characterFirstName, characterLastName, ideals, bonds, religion, flaws, backgrounds, primaryClass, subClass, armorClass, currentHitPoints, temporaryHitPoints, equipment, race, inspiration, dexterity, intelligence, wisdom, charisma, strength, proficiencyBonus, savingThrows, alignment, background, features, personalityTraits, languages, exoticLanguage, age, height, weight, skin, hair, eyes, proficiencies, characterAppearance, characterBackstory, allies, organizations,   } = req.body;
    const characterSheet = await CharacterSheet.findByIdAndUpdate( 
        characterSheetId,
        {
            skills,
            characterFirstName,
            characterLastName,
            ideals,
            bonds,
            religion,
            flaws,
            backgrounds,
            primaryClass,
            subClass,
            armorClass,
            currentHitPoints,
            temporaryHitPoints,
            equipment,
            race,
            inspiration,
            dexterity,
            intelligence,
            wisdom,
            charisma,
            strength,
            proficiencyBonus,
            savingThrows,
            alignment,
            background,
            features,
            personalityTraits,
            languages,
            exoticLanguage,
            age,
            height,
            weight,
            skin,
            hair,
            eyes,
            proficiencies,
            characterAppearance,
            characterBackstory,
            allies,
            organizations,


        }, // checking2
        { new: true }
    );                          
    if (!characterSheet) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error(`No characterSheet found with an id of ${characterSheetId}.`);
    }
    res.status(StatusCodes.OK).json({ characterSheet });
});

/**
 * @desc	Delete user and associated data
 * @route	DELETE /api/v1/character-sheet
 * @access	Private
 */
const deleteCharacterSheet = asyncHandler(async (req, res) => {
    const { characterSheetId } = req.params;
    const characterSheet = await CharacterSheet.findByIdAndDelete(characterSheetId);
    if (!characterSheet) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error(`No characterSheet found with an id of ${characterSheetId}.`);
    }
    res.status(StatusCodes.OK).json({ msg: `CharacterSheet deleted.` });
});

module.exports = {
	createCharacterSheet,
    getAllCharacterSheets,
    updateCharacterSheet,
    deleteCharacterSheet,
};
