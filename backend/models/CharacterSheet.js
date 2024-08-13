const mongoose = require("mongoose");

const skills = {
	// A Barbarian can choose two of the following:
	Barbarian: [
		"Animal Handling",
		"Athletics",
		"Intimidation",
		"Nature",
		"Perception",
		"Survival",
	],
	// A Bard can choose three of the following:
	Bard: [
		"Acrobatics",
		"Animal Handling",
		"Arcana",
		"Athletics",
		"Deception",
		"History",
		"Insight",
		"Intimidation",
		"Investigation",
		"Medicine",
		"Nature",
		"Perception",
		"Performance",
		"Persuasion",
		"Sleight of Hand",
		"Stealth",
		"Survival",
	],
	// A Cleric can choose two of the following
	Cleric: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
	// A Druid can choose two of the following
	Druid: [
		"Animal Handling",
		"Arcana",
		"Athletics",
		"Insight",
		"Medicine",
		"Nature",
		"Perception",
		"Survival",
	],
	// A Fighter can choose two of the following
	Fighter: [
		"Acrobatics",
		"Animal Handling",
		"Athletics",
		"History",
		"Insight",
		"Intimidation",
		"Perception",
		"Survival",
	],
	// A Monk can choose two of the following
	Monk: [
		"Acrobatics",
		"Athletics",
		"History",
		"Insight",
		"Religion",
		"Stealth",
	],
	// A Paladin can choose two of the following
	Paladin: [
		"Athletics",
		"Insight",
		"Intimidation",
		"Medicine",
		"Persuasion",
		"Religion",
	],
	// A Ranger can choose three of the following
	Ranger: [
		"Animal Handling",
		"Athletics",
		"Insight",
		"Investigation",
		"Nature",
		"Perception",
		"Stealth",
		"Survival",
	],
	// A Rouge can choose four of the following
	Rogue: [
		"Acrobatics",
		"Athletics",
		"Deception",
		"Insight",
		"Intimidation",
		"Investigation",
		"Perception",
		"Performance",
		"Persuasion",
		"Sleight of Hand",
		"Stealth",
	],
	// A Sorcerer can choose two of the following
	Sorcerer: [
		"Arcana",
		"Deception",
		"Insight",
		"Intimidation",
		"Persuasion",
		"Religion",
	],
	// A Warlock can choose two of the following
	Warlock: [
		"Arcana",
		"Deception",
		"History",
		"Intimidation",
		"Investigation",
		"Nature",
		"Religion",
	],
	// A Wizard can choose two of the following
	Wizard: [
		"Arcana",
		"History",
		"Insight",
		"Investigation",
		"Medicine",
		"Religion",
	],
	// An Artificer can choose two of the following
	Artificer: [
		"Arcana",
		"History",
		"Investigation",
		"Medicine",
		"Nature",
		"Perception",
		"Sleight of Hand",
	],
};

const maxSkills = {
	Barbarian: 2,
	Bard: 3,
	Cleric: 2,
	Druid: 2,
	Fighter: 2,
	Monk: 2,
	Paladin: 2,
	Ranger: 3,
	Rogue: 4,
	Sorcerer: 2,
	Warlock: 2,
	Wizard: 2,
	Artificer: 2,
};

const subclasses = {
	Barbarian: [
		"Path of the Berserker",
		"Path of the Totem Warrior",
		"Path of the Ancestral Guardian",
		"Path of the Storm Herald",
		"Path of the Zealot",
		"Path of the Beast",
		"Path of Wild Magic",
	],
	Bard: [
		"College of Lore",
		"College of Valor",
		"College of Glamour",
		"College of Swords",
		"College of Whispers",
		"College of Creation",
		"College of Eloquence",
	],
	Cleric: [
		"Knowledge Domain",
		"Life Domain",
		"Light Domain",
		"Nature Domain",
		"Tempest Domain",
		"Trickery Domain",
		"War Domain",
		"Death Domain",
		"Arcana Domain",
		"Forge Domain",
		"Grave Domain",
		"Order Domain",
		"Peace Domain",
		"Twilight Domain",
	],
	Druid: [
		"Circle of the Land",
		"Circle of the Moon",
		"Circle of Dreams",
		"Circle of the Shepherd",
		"Circle of Spores",
		"Circle of Stars",
		"Circle of Wildfire",
	],
	Fighter: [
		"Champion",
		"Battle Master",
		"Eldritch Knight",
		"Arcane Archer",
		"Cavalier",
		"Samurai",
		"Psi Warrior",
		"Echo Knight",
	],
	Monk: [
		"Way of the Open Hand",
		"Way of Shadow",
		"Way of the Four Elements",
		"Way of the Drunken Master",
		"Way of the Kensei",
		"Way of the Sun Soul",
		"Way of the Long Death",
		"Way of the Astral Self",
		"Way of Mercy",
	],
	Paladin: [
		"Oath of Devotion",
		"Oath of the Ancients",
		"Oath of Vengeance",
		"Oath of Conquest",
		"Oath of Redemption",
		"Oath of Glory",
		"Oath of the Crown",
		"Oath of the Watchers",
	],
	Ranger: [
		"Hunter",
		"Beast Master",
		"Gloom Stalker",
		"Horizon Walker",
		"Monster Slayer",
		"Fey Wanderer",
		"Swarmkeeper",
	],
	Rogue: [
		"Thief",
		"Assassin",
		"Arcane Trickster",
		"Mastermind",
		"Swashbuckler",
		"Inquisitive",
		"Scout",
		"Soulknife",
	],
	Sorcerer: [
		"Draconic Bloodline",
		"Wild Magic",
		"Divine Soul",
		"Shadow Magic",
		"Storm Sorcery",
		"Aberrant Mind",
		"Clockwork Soul",
	],
	Warlock: [
		"Archfey",
		"Fiend",
		"Great Old One",
		"Hexblade",
		"Celestial",
		"Fathomless",
		"Genie",
	],
	Wizard: [
		"School of Abjuration",
		"School of Conjuration",
		"School of Divination",
		"School of Enchantment",
		"School of Evocation",
		"School of Illusion",
		"School of Necromancy",
		"School of Transmutation",
		"Bladesinging",
		"War Magic",
		"Chronurgy Magic",
		"Graviturgy Magic",
	],
	Artificer: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
};

