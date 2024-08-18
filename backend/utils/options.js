const backgrounds = [
	"Abandoned", //homebrew
	"Abyssdweller", // homebrew
	"Adopted", // homebrew
	"Addict", //homebrew
	"Adept", //homebrew
	"Acolyte",
	"Affflicted", //homebrew
	"Alchemist", //homebrew
	"Alcoholic", //homebrew
	"Alcoholic Scientist", //homebrew
	"Amnesiac", //homebrew
	"Anarchist", //homebrew
	"Ancient_Cultist", //homebrew
	"Ancient_King", //homebrew
	"Ancient_One", //homebrew
	"Anthropologist", //homebrew
	"Antiquarian", //homebrew
	"Apothecary", //homebrew
	"Archaeologist", //homebrew
	"Arranged Marriage", //homebrew
	"Artist", //homebrew
	"Aspirant", //homebrew
	"Assistant", //homebrew
	"Astrologer", //homebrew
	"Asylum Escapee", //homebrew
	"Banker", //homebrew
	"Barmaid", //homebrew
	"Bartender", //homebrew
	"Battlesmith", //homebrew
	"Beggar", //homebrew
	"Bereaved", //homebrew
	"Biologist", //homebrew
	"Bodyguard", //homebrew
	"Botanist", //homebrew
	"Bounty Hunter", //homebrew
	"Butler", //homebrew
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
	"Secret",
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
];

const alignment = [
	"Lawful Good",
	"Neutral Good",
	"Chaotic Good",
	"Lawful Neutral",
	"Neutral",
	"Chaotic Neutral",
	"Lawful Evil",
	"Neutral Evil",
	"Chaotic Evil",
];

const sex = ["Male", "Female", "Both"];

const skin = [
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
];

const hair = [
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
];

const eyes = [
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
];

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

const races = [
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
];

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

