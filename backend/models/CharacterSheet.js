const mongoose = require("mongoose");
const {
	backgrounds,
	alignment,
	sex,
	skin,
	hair,
	eyes,
	skills,
	maxSkills,
	races,
	subraces,
	subclasses,
} = require("../utils");

const CharacterSheetSchema = new mongoose.Schema(
	{
		characterFirstName: {
			type: String,
			required: [true, "Please provide your desired first name"],
			maxlength: 30,
		},
		characterLastName: {
			type: String,
			required: [true, "Please provide your desired last name"],
			maxlength: 30,
		},
		ideals: {
			type: String,
			required: [true, "Please provide your ideal"], // Ensures that at least one ideal is provided
			maxlength: 100,
		},
		bonds: {
			type: String,
			required: [true, "Please provide your desired bond"],
			maxlength: 100,
		},
		// religion: {
		// 	type: String,
		// 	enum: ["steve"], // Use enum to restrict values
		// 	required: [true, "Please provide your desired religion"],
		// },
		flaws: {
			type: String,
			// enum: [
			// 	"I judge others harshly, and myself even more severely.",
			// 	"I have trouble trusting in my allies.",
			// 	"My appetite for pleasures of the flesh often leads me into trouble.",
			// 	"I am quick to anger and slow to forgive.",
			// 	"I believe that everything worth doing is worth doing with excess.",
			// 	"I harbor dark, bloodthirsty thoughts that my better nature strives to hide.",
			// 	"I have an insatiable desire for carnal pleasures.",
			// 	"I turn tail and run when things look bad.",
			// 	"I am convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
			// 	"I see most people as expendable, and worth less than the gold they carry.",
			// 	"Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
			// 	"I cling to secrets and refuse to share important information with my allies.",
			// 	"I can’t resist swindling people who are more powerful than I am.",
			// 	"I’m never satisfied with what I have—I always want more.",
			// 	"I’ll do anything to win fame and renown.",
			// 	"I’m too enamored of ale, wine, and other intoxicants.",
			// 	"I have an overwhelming fear of a particular kind of creature, and I freeze up in the face of it.",
			// 	"I can’t stand to be without a weapon in my hand.",
			// 	"I’m deeply paranoid and constantly suspect my companions of betrayal.",
			// 	"I trust no one and expect betrayal at every turn.",
			// ],
			required: [true, "Please provide your desired flaw"],
			maxlength: 100,
		},
		backgrounds: {
			type: String,
			enum: backgrounds, // Use enum to restrict values to official D&D 5e backgrounds
			required: [true, "Please provide your desired background"],
		},
		primaryClass: {
			type: String,
			enum: Object.keys(skills),
			required: [true, "Please provide your desired primary class"],
		},
		subclass: {
			type: String,
			validate: {
				validator: function (value) {
					// Check if the subclass is valid for the selected primary class
					return subclasses[this.primaryClass].includes(value);
				},
				message: (props) =>
					`${props.value} is not a valid subclass for ${props.instance.primaryClass}.`,
			},
			required: [true, "Please provide your desired subclass"],
		},
		skills: {
			type: [String],
			validate: [
				{
					// Validator to ensure selected skills are valid for the class
					validator: function (value) {
						// Validate that the selected skills belong to the primaryClass
						const allowedSkills = skills[this.primaryClass];
						return value.every((skill) =>
							allowedSkills.includes(skill)
						);
					},
					message: (props) =>
						`Invalid skills selected for the class ${props.instance.primaryClass}.`,
				},
				{
					// Validator to ensure correct number of skills is selected
					validator: function (value) {
						const max = maxSkills[this.primaryClass];
						return value.length === max;
					},
					message: (props) =>
						`You can only select ${
							maxSkills[props.instance.primaryClass]
						} skills for the class ${props.instance.primaryClass}.`,
				},
			],
		},
		// equipment: {
		// 	type: String,
		// 	required: [true, "Please provide your desired username"],
		// },
		race: {
			type: String,
			enum: races,
			required: [true, "Please select a race"],
		},
		subrace: {
			type: String,
			enum: [
				// Dwarf
				"Hill Dwarf",
				"Mountain Dwarf",

				// Elf
				"High Elf",
				"Wood Elf",
				"Dark Elf",
				"Eladrin",
				"Sea Elf",
				"Shadar-Kai",

				// Gnome
				"Forest Gnome",
				"Rock Gnome",
				"Deep Gnome",

				// Haffling
				"Lightfoot Halfling",
				"Stout Halfling",
				"Ghostwise Halfling",

				// Tiefling
				"Feral Tiefling",
				"Asmodeus",
				"Zariel",
				"Levistus",

				// Aasimar
				"Protector Aasimar",
				"Scourge Aasimar",
				"Fallen Aasimar",

				// Genasi
				"Air Genasi",
				"Earth Genasi",
				"Fire Genasi",
				"Water Genasi",

				// Shifter
				"Beasthide",
				"Longtooth",
				"Swiftstride",
				"Wildhunt",

				// Gith
				"Githyanki",
				"Githzerai",
			],
		},
		inspiration: {
			type: Boolean, // Inspiration is either present or not, represented as true or false
			default: false, // By default, a character starts without Inspiration
		},
		strength: {
			type: Number,
			default: 1,
		},
		dexterity: {
			type: Number,
			default: 1,
		},
		constitution: {
			type: Number,
			default: 1,
		},
		intelligence: {
			type: Number,
			default: 1,
		},
		wisdom: {
			type: Number,
			default: 1,
		},
		charisma: {
			type: Number,
			default: 1,
		},
		// Determined by class (pg. 39); Will have 2 of the following
		savingThrowProficiency: {
			type: [String],
			enum: [
				"Strength",
				"Charisma",
				"Constitution",
				"Dexterity",
				"Wisdom",
				"Intelligence",
			],
			required: [
				true,
				"Your class should have two saving throw proficiencies.",
			],
		},
		// Determined by class
		hitDie: {
			type: String,
			required: true,
		},
		// Depends on class highest roll on hit die and Constitution modifier
		hitPointMax: {
			type: Number,
			requried: true,
		},
		currentHitPoints: {
			type: Number,
			required: true,
		},
		temporaryHitPoints: {
			type: Number,
			default: 0,
		},
		alignment: {
			type: String,
			enum: alignment, // Use enum to restrict values to official D&D 5e alignments
			required: [true, "Please provide your desired alignment"],
		},
		// features: {
		// 	type: String,
		// 	enum: ["common", "uncommon", "rare", "epic", "legendary"], // Use enum to restrict values
		// 	required: [true, "Please provide your desired username"],
		// },
		personalityTraits: {
			type: [String], // Changed to an array to allow multiple selections (Must be 2 different traits)
			required: [true, "Please provide your desired traits"], // Ensures at least one trait is selected
			maxlength: 50,
		},
		// Determined by race/subrace
		languages: {
			type: [String], // Allows multiple languages to be selected
			enum: [
				// standard languages
				"Common",
				"Dwarvish",
				"Elvish",
				"Giant",
				"Gnomish",
				"Goblin",
				"Halfling",
				"Orc",

				// uncommon languages
				"Grung",
				"Loxodon",
				"Minotaur",
				"Vedalken",

				// exotic languages
				"Abyssal",
				"Celestial",
				"Draconic",
				"Deep Speech",
				"Gith",
				"Infernal",
				"Primordial",
				"Quori",
				"Sylvan",
				"Thri-Kreen",
				"Undercommon",
			], // Use enum to restrict values to official D&D 5e languages
			required: [true, "Please provide at least one language"], // Ensures at least one language is selected
		},
		// exoticLanguage: {
		// 	type: String,
		// 	enum: [
		// 		"Abyssal",
		// 		"Celestial",
		// 		"Draconic",
		// 		"Deep Speech",
		// 		"Infernal",
		// 		"Primordial",
		// 		"Sylvan",
		// 		"Undercommon",
		// 	], // Use enum to restrict values to official D&D 5e exotic languages
		// 	required: [true, "Please provide your desired exotic language"],
		// },
		speed: {
			type: Number,
			required: true,
		},
		transportationCapability: {
			type: [String],
			enum: ["Walk", "Swim", "Fly", "Jump"],
			required: true,
		},
		age: {
			type: Number,
			required: [true, "Please provide your desired age"],
			min: [1, "Age must be a positive number"], // Ensures height is non-negative
			max: [300, "Age must be realistic"],
		},
		height: {
			type: Number,
			required: [true, "Please provide the character's height"], // Ensures height is provided
			min: [25, "Height must be a positive number"], // Ensures height is non-negative
			max: [300, "Height must be realistic (e.g., 300 inches)"], // Ensures height is within a reasonable range
		},
		weight: {
			type: Number,
			required: [true, "Please provide the character's weight"], // Ensures weight is provided
			min: [50, "Weight must be a positive number"], // Ensures weight is non-negative
			max: [500, "Weight must be realistic (e.g., up to 500 pounds)"], // Ensures weight is within a reasonable range
		},
		sex: {
			type: String,
			enum: sex,
			requried: [true, "Please provide a sex"],
		},
		skin: {
			type: String,
			enum: skin, // Restricts values to common skin colors or textures
			required: [true, "Please provide the character's skin description"], // Ensures a value is provided
		},
		hair: {
			type: String,
			enum: hair, // Use enum to restrict values to common hair colors
			required: [true, "Please provide the character's hair color"], // Ensures a value is provided
		},
		eyes: {
			type: String,
			enum: eyes,
			required: [true, "Please select an eye color"],
		},
		// This is determined by selected class at level 1, background, and some races
		proficiencyBonus: {
			type: Number,
			default: 0,
		},
		// Determined by selected class
		armorProficiency: {
			type: [String],
			enum: [
				"Light Armor",
				"Medium Armor",
				"Nonmetal Medium Armor",
				"Heavy Armor",
				"Shield",
				"Nonmetal Shield",
			],
		},
		weaponProficiency: {
			type: [String],
			enum: [
				"Simple",
				"Martial",
				"Light Crossbow",
				"Hand Crossbow",
				"Longsword",
				"Rapier",
				"Shortsword",
				"Club",
				"Dagger",
				"Dart",
				"Javelin",
				"Mace",
				"Quarterstaff",
				"Scimitar",
				"Sickle",
				"Sling",
				"Spear",
			],
			required: true,
		},
		// Determined by selected race, class, or background
		toolProficiency: {
			type: [String],
			enum: [
				// Artisan's tools
				"Alchemist’s Supplies",
				"Brewer’s Supplies",
				"Calligrapher's Supplies",
				"Carpenter’s Tools",
				"Cartographer’s Tools",
				"Cobbler’s Tools",
				"Cook’s Utensils",
				"Glassblower’s Tools",
				"Jeweler’s Tools",
				"Leatherworker’s Tools",
				"Mason’s Tools",
				"Painter’s Supplies",
				"Potter’s Tools",
				"Smith’s Tools",
				"Tinker’s Tools",
				"Weaver’s Tools",
				"Woodcarver's Tools",

				// Gaming sets
				"Dice Set",
				"Dragonchess Set",
				"Playing Card Set",
				"Three-Dragon Ante Set",

				// Kits and other tools
				"Disguise Kit",
				"Forgery Kit",
				"Herbalism Kit",
				"Poisoner’s Kit",
				"Navigator’s Tools",
				"Thieves’ Tools",

				// Musical instruments
				"Bagpipes",
				"Drum",
				"Dulcimer",
				"Flute",
				"Lute",
				"Lyre",
				"Horn",
				"Pan Flute",
				"Shawm",
				"Viol",
			],
		},
		// characterAppearance: {
		// 	type: String,
		// 	enum: ["common", "uncommon", "rare", "epic", "legendary"], // Use enum to restrict values
		// 	required: [true, "Please provide your desired username"],
		// },
		backstory: {
			type: String,
			required: [true, "Please provide your character's backstory"],
			maxlength: 1000,
		},
		// allies: {
		// 	type: String,
		// 	enum: ["steve"], // Use enum to restrict values
		// 	required: [true, "Please provide your desired username"],
		// },
		// organizations: {
		// 	type: String,
		// 	enum: [
		// 		"Noble Houses",
		// 		"Merchant Guilds",
		// 		"Criminal Organizations",
		// 		"Military Orders",
		// 		"Scholarly Societies",
		// 		"Secret Societies",
		// 		"Druidic Circles",
		// 		"Rebellion Groups",
		// 		"Exploration Guilds",
		// 	], // Use enum to restrict values to common types of organizations
		// 	required: [
		// 		true,
		// 		"Please provide the character's associated organization",
		// 	], // Ensures a value is provided
		// },
		xp: {
			type: Number,
			default: 0,
		},
		level: {
			type: Number,
			default: 1,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		// campaign: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: "Campaign",
		// },
	},
	{
		timestamps: true,
	}
);

CharacterSheetSchema.pre("save", function (next) {
	// Ensure that skills match the selected primaryClass
	if (!skills[this.primaryClass]) {
		return next(new Error("Invalid primary class."));
	}

	// Validate selected skills
	const invalidSkills = this.skills.filter(
		(skill) => !skills[this.primaryClass].includes(skill)
	);
	if (invalidSkills.length > 0) {
		return next(new Error(`Invalid skills: ${invalidSkills.join(", ")}`));
	}

	// Validate subclass
	if (!subclasses[this.primaryClass]) {
		return next(new Error("Invalid primary class for subclass selection."));
	}

	if (!subclasses[this.primaryClass].includes(this.subclass)) {
		return next(
			new Error(
				`Invalid subclass: ${this.subclass} for class ${this.primaryClass}`
			)
		);
	}

	// Check if the selected race has subraces
	if (subraces[this.race]) {
		// If the race has subraces, validate that the selected subrace is valid
		if (!this.subrace || !subraces[this.race].includes(this.subrace)) {
			return next(
				new Error(
					`Invalid or missing subrace for the selected race: ${this.race}`
				)
			);
		}
	} else {
		// If the race does not have subraces, ensure subrace is not provided
		if (this.subrace) {
			return next(
				new Error(
					`Subrace should not be selected for race: ${this.race}`
				)
			);
		}
	}

	next();
});

const CharacterSheet = mongoose.model("CharacterSheet", CharacterSheetSchema);

module.exports = CharacterSheet;
