const mongoose = require("mongoose");

const CharacterSheetSchema = new mongoose.Schema(
	{
		characterFirstName: {
			type: String,
			required: [true, "Please provide your desired first name"],
			minlength: 2,
			maxlength: 20,
		},
        characterLastName: {
			type: String,
			required: [true, "Please provide your desired last name"],
			minlength: 2,
			maxlength: 20,
		},
        idealOne: {
			type: String,
            enum: ['Good', 'Lawfullness', 'Chaos', 'Evil','Community', 'Individuality', 'Faith', 'Neutrality'], // Use enum to restrict values
			required: [true, "Please provide your first ideal"],
		},
        idealTwo: {
			type: String,
            enum: ['Good', 'Lawfullness', 'Chaos', 'Evil','Community', 'Individuality', 'Faith', 'Neutrality'], // Use enum to restrict values
			required: [true, "Please provide your second ideal"],
        },
        bonds: {
			type: String,
            enum: ['Family', 'Mentor', 'Homeland', 'Artifact', 'Heirloom', 'Oath', 'Revenge', 'Justice', 'Love'], // Use enum to restrict values
			required: [true, "Please provide your desired bond"],
		},
        religion: {
			type: String,
            enum: [], // Use enum to restrict values
			required: [true, "Please provide your desired religion"],
		},
        flaws: {
			type: String,
            enum: ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Hermit', 'Noble', 'Sage', 'Soldier', 'Urchin', ], // Use enum to restrict values
			required: [true, "Please provide your desired flaw"],
		},
        primaryClass: {
			type: String,
            enum: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter','Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard', 'Artificer', 'Druid', 'Fighter'], // Use enum to restrict values
			required: [true, "Please provide your desired primary class"],
        },
        subClass: {
			type: String,
            enum: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter','Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard', 'Artificer', 'Druid', 'Fighter'], // Use enum to restrict values
			required: [true, "Please provide your desired sub class"],
        },
        armorClass: {
			type: String,
            enum: ['Light Armor', 'Medium Armor', 'Heavy Armor', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        currentHitPoints: {
			type: Number,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        temporaryHitPoints: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        equipment: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        race: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your race"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        inspriation: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        dexterity: {
			type: Number,
			default: 1
		},
        intelligence: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        wisdom: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        charisma: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        strength: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        proficiencyBonus: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        skills: {
			type: Enum,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        savingThrows: {
			type: Enum,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        alignment: {
			type: String,
			enum: ['Lawful good', 'Neutral good', 'Chaotic good', 'Lawful neutral', 'Neutral', 'Chaotic neutral', 'Lawful evil','Neutral evil','Chaotic evil' ], // Use enum to restrict values
		},
        background: {
			type: String,
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        features: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        personalityTraits: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        languages: {
			type: String,
            enum: ['common', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Orc'], // Use enum to restrict values
			required: [true, "Please provide your desired language"],
		},
        exoticLanguage: {
			type: String,
            enum: ['Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon'], // Use enum to restrict values
			required: [true, "Please provide your desired exotic language"],
		},
        age: {
			type: Number,
			required: [true, "Please provide your desired age"],
			min: 0,
			max:10000 ,
		},
        height: {
			type: Number,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        weight: {
			type: Number,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        skin: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        hair: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        eyes: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        proficiencies: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        characterAppearance: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        characterBackstory: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        allies: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
        organizations: {
			type: String,
            enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
		email: {
			type: String,
			required: [true, `Please provide a unique email address.`],
			unique: true,
			validate: {
				validator: validator.isEmail,
				message: "Please provide a valid email address",
			},
			minlength: 5,
			maxlength: 254,
		},
		role: {
			type: String,
			enum: ["user", "admin", "superAdmin"],
			default: "user",
		},
	},
	{
		timestamps: true,
	}
);


const CharacterSheet = mongoose.model("CharacterSheet", CharacterSheetSchema);

module.exports = CharacterSheet;