const classDefault = {
	Artificer: {
		savingThrowPro: ["Constitution", "Intelligence"],
		hitDie: "1d8",
		armorPro: [
			"Light Armor",
			"Medium Armor",
			"Nonmetal Medium Armor",
			"Shield",
			"Nonmetal Shield",
		],
		weaponPro: ["Simple"],
	},
	Barbarian: {
		savingThrowPro: ["Strength", "Constitution"],
		hitDie: "1d12",
		armorPro: [
			"Light Armor",
			"Medium Armor",
			"Nonmetal Medium Armor",
			"Shield",
			"Nonmetal Shield",
		],
		weaponPro: ["Simple", "Martial"],
	},
	Bard: {
		savingThrowPro: ["Dexterity", "Charisma"],
		hitDie: "1d8",
		armorPro: ["Light Armor"],
		weaponPro: [
			"Simple",
			"Hand Crossbow",
			"Longsword",
			"Rapier",
			"Shortsword",
		],
	},
	Cleric: {
		savingThrowPro: ["Wisdom", "Charisma"],
		hitDie: "1d8",
		armorPro: [
			"Light Armor",
			"Medium Armor",
			"Nonmetal Medium Armor",
			"Shield",
			"Nonmetal Shield",
		],
		weaponPro: ["Simple"],
	},
	Druid: {
		savingThrowPro: ["Wisdom", "Intelligence"],
		hitDie: "1d8",
		armorPro: ["Light Armor", "Nonmetal Medium Armor", "Nonmetal Shield"],
		weaponPro: [
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
	},
	Fighter: {
		savingThrowPro: ["Strength", "Constitution"],
		hitDie: "1d10",
		armorPro: [
			"Light Armor",
			"Medium Armor",
			"Nonmetal Medium Armor",
			"Heavy Armor",
			"Shield",
			"Nonmetal Shield",
		],
		weaponPro: ["Simple", "Martial"],
	},
	Monk: {
		savingThrowPro: ["Dexterity", "Strength"],
		hitDie: "1d8",
		armorPro: [],
		weaponPro: ["Simple", "Shortsword"],
	},
	Paladin: {
		savingThrowPro: ["Wisdom", "Charisma"],
		hitDie: "1d10",
		armorPro: [
			"Light Armor",
			"Medium Armor",
			"Nonmetal Medium Armor",
			"Heavy Armor",
			"Shield",
			"Nonmetal Shield",
		],
		weaponPro: ["Simple", "Martial"],
	},
	Ranger: {
		savingThrowPro: ["Strength", "Dexterity"],
		hitDie: "1d10",
		armorPro: [
			"Light Armor",
			"Medium Armor",
			"Nonmetal Medium Armor",
			"Shield",
			"Nonmetal Shield",
		],
		weaponPro: ["Simple", "Martial"],
	},
	Rogue: {
		savingThrowPro: ["Dexterity", "Intelligence"],
		hitDie: "1d8",
		armorPro: ["Light Armor"],
		weaponPro: ["Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
	},
	Sorcerer: {
		savingThrowPro: ["Constitution", "Charisma"],
		hitDie: "1d6",
		armorPro: [],
		weaponPro: [
			"Dagger",
			"Dart",
			"Sling",
			"Quarterstaff",
			"Light Crossbow",
		],
	},
	Warlock: {
		savingThrowPro: ["Wisdom", "Charisma"],
		hitDie: "1d8",
		armorPro: ["Light Armor"],
		weaponPro: ["Simple"],
	},
	Wizard: {
		savingThrowPro: ["Wisdom", "Intelligence"],
		hitDie: "1d6",
		armorPro: [],
		weaponPro: [
			"Dagger",
			"Dart",
			"Sling",
			"Quarterstaff",
			"Light Crossbow",
		],
	},
};

const raceDefault = {
	Aasimar: {
		languages: ["Common", "Celestial"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Autognome: {
		languages: ["Common", "Gnomish"],
		speed: 25,
		transportationCapability: ["Walk"],
	},
	Bugbear: {
		languages: ["Common", "Goblin"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Centaur: {
		languages: ["Common", "Sylvan"],
		speed: 40,
		transportationCapability: ["Walk"],
	},
	Changeling: {
		languages: ["Common", "Primordial"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Dragonborn: {
		languages: ["Common", "Draconic"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Dwarf: {
		languages: ["Common", "Dwarvish"],
		speed: 25,
		transportationCapability: ["Walk"],
	},
	Elf: {
		languages: ["Common", "Elvish"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Fairy: {
		languages: ["Common", "Sylvan"],
		speed: 30,
		transportationCapability: ["Walk", "Fly"],
	},
	Firbolg: {
		languages: ["Common", "Sylvan", "Elvish"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Genasi: {
		languages: ["Common", "Primordial"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Gith: {
		languages: ["Common", "Gith"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Gnome: {
		languages: ["Common", "Gnomish"],
		speed: 25,
		transportationCapability: ["Walk"],
	},
	Goblin: {
		languages: ["Common", "Goblin"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Goliath: {
		languages: ["Common", "Giant"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Grung: {
		languages: ["Common", "Grung"],
		speed: 25,
		transportationCapability: ["Walk", "Jump"],
	},
	Hadozee: {
		languages: ["Common", "Primordial"],
		speed: 25,
		transportationCapability: ["Walk", "Fly"],
	},
	Half0Elf: {
		languages: ["Common", "Elvish"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Half0Orc: {
		languages: ["Common", "Orc"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Halfling: {
		languages: ["Common", "Halfling"],
		speed: 25,
		transportationCapability: ["Walk"],
	},
	Harengon: {
		languages: ["Common", "Sylvan"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Hobgoblin: {
		languages: ["Common", "Goblin"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Human: {
		languages: ["Common"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Kalashtar: {
		languages: ["Common", "Quori"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Kenku: {
		languages: ["Common", "Primordial"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Kobold: {
		languages: ["Common", "Draconic"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Leonin: {
		languages: ["Common", "Sylvan"],
		speed: 35,
		transportationCapability: ["Walk"],
	},
	Lizardfolk: {
		languages: ["Common", "Draconic"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Loxodon: {
		languages: ["Common", "Loxodon"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Minotaur: {
		languages: ["Common", "Minotaur"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Orc: {
		languages: ["Common", "Orc"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Plasmoid: {
		languages: ["Common", "Abyssal"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Satyr: {
		languages: ["Common", "Sylvan"],
		speed: 35,
		transportationCapability: ["Walk"],
	},
	Shifter: {
		languages: ["Common", "Sylvan"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Simic_Hybrid: {
		languages: ["Common", "Elvish"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Tabaxi: {
		languages: ["Common", "Elvish"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Thri0Kreen: {
		languages: ["Common", "Thri-Kreen"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Tiefling: {
		languages: ["Common", "Infernal"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Triton: {
		languages: ["Common", "Primordial"],
		speed: 30,
		transportationCapability: ["Walk", "Swim"],
	},
	Vedalken: {
		languages: ["Common", "Vedalken"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Verdan: {
		languages: ["Common", "Goblin"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Warforged: {
		languages: ["Common"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
	Yuan0ti_Pureblood: {
		languages: ["Common", "Draconic"],
		speed: 30,
		transportationCapability: ["Walk"],
	},
};

module.exports = {
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
	classDefault,
	raceDefault,
};