const subraces = {
	Dwarf: ["Hill Dwarf", "Mountain Dwarf"],
	Elf: [
		"High Elf",
		"Wood Elf",
		"Dark Elf",
		"Eladrin",
		"Sea Elf",
		"Shadar-Kai",
	],
	Gnome: ["Forest Gnome", "Rock Gnome", "Deep Gnome"],
	Halfling: ["Lightfoot Halfling", "Stout Halfling", "Ghostwise Halfling"],
	Tiefling: ["Feral Tiefling", "Asmodeus", "Zariel", "Levistus"],
	Aasimar: ["Protector Aasimar", "Scourge Aasimar", "Fallen Aasimar"],
	Genasi: ["Air Genasi", "Earth Genasi", "Fire Genasi", "Water Genasi"],
	Shifter: ["Beasthide", "Longtooth", "Swiftstride", "Wildhunt"],
	Gith: ["Githyanki", "Githzerai"],
};

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
			enum: [
				"Acolyte",
				"Charlatan",
				"Criminal",
				"Entertainer",
				"Folk Hero",
				"Guild Artisan",
				"Hermit",
				"Noble",
				"Outlander",
				"Sage",
				"Sailor",
				"Soldier",
				"Urchin",
				"Far Traveler",
				"Haunted One",
				"Knight",
				"Pirate",
				"City Watch",
				"Clan Crafter",
				"Cloistered Scholar",
				"Courtier",
				"Faction Agent",
				"Inheritor",
				"Investigator",
				"Mercenary Veteran",
				"Urban Bounty Hunter",
				"Waterdhavian Noble",
			], // Use enum to restrict values to official D&D 5e backgrounds
			required: [true, "Please provide your desired background"],
		},
		primaryClass: {
			type: String,
			enum: Object.keys(skills),
			required: [true, "Please provide your desired primary class"],
		},
		subClass: {
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
			enum: [
				"Dragonborn",
				"Dwarf",
				"Elf",
				"Gnome",
				"Half-Elf",
				"Half-Orc",
				"Halfling",
				"Human",
				"Tiefling",
				"Aasimar",
				"Goliath",
				"Tabaxi",
				"Genasi",
				"Firbolg",
				"Lizardfolk",
				"Kenku",
				"Yuan-ti Pureblood",
				"Triton",
				"Bugbear",
				"Hobgoblin",
				"Goblin",
				"Kobold",
				"Minotaur",
				"Centaur",
				"Satyr",
				"Leonin",
				"Loxodon",
				"Simic Hybrid",
				"Vedalken",
				"Warforged",
				"Changeling",
				"Shifter",
				"Kalashtar",
				"Orc",
				"Fairy",
				"Hadozee",
				"Autognome",
				"Plasmoid",
				"Thri-Kreen",
				"Harengon",
				"Owlin",
				"Verdan",
				"Gith",
				"Grung",
			],
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
				"Dark Elf (Drow)",
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
			required: [true, "Please provide your desired username"],
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
			enum: [
				"Lawful Good",
				"Neutral Good",
				"Chaotic Good",
				"Lawful Neutral",
				"Neutral",
				"Chaotic Neutral",
				"Lawful Evil",
				"Neutral Evil",
				"Chaotic Evil",
			], // Use enum to restrict values to official D&D 5e alignments
			required: [true, "Please provide your desired alignment"],
		},
		// features: {
		// 	type: String,
		// 	enum: ["common", "uncommon", "rare", "epic", "legendary"], // Use enum to restrict values
		// 	required: [true, "Please provide your desired username"],
		// },
		personalityTraits: {
			type: [String], // Changed to an array to allow multiple selections (2 max)
			required: [true, "Please provide your desired traits"], // Ensures at least one trait is selected
			minlength: 50,
		},
		// Determined by race/subrace
		languages: {
			type: [String], // Allows multiple languages to be selected
			enum: [
				"Common",
				"Dwarvish",
				"Elvish",
				"Giant",
				"Gnomish",
				"Goblin",
				"Halfling",
				"Orc",
				"Abyssal",
				"Celestial",
				"Draconic",
				"Deep Speech",
				"Infernal",
				"Primordial",
				"Sylvan",
				"Undercommon",
			], // Use enum to restrict values to official D&D 5e languages
			required: [true, "Please provide at least one language"], // Ensures at least one language is selected
		},
		exoticLanguage: {
			type: String,
			enum: [
				"Abyssal",
				"Celestial",
				"Draconic",
				"Deep Speech",
				"Infernal",
				"Primordial",
				"Sylvan",
				"Undercommon",
			], // Use enum to restrict values to official D&D 5e exotic languages
			required: [true, "Please provide your desired exotic language"],
		},
		age: {
			type: Number,
			required: [true, "Please provide your desired age"],
			min: [1, "Age must be a positive number"], // Ensures height is non-negative
			max: [300, "Age must be realistic"]
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
			enum: ["Male", "Female", "Both"],
			requried: [true, "Please provide a sex"],
		},
		skin: {
			type: String,
			enum: [
				"Light",
				"Medium",
				"Dark",
				"Olive",
				"Tan",
				"Pale",
				"Bronze",
				"Gray",
				"Freckled",
				"Spotted",
				"Scaly",
				"Smooth",
				"Rough",
			], // Restricts values to common skin colors or textures
			required: [true, "Please provide the character's skin description"], // Ensures a value is provided
		},
		hair: {
			type: String,
			enum: [
				"Black",
				"Brown",
				"Blonde",
				"Red",
				"Gray",
				"White",
				"Silver",
				"Blue",
				"Green",
				"Purple",
				"Pink",
			], // Use enum to restrict values to common hair colors
			required: [true, "Please provide the character's hair color"], // Ensures a value is provided
		},
		eyes: {
			type: String,
			enum: [
				"Yellow",
				"Amber",
				"Brown",
				"Hazel",
				"Green",
				"Blue",
				"Gray",
				"Aqua",
				"Red",
				"Purple",
				"Pale Brown",
				"Pale Blue",
				"Pale Green",
				"Pale Gray",
				"Deep Blue",
				"Violet Red",
				"Orange",
				"Spring Green",
				"Sea Green",
				"Emerald Green",
			],
			required: [true, "Please select an eye color"],
		},
		// This is determined by selected class at level 1, background, and some races
		proficiencies: {
			type: [String], // Array of strings to allow multiple proficiencies
			enum: [
				"Animal Handling",
				"Arcana",
				"Athletics",
				"Deception",
				"History",
				"Insight",
				"Intimidation",
				"Investigation",
				"Medicine",
				"Nature",
				"Perception",
				"Performance",
				"Persuasion",
				"Religion",
				"Sleight of Hand",
				"Stealth",
				"Survival",
				"Alchemist's Supplies",
				"Brewer's Supplies",
				"Calligrapher's Supplies",
				"Carpenter's Tools",
				"Cartographer's Tools",
				"Cobblers' Tools",
				"Cook's Utensils",
				"Glassblower's Tools",
				"Jeweler's Tools",
				"Leatherworker's Tools",
				"Mason's Tools",
				"Painter's Supplies",
				"Potter's Tools",
				"Smith's Tools",
				"Tinker's Tools",
				"Weaver's Tools",
				"Woodcarver's Tools",
			], // Use enum to restrict values to official D&D 5e proficiencies
			required: [true, "Please provide the character's proficiencies"], // Ensures that proficiencies are provided
		},
		// This is determined by selected class at level 1, background, and some races
		proficiencyBonus: {
			type: Number,
			default: 0,
		},
		// Determined by selected class
		armorClass: {
			type: [String],
			enum: ["Light Armor", "Medium Armor", "Heavy Armor"], 
			required: true,
		},
		// characterAppearance: {
		// 	type: String,
		// 	enum: ["common", "uncommon", "rare", "epic", "legendary"], // Use enum to restrict values
		// 	required: [true, "Please provide your desired username"],
		// },
		characterBackstory: {
			type: String,
			required: [true, "Please provide your character's backstory"],
			minlength: 25,
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
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		camp: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
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

	if (!subclasses[this.primaryClass].includes(this.subClass)) {
		return next(
			new Error(
				`Invalid subclass: ${this.subClass} for class ${this.primaryClass}`
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
