const mongoose = require("mongoose");

const skills = {
	Barbarian: [
		"Animal Handling",
		"Athletics",
		"Intimidation",
		"Nature",
		"Perception",
		"Survival",
	],
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
	Cleric: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
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
	Monk: [
		"Acrobatics",
		"Arcana",
		"Athletics",
		"History",
		"Insight",
		"Religion",
		"Stealth",
	],
	Paladin: [
		"Athletics",
		"Insight",
		"Intimidation",
		"Medicine",
		"Persuasion",
		"Religion",
	],
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
	Rogue: [
		"Acrobatics",
		"Arcana",
		"Athletics",
		"Deception",
		"Insight",
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
	Sorcerer: [
		"Arcana",
		"Deception",
		"Insight",
		"Intimidation",
		"Persuasion",
		"Religion",
	],
	Warlock: [
		"Arcana",
		"Deception",
		"History",
		"Insight",
		"Intimidation",
		"Investigation",
		"Nature",
		"Religion",
	],
	Wizard: [
		"Arcana",
		"History",
		"Insight",
		"Investigation",
		"Medicine",
		"Religion",
	],
	Artificer: [
		"Arcana",
		"History",
		"Insight",
		"Investigation",
		"Medicine",
		"Perception",
	],
};
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
		ideals: {
			type: [String],
			enum: [
				"Adventurous",
				"Ambition",
				"Charity",
				"Compassion",
				"Fairness",
				"Freedom",
				"Honor",
				"Justice",
				"Knowledge",
				"Love",
				"Loyalty",
				"Perseverance",
				"Self-Improvement",
				"Tradition",
				"Truth",
				"Wealth",
				"Wisdom",
			], // Use enum to restrict values to common ideals
			required: [true, "Please provide your ideals"], // Ensures that at least one ideal is provided
		},
		bonds: {
			type: String,
			enum: [
				"Family",
				"Mentor",
				"Homeland",
				"Artifact",
				"Heirloom",
				"Oath",
				"Revenge",
				"Justice",
				"Love",
			], // Use enum to restrict values
			required: [true, "Please provide your desired bond"],
		},
		religion: {
			type: String,
			enum: ["steve"], // Use enum to restrict values
			required: [true, "Please provide your desired religion"],
		},
		flaws: {
			type: String,
			enum: [
				"I judge others harshly, and myself even more severely.",
				"I have trouble trusting in my allies.",
				"My appetite for pleasures of the flesh often leads me into trouble.",
				"I am quick to anger and slow to forgive.",
				"I believe that everything worth doing is worth doing with excess.",
				"I harbor dark, bloodthirsty thoughts that my better nature strives to hide.",
				"I have an insatiable desire for carnal pleasures.",
				"I turn tail and run when things look bad.",
				"I am convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
				"I see most people as expendable, and worth less than the gold they carry.",
				"Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
				"I cling to secrets and refuse to share important information with my allies.",
				"I can’t resist swindling people who are more powerful than I am.",
				"I’m never satisfied with what I have—I always want more.",
				"I’ll do anything to win fame and renown.",
				"I’m too enamored of ale, wine, and other intoxicants.",
				"I have an overwhelming fear of a particular kind of creature, and I freeze up in the face of it.",
				"I can’t stand to be without a weapon in my hand.",
				"I’m deeply paranoid and constantly suspect my companions of betrayal.",
				"I trust no one and expect betrayal at every turn.",
			],
			required: [true, "Please provide your desired flaw"],
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
			enum: [
				"Barbarian",
				"Bard",
				"Cleric",
				"Druid",
				"Fighter",
				"Monk",
				"Paladin",
				"Ranger",
				"Rogue",
				"Sorcerer",
				"Warlock",
				"Wizard",
				"Artificer",
			],
			required: [true, "Please provide your desired primary class"],
		},
		subClass: {
			type: String,
			enum: [
				// Barbarian
				"Path of the Berserker",
				"Path of the Totem Warrior",
				"Path of the Ancestral Guardian",
				"Path of the Storm Herald",
				"Path of the Zealot",
				"Path of the Beast",
				"Path of Wild Magic",

				// Bard
				"College of Lore",
				"College of Valor",
				"College of Glamour",
				"College of Swords",
				"College of Whispers",
				"College of Creation",
				"College of Eloquence",

				// Cleric
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

				// Druid
				"Circle of the Land",
				"Circle of the Moon",
				"Circle of Dreams",
				"Circle of the Shepherd",
				"Circle of Spores",
				"Circle of Stars",
				"Circle of Wildfire",

				// Fighter
				"Champion",
				"Battle Master",
				"Eldritch Knight",
				"Arcane Archer",
				"Cavalier",
				"Samurai",
				"Psi Warrior",
				"Echo Knight",

				// Monk
				"Way of the Open Hand",
				"Way of Shadow",
				"Way of the Four Elements",
				"Way of the Drunken Master",
				"Way of the Kensei",
				"Way of the Sun Soul",
				"Way of the Long Death",
				"Way of the Astral Self",
				"Way of Mercy",

				// Paladin
				"Oath of Devotion",
				"Oath of the Ancients",
				"Oath of Vengeance",
				"Oath of Conquest",
				"Oath of Redemption",
				"Oath of Glory",
				"Oath of the Crown",
				"Oath of the Watchers",

				// Ranger
				"Hunter",
				"Beast Master",
				"Gloom Stalker",
				"Horizon Walker",
				"Monster Slayer",
				"Fey Wanderer",
				"Swarmkeeper",

				// Rogue
				"Thief",
				"Assassin",
				"Arcane Trickster",
				"Mastermind",
				"Swashbuckler",
				"Inquisitive",
				"Scout",
				"Soulknife",

				// Sorcerer
				"Draconic Bloodline",
				"Wild Magic",
				"Divine Soul",
				"Shadow Magic",
				"Storm Sorcery",
				"Aberrant Mind",
				"Clockwork Soul",

				// Warlock
				"Archfey",
				"Fiend",
				"Great Old One",
				"Hexblade",
				"Celestial",
				"Fathomless",
				"Genie",

				// Wizard
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

				// Artificer
				"Alchemist",
				"Armorer",
				"Artillerist",
				"Battle Smith",
			],
			required: [true, "Please provide your desired subclass"],
		},
		armorClass: {
			type: String,
			enum: ["Light Armor", "Medium Armor", "Heavy Armor"], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
		},
		currentHitPoints: {
			type: Number,
			required: [true, "Please provide your desired username"],
		},
		temporaryHitPoints: {
			type: Number,
			required: [true, "Please provide your desired username"],
		},
		equipment: {
			type: String,
			required: [true, "Please provide your desired username"],
		},
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
		inspiration: {
			type: Boolean, // Inspiration is either present or not, represented as true or false
			default: false, // By default, a character starts without Inspiration
		},
		dexterity: {
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
		strength: {
			type: Number,
			default: 1,
		},
		proficiencyBonus: {
			type: Number,
			required: [true, "Please provide your desired username"],
		},
		savingThrows: {
			type: Number,
			required: [true, "Please provide your desired username"],
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
		background: {
			type: String,
			required: [true, "Please provide your desired background"],
			minlength: 2,
			maxlength: 1000,
		},
		features: {
			type: String,
			enum: ["common", "uncommon", "rare", "epic", "legendary"], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
		},
		// Minimum of 1 trait
		// Maximum of 5 traits
		personalityTraits: {
			type: [String], // Changed to an array to allow multiple selections
			enum: [
				"Amiable",
				"Curious",
				"Diligent",
				"Humble",
				"Optimistic",
				"Pessimistic",
				"Courageous",
				"Reserved",
				"Charismatic",
				"Stubborn",
				"Impulsive",
				"Sympathetic",
				"Perceptive",
				"Generous",
				"Greedy",
				"Pragmatic",
				"Quirky",
				"Trusting",
				"Suspicious",
				"Methodical",
				"Skeptical",
				"Altruistic",
				"Assertive",
				"Detached",
				"Resourceful",
			], // Use enum to restrict values
			required: [true, "Please provide your desired traits"], // Ensures at least one trait is selected
		},
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
			minlength: 1, // Minimum of 1 language
			maxlength: 5, // Maximum of 5 languages
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
			min: 0,
			max: 10000,
		},
		height: {
			type: Number,
			required: [true, "Please provide the character's height"], // Ensures height is provided
			min: [0, "Height must be a positive number"], // Ensures height is non-negative
			max: [300, "Height must be realistic (e.g., 300 cm)"], // Ensures height is within a reasonable range
		},
		weight: {
			type: Number,
			required: [true, "Please provide the character's weight"], // Ensures weight is provided
			min: [0, "Weight must be a positive number"], // Ensures weight is non-negative
			max: [500, "Weight must be realistic (e.g., up to 500 kg)"], // Ensures weight is within a reasonable range
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
			minlength: 2, // Minimum length of hair color description
			maxlength: 20, // Maximum length of hair color description
		},
		eyes: {
			type: String,
			enum: ["common", "uncommon", "rare", "epic", "legendary"], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
			minlength: 2,
			maxlength: 20,
			unique: true,
		},
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
		characterAppearance: {
			type: String,
			enum: ["common", "uncommon", "rare", "epic", "legendary"], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
		},
		characterBackstory: {
			type: String,
			required: [true, "Please provide your character's backstory"],
			minlength: 25,
			maxlength: 500,
		},
		allies: {
			type: String,
			enum: ["steve"], // Use enum to restrict values
			required: [true, "Please provide your desired username"],
		},
		organizations: {
			type: String,
			enum: [
				"Noble Houses",
				"Merchant Guilds",
				"Criminal Organizations",
				"Military Orders",
				"Scholarly Societies",
				"Secret Societies",
				"Druidic Circles",
				"Rebellion Groups",
				"Exploration Guilds",
			], // Use enum to restrict values to common types of organizations
			required: [
				true,
				"Please provide the character's associated organization",
			], // Ensures a value is provided
			minlength: 2, // Minimum length for organization name
			maxlength: 50, // Adjusted max length for more flexibility
		},
	},
	{
		timestamps: true,
	}
);

const CharacterSheet = mongoose.model("CharacterSheet", CharacterSheetSchema);

module.exports = CharacterSheet;
