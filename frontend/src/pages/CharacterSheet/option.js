export const classesArray = [
	"Artificer",
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
];

const getProficiencyBonus = (level) => {
	if (level >= 1 && level <= 4) {
		return 2;
	} else if (level >= 5 && level <= 8) {
		return 3;
	} else if (level >= 9 && level <= 12) {
		return 4;
	} else if (level >= 13 && level <= 16) {
		return 5;
	} else if (level >= 17 && level <= 20) {
		return 6;
	} else {
		return 0; // Handle out-of-range levels, if necessary
	}
};

/**
 *
 * @param {*} className string
 * @returns
 */
const createClassDesc = (className) => {
	/**
	 * @param {*} isHomebrew Flags the class as a homebrew class
	 */
	let isHomebrew = false;

	/**
	 * @param {*} description This description will be used for the class itself
	 */
	let description = "";

	/**
	 * @param {*} hitDie ex. "1d8", this will be parsed and split. Will be used when leveling up.
	 */
	let hitDie = "";

	/**
	 * @param {*} primaryAbility ability that is capitalized; this is used so that the user has an idea of what they should focus their ability points in
	 */
	let primaryAbility = "";

	/**
	 * @param {*} savingThrowProficiencies Will be two abilities (Make sure that they are capitalized)
	 */
	let savingThrowProficiencies = [];

	/**
	 * @param {*} armorProficiencies Refer to option.js in backend ctrl f armorProficiencies (if there are none, leave an empty array with no empty string)
	 */
	let armorProficiencies = [];

	/**
	 * @param {*} weaponProficiencies Refer to option.js in backend ctrl f weaponProficiencies (if there are none, leave an empty array with no empty string)
	 */
	let weaponProficiencies = [];

	/**
	 * @param {*} skills pool of skills this class can choose from
	 */
	let skills = [];

	/**
	 * @param {*} maxSkills cannot be less than 2 or greater than 4
	 */
	let maxSkills = 2;

	/**
	 * @param {*} startingEquipment There is no enum for this yet, will be needed in the future
	 */
	let startingEquipment = [];

	/**
	 * @param {*} spellSlotTable An object where the keys are numbers from 1-20. Value is an array of numbers where the index corresponds to the type of spell slot and the number corresponds to how many spell slots will be available at that level. (ex: 1: [2] There are two spell slots for a first level spell; 5: [4, 3, 2] There are four spell slots for a first level spell, three spell slots for a second level spell, and two spell slots for a third level spell.)
	 */
	let spellSlotTable = {};

	/**
	 * @param {*} features There is no enum for this yet to make sure that each class has their respective features
	 */
	let features = [];

	/**
	 * @param {*} cantripsKnown Should only be added if the class is a spell caster
	 */
	let cantripsKnown = {};

	/**
	 * @param {*} spellsKnown Should only be added if the class is a spell caster
	 */
	let spellsKnown = {};

	let special1Title = "";
	let special1Description = "";
	let special1 = {};

	let special2Title = "";
	let special2Description = "";
	let special2 = {};

	switch (className) {
		case "Artificer":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Barbarian":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Bard":
			description = `An inspiring magician whose power echoes the music of creation.`;
			hitDie = "1d8";
			primaryAbility = "Charisma";
			savingThrowProficiencies = ["Dexterity", "Charisma"];
			armorProficiencies = [
				"Light Armor",
				"Medium Armor",
				"Nonmetal Medium Armor",
				"Shield",
				"Nonmetal Shield",
			];
			weaponProficiencies = ["Simple", "Martial"];
			skills = [
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
			];
			maxSkills = 3;
			startingEquipment = [
				"Rapier",
				"Diplomat's Pack",
				"Lute",
				"Leather Armor",
				"Dagger",
			];
			spellSlotTable = {
				1: [2],
				2: [3],
				3: [4, 2],
				4: [4, 3],
				5: [4, 3, 2],
				6: [4, 3, 3],
				7: [4, 3, 3, 1],
				8: [4, 3, 3, 2],
				9: [4, 3, 3, 3, 1],
				10: [4, 3, 3, 3, 2],
				11: [4, 3, 3, 3, 2, 1],
				12: [4, 3, 3, 3, 2, 1],
				13: [4, 3, 3, 3, 2, 1, 1],
				14: [4, 3, 3, 3, 2, 1, 1],
				15: [4, 3, 3, 3, 2, 1, 1, 1],
				16: [4, 3, 3, 3, 2, 1, 1, 1],
				17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
				18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
				19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
				20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
			};
			features = {
				1: ["Spellcasting", "Inspiration (d6)"],
				2: ["Jack of All Trades", "Song of Rest (d6)"],
				3: ["Bard College", "Expertise"],
				4: ["Ability Score Improvement"],
				5: ["Bardic Inspiration (d8)", "Font of Inspiration"],
				6: ["Countercharm", "Bard College Feature"],
				7: [],
				8: ["Ability Score Improvement"],
				9: ["Song of Rest (d8)"],
				10: [
					"Magical Secrets",
					"Expertise",
					"Bardic Inspiration (d10)",
				],
				11: [],
				12: ["Ability Score Improvement"],
				13: ["Song of Rest (d10)"],
				14: ["Magical Secrets", "Bard College Feature"],
				15: ["Bardic Inspiration (d12)"],
				16: ["Ability Score Improvement"],
				17: ["Song of Rest (d12)"],
				18: ["Magical Secrets"],
				19: ["Ability Score Improvement"],
				20: ["Superior Inspiration"],
			};
			cantripsKnown = {
				1: 2,
				2: 2,
				3: 2,
				4: 3,
				5: 3,
				6: 3,
				7: 3,
				8: 3,
				9: 3,
				10: 4,
				11: 4,
				12: 4,
				13: 4,
				14: 4,
				15: 4,
				16: 4,
				17: 4,
				18: 4,
				19: 4,
				20: 4,
			};
			spellsKnown = {
				1: 4,
				2: 5,
				3: 6,
				4: 7,
				5: 8,
				6: 9,
				7: 10,
				8: 11,
				9: 12,
				10: 14,
				11: 15,
				12: 15,
				13: 16,
				14: 18,
				15: 19,
				16: 19,
				17: 20,
				18: 22,
				19: 22,
				20: 22,
			};
			break;
		case "Cleric":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Druid":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Fighter":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Monk":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Paladin":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Ranger":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Rogue":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Sorcerer":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Warlock":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		case "Wizard":
			description = "";
			hitDie = "";
			primaryAbility = "";
			savingThrowProficiencies = [];
			armorProficiencies = [];
			weaponProficiencies = [];
			skills = [];
			maxSkills = 2;
			startingEquipment = [];
			spellSlotTable = {};
			features = [];
			cantripsKnown = {};
			spellsKnown = {};
			special1Title = "";
			special1Description = "";
			special1 = {};
			special2Title = "";
			special2Description = "";
			special2 = {};
			break;

		default:
			throw new Error(`Class ${className} is not recognized.`);
	}

	const levelTableContents = [];
	const maxLevel = 20;

	for (let level = 1; level <= maxLevel; level++) {
		levelTableContents.push({
			level,
			proficiencyBonus: getProficiencyBonus(level),
			features: features[level] || [],
			cantripsKnown: cantripsKnown[level] || 0,
			spellsKnown: spellsKnown[level] || 0,
			spellSlots: spellSlotTable[level] || [],
			special1: special1[level] || null,
			special2: special2[level] || null,
		});
	}

	return {
		isHomebrew,
		description,
		hitDie,
		primaryAbility,
		savingThrowProficiencies,
		armorProficiencies,
		weaponProficiencies,
		skills,
		maxSkills,
		startingEquipment,
		levelTable: {
			title: `${className} Progression`,
			special1Title,
			special1Description,
			special2Title,
			special2Description,
			tableContents: levelTableContents,
		},
	};
};

export const classDesc = {
	Artificer: createClassDesc("Artificer"),
	Barbarian: createClassDesc("Barbarian"),
	Bard: createClassDesc("Bard"),
	Cleric: createClassDesc("Cleric"),
	Druid: createClassDesc("Druid"),
	Fighter: createClassDesc("Fighter"),
	Monk: createClassDesc("Monk"),
	Paladin: createClassDesc("Paladin"),
	Ranger: createClassDesc("Ranger"),
	Rogue: createClassDesc("Rogue"),
	Sorcerer: createClassDesc("Sorcerer"),
	Warlock: createClassDesc("Warlock"),
	Wizard: createClassDesc("Wizard"),
};

// Height and weight recommendations will be given based on race

export const subclasses = {
	Artificer: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
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
};

// You are free to add additional attributes to each subclass if necessary (refer to classDesc variable in this file)
export const subclassDesc = {
	Artificer: {
		Alchemist: "",
		Armorer: "",
		Artillerist: "",
		Battle_Smith: "",
	},
	Barbarian: {
		Path_of_the_Berserker: {
			description: ` For some barbarians, rage is a means to an end-—that 
						end being violence. The Path of the Berserker is a path 
						of untrammeled fury, slick with blood. As you enter 
						the berserker’s rage, you thrill in the chaos of battle, 
						heedless of your own health or well-being.`,
			features: [
				{
					title: "Frenzy",
					description: `Starting when you choose this path at 3rd level, you 
								can go into a frenzy when you rage. If you do so, for 
								the duration of your rage you can make a single melee 
								weapon attack as a bonus action on each of your turns 
								after this one. When your rage ends, you suffer one level 
								of exhaustion`,
				},
				{
					title: "Mindless Rage",
					description: `Beginning at 6th level, you can’t be charmed or 
								frightened while raging. If you are charmed or 
								frightened when you enter your rage, the effect is 
								suspended for the duration of the rage.`,
				},
				{
					title: "Intimidating Presence",
					description: `Beginning at 10th level, you can use your action to 
								frighten someone with your menacing presence.
								When you do so, choose one creature that you can see 
								within 30 feet of you. If the creature can see or hear 
								you, it must succeed on a Wisdom saving throw (DC 
								equal to 8 + your proficiency bonus + your Charisma 
								modifier) or be frightened of you until the end of your 
								next turn. On subsequent turns, you can use your action 
								to extend the duration of this effect on the frightened,creature until the end of your next turn. This effect ends 
								if the creature ends its turn out of line of sight or more 
								than 60 feet away from you.
								If the creature succeeds on its saving throw, you can't 
								use this feature on that creature again for 24 hours.`,
				},
			],
		},
		Path_of_the_Totem_Warrior: {
			description: `The Path of the Totem Warrior is a spiritual journey, as 
						the barbarian accepts a spirit animal as guide, protector, 
						and inspiration. In battle, your totem spirit fills you 
						with supernatural might, adding magical fuel to your 
						barbarian rage.
						Most barbarian tribes consider a totem animal to be 
						kin to a particular clan. In such cases, it is unusual for 
						an individual to have more than one totem animal spirit, 
						though exceptions exist.`,
			features: [
				{
					title: "Spirit Seeker",
					description: ` Yours is a path that seeks attunement with the natural 
								world, giving you a kinship with beasts. At 3rd level when 
								you adopt this path, you gain the ability to cast the beast 
								sense and speak with animals spells, but only as rituals, 
								as described in chapter 10.`,
				},
				{
					title: "Totem Spirit",
					description: ` At 3rd level, when you adopt this path, you choose a 
								totem spirit and gain its feature. You must make or 
								acquire a physical totem object- an amulet or similar 
								adornment—that incorporates fur or feathers, claws, 
								teeth, or bones of the totem animal. At your option, you 
								also gain minor physical attributes that are reminiscent 
								of your totem spirit. For example, if you have a bear 
								totem spirit, you might be unusually hairy and thick- 
								skinned, or if your totem is the eagle, your eyes turn 
								bright yellow, Your totem animal might be an animal related to those 
								listed here but more appropriate to your homeland.
								For example, you could choose a hawk or vulture in 
								place of an eagle.
								Bear. While raging, you have resistance to all damage 
								except psychic damage. The spirit of the bear makes you 
								tough enough to stand up to any punishment.
								Eagle. While you're raging and aren’t wearing 
								heavy armor, other creatures have disadvantage on 
								opportunity attack rolls against you, and you can use the 
								Dash action as a bonus action on your turn. The spirit 
								of the eagle makes you into a predator who can weave 
								through the fray with ease.
								Wolf, While you're raging, your friends have 
								advantage on melee attack rolls against any creature 
								within 5 feet of you that is hostile to you. The spirit of 
								the wolf makes you a leader of hunters.`,
				},
				{
					title: "Aspect Of The Beast",
					description: ` At 6th level, you gain a magical benefit based on the 
								totem animal of your choice. You can choose the same 
								animal you selected at 3rd level or a different one.
								Bear. You gain the might of a bear. Your carrying 
								capacity (including maximum load and maximum lift) 
								is doubled, and you have advantage on Strength checks 
								made to push, pull, lift, or break objects.
								Eagle. You gain the eyesight of an eagle. You can 
								see up to 1 mile away with no difficulty, able to discern 
								even fine details as though looking at something no 
								more than 100 feet away from you. Additionally, dim 
								light doesn't impose disadvantage on your Wisdom 
								(Perception) checks.
								Wolf, You gain the hunting sensibilities of a wolf. You 
								can track other creatures while traveling at a fast pace, 
								and you can move stealthily while traveling at a normal 
								pace (see chapter 8 for rules on travel pace)`,
				},
				{
					title: "Spirit Walker",
					description: ` At 10th level, you can cast the commune with nature 
								spell, but only as a ritual. When you do so, a spiritual 
								version of one of the animals you chose for Totem Spirit 
								or Aspect of the Beast appears to you to convey the 
								information you seek.`,
				},
				{
					title: "Totemic Attunement",
					description: ` At 14th level, you gain a magical benefit based on a 
								totem animal of your choice. You can choose the same 
								animal you selected previously or a different one.
								Bear, While you’re raging, any creature within 5 feet 
								of you that’s hostile to you has disadvantage on attack 
								rolls against targets other than you or another character 
								with this feature. An enemy is immune to this effect if it 
								can’t see or hear you or if it can’t be frightened.
								Eagle. While raging, you have a flying speed equal to 
								your current walking speed. This benefit works only in 
								short bursts; you fall if you end your turn in the air and 
								nothing else is holding you aloft.
								Wolf. While you’re raging, you can use a bonus action 
								on your turn to knock a Large or smaller creature prone 
								when you hit it with melee weapon attack`,
				},
			],
		},
		Path_of_the_Ancestral_Guardian: "",
		Path_of_the_Storm_Herald: "",
		Path_of_the_Zealot: "",
		Path_of_the_Beast: "",
		Path_of_Wild_Magic: "",
	},
	Bard: {
		College_of_Lore: {
			description: `Bards of the College of Lore know something about 
						most things, collecting bits of knowledge from sources 
						as diverse as scholarly tomes and peasant tales. 
						Whether singing folk ballads in taverns or elaborate 
						compositions in royal courts, these bards use their gifts 
						to hold audiences spellbound. When the applause dies 
						down, the audience members might find themselves 
						questioning everything they held to be true, from their 
						faith in the priesthood of the local temple to their 
						loyalty to the king.
						The loyalty of these bards lies in the pursuit of beauty 
						and truth, not in fealty to a monarch or following the 
						tenets of a deity. A noble who keeps such a bard as a 
						herald or advisor knows that the bard would rather be 
						honest than politic.
						The college’s members gather in libraries and 
						sometimes in actual colleges, complete with classrooms 
						and dormitories, to share their lore with one another. 
						They also meet at festivals or affairs of state, where they 
						can expose corruption, unravel lies, and poke fun at self- 
						important figures of authority.`,
			features: [
				{
					title: "Bonus Proficiencies",
					description: `When you join the College of Lore at 3rd level, you gain 
								proficiency with three skills of your choice.`,
				},
				{
					title: "Cutting Words",
					description: `Also at 3rd level, you learn how to use your wit to 
								distract, confuse, and otherwise sap the confidence and 
								competence of others. When a creature that you can 
								see within 60 feet of you makes an attack roll, an ability 
								check, or a damage roll, you can use your reaction to 
								expend one of your uses of Bardic Inspiration, rolling 
								a Bardic Inspiration die and subtracting the number 
								rolled from the creature’s roll. You can choose to use 
								this feature after the creature makes its roll, but before 
								the DM determines whether the attack roll or ability
								check succeeds or fails, or before the creature deals its 
								damage. The creature is immune if it can’t hear you or if 
								it’s immune to being charmed.`,
				},
				{
					title: "Additional Magical Secrets",
					description: ` At 6th level, you learn two spells of your choice from any 
								class. A spell you choose must be of a level you can cast, 
								as shown on the Bard table, or a cantrip. The chosen 
								spells count as bard spells for you but don’t count 
								against the number of bard spells you know.`,
				},
				{
					title: "Peerless Skill",
					description: ` Starting at 14th level, when you make an ability check, 
								you can expend one use of Bardic Inspiration. Roll a 
								Bardic Inspiration die and add the number rolled to 
								your ability check. You can choose to do so after you roil 
								the die for the ability check, but before the DM tells you 
								whether you succeed or fail.`,
				},
			],
		},
		College_of_Valor: {
			description: `Bards of the College of Valor are daring skalds whose 
						tales keep alive the memory of the great heroes of the 
						past, and thereby inspire a new generation of heroes. 
						These bards gather in mead halls or around great 
						bonfires to sing the deeds of the mighty, both past 
						and present. They travel the land to witness great 
						events firsthand and to ensure that the memory of 
						those events doesn’t pass from the world. With their
						songs, they inspire others to reach the same heights of 
						accomplishment as the heroes of old`,
			features: [
				{
					title: "Bonus Proficiencies",
					description: `When you join the College of Valor at 3rd level, you 
								gain proficiency with medium armor, shields, and 
								martial weapons.`,
				},
				{
					title: "Combat Inspiration",
					description: ` Also at 3rd level, you learn to inspire others in battle.
								A creature that has a Bardic Inspiration die from you 
								can roll that die and add the number rolled to a weapon 
								damage roll it just made. Alternatively, when an attack 
								roll is made against the creature, it can use its reaction 
								to roll the Bardic Inspiration die and add the number 
								rolled to its AC against that attack, after seeing the roll 
								but before knowing whether it hits or misses.`,
				},
				{
					title: "Extra Attack",
					description: `Starting at 6th level, you can attack twice, instead of 
								once, whenever you take the Attack action on your turn.`,
				},
				{
					title: "Battle Magic",
					description: ` At 14th level, you have mastered the art of weaving 
								spellcasting and weapon use into a single harmonious 
								act. When you use your action to cast a bard spell, you 
								can make one weapon attack as a bonus action.
								`,
				},
			],
		},
		College_of_Glamour: "",
		College_of_Swords: "",
		College_of_Whispers: "",
		College_of_Creation: "",
		College_of_Eloquence: "",
	},
	Cleric: {
		Knowledge_Domain: {
			description: `The gods of knowledge—including Oghma, Boccob, 
						Gilean, Aureon, and Thoth—value learning and 
						understanding above all. Some teach that knowledge is 
						to be gathered and shared in libraries and universities, 
						or promote the practical knowledge of craft and 
						invention. Some deities hoard knowledge and keep its 
						secrets to themselves. And some promise their followers 
						that they will gain tremendous power if they unlock the 
						secrets of the multiverse. Followers of these gods study 
						esoteric lore, collect old tomes, delve into the secret 
						places of the earth, and learn all they can. Some gods 
						of knowledge promote the practical knowledge of craft 
						and invention, including smith deities like Gond, Reorx, 
						Onatar, Moradin, Hephaestus, and Goibhniu`,
			features: [
				{
					title: "Blessings of Knowledge",
					description: `At 1st level, you learn two languages of your choice.
								You also become proficient in your choice of two of the 
								following skills: Arcana, History, Nature, or Religion.
								Your proficiency bonus is doubled for any ability check 
								you make that uses either of those skills.`,
				},
				{
					title: "Channel Divinity: Knowledge of the Ages",
					description: ` Starting at 2nd level, you can use your Channel Divinity 
								to tap into a divine well of knowledge. As an action, 
								you choose one skill or tool. For 10 minutes, you have 
								proficiency with the chosen skill or tool.`,
				},
				{
					title: "Channel Divinity: Read Thoughts",
					description: `At 6th level, you can use your Channel Divinity to read a 
								creature’s thoughts. You can then use your access to the 
								creature’s mind to command it.
								As an action, choose one creature that you can see 
								within 60 feet of you. That creature must make a 
								Wisdom saving throw. If the creature succeeds on the 
								saving throw, you can’t use this feature on it again until 
								you finish a long rest.
								If the creature fails its save, you can read its surface 
								thoughts (those foremost in its mind, reflecting its 
								current emotions and what it is actively thinking 
								about) when it is within 60 feet of you. This effect lasts 
								for 1 minute.
								During that time, you can use your action to end this 
								effect and cast the suggestion spell on the creature 
								without expending a spell slot. The target automatically 
								fails its saving throw against the spell`,
				},
				{
					title: "Potent Spellcasting",
					description: `  Starting at 8th level, you add your Wisdom modifier to 
									the damage you deal with any cleric cantrip.`,
				},
				{
					title: "Visions of the Past",
					description: ` Starting at 17th level, you can call up visions of the 
								past that relate to an object you hold or your immediate 
								surroundings. You spend at least 1 minute in meditation 
								and prayer, then receive dreamlike, shadowy glimpses 
								of recent events. You can meditate in this way for a 
								number of minutes equal to your Wisdom score and 
								must maintain concentration during that time, as if you 
								were casting a spell.
								Once you use this feature, you can’t use it again until 
								you finish a short or long rest.
								Object Reading. Holding an object as you meditate, 
								you can see visions of the object’s previous owner.
								After meditating for 1 minute, you learn how the owner 
								acquired and lost the object, as well as the most recent 
								significant event involving the object and that owner.
								If the object was owned by another creature in the 
								recent past (within a number of days equal to your 
								Wisdom score), you can spend 1 additional minute 
								for each owner to learn the same information about 
								that creature.
								Area Reading. As you meditate, you see visions 
								of recent events in your immediate vicinity (a room, 
								street, tunnel, clearing, or the like, up to a 50-foot cube), 
								going back a number of days equal to your Wisdom 
								score. For each minute you meditate, you learn about 
								one significant event, beginning with the most recent. 
								Significant events typically involve powerful emotions, 
								such as battles and betrayals, marriages and murders, 
								births and funerals. However, they might also include 
								more mundane events that are nevertheless important 
								in your current situation`,
				},
			],
		},
		Life_Domain: {
			description: `The Life domain focuses on the vibrant positive 
						energy—one of the fundamental forces of the universe— 
						that sustains all life. The gods of life promote vitality 
						and health through healing the sick and wounded, 
						caring for those in need, and driving away the forces of 
						death and undeath. Almost any non-evil deity can claim 
						influence over this domain, particularly agricultural 
						deities (such as Chauntea, Arawai, and Demeter), sun 
						gods (such as Lathander, Pelor, and Re-Horakhty), gods
						of healing or endurance (such as Ilmater, Mishakal, 
						Apollo, and Diancecht), and gods of home and 
						community (such as Hestia, Hathor, and Boldrei).

						Life Domain Spells
						Cleric Level Spells
						1st bless, cure wounds
						3rd lesser restoration, spiritual weapon
						5th beacon of hope, revivify
						7th death ward, guardian of faith
						9th mass cure wounds, raise dead`,
			features: [
				{
					title: " Bonus Proficiency",
					description: ` When you choose this domain at 1st level, you gain 
								proficiency with heavy armor.`,
				},
				{
					title: "Disciple of Life",
					description: ` Also starting at 1st level, your healing spells are more 
								effective. Whenever you use a spell of 1st level or higher 
								to restore hit points to a creature, the creature regains 
								additional hit points equal to 2 + the spell’s level`,
				},
				{
					title: "Channel Divinity: Preserve Life",
					description: ` Starting at 2nd level, you can use your Channel Divinity 
								to heal the badly injured.
								As an action, you present your holy symbol and 
								evoke healing energy that can restore a number of hit 
								points equal to five times your cleric level. Choose any 
								creatures within 30 feet of you, and divide those hit 
								points among them. This feature can restore a creature 
								to no more than half of its hit point maximum. You can’t 
								use this feature on an undead or a construct`,
				},
				{
					title: "Blessed Healer",
					description: `Beginning at 6th level, the healing spells you cast on 
								others heal you as well. When you cast a spell of 1st 
								level or higher that restores hit points to a creature 
								other than you, you regain hit points equal to 2 + the 
								spell’s level.`,
				},
				{
					title: "Divine Strike",
					description: `At 8th level, you gain the ability to infuse your weapon 
								strikes with divine energy. Once on each of your turns 
								when you hit a creature with a weapon attack, you can 
								cause the attack to deal an extra 1d8 radiant damage to 
								the target. When you reach 14th level, the extra damage 
								increases to 2d8.`,
				},
				{
					title: "Supreme Healing",
					description: `Starting at 17th level, when you would normally roll 
								one or more dice to restore hit points with a spell, you 
								instead use the highest number possible for each die. 
								For example, instead of restoring 2d6 hit points to a 
								creature, you restore 12.`,
				},
			],
		},
		Light_Domain: {
			description: `Gods of light—including Helm, Lathander, Pholtus, 
						Branchala, the Silver Flame, Belenus, Apollo, and 
						Re-Horakhty—promote the ideals of rebirth and 
						renewal, truth, vigilance, and beauty, often using the 
						symbol of the sun. Some of these gods are portrayed 
						as the sun itself or as a charioteer who guides the sun
						across the sky. Others are tireless sentinels whose eyes 
						pierce every shadow and see through every deception. 
						Some are deities of beauty and artistry, who teach that 
						art is a vehicle for the soul's improvement. Clerics of a 
						god of light are enlightened souls infused with radiance 
						and the power of their gods’ discerning vision, charged 
						with chasing away lies and burning away darkness.
						
						Life Domain Spells
						Cleric Level
						
						1st burning hands, faerie fire
						3rd flaming sphere, scorching ray
						5th daylight, fireball
						7th wall of fire, guardian of faith
						9th flame strike, scrying`,
			features: [
				{
					title: " Bonus cantrip ",
					description: ` When you choose this domain at 1st level, you gain the 
								light cantrip if you don’t already know it.`,
				},
				{
					title: "Warding Flare",
					description: `Also at 1st level, you can interpose divine light between 
								yourself and an attacking enemy. When you are attacked 
								by a creature within 30 feet of you that you can see, 
								you can use your reaction to impose disadvantage on 
								the attack roll, causing light to flare before the attacker 
								before it hits or misses. An attacker that can’t be blinded 
								is immune to this feature.
								You can use this feature a number of times equal to 
								your Wisdom modifier (a minimum of once). You regain 
								all expended uses when you finish a long rest`,
				},
				{
					title: "Channel Divinity: Radiance of the Dawn",
					description: ` Starting at 2nd level, you can use your Channel Divinity 
								to harness sunlight, banishing darkness and dealing 
								radiant damage to your foes.
								As an action, you present your holy symbol, and any 
								magical darkness within 30 feet of you is dispelled. 
								Additionally, each hostile creature within 30 feet of 
								you must make a Constitution saving throw. A creature 
								takes radiant damage equal to 2d10 + your cleric level 
								on a failed saving throw, and half as much damage on a 
								successful one. A creature that has total cover from you 
								is not affected.`,
				},
				{
					title: "Improved Flare",
					description: `Starting at 6th level, you can also use your Warding 
								Flare feature when a creature that you can see within 
								30 feet of you attacks a creature other than you.`,
				},
				{
					title: "Potent Spellcasting",
					description: ` Starting at 8th level, you add your Wisdom modifier to 
								the damage you deal with any cleric cantrip.`,
				},
				{
					title: "Corona of Light",
					description: `Starting at 17th level, you can use your action to activate 
								an aura of sunlight that lasts for 1 minute or until you 
								dismiss it using another action. You emit bright light in 
								a 60-foot radius and dim light 30 feet beyond that. Your 
								enemies in the bright light have disadvantage on saving 
								throws against any spell that deals fire or radiant damage`,
				},
			],
		},
		Nature_Domain: {
			description: ` Gods of nature are as varied as the natural world 
						itself, from inscrutable gods of the deep forests (such 
						as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to 
						friendly deities associated with particular springs and 
						groves (such as Eldath). Druids revere nature as a 
						whole and might serve one of these deities, practicing 
						mysterious rites and reciting all-but-forgotten prayers in 
						their own secret tongue. But many of these gods have 
						clerics as well, champions who take a more active role 
						in advancing the interests of a particular nature god. 
						These clerics might hunt the evil monstrosities that 
						despoil the woodlands, bless the harvest of the faithful, 
						or wither the crops of those who anger their gods
						
						Nature Domain Spells
						Cleric Level
						1st animal friendship, speak with animals
						3rd barkskin, spike growth
						5th plaant growth, wind wall
						7th dominate beast, grasping vines
						9th insect plague, tree stride`,
			features: [
				{
					title: "Acolyte of Nature",
					description: ` At 1st level, you learn one druid cantrip of your choice. 
								You also gain proficiency in one of the following skills of 
								your choice: Animal Handling, Nature, or Survival`,
				},
				{
					title: "Bonus Proficiency",
					description: "",
				},
				{
					title: "Channel Divinity: Charm of Animals and Plants",
					description: ` Starting at 2nd level, you can use your Channel Divinity 
								to charm animals and plants.
								As an action, you present your holy symbol and invoke 
								the name of your deity. Each beast or plant creature that 
								can see you within 30 feet of you must make a Wisdom 
								saving throw. If the creature fails its saving throw, it is 
								charmed by you for 1 minute or until it takes damage. 
								While it is charmed by you, it is friendly to you and other 
								creatures you designate.`,
				},
				{
					title: "Dampen Elements",
					description: ` Starting at 6th level, when you or a creature within 30 
								feet of you takes acid, cold, fire, lightning, or thunder 
								damage, you can use your reaction to grant resistance to 
								the creature against that instance of the damage.`,
				},
				{
					title: "Divine Strike",
					description: ` At 8th level, you gain the ability to infuse your weapon 
								strikes with divine energy. Once on each of your turns 
								when you hit a creature with a weapon attack, you 
								can cause the attack to deal an extra 1d8 cold, fire, or 
								lightning damage (your choice) to the target. When you 
								reach 14th level, the extra damage increases to 2d8.`,
				},
				{
					title: "Master of Nature",
					description: `At 17th level, you gain the ability to command animals 
								and plant creatures. While creatures are charmed by 
								your Charm Animals and Plants feature, you can take 
								a bonus action on your turn to verbally command what 
								each of those creatures will do on its next turn.`,
				},
			],
		},
		Tempest_Domain: {
			description: ` Gods whose portfolios include the Tempest dom ain- 
						including Talos, Umberlee, Kord, Zeboim, the 
						Devourer, Zeus, and Thor—govern storms, sea, and 
						sky. They include gods of lightning and thunder, gods 
						of earthquakes, some fire gods, and certain gods of 
						violence, physical strength, and courage. In some 
						pantheons, a god of this domain rules over other deities 
						and is known for swift justice delivered by thunderbolts. 
						In the pantheons of seafaring people, gods of this 
						domain are ocean deities and the patrons of sailors. 
						Tempest gods send their clerics to inspire fear in the 
						common folk, either to keep those folk on the path of
						righteousness or to encourage them to offer sacrifices of 
						propitiation to ward off divine wrath.
						
						Tempest Domain Spells
						Cleric Level
						
						1st fog cloud, thunderwave
						3rd gust of wind, shatter
						5th call lightning, sleet storm
						7th control water, ice storm
						9th destructive wave, insect plague`,
			features: [
				{
					title: "Bonus Proficiencies",
					description: ` At 1st level, you gain proficiency with martial weapons 
								and heavy armor`,
				},
				{
					title: "Wrath of the Storm",
					description: `Also at 1st level, you can thunderously rebuke attackers. 
								When a creature within 5 feet of you that you can see 
								hits you with an attack, you can use your reaction to 
								cause the creature to make a Dexterity saving throw. 
								The creature takes 2d8 lightning or thunder damage 
								(your choice) on a failed saving throw, and half as much 
								damage on a successful one.
								You can use this feature a number of times equal to 
								your Wisdom modifier (a minimum of once). You regain 
								all expended uses when you finish a long rest.`,
				},
				{
					title: "Channel Divinity: Destructive Wrath",
					description: `Starting at 2nd level, you can use your Channel Divinity 
								to wield the power of the storm with unchecked ferocity.
								When you roll lightning or thunder damage, you can 
								use your Channel Divinity to deal maximum damage, 
								instead of rolling.`,
				},
				{
					title: "Thunderbolt Strike",
					description: ` At 6th level, when you deal lightning damage to a Large 
								or smaller creature, you can also push it up to 10 feet 
								away from you.`,
				},
				{
					title: "Divine Strike",
					description: `At 8th level, you gain the ability to infuse your weapon 
								strikes with divine energy. Once on each of your turns 
								when you hit a creature with a weapon attack, you can 
								cause the attack to deal an extra 1d8 thunder damage to 
								the target. When you reach 14th level, the extra damage 
								increases to 2d8.`,
				},
				{
					title: "Stormborn",
					description: `At 17th level, you have a flying speed equal to 
								your current walking speed whenever you are not 
								underground or indoors.`,
				},
			],
		},
		Trickery_Domain: {
			description: `Gods of trickery—such as Tymora, Beshaba, 
						Olidammara, the Traveler, Garl Glittergold, and 
						Loki—are mischief-makers and instigators who stand 
						as a constant challenge to the accepted order among 
						both gods and mortals. They’re patrons of thieves, 
						scoundrels, gamblers, rebels, and liberators. Their 
						clerics are a disruptive force in the world, puncturing 
						pride, mocking tyrants, stealing from the rich, freeing 
						captives, and flouting hollow traditions. They prefer
						subterfuge, pranks, deception, and theft rather than 
						direct confrontation.
						
						Trickery Domain Spells
						Cleric Level
						
						1st charm person, disguise self
						3rd mirror image, pass without trace
						5th blink, dispel magic
						7th dimension door, polymorph
						9th dominate person`,
			features: [
				{
					title: " Blessing of the Trickster ",
					description: `Starting when you choose this domain at 1st level, you 
								can use your action to touch a willing creature other 
								than yourself to give it advantage on Dexterity (Stealth) 
								checks. This blessing lasts for 1 hour or until you use 
								this feature again.`,
				},
				{
					title: "Channel Divinity: Invoke Duplicity",
					description: ` Starting at 2nd level, you can use your Channel Divinity 
								to create an illusory duplicate of yourself.
								As an action, you create a perfect illusion of 
								yourself that lasts for 1 minute, or until you lose your 
								concentration (as if you were concentrating on a spell). 
								The illusion appears in an unoccupied space that you 
								can see within 30 feet of you. As a bonus action on your 
								turn, you can move the illusion up to 30 feet to a space 
								you can see, but it must remain within 120 feet of you.
								For the duration, you can cast spells as though you 
								were in the illusion’s space, but you must use your own 
								senses. Additionally, when both you and your illusion 
								are within 5 feet of a creature that can see the illusion, 
								you have advantage on attack rolls against that creature, 
								given how distracting the illusion is to the target.`,
				},
				{
					title: " Channel Divinity: Cloak of Shadows",
					description: ` Starting at 6th level, you can use your Channel 
								Divinity to vanish.
								As an action, you become invisible until the end of your 
								next turn. You become visible if you attack or cast a spell`,
				},
				{
					title: "Divine Strike",
					description: ` At 8th level, you gain the ability to infuse your weapon 
								strikes with poison—a gift from your deity. Once on each 
								of your turns when you hit a creature with a weapon 
								attack, you can cause the attack to deal an extra 1d8 
								poison damage to the target. When you reach 14th level, 
								the extra damage increases to 2d8`,
				},
				{
					title: "Improved Duplicity",
					description: ` At 17th level, you can create up to four duplicates 
								of yourself, instead of one, when you use Invoke 
								Duplicity. As a bonus action on your turn, you can 
								move any number of them up to 30 feet, to a maximum 
								range of 120 feet.`,
				},
			],
		},
		War_Domain: {
			description: `War has many manifestations. It can make heroes of 
						ordinary people. It can be desperate and horrific, with 
						acts of cruelty and cowardice eclipsing instances of 
						excellence and courage. In either case, the gods of war
						watch over warriors and reward them for their great 
						deeds. The clerics of such gods excel in battle, inspiring 
						others to fight the good fight or offering acts of violence 
						as prayers. Gods of war include champions of honor 
						and chivalry (such as Torm, Heironeous, and Kiri- 
						Jolith) as well as gods of destruction and pillage (such 
						as Erythnul, the Fury, Gruumsh, and Ares) and gods of 
						conquest and domination (such as Bane, Hextor, and 
						Maglubiyet). Other war gods (such as Tempus, Nike, 
						and Nuada) take a more neutral stance, promoting war 
						in all its manifestations and supporting warriors in any 
						circumstance.
						
						War Domain Spells
						Cleric Level
						
						1st divine favor, shield of faith
						3rd magic weapon, spiritual weapon
						5th crusader's mantle, spririt guardians
						7th freedom of movement, stoneskin
						9th flame strike, hold monster`,
			features: [
				{
					title: " Bonus Proficiencies",
					description: `At 1st level, you gain proficiency with martial weapons 
							and heavy armor.`,
				},
				{
					title: "War Priest",
					description: ` From 1st level, your god delivers bolts of inspiration to 
								you while you are engaged in battle. When you use the 
								Attack action, you can make one weapon attack as a 
								bonus action.
								You can use this feature a number of times equal to 
								your Wisdom modifier (a minimum of once). You regain 
								all expended uses when you finish a long rest.`,
				},
				{
					title: "Channel Divinity: Guided Strike ",
					description: `Starting at 2nd level, you can use your Channel Divinity 
								to strike with supernatural accuracy. When you make 
								an attack roll, you can use your Channel Divinity to gain 
								a +10 bonus to the roll. You make this choice after you 
								see the roll, but before the DM says whether the attack 
								hits or misses.`,
				},
				{
					title: "Channel Divinity: War God’s Blessing",
					description: `At 6th level, when a creature within 30 feet of you 
								makes an attack roll, you can use your reaction to grant 
								that creature a +10 bonus to the roll, using your Channel 
								Divinity. You make this choice after you see the roll, but 
								before the DM says whether the attack hits or misses.`,
				},
				{
					title: "Divine Strike",
					description: ` At 8th level, you gain the ability to infuse your weapon 
								strikes with divine energy. Once on each of your turns 
								when you hit a creature with a weapon attack, you can 
								cause the attack to deal an extra 1d8 damage of the 
								same type dealt by the weapon to the target. When you 
								reach 14th level, the extra damage increases to 2d8.`,
				},
				{
					title: "Avatar of Battle",
					description: ` At 17th level, you gain resistance to bludgeoning, piercing, 
								and slashing damage from nonmagical weapons.`,
				},
			],
		},
		Death_Domain: "",
		Arcana_Domain: "",
		Forge_Domain: "",
		Grave_Domain: "",
		Order_Domain: "",
		Peace_Domain: "",
		Twilight_Domain: "",
	},
	Druid: {
		Circle_of_the_Land: {
			description: ` The Circle of the Land is made up of mystics and sages 
						who safeguard ancient knowledge and rites through 
						a vast oral tradition. These druids meet within sacred 
						circles of trees or standing stones to whisper primal 
						secrets in Druidic. The circle’s wisest members preside 
						as the chief priests of communities that hold to the Old 
						Faith and serve as advisors to the rulers of those folk.
						As a member of this circle, your magic is influenced 
						by the land where you were initiated into the circle’s 
						mysterious rites.`,
			features: [
				{
					title: "Bonus Cantrip",
					description: `When you choose this circle at 2nd level, you learn one 
								additional druid cantrip of your choice.`,
				},
				{
					title: "Natural Recovery",
					description: `Starting at 2nd level, you can regain some of your 
								magical energy by sitting in meditation and communing 
								with nature. During a short rest, you choose expended 
								spell slots to recover. The spell slots can have a 
								combined level that is equal to or less than half your 
								druid level (rounded up), and none of the slots can be 
								6th level or higher. You can’t use this feature again until 
								you finish a long rest 
								For example, when you are a 4th-level druid, you can 
								recover up to two levels worth of spell slots. You can 
								recover either a 2nd-level slot or two 1st-level slots`,
				},
				{
					title: "Circle Spells",
					description: ` Your mystical connection to the land infuses you with 
								the ability to cast certain spells. At 3rd, 5th, 7th, and 
								9th level you gain access to circle spells connected 
								to the land where you became a druid. Choose that 
								land—arctic, coast, desert, forest, grassland, mountain, 
								swamp, or Underdark—and consult the associated 
								list of spells.
								Once you gain access to a circle spell, you always have 
								it prepared, and it doesn’t count against the number of 
								spells you can prepare each day. If you gain access to a 
								spell that doesn’t appear on the druid spell list, the spell 
								is nonetheless a druid spell for you.`,
				},
				{
					title: "Land’s Stride",
					description: ` Starting at 6th level, moving through nonmagical 
								difficult terrain costs you no extra movement. You can 
								also pass through nonmagical plants without being 
								slowed by them and without taking damage from them if 
								they have thorns, spines, or a similar hazard.
								In addition, you have advantage on saving throws against 
								plants that are magically created or manipulated to impede 
								movement, such those created by the entangle spell.`,
				},
				{
					title: "Nature's Ward",
					description: ` When you reach 10th level, you can’t be charmed or 
								frightened by elementals or fey, and you are immune to 
								poison and disease.`,
				},
				{
					title: "Nature's Sanctuary",
					description: `When you reach 14th level, creatures of the natural 
								world sense your connection to nature and become 
								hesitant to attack you. When a beast or plant creature 
								attacks you, that creature must make a Wisdom saving 
								throw against your druid spell save DC. On a failed save, 
								the creature must choose a different target, or the attack 
								automatically misses. On a successful save, the creature 
								is immune to this effect for 24 hours.
								The creature is aware of this effect before it makes its 
								attack against you.`,
				},
			],
		},
		Circle_of_the_Moon: {
			description: ` Druids of the Circle of the Moon are fierce guardians 
						of the wilds. Their order gathers under the full moon to 
						share news and trade warnings. They haunt the deepest 
						parts of the wilderness, where they might go for weeks 
						on end before crossing paths with another humanoid 
						creature, let alone another druid.
						Changeable as the moon, a druid of this circle might 
						prowl as a great cat one night, soar over the treetops 
						as an eagle the next day, and crash through the 
						undergrowth in bear form to drive off a trespassing 
						monster. The wild is in the druid's blood`,
			features: [
				{
					title: "Combat Wild Shape",
					description: ` When you choose this circle at 2nd level, you gain the 
								ability to use Wild Shape on your turn as a bonus action, 
								rather than as an action.
								Additionally, while you are transformed by Wild 
								Shape, you can use a bonus action to expend one 
								spell slot to regain 1d8 hit points per level of the spell 
								slot expended.`,
				},
				{
					title: "Circle Forms",
					description: ` The rites of your circle grant you the ability to transform 
								into more dangerous animal forms. Starting at 2nd 
								level, you can use your Wild Shape to transform into a 
								beast with a challenge rating as high as 1 (you ignore 
								the Max. CR column of the Beast Shapes table, but must 
								abide by the other limitations there).
								Starting at 6th level, you can transform into a beast 
								with a challenge rating as high as your druid level 
								divided by 3, rounded down.`,
				},
				{
					title: "Primal Strike",
					description: ` Primal Strike
								Starting at 6th level, your attacks in beast form count as 
								magical for the purpose of overcoming resistance and 
								immunity to nonmagical attacks and damage.`,
				},
				{
					title: "Elemental Wild Shape",
					description: `At 10th level, you can expend two uses of Wild Shape 
								at the same time to transform into an air elemental, an 
								earth elemental, a fire elemental, or a water elemental.`,
				},
				{
					title: "Thousand Forms",
					description: ` By 14th level, you have learned to use magic to alter 
								your physical form in more subtle ways. You can cast the 
								alter self spell at will.`,
				},
				{
					title: "",
					description: ``,
				},
			],
		},
		Circle_of_Dreams: "",
		Circle_of_the_Shepherd: "",
		Circle_of_Spores: "",
		Circle_of_Stars: "",
		Circle_of_Wildfire: "",
	},
	Fighter: {
		Champion: {
			description: `The archetypal Champion focuses on the development 
						of raw physical power honed to deadly perfection.
						Those who model themselves on this archetype combine 
						rigorous training with physical excellence to deal 
						devastating blows`,
			features: [
				{
					title: " Improved Critical",
					description: ` Beginning when you choose this archetype at 3rd 
								level, your weapon attacks score a critical hit on a 
								roll of 19 or 20.`,
				},
				{
					title: "Remarkable Athlete",
					description: ` Starting at 7th level, you can add half your proficiency 
								bonus (round up) to any Strength, Dexterity, or 
								Constitution check you make that doesn’t already use 
								your proficiency bonus.
								In addition, when you make a running long jump, the 
								distance you can cover increases by a number of feet 
								equal to your Strength modifier.
								`,
				},
				{
					title: "Additional Fighting Style",
					description: ` At 10th level, you can choose a second option from the
								Fighting Style class feature.`,
				},
				{
					title: "Superior Critical",
					description: ` Starting at 15th level, your weapon attacks score a 
								critical hit on a roll of 18-20.`,
				},
				{
					title: "Survivor",
					description: `At 18th level, you attain the pinnacle of resilience in 
								battle. At the start of each of your turns, you regain hit 
								points equal to 5 + your Constitution modifier if you 
								have no more than half of your hit points left. You don’t 
								gain this benefit if you have 0 hit points.`,
				},
			],
		},
		Battle_Master: {
			description: ` Those who emulate the archetypal Battle Master 
						employ martial techniques passed down through 
						generations. To a Battle Master, combat is an academic 
						field, sometimes including subjects beyond battle such 
						as weaponsmithing and calligraphy. Not every fighter 
						absorbs the lessons of history, theory, and artistry 
						that are reflected in the Battle Master archetype, but 
						those who do are well-rounded fighters of great skill 
						and knowledge.`,
			features: [
				{
					title: "Combat Superiority",
					description: `When you choose this archetype at 3rd level, you 
								learn maneuvers that are fueled by special dice called 
								superiority dice.
								Maneuvers. You learn three maneuvers of your 
								choice, which are detailed under “Maneuvers” below. 
								Many maneuvers enhance an attack in some way. You 
								can use only one maneuver per attack.
								You learn two additional maneuvers of your choice 
								at 7th, 10th, and 15th level. Each time you learn new 
								maneuvers, you can also replace one maneuver you 
								know with a different one.
								Superiority Dice. You have four superiority dice, 
								which are d8s. A superiority die is expended when you 
								use it. You regain all of your expended superiority dice 
								when you finish a short or long rest.
								You gain another superiority die at 7th level and one 
								more at 15th level.
								Saving Throws. Some of your maneuvers require 
								your target to make a saving throw to resist the 
								maneuver’s effects. The saving throw DC is calculated 
								as follows:
								Maneuver save DC = 8 + your proficiency bonus + 
								your Strength or Dexterity modifier (your choice)`,
				},
				{
					title: " Student of War",
					description: ` At 3rd level, you gain proficiency with one type of 
								artisan’s tools of your choice.`,
				},
				{
					title: "Know Your Enemy",
					description: ` Starting at 7th level, if you spend at least 1 minute 
								observing or interacting with another creature outside 
								combat, you can learn certain information about its 
								capabilities compared to your own. The DM tells you if 
								the creature is your equal, superior, or inferior in regard 
								to two of the following characteristics of your choice:
								• Strength score
								• Dexterity score
								• Constitution score
								• Armor Class
								• Current hit points
								• Total class levels (if any)
								• Fighter class levels (if any)`,
				},
				{
					title: " Improved Combat Superiority",
					description: ` At 10th level, your superiority dice turn into d10s. At
								18th level, they turn into dl2s.`,
				},
				{
					title: "Relentless",
					description: ` Starting at 15th level, when you roll initiative and 
								have no superiority dice remaining, you regain 1 
								superiority die.`,
				},
				{
					title: "Maneuvers",
					description: ` The maneuvers are presented in alphabetical order.
								Commander’s Strike. When you take the Attack 
								action on your turn, you can forgo one of your attacks 
								and use a bonus action to direct one of your companions 
								to strike. When you do so, choose a friendly creature 
								who can see or hear you and expend one superiority die. 
								That creature can immediately use its reaction to make 
								one weapon attack, adding the superiority die to the 
								attack’s damage roll.

								Disarming Attack. When you hit a creature with a 
								weapon attack, you can expend one superiority die to 
								attempt to disarm the target, forcing it to drop one item 
								of your choice that it’s holding. You add the superiority 
								die to the attack’s damage roll, and the target must 
								make a Strength saving throw. On a failed save, it drops 
								the object you choose. The object lands at its feet.

								Distracting Strike. When you hit a creature with a 
								weapon attack, you can expend one superiority die to 
								distract the creature, giving your allies an opening. You 
								add the superiority die to the attack’s damage roll. The 
								next attack roll against the target by an attacker other 
								than you has advantage if the attack is made before the 
								start of your next turn.

								Evasive Footwork. When you move, you can expend 
								one superiority die, rolling the die and adding the 
								number rolled to your AC until you stop moving.

								Feinting Attack. You can expend one superiority die 
								and use a bonus action on your turn to feint, choosing 
								one creature within 5 feet of you as your target. You 
								have advantage on your next attack roll against that 
								creature. If that attack hits, add the superiority die to the 
								attack’s damage roll.

								Goading Attack. When you hit a creature with a 
								weapon attack, you can expend one superiority die to 
								attempt to goad the target into attacking you. You add 
								the superiority die to the attack’s damage roll, and 
								the target must make a Wisdom saving throw. On a 
								failed save, the target has disadvantage on all attack 
								rolls against targets other than you until the end of 
								your next turn.

								Lunging Attack. When you make a melee weapon 
								attack on your turn, you can expend one superiority die 
								to increase your reach for that attack by 5 feet. If you hit, 
								you add the superiority die to the attack’s damage roll.

								Maneuvering Attack. When you hit a creature with 
								a weapon attack, you can expend one superiority 
								die to maneuver one of your comrades into a more 
								advantageous position. You add the superiority die to the 
								attack’s damage roll, and you choose a friendly creature 
								who can see or hear you. That creature can use its 
								reaction to move up to half its speed without provoking 
								opportunity attacks from the target of your attack.

								Menacing Attack. When you hit a creature with a 
								weapon attack, you can expend one superiority die to 
								attempt to frighten the target. You add the superiority 
								die to the attack’s damage roll, and the target must 
								make a Wisdom saving throw. On a failed save, it is 
								frightened of you until the end of your next turn.

								Parry. When another creature damages you with a 
								melee attack, you can use your reaction and expend one 
								superiority die to reduce the damage by the number you 
								roll on your superiority die + your Dexterity modifier.

								Precision Attack. When you make a weapon attack 
								roll against a creature, you can expend one superiority 
								die to add it to the roll. You can use this maneuver 
								before or after making the attack roll, but before any 
								effects of the attack are applied.

								Pushing Attack. When you hit a creature with 
								a weapon attack, you can expend one superiority 
								die to attempt to drive the target back. You add the 
								superiority die to the attack's damage roll, and if the 
								target is Large or smaller, it must make a Strength 
								saving throw. On a failed save, you push the target up 
								to 15 feet away from you.

								Rally. On your turn, you can use a bonus action and 
								expend one superiority die to bolster the resolve of one 
								of your companions. When you do so, choose a friendly 
								creature who can see or hear you. That creature gains 
								temporary hit points equal to the superiority die roll + 
								your Charisma modifier.

								Riposte. When a creature misses you with a melee 
								attack, you can use your reaction and expend one 
								superiority die to make a melee weapon attack against 
								the creature. If you hit, you add the superiority die to the 
								attack's damage roll.

								Sweeping Attack. When you hit a creature with a 
								melee weapon attack, you can expend one superiority 
								die to attempt to damage another creature with the 
								same attack. Choose another creature within 5 feet 
								of the original target and within your reach. If the 
								original attack roll would hit the second creature, it 
								takes damage equal to the number you roll on your 
								superiority die. The damage is of the same type dealt by 
								the original attack.

								Trip Attack. When you hit a creature with a weapon 
								attack, you can expend one superiority die to attempt 
								to knock the target down. You add the superiority die 
								to the attack’s damage roll, and if the target is Large or 
								smaller, it must make a Strength saving throw. On a 
								failed save, you knock the target prone.`,
				},
			],
		},
		Eldritch_Knight: {
			description: ` The archetypal Eldritch Knight combines the martial 
						mastery common to all fighters with a careful study of 
						magic. Eldritch Knights use magical techniques similar 
						to those practiced by wizards. They focus their study
						on two of the eight schools of magic: abjuration and 
						evocation. Abjuration spells grant an Eldritch Knight 
						additional protection in battle, and evocation spells deal 
						damage to many foes at once, extending the fighter’s 
						reach in combat. These knights learn a comparatively 
						small number of spells, committing them to memory 
						instead of keeping them in a spellbook.`,
			features: [
				{
					title: "Spellcasting", // needs formatting 4 a real rite runny and add spellcasting table
					description: ` When you reach 3rd level, you augment your martial 
								prowess with the ability to cast spells. See chapter 10 
								for the general rules of spellcasting and chapter 11 for 
								the wizard spell list.

								Cantrips. You learn two cantrips of your choice from 
								the wizard spell list. You learn an additional wizard 
								cantrip of your choice at 10th level.

								Spell Slots. The Eldritch Knight Spellcasting table 
								shows how many spell slots you have to cast your 
								spells of 1st level and higher. To cast one of these 
								spells, you must expend a slot of the spell’s level or 
								higher. You regain all expended spell slots when you 
								finish a long rest.
								For example, if you know the 1st-level spell shield and 
								have a 1st-level and a 2nd-level spell slot available, you 
								can cast shield using either slot.

								Spells Known of 1st-Level and Higher. You know 
								three 1st-level wizard spells of your choice, two of which 
								you must choose from the abjuration and evocation 
								spells on the wizard spell list.
								The Spells Known column of the Eldritch Knight 
								Spellcasting table shows when you learn more wizard 
								spells of 1st level or higher. Each of these spells must be 
								an abjuration or evocation spell of your choice, and must 
								be of a level for which you have spell slots. For instance, 
								when you reach 7th level in this class, you can learn one 
								new spell of 1st or 2nd level.
								The spells you learn at 8th, 14th, and 20th level can 
								come from any school of magic.
								Whenever you gain a level in this class, you can 
								replace one of the wizard spells you know with another 
								spell of your choice from the wizard spell list. The 
								new spell must be of a level for which you have spell 
								slots, and it must be an abjuration or evocation spell, 
								unless you’re replacing the spell you gained at 8th, 14th, 
								or 20th level.

								Spellcasting Ability. Intelligence is your spellcasting 
								ability for your wizard spells, since you learn your 
								spells through study and memorization. You use your 
								Intelligence whenever a spell refers to your spellcasting 
								ability. In addition, you use your Intelligence modifier 
								when setting the saving throw DC for a wizard spell you 
								cast and when making an attack roll with one.

								Spell save DC = 8 + your proficiency bonus + 
								your Intelligence modifier
								Spell attack modifier = your proficiency bonus + 
								your Intelligence modifier
								
								 `,
				},
				{
					title: "Weapon Bond",
					description: `At 3rd level, you learn a ritual that creates a magical 
								bond between yourself and one weapon. You perform 
								the ritual over the course of 1 hour, which can be done  during a short rest. The weapon must be within your 
								reach throughout the ritual, at the conclusion of which 
								you touch the weapon and forge the bond.
								Once you have bonded a weapon to yourself, you 
								can’t be disarmed of that weapon unless you are 
								incapacitated. If it is on the same plane of existence, 
								you can summon that weapon as a bonus action on your 
								turn, causing it to teleport instantly to your hand.
								You can have up to two bonded weapons, but can 
								summon only one at a time with your bonus action.
								If you attempt to bond with a third weapon, you must 
								break the bond with one of the other two.`,
				},
				{
					title: "War Magic",
					description: `Beginning at 7th level, when you use your action to 
								cast a cantrip, you can make one weapon attack as a 
								bonus action.`,
				},
				{
					title: "Eldritch Strike",
					description: ` At 10th level, you learn how to make your weapon 
								strikes undercut a creature’s resistance to your spells. 
								When you hit a creature with a weapon attack, that 
								creature has disadvantage on the next saving throw 
								it makes against a spell you cast before the end of 
								your next turn.`,
				},
				{
					title: "Arcane Charge",
					description: `At 15th level, you gain the ability to teleport up to 30 
								feet to an unoccupied space you can see when you use 
								your Action Surge. You can teleport before or after the 
								additional action.`,
				},
				{
					title: "Improved War Magic",
					description: `Starting at 18th level, when you use your action to 
								cast a spell, you can make one weapon attack as a 
								bonus action.`,
				},
			],
		},
		Arcane_Archer: "",
		Cavalier: "",
		Samurai: "",
		Psi_Warrior: "",
		Echo_Knight: "",
	},
	Monk: {
		Way_of_the_Open_Hand: {
			description: `Monks of the Way of the Open Hand are the ultimate 
						masters of martial arts combat, whether armed or 
						unarmed. They learn techniques to push and trip their 
						opponents, manipulate ki to heal damage to their 
						bodies, and practice advanced meditation that can 
						protect them from harm`,
			features: [
				{
					title: "Open Hand Technique",
					description: `Starting when you choose this tradition at 3rd level, 
								you can manipulate your enemy’s ki when you harness 
								your own. Whenever you hit a creature with one of the 
								attacks granted by your Flurry of Blows, you can impose 
								one of the following effects on that target:
								• It must succeed on a Dexterity saving throw or be 
								knocked prone.
								• It must make a Strength saving throw. If it fails, you 
								can push it up to 15 feet away from you.
								• It can’t take reactions until the end of your next turn.`,
				},
				{
					title: "Wholeness of Body",
					description: `At 6th level, you gain the ability to heal yourself. As an 
								action, you can regain hit points equal to three times your 
								monk level. You must finish a long rest before you 
								can use this feature again.
`,
				},
				{
					title: "Tranquility",
					description: `Beginning at 11th level, you can enter a special 
								meditation that surrounds you with an aura of peace. At 
								the end of a long rest, you gain the effect of a sanctuary 
								spell that lasts until the start of your next long rest (the 
								spell can end early as normal). The saving throw DC 
								for the spell equals 8 + your Wisdom modifier + your 
								proficiency bonus.`,
				},
				{
					title: "Quivering Palm",
					description: ` At 17th level, you gain the ability to set up lethal 
								vibrations in someone’s body. When you hit a creature 
								with an unarmed strike, you can spend 3 ki points to 
								start these imperceptible vibrations, which last for a 
								number of days equal to your monk level. The vibrations 
								are harmless unless you use your action to end them.
								To do so, you and the target must be on the same plane 
								of existence. When you use this action, the creature 
								must make a Constitution saving throw. If it fails, it is 
								reduced to 0 hit points. If it succeeds, it takes 10d10 
								necrotic damage.
								You can have only one creature under the effect of this 
								feature at a time. You can choose to end the vibrations 
								harmlessly without using an action.`,
				},
			],
		},
		Way_of_Shadow: {
			description: `Monks of the Way of Shadow follow a tradition that 
						values stealth and subterfuge. These monks might 
						be called ninjas or shadowdancers, and they serve as 
						spies and assassins. Sometimes the members of a 
						ninja monastery are family members, forming a clan 
						sworn to secrecy about their arts and missions. Other 
						monasteries are more like thieves’ guilds, hiring out 
						their services to nobles, rich merchants, or anyone else 
						who can pay their fees. Regardless of their methods, the 
						heads of these monasteries expect the unquestioning 
						obedience of their students.`,
			features: [
				{
					title: "Shadow Arts",
					description: ` Starting when you choose this tradition at 3rd level, you 
								can use your ki to duplicate the effects of certain spells. 
								As an action, you can spend 2 ki points to cast darkness, 
								darkvision, pass without trace, or silence, without 
								providing material components. Additionally, you gain 
								the minor illusion cantrip if you don’t already know it.`,
				},
				{
					title: "Shadow Step",
					description: ` At 6th level, you gain the ability to step from one shadow 
								into another. When you are in dim light or darkness, 
								as a bonus action you can teleport up to 60 feet to an 
								unoccupied space you can see that is also in dim light 
								or darkness. You then have advantage on the first melee 
								attack you make before the end of the turn.`,
				},
				{
					title: "Cloak of Shadows",
					description: ` By 11th level, you have learned to become one with 
								the shadows. When you are in an area of dim light or 
								darkness, you can use your action to become invisible. 
								You remain invisible until you make an attack, cast a 
								spell, or are in an area of bright light.`,
				},
				{
					title: "Oppurtunist",
					description: ` At 17th level, you can exploit a creature's momentary 
								distraction when it is hit by an attack. Whenever a 
								creature within 5 feet of you is hit by an attack made by 
								a creature other than you, you can use your reaction to 
								make a melee attack against that creature.`,
				},
			],
		},
		Way_of_the_Four_Elements: {
			description: ` You follow a monastic tradition that teaches you to 
						harness the elements. When you focus your ki, you can 
						align yourself with the forces of creation and bend the 
						four elements to your will, using them as an extension 
						of your body. Some members of this tradition dedicate 
						themselves to a single element, but others weave the 
						elements together.
						Many monks of this tradition tattoo their bodies with 
						representations of their ki powers, commonly imagined 
						as coiling dragons, but also as phoenixes, fish, plants, 
						mountains, and cresting waves.`,
			features: [
				{
					title: "Disciple of the Elements ", // Add skillpoints table for a real rite runny, add formatting
					description: `When you choose this tradition at 3rd level, you learn 
								magical disciplines that harness the power of the four 
								elements. A discipline requires you to spend ki points 
								each time you use it.
								You know the Elemental Attunement discipline and 
								one other elemental discipline of your choice, which are 
								detailed in the “Elemental Disciplines” section below. 
								You learn one additional elemental discipline of your 
								choice at 6th, 11th, and 17th level.
								Whenever you learn a new elemental discipline, 
								you can also replace one elemental discipline that you 
								already know with a different discipline.
								Casting Elemental Spells. Some elemental 
								disciplines allow you to cast spells. See chapter 10 for 
								the general rules of spellcasting. To cast one of these 
								spells, you use its casting time and other rules, but you 
								don’t need to provide material components for it.
								Once you reach 5th level in this class, you can spend 
								additional ki points to increase the level of an elemental 
								discipline spell that you cast, provided that the spell has 
								an enhanced effect at a higher level, as burning hands 
								does. The spell's level increases by 1 for each additional 
								ki point you spend. For example, if you are a 5th-level 
								monk and use Sweeping Cinder Strike to cast burning 
								hands, you can spend 3 ki points to cast it as a 2nd-level 
								spell (the discipline’s base cost of 2 ki points plus 1).
								The maximum number of ki points you can spend to 
								cast a spell in this way (including its base ki point cost 
								and any additional ki points you spend to increase its 
								level) is determined by your monk level, as shown in the 
								Spells and Ki Points table`,
				},
				{
					title: "Elemental Disciplines", // add formatting for a real right runny
					description: ` The elemental disciplines are presented in alphabetical 
								order. If a discipline requires a level, you must be that 
								level in this class to learn the discipline.
								Breath of Winter (17th Level Required). You can 
								spend 6 ki points to cast cone of cold.
								Clench of the North Wind (6th Level Required). You 
								can spend 3 ki points to cast hold person.
								Elemental Attunement. You can use your action to 
								briefly control elemental forces nearby, causing one of 
								the following effects of your choice:
								• Create a harmless, instantaneous sensory effect 
								related to air, earth, fire, or water, such as a shower of 
								sparks, a puff of wind, a spray of light mist, or a gentle 
								rumbling of stone.
								• Instantaneously light or snuff out a candle, a torch, or 
								a small campfire.
								• Chill or warm up to 1 pound of nonliving material for 
								up to 1 hour.
								• Cause earth, fire, water, or mist that can fit within a 
								1-foot cube to shape itself into a crude form you desig
								nate for 1 minute.
								Eternal Mountain Defense (11th Level Required).
								You can spend 5 ki points to cast stoneskin, 
								targeting yourself.
								Fangs of the Fire Snake. When you use the Attack 
								action on your turn, you can spend 1 ki point to cause 
								tendrils of flame to stretch out from your fists and feet. 
								Your reach with your unarmed strikes increases by 
								10 feet for that action, as well as the rest of the turn.
								A hit with such an attack deals fire damage instead of 
								bludgeoning damage, and if you spend 1 ki point when 
								the attack hits, it also deals an extra 1d10 fire damage.
								Fist of Four Thunders. You can spend 2 ki points to 
								cast thunderwave.
								Fist of Unbroken Air. You can create a blast of 
								compressed air that strikes like a mighty fist. As an 
								action, you can spend 2 ki points and choose a creature 
								within 30 feet of you. That creature must make a 
								Strength saving throw. On a failed save, the creature 
								takes 3d10 bludgeoning damage, plus an extra 1d10 
								bludgeoning damage for each additional ki point you 
								spend, and you can push the creature up to 20 feet away 
								from you and knock it prone. On a successful save, the 
								creature takes half as much damage, and you don’t push 
								it or knock it prone.
								Flames of the Phoenix (11th Level Required). You 
								can spend 4 ki points to cast fireball.
								Gong of the Summit (6th Level Required). You can 
								spend 3 ki points to cast shatter.
								Mist Stance (11th Level Required). You can spend 4 
								ki points to cast gaseous form, targeting yourself.
								Ride the Wind (11th Level Required). You can spend
								4 ki points to cast fly, targeting yourself.
								River of Hungry Flame (17th Level Required). You 
								can spend 5 ki points to cast wall of fire.
								Rush of the Gale Spirits. You can spend 2 ki points 
								to cast gust of wind.
								Shape the Flowing River. As an action, you can 
								spend 1 ki point to choose an area of ice or water no 
								larger than 30 feet on a side within 120 feet of you. You 
								can change water to ice within the area and vice versa, 
								and you can reshape ice in the area in any manner you 
								choose. You can raise or lower the ice’s elevation, create 
								or fill in a trench, erect or flatten a wall, or form a pillar. 
								The extent of any such changes can’t exceed half the 
								area’s largest dimension. For example, if you affect a 
								30-foot square, you can create a pillar up to 15 feet high, 
								raise or lower the square’s elevation by up to 15 feet, dig 
								a trench up to 15 feet deep, and so on. You can’t shape 
								the ice to trap or injure a creature in the area.
								Sweeping Cinder Strike. You can spend 2 ki points to 
								cast burning hands.
								Water Whip. You can spend 2 ki points as a bonus 
								action to create a whip of water that shoves and pulls 
								a creature to unbalance it. A creature that you can see 
								that is within 30 feet of you must make a Dexterity 
								saving throw. On a failed save, the creature takes 3d10 
								bludgeoning damage, plus an extra 1d10 bludgeoning 
								damage for each additional ki point you spend, and you 
								can either knock it prone or pull it up to 25 feet closer 
								to you. On a successful save, the creature takes half as 
								much damage, and you don’t pull it or knock it prone.
								Wave of Rolling Earth (17th Level Required). You 
								can spend 6 ki points to cast wall of stone.`,
				},
			],
		},
		Way_of_the_Drunken_Master: "",
		Way_of_the_Kensei: "",
		Way_of_the_Sun_Soul: "",
		Way_of_the_Long_Death: "",
		Way_of_the_Astral_Self: "",
		Way_of_Mercy: "",
	},
	Paladin: {
		Oath_of_Devotion: "",
		Oath_of_the_Ancients: {
			description: `The Oath of the Ancients is as old as the race of elves 
						and the rituals of the druids. Sometimes called fey 
						knights, green knights, or horned knights, paladins who 
						swear this oath cast their lot with the side of the light 
						in the cosmic struggle against darkness because they 
						love the beautiful and life-giving things of the world, 
						not necessarily because they believe in principles of 
						honor, courage, and justice. They adorn their armor and 
						clothing with images of growing things—leaves, antlers, 
						or flowers—to reflect their commitment to preserving 
						life and light in the world.`,
			features: [
				{
					title: "Tenets of the Ancients", // add formatting for a real right runny
					description: ` The tenets of the Oath of the Ancients have been 
								preserved for uncounted centuries. This oath 
								emphasizes the principles of good above any concerns 
								of law or chaos. Its four central principles are simple.
								Kindle the Light. Through your acts of mercy, 
								kindness, and forgiveness, kindle the light of hope in the 
								world, beating back despair.
								Shelter the Light. Where there is good, beauty, love, 
								and laughter in the world, stand against the wickedness 
								that would swallow it. Where life flourishes, stand 
								against the forces that would render it barren.
								Preserve Your Own Light. Delight in song and 
								laughter, in beauty and art. If you allow the light to die in 
								your own heart, you can’t preserve it in the world.
								Be the Light. Be a glorious beacon for all who live in 
								despair. Let the light of your joy and courage shine forth 
								in all your deeds.`,
				},
				{
					title: "Oath Spells", // add formatting for a real right runny
					description: ` You gain oath spells at the paladin levels listed.
								O ath of the Ancients Spells
								Paladin Level Spells
								3rd
								ensnaring strike, speak with animals
								5th
								9th
								13th
								17th
								moonbeam, misty step
								plant growth, protection from energy
								ice storm, stoneskin
								commune with nature, tree stride`,
				},
				{
					title: "Channel Divinity", // add formatting for a real right runny
					description: ` When you take this oath at 3rd level, you gain the 
								following two Channel Divinity options.
								Nature’s Wrath. You can use your Channel Divinity 
								to invoke primeval forces to ensnare a foe. As an action, 
								you can cause spectral vines to spring up and reach 
								for a creature within 10 feet of you that you can see.
								The creature must succeed on a Strength or Dexterity 
								saving throw (its choice) or be restrained. While 
								restrained by the vines, the creature repeats the saving 
								throw at the end of each of its turns. On a success, it 
								frees itself and the vines vanish.
								Turn the Faithless. You can use your Channel 
								Divinity to utter ancient words that are painful for fey 
								and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that 
								can hear you must make a Wisdom saving throw. On a 
								failed save, the creature is turned for 1 minute or until it 
								takes damage.
								A turned creature must spend its turns trying to move 
								as far away from you as it can, and it can’t willingly 
								move to a space within 30 feet of you. It also can’t take 
								reactions. For its action, it can use only the Dash action 
								or try to escape from an effect that prevents it from 
								moving. If there’s nowhere to move, the creature can use 
								the Dodge action.
								If the creature’s true form is concealed by an illusion, 
								shapeshifting, or other effect, that form is revealed while 
								it is turned.`,
				},
				{
					title: "Aura of Warding",
					description: ` Beginning at 7th level, ancient magic lies so heavily 
								upon you that it forms an eldritch ward. You and friendly 
								creatures within 10 feet of you have resistance to 
								damage from spells.
								At 18th level, the range of this aura increases to 30 feet.`,
				},
				{
					title: "Undying Sentinel",
					description: ` Starting at 15th level, when you are reduced to 0 hit 
								points and are not killed outright, you can choose to 
								drop to 1 hit point instead. Once you use this ability, you 
								can’t use it again until you finish a long rest.
								Additionally, you suffer none of the drawbacks of old 
								age, and you can’t be aged magically.`,
				},
				{
					title: "Elder Champion", // add formatting for a real right runny
					description: `At 20th level, you can assume the form of an ancient 
								force of nature, taking on an appearance you choose.
								For example, your skin might turn green or take on a 
								bark-like texture, your hair might become leafy or moss- 
								like, or you might sprout antlers or a lion-like mane.
								Using your action, you undergo a transformation.
								For 1 minute, you gain the following benefits:
								• At the start of each of your turns, you regain 10 hit 
								points.
								• Whenever you cast a paladin spell that has a casting 
								time of 1 action, you can cast it using a bonus action 
								instead.
								• Enemy creatures within 10 feet of you have disadvan
								tage on saving throws against your paladin spells and 
								Channel Divinity options.
								Once you use this feature, you can’t use it again until 
								you finish a long rest`,
				},
			],
		},
		Oath_of_Vengeance: {
			description: ` The Oath of Vengeance is a solemn commitment to 
						punish those who have committed a grievous sin. When 
						evil forces slaughter helpless villagers, when an entire 
						people turns against the will of the gods, when a thieves’ 
						guild grows too violent and powerful, when a dragon 
						rampages through the countryside—at times like these, 
						paladins arise and swear an Oath of Vengeance to set 
						right that which has gone wrong. To these paladins— 
						sometimes called avengers or dark knights—their own 
						purity is not as important as delivering justice.
						`,
			features: [
				{
					title: "Tenets of Vengeance",
					description: ` The tenets of the Oath of Vengeance vary by paladin, but 
								all the tenets revolve around punishing wrongdoers by 
								any means necessary. Paladins who uphold these tenets 
								are willing to sacrifice even their own righteousness to 
								mete out justice upon those who do evil, so the paladins 
								are often neutral or lawful neutral in alignment. The 
								core principles of the tenets are brutally simple.
								Fight the Greater Evil. Faced with a choice of fighting 
								my sworn foes or combating a lesser evil. I choose the 
								greater evil.
								No Mercy for the Wicked. Ordinary foes might win 
								my mercy, but my sworn enemies do not.
								By Any Means Necessary. My qualms can’t get in the 
								way of exterminating my foes.
								Restitution. If my foes wreak ruin on the world, it is 
								because I failed to stop them. I must help those harmed 
								by their misdeeds.`,
				},
				{
					title: "Oath Spells", // add formatting for a real right runny
					description: `You gain oath spells at the paladin levels listed.
								O ath of Vengeance Spells
								Paladin Level Spells
								3rd
								5th
								9th
								13th
								17th
								bane, hunter’s mark
								hold person, misty step
								haste, protection from energy
								banishment, dimension door
								hold monster, scrying`,
				},
				{
					title: "Channel Divinity", // add formatting for a real right runny
					description: `When you take this oath at 3rd level, you gain the 
								following two Channel Divinity options.
								Abjure Enemy. As an action, you present your holy 
								symbol and speak a prayer of denunciation, using your 
								Channel Divinity. Choose one creature within 60 feet 
								of you that you can see. That creature must make a 
								Wisdom saving throw, unless it is immune to being 
								frightened. Fiends and undead have disadvantage on 
								this saving throw.
								On a failed save, the creature is frightened for 1 
								minute or until it takes any damage. While frightened, 
								the creature’s speed is 0, and it can’t benefit from any 
								bonus to its speed.
								On a successful save, the creature’s speed is halved 
								for 1 minute or until the creature takes any damage.
								Vow of Enmity. As a bonus action, you can utter a vow 
								of enmity against a creature you can see within 10 feet 
								of you, using your Channel Divinity. You gain advantage 
								on attack rolls against the creature for 1 minute or until 
								it drops to 0 hit points or falls unconscious.`,
				},
				{
					title: "Relentless Avenger",
					description: ` By 7th level, your supernatural focus helps you close 
								off a foe’s retreat. When you hit a creature with an 
								opportunity attack, you can move up to half your 
								speed immediately after the attack and as part of 
								the same reaction. This movement doesn’t provoke 
								opportunity attacks.`,
				},
				{
					title: "Soul of Vengeance",
					description: `Starting at 15th level, the authority with which you 
								speak your Vow of Enmity gives you greater power over 
								your foe. When a creature under the effect of your Vow 
								of Enmity makes an attack, you can use your reaction to 
								make a melee weapon attack against that creature if it is 
								within range.`,
				},
				{
					title: "Avenging Angel",
					description: ` At 20th level, you can assume the form of an 
								angelic avenger. Using your action, you undergo a 
								transformation. For 1 hour, you gain the following 
								benefits:
								• Wings sprout from your back and grant you a flying 
								speed of 60 feet.
								• You emanate an aura of menace in a 30-foot radius. 
								The first time any enemy creature enters the aura or 
								starts its turn there during a battle, the creature must 
								succeed on a Wisdom saving throw or become fright
								ened of you for 1 minute or until it takes any damage. 
								Attack rolls against the frightened creature have 
								advantage.
								Once you use this feature, you can’t use it again until 
								you finish a long rest.`,
				},
			],
		},
		Oath_of_Conquest: "",
		Oath_of_Redemption: "",
		Oath_of_Glory: "",
		Oath_of_the_Crown: "",
		Oath_of_the_Watchers: "",
	},
	Ranger: {
		Hunter: {
			description: ` Emulating the Hunter archetype means accepting your 
						place as a bulwark between civilization and the terrors 
						of the wilderness. As you walk the Hunter’s path, you 
						learn specialized techniques for fighting the threats 
						you face, from rampaging ogres and hordes of orcs to 
						towering giants and terrifying dragons.`,
			features: [
				{
					title: "Hunter’s Prey", // needs formatting for a real right runny
					description: ` At 3rd level, you gain one of the following features 
								of your choice.
								Colossus Slayer. Your tenacity can wear down 
								the most potent foes. When you hit a creature with a 
								weapon attack, the creature takes an extra 1d8 damage 
								if it’s below its hit point maximum. You can deal this 
								extra damage only once per turn.
								Giant Killer. When a Large or larger creature within
								5 feet of you hits or misses you with an attack, you can 
								use your reaction to attack that creature immediately 
								after its attack, provided that you can see the creature.
								Horde Breaker. Once on each of your turns when you 
								make a weapon attack, you can make another attack 
								with the same weapon against a different creature that 
								is within 5 feet of the original target and within range 
								of your weapon.`,
				},
				{
					title: " Defensive Tactics", // needs formatting for a real right runny
					description: ` At 7th level, you gain one of the following features 
								of your choice.
								Escape the Horde. Opportunity attacks against you 
								are made with disadvantage.
								Multiattack Defense. When a creature hits you 
								with an attack, you gain a +4 bonus to AC against 
								all subsequent attacks made by that creature for the 
								rest of the turn.
								Steel Will. You have advantage on saving throws 
								against being frightened.`,
				},
				{
					title: " Multiattack",
					description: ` At 11th level, you gain one of the following features 
								of your choice.
								Volley. You can use your action to make a ranged 
								attack against any number of creatures within 10 feet 
								of a point you can see within your weapon’s range. You 
								must have ammunition for each target, as normal, and 
								you make a separate attack roll for each target.
								Whirlwind Attack. You can use your action to make a 
								melee attack against any number of creatures within 5 
								feet of you, with a separate attack roll for each target`,
				},
				{
					title: "Superior Hunter’s Defense", // needs formatting
					description: `At 15th level, you gain one of the following features 
								of your choice.
								Evasion. You can nimbly dodge out of the way of 
								certain area effects, such as a red dragon’s fiery breath 
								or a lightning bolt spell. When you are subjected to an 
								effect that allows you to make a Dexterity saving throw 
								to take only half damage, you instead take no damage
								if you succeed on the saving throw, and only half 
								damage if you fail.
								Stand Against the Tide. When a hostile creature 
								misses you with a melee attack, you can use your reaction 
								to force that creature to repeat the same attack against 
								another creature (other than itself) of your choice.
								Uncanny Dodge. When an attacker that you can see 
								hits you with an attack, you can use your reaction to 
								halve the attack’s damage against you.`,
				},
			],
		},
		Beast_Master: {
			description: `The Beast Master archetype embodies a friendship 
						between the civilized races and the beasts of the world. 
						United in focus, beast and ranger work as one to fight 
						the monstrous foes that threaten civilization and the 
						wilderness alike. Emulating the Beast Master archetype 
						means committing yourself to this ideal, working in 
						partnership with an animal as its companion and friend.`,
			features: [
				{
					title: " Ranger’s Companion", // needs formatting for a real right runny
					description: ` At 3rd level, you gain a beast companion that 
								accompanies you on your adventures and is trained to 
								fight alongside you. Choose a beast that is no larger than 
								Medium and that has a challenge rating of 1/4 or lower 
								(appendix D presents statistics for the hawk, mastiff, 
								and panther as examples). Add your proficiency bonus 
								to the beast’s AC, attack rolls, and damage rolls, as well 
								as to any saving throws and skills it is proficient in. Its 
								hit point maximum equals its normal maximum or four 
								times your ranger level, whichever is higher.
								The beast obeys your commands as best as it can. It 
								takes its turn on your initiative, though it doesn’t take an 
								action unless you command it to. On your turn, you can 
								verbally command the beast where to move (no action 
								required by you). You can use your action to verbally 
								command it to take the Attack, Dash, Disengage, Dodge, 
								or Help action. Once you have the Extra Attack feature, 
								you can make one weapon attack yourself when you 
								command the beast to take the Attack action.
								While traveling through your favored terrain with only 
								the beast, you can move stealthily at a normal pace.
								If the beast dies, you can obtain another one by 
								spending 8 hours magically bonding with another beast 
								that isn’t hostile to you, either the same type of beast as 
								before or a different one.`,
				},
				{
					title: "Exceptional Training",
					description: `Beginning at 7th level, on any of your turns when 
								your beast companion doesn’t attack, you can use a 
								bonus action to command the beast to take the Dash, 
								Disengage, Dodge, or Help action on its turn.`,
				},
				{
					title: "Bestial Fury",
					description: `Starting at 11th level, your beast companion can 
								make two attacks when you command it to use the 
								Attack action.`,
				},
				{
					title: "Share Spells",
					description: `Beginning at 15th level, when you cast a spell targeting 
								yourself, you can also affect your beast companion with 
								the spell if the beast is within 30 feet of you.`,
				},
			],
		},
		Gloom_Stalker: "",
		Horizon_Walker: "",
		Monster_Slayer: "",
		Fey_Wanderer: "",
		Swarmkeeper: "",
	},
	Rogue: {
		Thief: {
			description: ` You hone your skills in the larcenous arts. Burglars, 
						bandits, cutpurses, and other criminals typically follow 
						this archetype, but so do rogues who prefer to think of 
						themselves as professional treasure seekers, explorers, 
						delvers, and investigators. In addition to improving your 
						agility and stealth, you learn skills useful for delving into 
						ancient ruins, reading unfamiliar languages, and using 
						magic items you normally couldn’t employ.`,
			features: [
				{
					title: "Fast Hands",
					description: ` Starting at 3rd level, you can use the bonus action 
								granted by your Cunning Action to make a Dexterity 
								(Sleight of Hand) check, use your thieves’ tools to 
								disarm a trap or open a lock, or take the Use an 
								Object action.`,
				},
				{
					title: "Second-Story Work",
					description: ` When you choose this archetype at 3rd level, you gain 
								the ability to climb faster than normal; climbing no 
								longer costs you extra movement.
								In addition, when you make a running jump, the 
								distance you cover increases by a number of feet equal 
								to your Dexterity modifier.`,
				},
				{
					title: "Supreme Sneak",
					description: `Starting at 9th level, you have advantage on a Dexterity 
								(Stealth) check if you move no more than half your 
								speed on the same turn.`,
				},
				{
					title: "Use Magic Device",
					description: `By 13th level, you have learned enough about the 
								workings of magic that you can improvise the use of 
								items even when they are not intended for you. You 
								ignore all class, race, and level requirements on the use 
								of magic items.`,
				},
				{
					title: "Thief's Reflexes",
					description: ` When you reach 17th level, you have become adept at 
								laying ambushes and quickly escaping danger. You can 
								take two turns during the first round of any combat. You 
								take your first turn at your normal initiative and your
								second turn at your initiative minus 10. You can’t use 
								this feature when you are surprised.`,
				},
			],
		},
		Assassin: {
			description: ` You focus your training on the grim art of death. Those 
						who adhere to this archetype are diverse: hired killers, 
						spies, bounty hunters, and even specially anointed 
						priests trained to exterminate the enemies of their deity. 
						Stealth, poison, and disguise help you eliminate your 
						foes with deadly efficiency.`,
			features: [
				{
					title: "Bonus Proficiencies",
					description: ` When you choose this archetype at 3rd level, you gain 
								proficiency with the disguise kit and the poisoner’s kit.`,
				},
				{
					title: "Assassinate",
					description: `Starting at 3rd level, you are at your deadliest when you 
								get the drop on your enemies. You have advantage on 
								attack rolls against any creature that hasn’t taken a turn 
								in the combat yet. In addition, any hit you score against 
								a creature that is surprised is a critical hit.`,
				},
				{
					title: "Infiltration Expertise",
					description: `Starting at 9th level, you can unfailingly create false 
								identities for yourself. You must spend seven days and 
								25 gp to establish the history, profession, and affiliations 
								for an identity. You can’t establish an identity that 
								belongs to someone else. For example, you might acquire 
								appropriate clothing, letters of introduction, and official- 
								looking certification to establish yourself as a member of 
								a trading house from a remote city so you can insinuate 
								yourself into the company of other wealthy merchants.
								Thereafter, if you adopt the new identity as a disguise, 
								other creatures believe you to be that person until given 
								an obvious reason not to.`,
				},
				{
					title: "Imposter",
					description: `At 13th level, you gain the ability to unerringly mimic 
								another person’s speech, writing, and behavior.
								You must spend at least three hours studying 
								these three components of the person’s behavior, 
								listening to speech, examining handwriting, and 
								observing mannerisms.
								Your ruse is indiscernible to the casual observer. If a 
								wary creature suspects something is amiss, you have 
								advantage on any Charisma (Deception) check you make 
								to avoid detection.`,
				},
				{
					title: "Death Strike",
					description: `Starting at 17th level, you become a master of instant 
								death. When you attack and hit a creature that is 
								surprised, it must make a Constitution saving throw 
								(DC 8 + your Dexterity modifier + your proficiency 
								bonus). On a failed save, double the damage of your 
								attack against the creature.`,
				},
			],
		},
		Arcane_Trickster: {
			description: `Some rogues enhance their fine-honed skills of stealth 
						and agility with magic, learning tricks of enchantment 
						and illusion. These rogues include pickpockets and 
						burglars, but also pranksters, mischief-makers, and a 
						significant number of adventurers.`,
			features: [
				{
					title: "Spellcasting", // needs formatting for a real right runny + add spellcasting table
					description: `When you reach 3rd level, you gain the ability to 
								cast spells. See chapter 10 for the general rules of 
								spellcasting and chapter 11 for the wizard spell list.
								Cantrips. You learn three cantrips: mage hand and 
								two other cantrips of your choice from the wizard spell 
								list. You learn another wizard cantrip of your choice 
								at 10th level.
								Spell Slots. The Arcane Trickster Spellcasting 
								table shows how many spell slots you have to cast 
								your spells of 1st level and higher. To cast one of these 
								spells, you must expend a slot of the spell's level or 
								higher. You regain all expended spell slots when you 
								finish a long rest.
								For example, if you know the 1st-level spell charm 
								person and have a 1st-level and a 2nd-level spell slot 
								available, you can cast charm person using either slot.
								Spells Known of 1st-Level and Higher. You know 
								three 1st-level wizard spells of your choice, two of which 
								you must choose from the enchantment and illusion 
								spells on the wizard spell list.
								The Spells Known column of the Arcane Trickster 
								Spellcasting table shows when you learn more wizard 
								spells of 1st level or higher. Each of these spells must 
								be an enchantment or illusion spell of your choice, and 
								must be of a level for which you have spell slots. For 
								instance, when you reach 7th level in this class, you can 
								learn one new spell of 1st or 2nd level.
								The spells you learn at 8th, 14th, and 20th level can 
								come from any school of magic.
								Whenever you gain a level in this class, you can 
								replace one of the wizard spells you know with another 
								spell of your choice from the wizard spell list. The 
								new spell must be of a level for which you have spell 
								slots, and it must be an enchantment or illusion spell, 
								unless you’re replacing the spell you gained at 8th, 14th, 
								or 20th level.
								Spellcasting Ability. Intelligence is your spellcasting 
								ability for your wizard spells, since you learn your 
								spells through dedicated study and memorization.
								You use your Intelligence whenever a spell refers to 
								your spellcasting ability. In addition, you use your 
								Intelligence modifier when setting the saving throw 
								DC for a wizard spell you cast and when making an 
								attack roll with one.
								Spell save DC = 8 + your proficiency bonus + 
								your Intelligence modifier
								Spell attack modifier = your proficiency bonus + 
								your Intelligence modifier`,
				},
				{
					title: "Mage Hand Legerdemain",
					description: ` Starting at 3rd level, when you cast mage hand, you can 
								make the spectral hand invisible, and you can perform 
								the following additional tasks with it:
								• You can stow one object the hand is holding in a 
								container worn or carried by another creature.
								• You can retrieve an object in a container worn or 
								carried by another creature.
								• You can use thieves’ tools to pick locks and disarm 
								traps at range.  You can perform one of these tasks without being 
								noticed by a creature if you succeed on a Dexterity 
								(Sleight of Hand) check contested by the creature’s 
								Wisdom (Perception) check.
								In addition, you can use the bonus action granted by 
								your Cunning Action to control the hand`,
				},
				{
					title: "Magical Ambush",
					description: ` Starting at 9th level, if you are hidden from a 
								creature when you cast a spell on it, the creature has 
								disadvantage on any saving throw it makes against the 
								spell this turn.`,
				},
				{
					title: "Versatile Trickster",
					description: `At 13th level, you gain the ability to distract targets with 
								your mage hand. As a bonus action on your turn, you can 
								designate a creature within 5 feet of the spectral hand 
								created by the spell. Doing so gives you advantage on 
								attack rolls against that creature until the end of the turn.`,
				},
				{
					title: "Spell Thief",
					description: ` At 17th level, you gain the ability to magically 
								steal the knowledge of how to cast a spell from 
								another spellcaster.
								Immediately after a creature casts a spell that targets 
								you or includes you in its area of effect, you can use your 
								reaction to force the creature to make a saving throw 
								with its spellcasting ability modifier. The DC equals 
								your spell save DC. On a failed save, you negate the 
								spell’s effect against you, and you steal the knowledge 
								of the spell if it is at least 1st level and of a level you can 
								cast (it doesn’t need to be a wizard spell). For the next 
								8 hours, you know the spell and can cast it using your 
								spell slots. The creature can’t cast that spell until the 
								8 hours have passed.
								Once you use this feature, you can’t use it again until 
								you finish a long rest.`,
				},
			],
		},
		Mastermind: "",
		Swashbuckler: "",
		Inquisitive: "",
		Scout: "",
		Soulknife: "",
	},
	Sorcerer: {
		Draconic_Bloodline: "",
		Wild_Magic: "",
		Divine_Soul: "",
		Shadow_Magic: "",
		Storm_Sorcery: "",
		Aberrant_Mind: "",
		Clockwork_Soul: "",
	},
	Warlock: {
		Archfey: "",
		Fiend: "",
		Great_Old_One: "",
		Hexblade: "",
		Celestial: "",
		Fathomless: "",
		Genie: "",
	},
	Wizard: {
		School_of_Abjuration: "",
		School_of_Conjuration: "",
		School_of_Divination: "",
		School_of_Enchantment: "",
		School_of_Evocation: "",
		School_of_Illusion: "",
		School_of_Necromancy: "",
		School_of_Transmutation: "",
		Bladesinging: "",
		War_Magic: "",
		Chronurgy_Magic: "",
		Graviturgy_Magic: "",
	},
};

export const skillsObj = {
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
};

export const maxSkills = {
	Artificer: 2,
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
};

// all skills needs formatting
export const skillsDesc = {
	// Strength Related
	Athletics: {
		attribute: `Strength`,
		description: `Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.`,
		examples: `You attempt to climb a sheer or slippery cliff, avoid hazards while scaling a wall, or cling to a surface while something is trying to knock you off.
                You try to jump an unusually long distance or pull off a stunt mid-jump.
                You struggle to swim or stay afloat in treacherous currents, storm-tossed waves, or areas of thick seaweed. Or another creature tries to push or pull you underwater or otherwise interfere with your swimming.`,
	},

	// Dexterity Related
	Acrobatics: {
		attribute: `Dexterity`,
		description: `The Acrobatics skill involves performing tasks like balancing, tumbling, and avoiding obstacles with agility and grace.`,
		examples: `Examples include walking a tightrope, keeping your balance on a slippery surface, or performing flips and somersaults.`,
	},

	Sleight_of_Hand: {
		attribute: `Dexterity`,
		description: `The Sleight of Hand skill involves manual dexterity used for feats such as pickpocketing or planting something on someone else.`,
		examples: `Examples include concealing an object on your person, slipping something out of another person's pocket, or performing a card trick without being noticed.`,
	},

	Stealth: {
		attribute: `Dexterity`,
		description: `The Stealth skill allows you to hide, move silently, and avoid detection.`,
		examples: `Examples include sneaking past guards, hiding from enemies, or moving quietly to avoid making noise.`,
	},

	// Intelligence Related
	Arcana: {
		attribute: `Intelligence`,
		description: `The Arcana skill measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.`,
		examples: `Examples include identifying a spell being cast, recognizing the effects of a magical item, or recalling information about a magical creature or phenomenon.`,
	},
	History: {
		attribute: `Intelligence`,
		description: `The History skill involves recalling significant events, historical figures, ancient kingdoms, past disputes, recent wars, and lost civilizations.`,
		examples: `Examples include remembering facts about a famous battle, identifying the lineage of a noble family, or recalling the significance of an ancient ruin.`,
	},
	Investigation: {
		attribute: `Intelligence`,
		description: `The Investigation skill is used to deduce clues from physical evidence, solve puzzles, and search for hidden objects.`,
		examples: `Examples include finding a secret door, piecing together a complex puzzle, or determining the cause of a mysterious event.`,
	},
	Nature: {
		attribute: `Intelligence`,
		description: `The Nature skill reflects your knowledge about the natural world, including terrain, plants, animals, weather, and natural cycles.`,
		examples: `Examples include identifying plants and animals, predicting the weather, or recalling knowledge about natural hazards.`,
	},
	Religion: {
		attribute: `Intelligence`,
		description: `The Religion skill involves knowledge of deities, religious rituals, holy symbols, and the practices of cults and other religious sects.`,
		examples: `Examples include identifying a religious symbol, recalling a legend about a deity, or recognizing the practices of a particular cult.`,
	},

	// Wisdom Related
	Animal_Handling: {
		attribute: `Wisdom`,
		description: `The Animal Handling skill involves understanding and managing the behavior of animals, calming them, and influencing their actions.`,
		examples: `Examples include calming a frightened horse, intuiting the intentions of a domesticated animal, or training a pet to follow commands.`,
	},
	Insight: {
		attribute: `Wisdom`,
		description: `The Insight skill allows you to determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move.`,
		examples: `Examples include sensing whether someone is being truthful, reading body language to gauge a person's mood, or interpreting a creature's intentions.`,
	},
	Medicine: {
		attribute: `Wisdom`,
		description: `The Medicine skill is used to stabilize a dying companion, diagnose an illness, or treat a wound.`,
		examples: `Examples include providing first aid to stabilize a dying ally, diagnosing a disease, or applying a salve to treat a wound.`,
	},
	Perception: {
		attribute: `Wisdom`,
		description: `The Perception skill measures your ability to spot, hear, or otherwise detect the presence of something. It involves your senses and awareness.`,
		examples: `Examples include noticing a hidden enemy, hearing faint sounds in the distance, or spotting a trap before it is triggered.`,
	},
	Survival: {
		attribute: `Wisdom`,
		description: `The Survival skill involves enduring hazardous environments, tracking creatures, and finding food or shelter in the wild.`,
		examples: `Examples include following tracks to find a creature, identifying edible plants in the wilderness, or predicting the weather to prepare for an incoming storm.`,
	},

	// Charisma Related
	Deception: {
		attribute: `Charisma`,
		description: `The Deception skill is used to convince others of a falsehood, mislead them, or hide the truth.`,
		examples: `Examples include lying to someone about your intentions, disguising yourself to avoid recognition, or creating a diversion to escape.`,
	},
	Intimidation: {
		attribute: `Charisma`,
		description: `The Intimidation skill involves using threats, hostile actions, or fear to influence others.`,
		examples: `Examples include making a demand with a threatening tone, staring someone down to make them back off, or using physical presence to coerce someone into action.`,
	},
	Performance: {
		attribute: `Charisma`,
		description: `The Performance skill is used to entertain an audience through acts such as singing, dancing, acting, or playing an instrument.`,
		examples: `Examples include singing a song to lift spirits, performing a dramatic monologue to captivate an audience, or playing an instrument to earn money in a tavern.`,
	},
	Persuasion: {
		attribute: `Charisma`,
		description: `The Persuasion skill is used to influence others through tact, social grace, or charm.`,
		examples: `Examples include convincing someone to see things your way, negotiating a deal, or calming someone down with kind words.`,
	},
};

export const raceArray = [
	"Aasimar",
	"Autognome",
	"Bugbear",
	"Centaur",
	"Changeling",
	"Dragonborn",
	"Dwarf",
	"Elf",
	"Fairy",
	"Firbolg",
	"Genasi",
	"Gith",
	"Gnome",
	"Goblin",
	"Goliath",
	"Grung",
	"Hadozee",
	"Half-Elf",
	"Half-Orc",
	"Halfling",
	"Harengon",
	"Hobgoblin",
	"Human",
	"Kalashtar",
	"Kenku",
	"Kobold",
	"Leonin",
	"Lizardfolk",
	"Loxodon",
	"Minotaur",
	"Orc",
	"Owlin",
	"Plasmoid",
	"Satyr",
	"Shifter",
	"Simic Hybrid",
	"Tabaxi",
	"Thri-Kreen",
	"Tiefling",
	"Triton",
	"Vedalken",
	"Verdan",
	"Warforged",
	"Yuan-ti Pureblood",
];

// 0 = - (tack) and _ = ' ' (space)

// all raceDescs need formatting
export const raceDesc = {
	Aasimar: {
		description:
			"Celestial beings with a divine heritage, known for their otherworldly beauty and ability to heal.",
		expectedLifeSpan: "160 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Charisma",
				increase: 2,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Celestial",
	},
	Autognome: {
		description:
			"Small, mechanical gnomes created by the gnomes of the world to assist them.",
		expectedLifeSpan: "Variable",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 2,
			},
			{
				ability: "Intelligence",
				increase: 1,
			},
		],
		speed: "25 feet",
		standardLanguages: "Common, Gnomish",
	},
	Bugbear: {
		description:
			"Large, hairy goblinoids known for their surprising stealth and physical prowess.",
		expectedLifeSpan: "80 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Dexterity",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Centaur: {
		description:
			"Half-human, half-horse creatures with a strong connection to nature and a powerful build.",
		expectedLifeSpan: "100 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "40 feet",
		standardLanguages: "Common, Sylvan",
	},
	Changeling: {
		description:
			"Shapechangers with the ability to alter their appearance at will.",
		expectedLifeSpan: "80 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Charisma",
				increase: 2,
			},
			{
				ability: "Dexterity",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Primordial",
	},
	Dragonborn: {
		description:
			"Humanoid dragons with draconic ancestry and the ability to breathe elemental energy.",
		expectedLifeSpan: "80 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Draconic",
	},
	Dwarf: {
		description:
			"Short, stout, and resilient beings known for their craftsmanship and endurance.",
		expectedLifeSpan: "350 years",
		expectedSize: "4 to 5 feet",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 2,
			},
			{
				ability: "Strength",
				increase: 1,
			},
		],
		speed: "25 feet",
		standardLanguages: "Common, Dwarvish",
	},
	Elf: {
		description:
			"Graceful and long-lived beings with keen senses and an affinity for magic.",
		expectedLifeSpan: "750 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Fairy: {
		description:
			"Tiny, magical creatures with wings and a playful demeanor.",
		expectedLifeSpan: "100 years",
		expectedSize: "2.5 to 3 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet (fly 30 feet)",
		standardLanguages: "Common, Sylvan",
	},
	Firbolg: {
		description:
			"Large, reclusive forest dwellers with a natural affinity for the land.",
		expectedLifeSpan: "500 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Elvish, Sylvan",
	},
	Genasi: {
		description:
			"Beings with elemental heritage, exhibiting traits of their elemental ancestors.",
		expectedLifeSpan: "120 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 3,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Primordial",
	},
	Gith: {
		description:
			"Alien humanoids with a history of interplanar conflict and psionic abilities.",
		expectedLifeSpan: "80 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Intelligence",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Gith",
	},
	Gnome: {
		description:
			"Inventive and curious beings known for their cleverness and affinity with magic.",
		expectedLifeSpan: "400 years",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: [
			{
				ability: "Intelligence",
				increase: 2,
			},
			{
				ability: "Dexterity",
				increase: 1,
			},
		],
		speed: "25 feet",
		standardLanguages: "Common, Gnomish",
	},
	Goblin: {
		description:
			"Small, cunning creatures with a knack for mischief and survival.",
		expectedLifeSpan: "60 years",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Goliath: {
		description:
			"Giant humanoids with a powerful build and a competitive nature.",
		expectedLifeSpan: "80 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Giant",
	},
	Grung: {
		description:
			"Small, amphibious humanoids with a toxic skin and a unique culture.",
		expectedLifeSpan: "60 years",
		expectedSize: "2 to 3 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
		],
		speed: "25 feet (jump 20 feet)",
		standardLanguages: "Common, Grung",
	},
	Hadozee: {
		description:
			"A race of winged creatures with a love for exploration and adventure.",
		expectedLifeSpan: "70 years",
		expectedSize: "4 to 5 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet (fly 30 feet)",
		standardLanguages: "Common, Auran",
	},
	Half0Elf: {
		description:
			"Versatile and adaptable individuals born of human and elven parentage.",
		expectedLifeSpan: "180 years",
		expectedSize: "5.5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Charisma",
				increase: 2,
			},
			{
				ability: "Dexterity",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Half0Orc: {
		description:
			"Strong and resilient beings born of human and orcish lineage, known for their combat prowess.",
		expectedLifeSpan: "75 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Orc",
	},
	Halfling: {
		description:
			"Small and agile beings with a penchant for good luck and stealth.",
		expectedLifeSpan: "150 years",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "25 feet",
		standardLanguages: "Common, Halfling",
	},
	Harengon: {
		description:
			"Rabbit-like humanoids known for their swiftness and connection to nature.",
		expectedLifeSpan: "80 years",
		expectedSize: "4 to 5 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Sylvan",
	},
	Hobgoblin: {
		description:
			"Disciplined and militaristic goblinoids with a strong sense of order and hierarchy.",
		expectedLifeSpan: "80 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 2,
			},
			{
				ability: "Intelligence",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Human: {
		description:
			"The most adaptable and diverse of races, with a wide range of potential.",
		expectedLifeSpan: "80 years",
		expectedSize: "5.5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Intelligence",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common",
	},
	Kalashtar: {
		description:
			"Mystical beings with a psychic connection to a collective consciousness.",
		expectedLifeSpan: "120 years",
		expectedSize: "5.5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Wisdom",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Quori",
	},
	Kenku: {
		description:
			"Crow-like humanoids with the ability to mimic sounds and voices.",
		expectedLifeSpan: "60 years",
		expectedSize: "5 to 5.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Auran",
	},
	Kobold: {
		description:
			"Small, draconic creatures known for their cunning and trap-making skills.",
		expectedLifeSpan: "60 years",
		expectedSize: "2.5 to 3 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Strength",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Draconic",
	},
	Leonin: {
		description:
			"Leonin are lion-like humanoids with a strong sense of pride and a warrior culture.",
		expectedLifeSpan: "60-80 years",
		expectedSize: "About 6 to 7 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Dexterity",
				increase: 1,
			},
		],
		speed: "35 feet",
		standardLanguages: "Common, Sylvan",
	},
	Lizardfolk: {
		description:
			"Reptilian humanoids with a natural affinity for the swamp and a primal outlook.",
		expectedLifeSpan: "80 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Draconic",
	},
	Loxodon: {
		description:
			"Loxodons are elephantine humanoids with great physical strength and a peaceful nature, often serving as diplomats or guardians.",
		expectedLifeSpan: "200-300 years",
		expectedSize: "About 7 to 8 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Loxodon",
	},
	Minotaur: {
		description:
			"Bull-headed humanoids known for their strength and labyrinthine culture.",
		expectedLifeSpan: "80 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Minotaur",
	},
	Orc: {
		description:
			"Large, brutish creatures with a fierce demeanor and exceptional physical power.",
		expectedLifeSpan: "70 years",
		expectedSize: "6 to 7 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 2,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Orc",
	},
	Owlin: {
		description:
			"Owlin are bird-like humanoids with large, owl-like eyes and the ability to glide.",
		expectedLifeSpan: "60-80 years",
		expectedSize: "About 4 to 5 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Auran",
	},
	Plasmoid: {
		description:
			"Plasmoids are amorphous beings capable of changing their shape and form, often resembling oozes or slimes.",
		expectedLifeSpan: "60-80 years",
		expectedSize: "Variable, but generally around 5 to 6 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 2,
			},
			{
				ability: "Dexterity",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Abyssal",
	},
	Satyr: {
		description:
			"Satyrs are fey creatures with the lower bodies of goats and the upper bodies of humanoids, known for their love of revelry and nature.",
		expectedLifeSpan: "90-120 years",
		expectedSize: "About 4 to 5 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "35 feet",
		standardLanguages: "Common, Sylvan",
	},
	Shifter: {
		description:
			"Beings with a bestial nature and the ability to assume animal-like traits.",
		expectedLifeSpan: "80 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Sylvan",
	},
	Simic_Hybrid: {
		description:
			"Simic Hybrids are experimental beings created by the Simic Combine, combining traits of various creatures for specific purposes.",
		expectedLifeSpan: "80-120 years",
		expectedSize: "Varies, typically 5 to 6 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 2,
			},
			{
				ability: "Intelligence",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Tabaxi: {
		description:
			"Cat-like humanoids with a penchant for curiosity and agility.",
		expectedLifeSpan: "70 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Thri0Kreen: {
		description:
			"Thri-kreen are insectoid humanoids with a chitinous exoskeleton and powerful limbs, known for their agility and natural predatory skills.",
		expectedLifeSpan: "50-60 years",
		expectedSize: "About 6 to 7 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Thri-Kreen",
	},
	Tiefling: {
		description:
			"Infernal-heritaged beings with horns, tails, and a touch of dark magic.",
		expectedLifeSpan: "100 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Charisma",
				increase: 2,
			},
			{
				ability: "Intelligence",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Infernal",
	},
	Triton: {
		description:
			"Aquatic beings with a connection to the ocean and an affinity for water magic.",
		expectedLifeSpan: "100 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Strength",
				increase: 1,
			},
			{
				ability: "Constitution",
				increase: 1,
			},
			{
				ability: "Charisma",
				increase: 1,
			},
		],
		speed: "30 feet (swim 30 feet)",
		standardLanguages: "Common, Primordial",
	},
	Vedalken: {
		description:
			"Vedalken are a race of tall, blue-skinned humanoids known for their intellectual prowess and dedication to knowledge and order.",
		expectedLifeSpan: "150 years",
		expectedSize: "About 6 to 7 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Intelligence",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Vedalken",
	},
	Verdan: {
		description:
			"Verdan are a race of small, green-skinned humanoids who evolve rapidly and have a unique biological adaptability.",
		expectedLifeSpan: "40-60 years",
		expectedSize: "About 3 to 4 feet tall",
		abilityScoreIncrease: [
			{
				ability: "Dexterity",
				increase: 2,
			},
			{
				ability: "Wisdom",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Warforged: {
		description:
			"Constructed beings with a humanoid form and a capacity for sentience and emotion.",
		expectedLifeSpan: "Variable",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: [
			{
				ability: "Constitution",
				increase: 3,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Warforged",
	},
	Yuan0ti_Pureblood: {
		description:
			"Serpent-like humanoids with a mysterious and sinister heritage.",
		expectedLifeSpan: "120 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: [
			{
				ability: "Charisma",
				increase: 2,
			},
			{
				ability: "Intelligence",
				increase: 1,
			},
		],
		speed: "30 feet",
		standardLanguages: "Common, Draconic",
	},
};

export const subracesObj = {
	Aasimar: ["Protector Aasimar", "Scourge Aasimar", "Fallen Aasimar"],
	Dwarf: ["Hill Dwarf", "Mountain Dwarf"],
	Elf: [
		"High Elf",
		"Wood Elf",
		"Dark Elf",
		"Eladrin",
		"Sea Elf",
		"Shadar-Kai",
	],
	Gith: ["Githyanki", "Githzerai"],
	Gnome: ["Forest Gnome", "Rock Gnome", "Deep Gnome"],
	Genasi: ["Air Genasi", "Earth Genasi", "Fire Genasi", "Water Genasi"],
	Haffling: ["Lightfoot Halfling", "Stout Halfling", "Ghostwise Halfling"],
	Shifter: ["Beasthide", "Longtooth", "Swiftstride", "Wildhunt"],
	Tiefling: ["Feral Tiefling", "Asmodeus", "Zariel", "Levistus"],
};

// You are free to add additional attributes to each subrace if necessary (refer to classDesc variable in this file)
export const subracesDesc = {
	Aasimar: {
		Protector_Aasimar: "",
		Scourge_Aasimar: "",
		Fallen_Aasimar: "",
	},
	Dwarf: {
		Hill_Dwarf: "",
		Mountain_Dwarf: "",
	},
	Elf: {
		High_Elf: "",
		Wood_Elf: "",
		Dark_Elf: "",
		Eladrin: "",
		Sea_Elf: "",
		Shadar_Kai: "",
	},
	Genasi: {
		Air_Genasi: "",
		Earth_Genasi: "",
		Fire_Genasi: "",
		Water_Genasi: "",
	},
	Gnome: {
		Forest_Gnome: "",
		Rock_Gnome: "",
		Deep_Gnome: "",
	},
	Gith: {
		Githyanki: "",
		Githzerai: "",
	},
	Haffling: {
		Lightfoot_Halfling: "",
		Stout_Halfling: "",
		Ghostwise_Halfling: "",
	},
	Shifter: {
		Beasthide: "",
		Longtooth: "",
		Swiftstride: "",
		Wildhunt: "",
	},
	Tiefling: {
		Feral_Tiefling: "",
		Asmodeus: "",
		Zariel: "",
		Levistus: "",
	},
};

export const alignmentArray = [
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

// all alignmentDescs need formatting
export const alignmentDesc = {
	Lawful_Good: {
		description: `(LG) creatures can be counted on to do 
					the right thing as expected by society. `,
		expectedClasses: `Gold dragons, 
						paladins, and most dwarves are lawful good.`,
	},
	Neutral_Good: {
		description: ` (NG) folk do the best they can to help 
others according to their needs.`,
		expectedClasses: ``,
	},
	Chaotic_Good: {
		description: ` (CG) creatures act as their conscience 
						directs, with little regard for what others expect.`,
		expectedClasses: `Copper 
						dragons, many elves, and unicorns are chaotic good.`,
	},
	Lawful_Neutral: {
		description: ` (LN) individuals act in accordance 
						with law, tradition, or personal codes.`,
		expectedClasses: `Many monks and 
						some wizards are lawful neutral.`,
	},
	Neutral: {
		description: ` (N) is the alignment of those who prefer to 
					steer clear of moral questions and don’t take sides, doing what seems best at the time`,
		expectedClasses: ` Lizardfolk, most 
						druids, and many humans are neutral`,
	},
	Chaotic_Neutral: {
		description: ` (CN) creatures follow their whims, 
					holding their personal freedom above all else.`,
		expectedClasses: `Many barbarians and rogues, and some bards, are 
						chaotic neutral.`,
	},
	Lawful_Evil: {
		description: `(LE) creatures methodically take what they 
					want, within the limits of a code of tradition, loyalty, or 
					order. `,
		expectedClasses: `Devils, blue dragons, and hobgoblins are lawful evil.`,
	},
	Neutral_Evil: {
		description: `l (NE) is the alignment of those who do 
					whatever they can get away with, without compassion or 
					qualms. `,
		expectedClasses: `Many drow, some cloud giants, and yugoloths 
				are neutral evil.`,
	},
	Chaotic_Evil: {
		description: `l (CE) creatures act with arbitrary 
					violence, spurred by their greed, hatred, or bloodlust. `,
		expectedClasses: `Demons, red dragons, and orcs are chaotic evil.`,
	},
};

export const backgroundsArray = [
	{
		option: "Abandoned", //homebrew
		isHomebrew: true,
	},
	{
		option: "Abyssdweller", //homebrew
		isHomebrew: true,
	},
	{
		option: "Addict", //homebrew
		isHomebrew: true,
	},
	{
		option: "Adept", //homebrew
		isHomebrew: true,
	},
	{
		option: "Adopted", //homebrew
		isHomebrew: true,
	},
	{
		option: "Afflicted", //homebrew
		isHomebrew: true,
	},
	{
		option: "Acolyte",
		isHomebrew: false,
	},
	{
		option: "Alchemist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Alcoholic", //homebrew
		isHomebrew: true,
	},
	{
		option: "Alcoholic_Scientist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Amnesiac", //homebrew
		isHomebrew: true,
	},
	{
		option: "Anarchist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Ancient_Cultist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Ancient_King", //homebrew
		isHomebrew: true,
	},
	{
		option: "Ancient_One", //homebrew
		isHomebrew: true,
	},
	{
		option: "Anthropologist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Antiquarian", //homebrew
		isHomebrew: true,
	},
	{
		option: "Apothecary", //homebrew
		isHomebrew: true,
	},
	{
		option: "Archaeologist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Arranged_Marriage", //homebrew
		isHomebrew: true,
	},
	{
		option: "Artist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Aspirant", //homebrew
		isHomebrew: true,
	},
	{
		option: "Assistant", //homebrew
		isHomebrew: true,
	},
	{
		option: "Astrologer", //homebrew
		isHomebrew: true,
	},
	{
		option: "Asylum_Escapee", //homebrew
		isHomebrew: true,
	},
	{
		option: "Banker", //homebrew
		isHomebrew: true,
	},
	{
		option: "Barmaid", //homebrew
		isHomebrew: true,
	},
	{
		option: "Bartender", //homebrew
		isHomebrew: true,
	},
	{
		option: "Battlesmith", //homebrew
		isHomebrew: true,
	},
	{
		option: "Beggar", //homebrew
		isHomebrew: true,
	},
	{
		option: "Biologist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Bodyguard", //homebrew
		isHomebrew: true,
	},
	{
		option: "Botanist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Bounty_Hunter", //homebrew
		isHomebrew: true,
	},
	{
		option: "Butler", //homebrew
		isHomebrew: true,
	},
	{
		option: "Cannibal", //homebrew
		isHomebrew: true,
	},
	{
		option: "Cartographer", //homebrew
		isHomebrew: true,
	},
	{
		option: "Child", //homebrew
		isHomebrew: true,
	},
	{
		option: "Child_Soldier", //homebrew
		isHomebrew: true,
	},
	{
		option: "City_Guard", //homebrew
		isHomebrew: true,
	},
	{
		option: "Collector", //homebrew
		isHomebrew: true,
	},
	{
		option: "Bereaved", //homebrew
		isHomebrew: true,
	},
	{
		option: "Conscript", //homebrew
		isHomebrew: true,
	},
	{
		option: "Cursed", //homebrew
		isHomebrew: true,
	},
	{
		option: "Demonologist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Denizen", //homebrew
		isHomebrew: true,
	},
	{
		option: "Detective", //homebrew
		isHomebrew: true,
	},
	{
		option: "Disgrace", //homebrew
		isHomebrew: true,
	},
	{
		option: "Dragon_Raised", //homebrew
		isHomebrew: true,
	},
	{
		option: "Entomologist", //homebrew
		isHomebrew: true,
	},
	{
		option: "Exiled", //homebrew
		isHomebrew: true,
	},
	{
		option: "Explorer", //homebrew
		isHomebrew: true,
	},
	{
		option: "Fishmonger", //homebrew
		isHomebrew: true,
	},
	{
		option: "Fortune_Teller", //homebrew
		isHomebrew: true,
	},
	{
		option: "Hitman", //homebrew
		isHomebrew: true,
	},
	{
		option: "Innkeeper", //homebrew
		isHomebrew: true,
	},
	{
		option: "Intellectual", //homebrew
		isHomebrew: true,
	},
	{
		option: "Inventor", //homebrew
		isHomebrew: true,
	},
	{
		option: "Charlatan",
		isHomebrew: false,
	},
	{
		option: "Criminal",
		isHomebrew: false,
	},
	{
		option: "Entertainer",
		isHomebrew: false,
	},
	{
		option: "Folk Hero",
		isHomebrew: false,
	},
	{
		option: "Guild Artisan",
		isHomebrew: false,
	},
	{
		option: "Hermit",
		isHomebrew: false,
	},
	{
		option: "Noble",
		isHomebrew: false,
	},
	{
		option: "Outlander",
		isHomebrew: false,
	},
	{
		option: "Sage",
		isHomebrew: false,
	},
	{
		option: "Sailor",
		isHomebrew: false,
	},
	{
		option: "Secret",
		isHomebrew: true,
	},
	{
		option: "Soldier",
		isHomebrew: false,
	},
	{
		option: "Urchin",
		isHomebrew: false,
	},
	{
		option: "Far Traveler",
		isHomebrew: false,
	},
	{
		option: "Haunted One",
		isHomebrew: false,
	},
	{
		option: "Knight",
		isHomebrew: false,
	},
	{
		option: "Pirate",
		isHomebrew: false,
	},
	{
		option: "City Watch",
		isHomebrew: false,
	},
	{
		option: "Clan Crafter",
		isHomebrew: false,
	},
	{
		option: "Cloistered Scholar",
		isHomebrew: false,
	},
	{
		option: "Courtier",
		isHomebrew: false,
	},
	{
		option: "Faction Agent",
		isHomebrew: false,
	},
	{
		option: "Inheritor",
		isHomebrew: false,
	},
	{
		option: "Investigator",
		isHomebrew: false,
	},
	{
		option: "Mercenary Veteran",
		isHomebrew: false,
	},
	{
		option: "Urban Bounty Hunter",
		isHomebrew: false,
	},
	{
		option: "Waterdhavian Noble",
		isHomebrew: false,
	},
];
// all backgroundDescs need formatting
export const backgroundDesc = {
	Abandoned: {
		isHomebrew: true,
		description: `Not everyone will have someone with them their entire life. Even if there is a crowd of potential relationships waiting to happen, they will tend to not want to forge a relationship, so as to not be abandoned again. These individuals tend to shy away from very large crowds, acting as an observer of sorts (like an outsider observing the in crowd, etc.). A person who is abandoned also has a unique viewpoint as they interpret events drastically from other party members.
						Think for a moment. Who abandoned you? Are you holding a grudge against them, Or are you willing to forgive them? For how long have you been abandoned? These are questions you should ask yourself, and answer in the shoes of your character. You could've been abandoned by a ragtag group of adventurers, after you discussed that you wanted to leave the group behind! Or perhaps, you were abandoned by your family, left to starve in the alleyways of a run down village.`,
		skillProficiencies: `You are proficient in two of the following skills: Deception, Intimidation, Performance, Persuasion, or Stealth. After all, you've seen and adapted to the hostility of some travelers in the world.`,
		toolProficiencies: `One artisan's tool of your choice.`,
		languages: `One language of your choice.`,
		startingEquipment: `You start with dark common clothes, a few (1d4) pieces of gold, one trinket from your life, before you were abandoned.`,
		backgroundSpecial: {
			title: `Hope`,
			description: ``,
			die: `1d4`,
			roll: [
				{
					number: 1,
					description: `	Everybody deserves a second chance!`,
				},
				{
					number: 2,
					description: `I'll never give up on the people I care about!`,
				},
				{
					number: 3,
					description: `	Everything is gonna turn out a-O.K!`,
				},
				{
					number: 4,
					description: `Come on, there's always a bright side!`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Pity`,
			description: `Whether you are a sorrowful realist, or a hopeful for what the future can give you, you have learned to embrace who you are, for better or worse. When you meet new people and explain what has happened to you, those who can feel empathy or share your pain are more often willing to lend a helping hand. Whether that is in the form of information, food and supplies, or just a place for you and your party to sleep, most with a heart will do their best to understand your plight and help in any way they can.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `These are simple, but fleshed out characteristics that might help you build a bridge for your Abandoned!`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d4`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I don’t know what I’m supposed to do with my life anymore…`,
				},
				{
					number: 2,
					description: `People always tell me to look on the bright side...what one, though?`,
				},
				{
					number: 3,
					description: `I worry that even if I help complete some sort of magical quest, I’ll be forgotten.`,
				},
				{
					number: 4,
					description: `I don’t even like to help...I just do it for a second chance.`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Chaos`,
					description: `I'm just here to cause chaos! no wrong, no right!`,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					bold: `Self Improvement`,
					description: `I must go on a journey of self-improvement, or else, what's the point of this all? `,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bold: `Guidance`,
					description: `Guidance. I feel that I've broken something, and must been guided by some type of kind deity or system! `,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Vengeance`,
					description: `I will find the one that has abandoned me first, and I will have revenge.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `The World`,
					description: `The World needs to hear the story of someone like me, someone who's broken boundaries of life.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Friendship`,
					description: `I'll go from being abandoned, to having made wondrous friends.`,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `The inn owner that took me in was quite kind...I owe them thanks, still.`,
				},
				{
					number: 2,
					description: `A small group of adventurers guided me to this place...I should thank them if I see them again.`,
				},
				{
					number: 3,
					description: `Whenever I see someone in a similar situation as me, I simply must help them.`,
				},
				{
					number: 4,
					description: `Seeing even little animals get along makes me smile, I can't stand to see one hurt.`,
				},
				{
					number: 5,
					description: `	Sometimes I think there's someone out there for me, and that makes all the worries go away.`,
				},
				{
					number: 6,
					description: `Thinking of the people I can call my friends...that makes me smile.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I get paranoid and anxious easily.`,
				},
				{
					number: 2,
					description: `	If it's to protect my new friends, I will never stand down; no matter how strong the foe.`,
				},
				{
					number: 3,
					description: `I think of myself as some sort of "Tough Guy", having gone through what I have.`,
				},
				{
					number: 4,
					description: `	I get angry at the little things in life...`,
				},
				{
					number: 5,
					description: `I often apologize for things out of my control to try and avoid conflict.`,
				},
				{
					number: 6,
					description: `When things get too hard, I push people away before they can abandon me again.`,
				},
			],
		},
	},
	Abyssdweller: {
		isHomebrew: true,
		description: `You were spawned in the layers of the Abyss. You might be a demon, or a lost soul.
					Do you have any memories of the time in the Abyss? What have you experienced? Have you received torture or torment in any kind and if yes, was there a reason for that? Were you part of the army of a demon lord? Did you fight against devils or other demons? What is the reason that you are not part of that world anymore? Maybe you found a way out by yourself, someone sent you on a mission, or you were summoned by a cult or other force?`,
		skillProficiencies: `Intimidation, Deception`,
		toolProficiencies: `Disguise Kit`,
		languages: `Choose one from the following list: Abyssal, Infernal, Celestial or Deep Speech`,
		startingEquipment: `A Disguise kit, a set of dark common clothes, a small belt pouch containing 5 gp, and a trinket from the lower planes`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Secrets of the Abyss`,
			description: `As a dweller of the abyss, you know passages and routes through the abyss that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the Abyss twice as fast as your speed would normally allow.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Friendship is new and strange to me.`,
				},
				{
					number: 2,
					description: `I'm not a man of many words.`,
				},
				{
					number: 3,
					description: `The stage is mine; I'm the center of everything.`,
				},
				{
					number: 4,
					description: `I like to express emotions and feelings in wild gestures.`,
				},
				{
					number: 5,
					description: `Staying at one place for too long is not in my interest.`,
				},
				{
					number: 6,
					description: `For some reason, I enjoy nature and it's beauty.`,
				},
				{
					number: 7,
					description: `It's hard/easy to adapt to this world.`,
				},
				{
					number: 8,
					description: `It's easier to kill someone than to be nice to someone.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Order`,
					description: `Following orders is sometimes a good option, that might lead in less pain.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Pain`,
					description: ` Feeling pain reminds people of the fact that they are still alive, so it’s good to give them that feeling. [A fact that they forget too easy] `,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Freedom`,
					description: `If you have the possibility to do everything you want, what could stop you from doing that?`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Hate`,
					description: `Everyone not from the Abyss does not deserve to live.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Integrity`,
					description: `Reducing the pain of someone means less pain in the entire world. `,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Destruction`,
					description: `Chaos is more likely than order. Let's help with this process`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `There is this one special place in the abyss where I always came back to.`,
				},
				{
					number: 2,
					description: `I took part in the blood war against the devils.`,
				},
				{
					number: 3,
					description: `	I was/am under the command of a demon lord/prince.`,
				},
				{
					number: 4,
					description: `I had some friends/comrades in the abyss. I wonder what happened to them.`,
				},
				{
					number: 5,
					description: `I once fought in a huge battle between two demon lords/princes.`,
				},
				{
					number: 6,
					description: `I have connections to a cult from the Material Plane.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `There is no way I'll go back to the abyss. If there is a way to survive, I will take it, even when that means I have to leave others behind.`,
				},
				{
					number: 2,
					description: `Thinking about the abyss always makes me angry.`,
				},
				{
					number: 3,
					description: `	Everyone is hateable.`,
				},
				{
					number: 4,
					description: `	I have an explosive nature. It's pretty easy to trigger me.`,
				},
				{
					number: 5,
					description: `	Sometimes I talk to myself. The time in the abyss was long and lonely...`,
				},
				{
					number: 6,
					description: `I usually keep stuff I find or get for me.`,
				},
			],
		},
	},

	Acolyte: {
		description: ` You have spent your life in the service of a temple 
					to a specific god or pantheon of gods. You act as an 
					intermediary between the realm of the holy and the 
					mortal world, performing sacred rites and offering 
					sacrifices in order to conduct worshipers into the 
					presence of the divine. You are not necessarily a 
					cleric-perform ing sacred rites is not the same thing as 
					channeling divine power.

					Choose a god, a pantheon of gods, or some other 
					quasi-divine being from among those listed in appendix 
					B or those specified by your DM, and work with your 
					DM to detail the nature of your religious service.
					Were you a lesser functionary in a temple, raised from 
					childhood to assist the priests in the sacred rites? Or 
					were you a high priest who suddenly experienced a call 
					to serve your god in a different way? Perhaps you were 
					the leader of a small cult outside of any established 
					temple structure, or even an occult group that served a 
					fiendish master that you now deny.`,
		skillProficiencies: `Insight, Religion `,
		toolProficiencies: `Two of your choice `,
		startingEquipment: `A holy symbol (a gift to you when you 
						entered the priesthood), a prayer book or prayer 
						wheel, 5 sticks of incense, vestments, a set of common 
						clothes, and a belt pouch containing 15 gp`,
		feature: {
			title: `Shelter of the Faithful`,
			description: ` As an acolyte, you command the respect of those who 
						share your faith, and you can perform the religious 
						ceremonies of your deity. You and your adventuring 
						companions can expect to receive free healing and 
						care at a temple, shrine, or other established presence 
						of your faith, though you must provide any material 
						components needed for spells. Those who share 
						your religion will support you (but only you) at a 
						modest lifestyle.

						You might also have ties to a specific temple dedicated 
						to your chosen deity or pantheon, and you have a 
						residence there. This could be the temple where you 
						used to serve, if you remain on good terms with it, or a 
						temple where you have found a new home. While near 
						your temple, you can call upon the priests for assistance, 
						provided the assistance you ask for is not hazardous and 
						you remain in good standing with your temple.`,
		},
		suggestedCharacteristics: ` Acolytes are shaped by their experience in temples 
								or other religious communities. Their study of the 
								history and tenets of their faith and their relationships 
								to temples, shrines, or hierarchies affect their 
								mannerisms and ideals. Their flaws might be some 
								hidden hypocrisy or heretical idea, or an ideal or bond 
								taken to an extreme.`, // needs formatting
		suggestedPersonalityTraits: ` 1 I idolize a particular hero of my faith, and constantly 
									refer to that person’s deeds and example.
									3 I see omens in every event and action. The gods try to 
									speak to us, we just need to listen
									4 Nothing can shake my optimistic attitude.
									5 I quote (or misquote) sacred texts and proverbs in 
									almost every situation.
									6 I am tolerant (or intolerant) of other faiths and respect 
									(or condemn) the worship of other gods.
									7 I've enjoyed fine food, drink, and high society among 
									my temple’s elite. Rough living grates on me.
									8 I’ve spent so long in the temple that I have little 
									practical experience dealing with people in the outside 
									world`,
		suggestedIdeal: `d6 Ideal
						1 Tradition. The ancient traditions of worship and 
						sacrifice must be preserved and upheld. (Lawful)
						2 Charity. I always try to help those in need, no matter 
						what the personal cost. (Good)
						3 Change. We must help bring about the changes the 
						gods are constantly working in the world. (Chaotic)
						4 Power. I hope to one day rise to the top of my faith’s 
						religious hierarchy. (Lawful)
						5 Faith. I trust that my deity will guide my actions, I have 
						faith that if I work hard, things will go well. (Lawful)
						6 Aspiration. I seek to prove myself worthy of my god’s 
						favor by matching my actions against his or her 
						teachings. (Any)`,
		suggestedBond: ` d6 Bond
						1 I would die to recover an ancient relic of my faith that 
						was lost long ago.
						2 I will someday get revenge on the corrupt temple 
						hierarchy who branded me a heretic.
						3 I owe my life to the priest who took me in when my 
						parents died.
						4 Everything I do is for the common people.
						5 I will do anything to protect the temple where I served.
						6 I seek to preserve a sacred text that my enemies 
						consider heretical and seek to destroy.`,
		suggestedFlaw: ` d6 Flaw
						1 I judge others harshly, and myself even more severely.
						2 I put too much trust in those who wield power within 
						my temple’s hierarchy.
						3 My piety sometimes leads me to blindly trust those 
						that profess faith in my god.
						4 I am inflexible in my thinking.
						5 I am suspicious of strangers and expect the worst of 
						them.
						6 Once I pick a goal, I become obsessed with it to the 
						detriment of everything else in my life`,
	},
	Addict: {
		isHomebrew: true,
		description: `Addiction can happen to anyone. While genetics can help increase or decrease the chances of addiction, everything that causes pleasure can become an addiction.

					You've became dependent on some sort of substance or activity. You become jittery and unreasonable if you don't feed your addiction for a while. You may be working to rid yourself of the addiction, became numb to it, or revel in it. In a way, you are a sick person afflicted with a disease that keeps you hooked. You may have tried to get help. Did it work? Are you on recovery?Or perhaps you recovered and fell back into the hole, or even found some new form of addiction. It's a slippery slope, after all.

					When you pick this background, talk with your GM about any addictive substances in the campaign. Is there support for addicts or is knowledge on addictions vague or nonexistent? How long have you been addicted? Is your addiction deadly? What are your withdrawal symptoms and when do they start occurring? And do you do anything to help subdue withdraw and/or the addiction itself? When discussing with your DM, it is recommended you make an addiction that is feasible to the campaign to sustain. It should not be something overly rare, just to keep it always within reach.`,
		skillProficiencies: `Choose between Deception or Persuasion, your 2nd skill must be related to something you've learned from your addiction (ie: sex or drugs could be medicine, gambling could be sleight of hand).`,
		toolProficiencies: `1 tool set that facilitates your addiction (ie: alchemy lab for drugs, game set for gambling, a bondage set for sex.)`,
		languages: `Any one`,
		startingEquipment: `Medical diagnosis papers, paraphernalia that relates to your addiction (usually the tool you are proficient in), common clothes, and a pouch containing 5gp.`,
		backgroundSpecial: {
			title: `Addiction`,
			description: `Not all addicts are the same. Anything can become addictive with the right person; even symptoms can vary from addict to addict.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Drugs (can be recreational or medicinal, be sure to know the drug and its intended effects)`,
				},
				{
					number: 2,
					description: `Food (whether this shows up as a crazy chocolate hunter/lover type, or an unhealthy reaction to purging and unhealthy diets type, is up to you)`,
				},
				{
					number: 3,
					description: `Gambling and/or gaming.`,
				},
				{
					number: 4,
					description: `Sex and/or masturbation.`,
				},
				{
					number: 5,
					description: `A certain activity (maybe you just REALLY love climbing trees, perhaps your fingers tingle and shake to knit scarves, you just can't go very long without needing to do that activity)`,
				},
				{
					number: 6,
					description: `You have a rare genetic disorder that makes anything remotely pleasurable addictive.`,
				},
			],
		},
		feature: {
			title: `Strong Highs and Lows`,
			description: `As an addict, your mental and physical state deal heavily with how you have fed your addiction. When you indulge in your addiction, you start to feel euphoric and powerful. You might make risky decisions or become stupidly cockamamie. It is also what keeps you normal and happy, able to enjoy things.

						On the other side of the spectrum, if you don't feed your addiction you start to feel withdrawal. You might feel anxious, jittery, weak, and may even become dangerously erratic. The agitation caused makes you a danger to yourself and others around you as you recklessly may do dangerous things to try and feed your addiction. For example, if you are addicted to sexual activities, you may steal money from even allies to spend on prostitutes.

						Talk with your GM about your high and the withdrawal symptoms. How long do they last? Do you suffer madness without your fix? How much of your chosen addiction do you require to get high? Is it getting worse?`,
		},
		alterateFeature: [
			{
				title: `Enabled`,
				description: `You have an enabler that feeds your addiction. This could be a drug dealer, a sex friend, a goblin with 3 cups and a ball, or whoever might be feeding this addiction. Somehow the enabler always finds you, and it is up to you whether you like this. This keeps you fairly stable, because bankrupting or killing you would not be in the enablers' interest.

							Discuss the enabler with the GM. Are they abusive? Are you in their debt? How often do they appear? Are they a help or hindrance to party activities? Are they, in fact, another party member?`,
			},
			{
				title: `Recovering Addict`,
				description: `You have seen the error of your ways and are trying to quit. But it is not easy. When in the presence of your addiction you feel the urge to engage in the substance or activity. Depending on what you and your DM discuss to be your threshold of resistance, your character will have variable difficulty not dropping whatever it is they are doing to chase after their next euphoric high. If you successfully resist, you can go about as usual. But if you can't resist, you will inevitably go running off.

							Work with the GM to determine your road to recovery. How hard is it to resist? It can depend on what your addiction is. You can use Wisdom or Constitution saves if necessary. Is it worse over time? Will you ever fully recover and if so, when? What benefits might you gain when you finally quit for good?`,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I think constantly about my choice of substance/Activity.`,
				},
				{
					number: 2,
					description: `I will do anything to get more of what I want.`,
				},
				{
					number: 3,
					description: `I try to get other people addicted as well.`,
				},
				{
					number: 4,
					description: `I believe my addiction is normal for everyone.`,
				},
				{
					number: 5,
					description: `I hate myself but can't seem to stop.`,
				},
				{
					number: 6,
					description: `I frequently twitch and babble about my addiction.`,
				},
				{
					number: 7,
					description: `I am prone to random and frequently inappropriate emotional changes.`,
				},
				{
					number: 8,
					description: `I spend most of my earnings on my addiction.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Love and Betterment`,
					description: `I'm trying to get a better handle on my addiction so that I can be better for someone I love. `,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Magic Cure`,
					description: `I'm chasing the cure for my addiction because the process to quit is WAY too much work.`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Self Improvement`,
					description: `I am determined to get my life in order.`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Ambrosia`,
					description: `I believe my addiction is the key to happiness and spiritual transcendence.`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Improvement`,
					description: `I can make my addiction even better, with the right tweaks I could reach new highs. `,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `MORE`,
					description: `I want more, I want it all to myself, I can never get enough, and no one can stop me.`,
					alignment: `Evil`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My addiction is my choice, if I want to let it run my life, that's my prerogative.`,
				},
				{
					number: 2,
					description: `I am trying to get better for the sake my family and friends.`,
				},
				{
					number: 3,
					description: `I will never stop trying to relive that first high.`,
				},
				{
					number: 4,
					description: `my addiction was the only thing that kept me going in trying times.`,
				},
				{
					number: 5,
					description: `I owe someone a mountain of debt.`,
				},
				{
					number: 6,
					description: `I made a tidy sum from other addicts but can't use the money (guilt or the law)`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I'm allergic (to the material, substance, food, drink, activity, etc, required for my addiction)`,
				},
				{
					number: 2,
					description: `I've become a bit defined by my addiction.`,
				},
				{
					number: 3,
					description: `I have to bring the supplies to aid/sustain my addiction and sometimes people say it's more trouble than it's worth.`,
				},
				{
					number: 4,
					description: `I have an uncontrollable twitch that never stops, not even when I sleep.`,
				},
				{
					number: 5,
					description: `When going through withdrawal, I become very violent and aggressive to everyone around me.`,
				},
				{
					number: 6,
					description: `When I don't get my addiction satisfied I can barely sleep.`,
				},
			],
		},
	},
	Adopted: {
		isHomebrew: true,
		description: `You grew up in a family that have a somewhat different appearance from you. This could have been from being stolen, sold, lost and found, switched at birth, or maybe your parent/s even died from childbirth or war. Whatever the reason you are in a family different from you. For how long did you know they are not your blood family?

						Give a lot of thought to what makes you a unique orphan that was adopted. What kind of a harsh life did you endure on the streets until adoption? Were you way too old to be adopted even, and it was pure luck and grace some kind-hearted person took you in? Have you bounced around from orphanage to orphanage and built yourself a reputation as trouble child, still able to be adopted miraculously? Were you a victim of domestic abuse and a great fight broke out over adopting you? Are your birth parents even still alive? Did you maybe see them perish before your eyes or see them leave you as a helpless vagabond?

						After you have your past figured out, think about how you interact with your current family on a deeper level. Do you commonly feel out of place with them, usually preferring to spend time away from any foster siblings you may have? Do you rarely tell your foster parents of your problems and sneak around the house, unable to feel at home? Or do you act normal and accept it?`,
		skillProficiencies: `Persuasion, Deception and Stealth`,
		toolProficiencies: `None`,
		startingEquipment: `A set of common clothes matching the style worn by your current family, something of a trinket left from your birth parents (cannot be worth more than 5gp) and pouch with 10gp`,
		languages: `You know the language spoken by your adoptive family enough, but you cannot speak it fluently, only sentences with bad syntax and grammar (e.g., "Name is I, Todd"). When you speak in this language, those who understand are inclined to ignore you or take offense.`,
		backgroundSpecial: {
			title: `Adopted Family`,
			description: `Who is your adopting family? How did you meet or how do you fare with them?`,
			die: `1d10`,
			roll: [
				{
					number: 1,
					description: `I was kidnapped as a child and sold into slavery until I ended up in my current home.`,
				},
				{
					number: 2,
					description: `I was left behind in migration and lost until a friendly traveler picked me up to raise as his own.`,
				},
				{
					number: 3,
					description: `War tore me apart from my family. Rescue efforts landed me a home with the people I now call family.`,
				},
				{
					number: 4,
					description: `I was curious and got lost looking at something in the bustling city. The person who owned what interested me took me in.`,
				},
				{
					number: 5,
					description: `My old family abandoned me when they took me out to town and never came back to fetch me. A kindly family saw me crying and took me in.`,
				},
				{
					number: 6,
					description: `I was found in a wreck with no memory. The person who found me was nice and raised me.`,
				},
				{
					number: 7,
					description: `My current parents actually stole me from another crib`,
				},
				{
					number: 8,
					description: `A disaster cost me my family. I was destitute until a nice couple took me in.`,
				},
				{
					number: 9,
					description: `I was found on the doorstep at the gate of the city.`,
				},
				{
					number: 10,
					description: `I was dishonorably disowned and wandered until I ended up with a house that took me in warmly.`,
				},
			],
		},
		feature: {
			title: `Trust Issues`,
			description: `People of your birth race, and of the race of your adoptive family (with the possible exception of you family/s) find it harder to trust you. Those of the race you are will take longer to trust you because they think you have been corrupted or on the side of the race of your adoptive family and no longer share their values. People who are the same race of your adoptive family may take longer to trust you because they believe that you will always be one of your race, no matter how you were brought up. Due to this ostracization, races that are not of your birth or adopted tend to take you with a bit more kindness.`,
		},
		alterateFeature: [
			{
				title: `No Discrimination`,
				description: `You often see trivial differences between the various races that you encounter. You know that the race itself doesn’t decide who a person will be. You know all types of personalities of creatures you talk with after just an exchange of few words.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: `Adopted children can be seen as little devils or victims of circumstance in stories like Cinderella. Consider what kind of mischievous or angelic adopted child your character is.`,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `	I love learning about new things, partially about other races and sub-races work`,
				},
				{
					number: 2,
					description: `I will often change the way my voice sounds just for fun`,
				},
				{
					number: 3,
					description: `I enjoy puzzles and thinking things through`,
				},
				{
					number: 4,
					description: `	I can find the most childish things entertaining`,
				},
				{
					number: 5,
					description: `I am always polite, and use my manners`,
				},
				{
					number: 6,
					description: `I often feel lonely, even when many others are nearby`,
				},
				{
					number: 7,
					description: `I sometimes awaken feeling a sense of lingering emotion, from a dream I can never remember`,
				},
				{
					number: 8,
					description: `I always felt out of place, like a swan raised by ducks, or maybe a duck raised by swans…`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Amusement`,
					description: `If there isn’t any fun in doing something then why do it `,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					bold: `Belonging`,
					description: `Everyone should know where they belong `,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Rule-Follower`,
					description: `Regardless as to what you are, everyone should follow the rules`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Vengeance`,
					description: `For all that happened at my birth, there will be blood to pay`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Opinons`,
					description: `Everyone is entitled to their own opinions, of course this includes myself `,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Whatever`,
					description: `Everyone just does what they want anyway`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `	What happened at my birth, I know it is important somehow.`,
				},
				{
					number: 2,
					description: `I must find my birth parents, they have to be out there.`,
				},
				{
					number: 3,
					description: `How can I know another, when I don’t even know myself?`,
				},
				{
					number: 4,
					description: `I’m not just another of my race/sub-race, I will prove my worth.`,
				},
				{
					number: 5,
					description: `What does this mean, this [insert item from birth family], I must know.`,
				},
				{
					number: 6,
					description: `All I want is to find a place where I belong.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I hoard what’s mine, and am quite possessive. I find it hard to allow others to touch my things, or even give away/sell an item of mine.`,
				},
				{
					number: 2,
					description: `I am aware of how different I am to those around me, making it hard for myself when I try to get close to others.`,
				},
				{
					number: 3,
					description: `I am a passive person (I will lose so you can win), I will do almost anything to avoid conflict with others, and will run and hide if people start yelling.`,
				},
				{
					number: 4,
					description: `I am an aggressive person (For me to win you have to lose), quick to anger, and will keep pressing until I get my way, or making the other person seem at fault.`,
				},
				{
					number: 5,
					description: `	Trusting people just isn't my thing. Forget about even becoming friends.`,
				},
				{
					number: 6,
					description: `I have a habit of lying about the most insignificant things.`,
				},
			],
		},
	},
	Adept: {
		isHomebrew: true,
		description: `You've always wanted to learn something interesting and different to make you stand out from the crowd, and now you have! With the tool skills you have learned they may just save your life one day and you are always ready for that moment.

					Your learning has gotten you this far, but you are seeking more. What knowledge could draw you from your books to a life of adventure? Is there forbidden lore you seek? Did the promise of ruins and mysteries draw you from the comfort of your office? Did you learn secrets you weren't welcome to and choose to see the world instead of face the music?`,
		skillProficiencies: `Two skill of your choice`,
		toolProficiencies: `One tool kit of your choice`,
		languages: `One standard language of your choice`,
		startingEquipment: `A trinket of your choice from your childhood, a set of common clothes, a book of your old teachings, and a belt pouch containing 10gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Prodigy`,
			description: `You are one of the fastest learners out there. When trying to learn something (languages, proficiencies, or otherwise), for every week it would take to gain this, you reduce the time taken by 2 days.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Most Adepts have a habit of trusting too much in their easy way of understanding things. Many Adepts suffer from unusual flaws and are stimulated by peculiar drives, it makes them ever more interesting to play and serves to bring a much more unique experience to the world and set out their destiny.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am always eager to learn new subjects`,
				},
				{
					number: 2,
					description: `I will always be ready to help my friends`,
				},
				{
					number: 3,
					description: `My dream is my destiny, and my friends are my path to setting it`,
				},
				{
					number: 4,
					description: `I only continue to set out my dream to use it for unspeakable uses.`,
				},
				{
					number: 5,
					description: `	I find it hard being around others.`,
				},
				{
					number: 6,
					description: `	I will never back down from a fight.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Teacher`,
					description: `I will set out my dream to help the helpless. `,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Persistence`,
					description: `My dream is my life. No one will stop me from achieving victory in it. `,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Knowledge`,
					description: `When I reach my goal, I will teach others what I've learnt. `,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Revenge`,
					description: `My dream will be used against those who laughed at me`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Rememberance`,
					description: `Even if I don't reach my goal, I will still use my skills.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Acceptance`,
					description: `This destiny is for me. I can feel it.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My Instructor was my everything.`,
				},
				{
					number: 2,
					description: `Once I complete my goal, I will go home and share it.`,
				},
				{
					number: 3,
					description: `I would die for my destiny.`,
				},
				{
					number: 4,
					description: `My imagination of the future dives me forward.`,
				},
				{
					number: 5,
					description: `I can still hear the voice's of the people who helped me.`,
				},
				{
					number: 6,
					description: `	My friends and their help are what keeps me going.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I will do anything, to reach my goal.`,
				},
				{
					number: 2,
					description: `I can only trust in myself and no one else.`,
				},
				{
					number: 3,
					description: `My skills won't always work.`,
				},
				{
					number: 4,
					description: `I am rather clumsy and foregetful.`,
				},
				{
					number: 5,
					description: `People ask me for help, but I'm not always the best at my certain skill.`,
				},
				{
					number: 6,
					description: `I still wish that my destiny was to be something else.`,
				},
			],
		},
	},

	Afflicted: {
		isHomebrew: true,
		description: `Since early in life, possibly from birth, you have been subject to a highly visible abnormal condition. Your condition is chronic and, in the absence of powerful magic or advanced medical technology, incurable, though not detrimental to your ability to function. The main impact of your condition is cosmetic, though it may also be uncomfortable, affect your diet, alter your mannerisms, or shorten your lifespan in the long run. People are generally ignorant of the plight of their fellow man, and even in highly advanced enlightened societies, they will swiftly judge one another based on little more than looks alone. As a result, anyone who stands out as being weird in any way is likely to be the target of fear, suspicion, rumors, superstition, abuse, and other expressions of plain ignorance. People suffering through such circumstances find themselves living a life that is not their own, foisted upon them by fate and misfortune, trying to choose their own direction as others try to decide things for them.`,
		skillProficiencies: `Intimidation and Persuasion.`,
		toolProficiencies: ` One tool of any sort.`,
		languages: `any one language`,
		startingEquipment: ` A medical device (A mask, crutch, brace, etc.) you use to maintain some comfort, a set of common clothes, a bag, a blank notebook, and a belt pouch containing 5gp`,
		backgroundSpecial: {
			title: `Affliction`,
			description: `What is it which makes you so hideous?`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Disease. You are afflicted by a chronic disease which cannot be cured. (Real world example is Leprosy.)`,
				},
				{
					number: 2,
					description: `Deformity. You are permanently disfigured, due to a birth defect. (Think Elephant Man)`,
				},
				{
					number: 3,
					description: `Dysfunction. You have some neurological problem which prevents you from thinking, remembering, understanding, communicating, or coordinating yourself normally. (In ancient times, people thought these things meant you were possessed.)`,
				},
				{
					number: 4,
					description: `Disfigurement. An accident has left you horribly scarred. (Note, this does not mean dismembered; it is cosmetic, like the Phantom of the Opera.)`,
				},
				{
					number: 5,
					description: `Distortion. A magical effect has substantially altered you in a frightening way. (Such as having a warthog's head, or no shadow.)`,
				},
				{
					number: 6,
					description: `Modification. You have some sort of substantial body modification which is significantly outside of normal, even for people with modifications, and dramatically alters your appearance. (Full body tattoos, facial brandings, etc.)`,
				},
			],
		},
		feature: {
			title: `Pity`,
			description: `People feel your pain. Even if they have never been through anything like what happened to you, they can somehow empathize. People will take pity on you, opting to reduce your suffering if they can, or at least choosing not to inflict any more suffering upon you. This can range from a farmer letting you spend the night in his barn, to a jailer who is cruel to everyone else, but simply neglectful of you.`,
		},
		alterateFeature: [
			{
				title: `Fear`,
				description: `Your condition is so severe it dehumanizes you. People have difficulties identifying your gender or race. Some may mistake you for a monster. Children run, babies cry, and people slam doors in your face. On the other hand, you are the master of clearing a room. Nobody knows what's wrong with you, but most people are too afraid to find out! A menacing look or an impossible threat could come across as believable from you, and people might just go along with it because they'd rather not see what happens if you actually spit in the well.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am unyieldingly genuine, and laugh, cry, or scream without restraint.`,
				},
				{
					number: 2,
					description: `I act as though there is nothing different about me, even when it affects my life.`,
				},
				{
					number: 3,
					description: `I take advantage of others' pity to shirk my responsibilities.`,
				},
				{
					number: 4,
					description: `	I can't even look at my own reflection.`,
				},
				{
					number: 5,
					description: `I came to terms with this a long time ago.`,
				},
				{
					number: 6,
					description: `I am a permanent optimist, and can find the silver lining to any storm cloud.`,
				},
				{
					number: 7,
					description: `I never smile- not really anyways, and anyone who pays attention can see the sadness in my false smiles.`,
				},
				{
					number: 8,
					description: `My condition makes it difficult to communicate, and people have troubles understanding me.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Betterment`,
					description: `Some day, I will make life better for everyone like me.`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Practicality`,
					description: `If I can make my situation useful, I will`,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bold: `Retribution`,
					description: `I believe the cause of my affliction can be traced to a specific source- and it shall feel my vengeance! `,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Coexistance`,
					description: `One cannot legislate love or repect, but one can enforce tolerance`,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Ambivalence`,
					description: `I don't look like you, but I'm just like you.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Whatever`,
					description: `Who cares? Nothing will hold me back!`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have nothing to lose and everything to gain.`,
				},
				{
					number: 2,
					description: `I believe there is a way to make me normal, and I am on a quest to find it.`,
				},
				{
					number: 3,
					description: `Growing up, there was only one person who could see past my affliction to the real me. I would do anything for them.`,
				},
				{
					number: 4,
					description: `I keep hold of some small object which acts as a reminder of life before my affliction.`,
				},
				{
					number: 5,
					description: `All I want is to find somewhere I belong.`,
				},
				{
					number: 6,
					description: `I have a diary or journal which I record my experiences in every time I rest.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `While most would think I am brave, those who know me worry that I may be suicidally so.`,
				},
				{
					number: 2,
					description: `I am just as judgmental and prejudiced as everyone else- perhaps more so.`,
				},
				{
					number: 3,
					description: `Years of mistreatment have left me misanthropic and cruel.`,
				},
				{
					number: 4,
					description: `My affliction matches a description in some prophecy- and anyone who knows about it wants me dead when they find out.`,
				},
				{
					number: 5,
					description: `My affliction has left me cowardly and over cautious.`,
				},
				{
					number: 6,
					description: `I don't understand why people fear or pity me.`,
				},
			],
		},
	},
	Alchemist: {
		isHomebrew: true,
		description: `The use of alchemy walks a fine line between that of science and magic. Alchemy utilizes formulas with strict values and carefully weighed portions, compared to how free magic can be. An important thing to note is that alchemy is best realized in settings where magic is not too predominant and common. Too much magic makes alchemy secondary, as one can conjure gold rather than laboriously try and synthesize it. Alchemists often were employed by various nexuses of power to do miraculous things, like transmutation. The ability to change materials from one into another, usually an entirely different element, is something many alchemists seek in their studies. Many other goals also do exist, like finding eternal life or manufacturing artificial forms, like homunculi.

					Alchemy also covers more mundane uses, including medicine. Many alchemists could accurately define or detect certain elements and even concoct tinctures and poisons out of minerals. Alchemists do often require a lot of materials, be it lab equipment or formula ingredients. They are thus less efficient than an arcane scholar in many ways, but they are more meticulously trained to deal in something like the scientific method. Many a time, alchemists might run into doubt regarding their profession, be it due to religious stigma or persecution from rivals.

					So, what kind of alchemist are you? Do you work for a wealthy nobleman or even a governmental agency? What is your goal as an alchemist, and what is expected of you by your superiors? Do you want fame for your work? Do you maybe seek a rare ingredient on your adventures? Or, maybe you need political cover due to some scandal regarding your discoveries? What have you discovered and learned through your work? Have you perhaps perfected a formula that your teacher never finished? Or maybe you found a new element to the medieval alchemic quartet of fire, water, air, and earth?`,
		skillProficiencies: `Arcana and Medicine`,
		toolProficiencies: `Alchemist's Supplies`,
		languages: `One language of your choice`,
		startingEquipment: `Alchemist's Supplies, a book on alchemical formulae, common clothes, and a belt pouch with 10 gp`,
		backgroundSpecial: {
			title: `Alchemy Type`,
			description: `In seeking their magnum opus, an alchemist decides on a specific field of study, no different than how a scientist may choose to specialize in an area of their expertise. What does your alchemist character study in particular?`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Transmutation. The art of changing one thing into another is one of the primary bases for all of alchemy. Usually, this involves changing base materials into more valuable ones, called noble metals, like making gold from dirt.`,
				},
				{
					number: 2,
					description: `Solvent. The search for the universal solvents known as alkahest and azoth is a pursuit of many alchemists in the fields of medicine.`,
				},
				{
					number: 3,
					description: `	Animate. Creation of artificial life is a goal for many alchemists who seek to play god.`,
				},
				{
					number: 4,
					description: `	Eternity. Works to create elixirs of life that grant immortality are present across many areas of the arcane. Alchemy is no exception. Whether its brewing minerals according to rasayana or seeking a philosopher's stone, the quest for longevity is yours.`,
				},
				{
					number: 5,
					description: `	Yliaster. The prime material is a starting point for all alchemists. It's not easy to isolate the true essence of something, and it is an absolute fundamental that many budding alchemists and even veterans have trouble doing.`,
				},
				{
					number: 6,
					description: `Esotericism. The arts of alchemy require preservation of symbols, codices, arcane tools, and many other secrets. Alchemists in this vein seek to preserve their traditions.`,
				},
			],
		},
		feature: {
			title: `Experimenter`,
			description: `You are a sort of prototype for the modern scientist, with an insatiable drive and inquisitive mind that seeks further knowledge with or without the aid of the conventional arcane. You have advantage on ability checks to identify mundane materials using your alchemist supplies. This can distinguish metals from one another, like pyrite from gold, for example, but it will not determine if something has magical properties.`,
		},
		alterateFeature: [
			{
				title: `Secretive Knowledge`,
				description: `Alchemists often belonged to hidden orders that sought to disseminate, disprove, or test certain knowledge. As an alchemist, you are a member of one such group on the down low, you can expect some help from those also of your alchemist order, including shelter and small alchemical components. However, these groups are very secretive and distrustful of others, meaning your party members will likely not receive such kind treatment. So long as you remain in good terms with your alchemist order, you can receive lodging and food there, up to a modest lifestyle. However, they will not do anything dangerous or extravagant for you, nor will they reveal themselves and follow you to battle.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Alchemists vary as much as scientists. Some are super zealous and love to keep their secrets. Others are open and want to teach and spread their knowledge. Their attitudes towards people can be volatile, with some alchemists having been only shut-ins in their labs and others penniless beggars perhaps disowned by their orders.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `	I have an insatiable thirst for knowledge.`,
				},
				{
					number: 2,
					description: `My mind does not work the same as others. Others call me crazy.`,
				},
				{
					number: 3,
					description: `I tend to speak quietly and avoid eye contact. Really, I prefer talking to myself over talking to others.`,
				},
				{
					number: 4,
					description: `I cannot handle making big decisions and want others to take or share responsibility.`,
				},
				{
					number: 5,
					description: `I want everything to be done as I want it, always!`,
				},
				{
					number: 6,
					description: `I do not take criticism lightly, be it from a sage or a fool. Especially a fool.`,
				},
				{
					number: 7,
					description: `I spend all my resources on my craft. Money, time...`,
				},
				{
					number: 8,
					description: `I can't stand being a center of attention. I like to be the one no one notices.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Discovery`,
					description: `I am on the verge of a great discovery that will revolutionize alchemy as we know it, and I must follow through.`,
					alignment: `Any`,
				},
				{
					number: 2,
					bold: `Money`,
					description: `I don't care what I'm being told to do; if you can pay, I can do it.`,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bold: `Power`,
					description: `With this craft, I can control creation and death like a god. All lives thus become trivial before me.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Ethics`,
					description: `There are bad actors out there that I swear to find and subdue to preserve the integrity of alchemy. `,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Improvement`,
					description: `There are great things that alchemy can accomplish for people, like medicine. I strive for this.`,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Knowledge`,
					description: `My passion is a drive that never ceases. I will do anything to learn about what I desire.`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I grew up in a poor family, which led me to become a bit of a scrooge that scrimps and saves all the time.`,
				},
				{
					number: 2,
					description: `My customers, sponsors, and patrons are my friends!`,
				},
				{
					number: 3,
					description: `I have a rival who is a greater alchemist than I. I constantly seek to best them.`,
				},
				{
					number: 4,
					description: `	My notes on my greatest discovery were stolen, and I must find them before they fall into the wrong hands.`,
				},
				{
					number: 5,
					description: `I have a great interest in teaching and am constantly seeking out new students.`,
				},
				{
					number: 6,
					description: `The one who taught me my trade still lives; I respect them above all else and will defend them to the death if they require it.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I once caused a great accident amid an experiment. It is my greatest shame that I will never forgive myself for.`,
				},
				{
					number: 2,
					description: `	I have twisted my mind a bit in exposure to chemicals, making me lose my sense of morals and such.`,
				},
				{
					number: 3,
					description: `	I have a tendency to desire destroying what I create for a vile sense of pleasure.`,
				},
				{
					number: 4,
					description: `I've developed an addiction to one of my substances, and I need to make it whenever possible.`,
				},
				{
					number: 5,
					description: `Due to my hubris, I irreversibly scarred myself in my experiments and so I never ever want to be seen in public.`,
				},
				{
					number: 6,
					description: `i  tend to wander in my thoughts and get lost or separated from my group.`,
				},
			],
		},
	},
	Alcoholic: {
		isHomebrew: true,
		description: `The vice of alcohol holds a tight grip on your heart, as well as your liver, for some reason or another. Maybe some past trauma has caused you to turn to fermented fruits and grains as a solace and way to cope, no matter how poor it may be. Maybe you enjoy the flavor to the point that you would do anything for a single drop of the bitter tasting substance. You will do anything to continue living your life through beer goggles, and it has lead to desperate measures, be it a life of crime, or brewing your own alcohol in the privacy of your home. Its plain to see that your life has spiraled out of your control and many people have suggested you get help. Maybe that's why you turned to adventuring, to turn over a new leaf and get a fresh start, or maybe you seek more gold to feed your alcoholism.`,
		skillProficiencies: `Sleight of Hand and Medicine`,
		toolProficiencies: `Brewer's Tools or Thieves' Tools`,
		languages: `Any single language of your choice`,
		startingEquipment: `A flask filled with your favorite alcohol, a memento of your life before alcohol, common clothes, a heavy blanket, and a pouch with 5 sp`,
		backgroundSpecial: {
			title: `Drink of Choice`,
			description: `While you will drink any alcohol if need be, you of course have your own preferences for drinks. Maybe it was the first alcohol you tried, or maybe you just like the flavor, either way, you are utterly obsessed with this beverage and are even more susceptible to its siren song.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Beer`,
				},
				{
					number: 2,
					description: `Wine`,
				},
				{
					number: 3,
					description: `Rum`,
				},
				{
					number: 4,
					description: `Mead`,
				},
				{
					number: 5,
					description: `Brandy`,
				},
				{
					number: 6,
					description: `Scotch`,
				},
			],
		},
		feature: {
			title: `Temperance`,
			description: `Having already struggled through addiction in the past you know how to identify the signs of addiction, and are better equipped to quit other addictions or help others through their addictions. Your demeanor after giving up alcohol may also affect the way different people interact with you.
							`,
		},
		alterateFeature: [
			{
				title: `Pitiful`,
				description: `You love alcohol far too much, and find yourself forgoing inns for the tavern. As such, you have garnered a form of condescending pity from people and can typically find a place to stay on the condition that you do not drink for the duration of your stay. Whether you hold up your end of the bargain or not is up to you.`,
			},
			{
				title: `Strong-headed`,
				description: `You are extremely tolerant of alcohol and have advantage on Constitution checks related to alcohol. You also can consume 3 times that of most people before feeling even a little tipsy.`,
			},
		],
		suggestedCharacteristics: `Alcoholics are not meant to be envied, they are sad individuals who feel they need alcohol, and their personalities should reflect that.
`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have mastered the art of crocodile tears and use them to get whatever I want from whoever I want`,
				},
				{
					number: 2,
					description: `I live for any distraction from my monotonous life.`,
				},
				{
					number: 3,
					description: `	I have found that everyone's a lot more attractive after a few drinks.`,
				},
				{
					number: 4,
					description: `I find a wooden table to be an easier surface to fall asleep on than a bed.`,
				},
				{
					number: 5,
					description: `I find the scent of alcohol to be revolting, but still find myself drawn to it.`,
				},
				{
					number: 6,
					description: `I have found that praying to gods has been ineffective, and have decided to give up on religion all together.`,
				},
				{
					number: 7,
					description: `	I hate confrontation about my problematic behaviors.`,
				},
				{
					number: 8,
					description: `I have a very fragile ego and sense of self.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Self-Serving`,
					description: `Nobody helped me, so why should I do the same for them?`,
					alignment: `Evil`,
				},
				{
					number: 2,
					bold: `Idealistic`,
					description: `If there's still hope for me, there's hope for anyone.`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Drinking`,
					description: `I don't care about much else other than alcohol. `,
					alignment: `Neutral`,
				},
				{
					number: 4,
					bold: `Tempered`,
					description: `I find that drinking within reason keeps me sane, but I still need alcohol everyday`,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Hedonism`,
					description: `If something's good why shouldn't I pursue it? `,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Change`,
					description: `I want to change my ways and be a better person.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `The local barkeep is my only real friend.`,
				},
				{
					number: 2,
					description: `I have abandoned my family for alcohol, I want to fix that.`,
				},
				{
					number: 3,
					description: `There is at least one night stand who is a bit bitter towards me.`,
				},
				{
					number: 4,
					description: `Turning away from alcohol has lost me a lot of my drinking buddies.`,
				},
				{
					number: 5,
					description: `	I have sequestered myself away to avoid alcohol.`,
				},
				{
					number: 6,
					description: `I have at least one illegitimate child from a drinking bender.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I drink to run from my problems.`,
				},
				{
					number: 2,
					description: `I owe people a lot of money from when I was drunk.`,
				},
				{
					number: 3,
					description: `Loyalty to anyone but alcohol is something I don't get.`,
				},
				{
					number: 4,
					description: `	I use my drinking as an excuse to be a terrible person.`,
				},
				{
					number: 5,
					description: `I think that anyone who chooses not to drink is a sanctimonious jerk.`,
				},
				{
					number: 6,
					description: `	I blame everyone other than me for my problems.`,
				},
			],
		},
	},
	Alcoholic_Scientist: {
		isHomebrew: true,
		description: `You are a brilliant scientist, well-known for your advancements and contributions to a field of your choice. You have a tutored many a bright-eyed student, sending them on their way to becoming as intelligent as yourself. Your students are also quite familiar with the sight of you passed out, facedown, on your desk, several empty flasks scattered amongst your notes. As long as you can remember, though that isn't saying much, you have been an avid enjoyer of alcohol, despite your scientific background. Do you drink to cope with stress? Or is it merely a tool to help unlock the secrets of the world? Do you regulate your alcoholism, and only drink when working, or has it completely spiraled out of control, requiring your colleagues and students to care for you after another one of your drunken benders?`,
		skillProficiencies: ` Perception, Investigation`,
		toolProficiencies: `Tinker’s tools and Calligrapher's supplies`,
		languages: `Any one of your choosing`,
		startingEquipment: `A backpack, a set of lab coats, a bedroll, a pouch containing 15 gp, lab notes on the experiment, three flasks of alcohol, three empty flasks, an ink bottle, a feather pen, and a chess set.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Intoxicated Teacher`,
			description: `You drink. A lot. No, really, you have a serious problem. Unfortunately in terms of your recovery, you've found that drinking, to a certain extent, helps organize your slightly scattered mind, and makes previously difficult to understand concepts easier to parse and work through. While drunk, your character is somehow able to find just the right words to explain any concept related to your scientific domain, no matter how complicated, in simple enough terminology that anyone listening will be able to garner at least a basic understanding of it.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I’m fascinated by technology.`,
				},
				{
					number: 2,
					description: `I don’t understand the role of religion.`,
				},
				{
					number: 3,
					description: `I often enjoy analyzing the people around me.`,
				},
				{
					number: 4,
					description: `I always have a plan for what to do when things go wrong.`,
				},
				{
					number: 5,
					description: `I'll settle for nothing less than perfection.`,
				},
				{
					number: 6,
					description: `	I can't help but grow excited over the possibility of a new student.`,
				},
				{
					number: 7,
					description: `I am utterly serene, even in the face of disaster.`,
				},
				{
					number: 8,
					description: `I use polysyllabic words to convey the impression of great erudition`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Sincerity`,
					description: `There's no good pretending to be something I'm not.`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Aspiration`,
					description: `I'm determined to make something of myself`,
					alignment: `Any`,
				},
				{
					number: 3,
					bold: `Creativity`,
					description: `The world is in need of new ideas and bold action. `,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Respect`,
					description: `People deserve to be treated with dignity and respect.`,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Logic`,
					description: `Emotions must not cloud our sense of what is right and true, or our logical thinking.`,
					alignment: `Lawful`,
				},
				{
					number: 6,
					bold: `Knowledge`,
					description: `The path to power and self-improvement is through knowledge`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am often considered a disgrace to the scientific community due to my bad habits.`,
				},
				{
					number: 2,
					description: `I ruined my colleagues' research while I was drunk. I'll do whatever it takes to replace it.`,
				},
				{
					number: 3,
					description: `	The university where I learned my trade is the most important place in the world to me`,
				},
				{
					number: 4,
					description: `It is my duty to protect my students, no matters how many drinks I've had.`,
				},
				{
					number: 5,
					description: `I work to preserve a library, university, alchemical lab, or monastery.`,
				},
				{
					number: 6,
					description: `I owe a debt I can never repay to the people who helped me with my alcoholism.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I'm as stubborn as a mule, and refuse to admit I have a problem.`,
				},
				{
					number: 2,
					description: `I am infamous for showing up to serious events completely wasted.`,
				},
				{
					number: 3,
					description: `My curiosity always made me a bit oblivious to danger. That lack of awareness is only magnified when I'm tipsy.`,
				},
				{
					number: 4,
					description: `I suffer from racing thoughts; a few drinks slows my mind down enough to focus.`,
				},
				{
					number: 5,
					description: `I feel horrible guilt surrounding my addiction, and try to hide it whenever possible.`,
				},
				{
					number: 6,
					description: `If I were forced to pick between my research or feeding my cravings, I'd choose the booze any day.`,
				},
			],
		},
	},
	Amnesiac: {
		isHomebrew: true,
		description: `You... don't even know who you were before becoming an Amnesiac. You come up with so many different ideas of who you were, ideas that would keep you up at night. You adventure, dig through history, investigate on leads, hoping that they'd bring you one step closer to finding out who you truly are... That is if you even want to know who you are.. Maybe you lost your memory from an explosion that caused you to hit your head, maybe you overdosed on a dodgy potion that blanked your mind, maybe you were cursed to forget everything, maybe you did this to yourself to forget a horrible trauma. Whatever happened, you have no idea, but there must be evidence of the past somewhere...`,
		skillProficiencies: `Perception, Investigation`,
		toolProficiencies: ` Choose one musical instrument or gaming set, and one weapon`,
		languages: `One of your choice`,
		startingEquipment: `Two trinkets from your past (one of which is a meaningless red herring and the other being pivotal to your forgotten backstory. Which is up to your DM, who does not have to share which if they don't want to), one weapon you are proficient with, a set of commoner's clothes, and a belt pouch containing 5 GP.`,
		backgroundSpecial: {
			title: `Quirks and Impulses`,
			description: `Although you have no memory, you are not a blank slate. Certain mannerisms and behaviours persist, even though you don't remember their point of origin.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Formal Attitude. You speak extremely formally at all times, especially to those you see as superiors. This may have been due to a military or noble background.`,
				},
				{
					number: 2,
					description: `Forgiver. Even when you don't always fully believe it, you have a strong feeling that everyone should be given a second chance. This impulse may steer you right, but you may also develop a deep distrust of it as well.`,
				},
				{
					number: 3,
					description: `Wanderlust. You feel a compulsion to travel, like you used to do it all the time. When in one place for too long, you grow physically restless. Over time, you might choose to curb this instinct.`,
				},
				{
					number: 4,
					description: `Driven to Learn. For some reason you are compelled to the library and colleges of the world. The urge to absorb and learn as much as you can is deeply rooted in you. This may or may not line up with your class, it may help or hinder your path to finding yourself.`,
				},
				{
					number: 5,
					description: `	Religious Thinking. You find yourself easily convinced by religious figures and messages. Evidently, you were quite the devout in your past, although you might now have a fresh perspective on the consequences of such thinking now that you're starting from scratch.`,
				},
			],
		},
		feature: {
			title: `Deja Vu`,
			description: `You suddenly remember a huge amount of detail about a person, place or thing that you are currently looking at or interacting with without knowing why. Maybe a certain phrase or image sets you off, but you suddenly know all about this thing like you've been familiar with it for years. Any Insight, Investigation or History checks you make relating to this thing are done with advantage. You can use this feature three times per campaign and/or per character.`,
		},
		alterateFeature: [
			{
				title: `Oh, I know that`,
				description: `Despite your amnesia, you clearly remember one specific field of knowledge, lore, or something else. Choose the field you want your character to know and write it down on your character sheet. If you fail your History roll regarding that field of knowledge, you can consult for the answer regardless unless it is otherwise impossible to know about it (i.e. it's unknown)`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I like to do something to capture the current moment, be it writing down a poem or drawing a picture.`,
				},
				{
					number: 2,
					description: `I keep a notebook of all the things I'm supposed to know so I won't forget it.`,
				},
				{
					number: 3,
					description: `	I have a ribbon tied to my finger at all times... And I don't know why.`,
				},
				{
					number: 4,
					description: `i  get constant headaches when I want to think about my past.`,
				},
				{
					number: 5,
					description: `I come up with a new story of who I was every time I am asked.`,
				},
				{
					number: 6,
					description: `I worry that I'll forget the life I'm living right now.`,
				},
				{
					number: 7,
					description: `I sometimes think about who my family was and where I fitted in.`,
				},
				{
					number: 8,
					description: `I don't want to pay close attention to my past.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Beginning`,
					description: `"This is a new, fresh start for me!" `,
					alignment: `Any`,
				},
				{
					number: 2,
					bold: `Placement`,
					description: `"I will become a helpful member of my community, both from my past and my new future." `,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Improvement`,
					description: `"In order for me to be better in the future, I must know about my past." `,
					alignment: `Good`,
				},
				{
					number: 4,
					bold: `Neglect`,
					description: `"Why bother searching for my past? It's in the past, after all." `,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Freedom`,
					description: `"Having no memories means having no obligations." `,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Evil`,
					description: `"Once I find out who I was, I'll use it to take back what I want." `,
					alignment: `Evil`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `A kindly old man took me in when he found me. I owe him a favor ever since.`,
				},
				{
					number: 2,
					description: `I had a lover in my past who wants me to come back to her.`,
				},
				{
					number: 3,
					description: `I hold onto my trinket, the only thing that I remember in my past.`,
				},
				{
					number: 4,
					description: `The home I live in right now is the only home that matters to me.`,
				},
				{
					number: 5,
					description: `I have a good idea who's responsible for my amnesia, and they will pay for it.`,
				},
				{
					number: 6,
					description: `I remember only one person from my past. He holds the key to finding out about who I was.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I will stop at nothing to find out who I was.`,
				},
				{
					number: 2,
					description: `Every time I hit a dead end in learning of my past, I mentally shut down for a bit.`,
				},
				{
					number: 3,
					description: `On top of forgetting my past, I also forgot basic stuff like eating.`,
				},
				{
					number: 4,
					description: `I'm quick to forget things.`,
				},
				{
					number: 5,
					description: `I will latch onto anything that will provide me at least an idea of who I was, even if it's an obvious trap.`,
				},
				{
					number: 6,
					description: `I am almost certain that what I did in the past was bad, and the guilt eats me up even though I don't know what it was.`,
				},
			],
		},
	},
	Anarchist: {
		isHomebrew: true,
		description: `You are an anarchist, For whatever reason you believe nobody should have control over another person. This may have been caused by a variety of reasons. You are steadfast in your beliefs and refuse to command or be commanded. You may seek to tear down a dictator or ruin an economy, no matter the goal it is towards anarchy.`,
		skillProficiencies: `Choose one out of: History, Survival, or Nature`,
		toolProficiencies: `Poisoner's Kit or Thieves' Tools and one set of Artisan Tools`,
		languages: `Choose one `,
		startingEquipment: `Common Clothes in a dark colour with a hood, one of whatever set of Artisan Tools you chose for proficiency, a list of names of other anarchists, a flint and steel, a flask of oil, and 5 gold pieces.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Public Enemy`,
			description: `It's better to keep your beliefs hidden as wanting to topple a government would most likely be met with hostility and have you executed. Luckily you know of others who share your ideals and may help you if it furthers the cause.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I can't help but try and prove what I'm doing is right.`,
				},
				{
					number: 2,
					description: `I witnessed the atrocities of king first-hand and it troubles me deeply.`,
				},
				{
					number: 3,
					description: `I'm constantly looking for people to help me fight.`,
				},
				{
					number: 4,
					description: `I keep to myself and often keep my intentions secret.`,
				},
				{
					number: 5,
					description: `Everyone is entitled to their own opinion and I will make mine known.`,
				},
				{
					number: 6,
					description: `Gold is near worthless in reality and don't particularly like being payed with it.`,
				},
				{
					number: 7,
					description: `I have killed people for going against me before and will do it again.`,
				},
				{
					number: 8,
					description: `I don't like getting my hands dirty and I prefer to manipulate Rulers into their own self-destruction.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Nihilism`,
					description: `Society is corrupt and cruel and people will benefit from it's removal. `,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					bold: `Relativsm`,
					description: `Everyone has their own morals and making people follow your own is wrong.`,
					alignment: `Any`,
				},
				{
					number: 3,
					bold: `Sociopath`,
					description: `Society did not accept me so I will burn it down to feel it's warmth.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Freedom`,
					description: `I want to do what I want and nobody can tell me otherwise.`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Equaliser`,
					description: `Power should be equal from one person to another.`,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Choice`,
					description: `People should know everything about their leader, they can then make judgement from that. `,
					alignment: `Lawful`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I work for the people to free they from oppression.`,
				},
				{
					number: 2,
					description: `The legal system is flawed and does more harm then good.`,
				},
				{
					number: 3,
					description: `Money has destroyed love and I see to put an end to it.`,
				},
				{
					number: 4,
					description: `The Elites are too prideful for their own good and it's my job to cut them down a notch.`,
				},
				{
					number: 5,
					description: `Kings sit back as his subjects fight his wars, I will end the unnecessary blood shed caused by a rulers lust for power.`,
				},
				{
					number: 6,
					description: `Nobles always abuse their position so I seek to make everyone equal.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I will only help if it benefits me in some way.`,
				},
				{
					number: 2,
					description: `	I refuse to listen to orders even if I know that they're the right course of action.`,
				},
				{
					number: 3,
					description: `I'm an incredibly spiteful person who will hold a grudge if you wrong me`,
				},
				{
					number: 4,
					description: `I hate egos and anyone you throws theirs around will face my wrath.`,
				},
				{
					number: 5,
					description: `If I consider your actions morally wrong I won't lift a finger to help you.`,
				},
				{
					number: 6,
					description: `	I'm stubborn and I refuse to change my beliefs.`,
				},
			],
		},
	},
	Ancient_Cultist: {
		isHomebrew: true,
		description: `You are part of a cult that follows an elder god, an ancient monstrosity or another such entity. You were either born into the cult's fold or joined later in life for one reason or another. For whatever reason, you've chosen to leave your former allies behind. Perhaps you can't stand what your "family" has done and what you've been made to do, and have decided to leave that life behind, or at least are trying to. On the other hand, perhaps you have set out on a private mission, received from the cult or directly from your god and you are willing to do everything in your power to finish it. Choose an elder god from those that exists within the world, or create one for your cultist to follow. Work with your GM to fashion and detail the cult, its practices and members, and seek to incorporate it into the world in a natural and logical way.`,
		skillProficiencies: `Arcana, Religion`,
		toolProficiencies: `Poisoner's Kit`,
		languages: ` One language of your choice`,
		startingEquipment: `A set of traveler's clothes, Holy Symbol, a marked dagger, and a pouch containing 10 gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `One of the Family`,
			description: `Thanks to your long affiliation with your cult, you can easily identify members of other cults that follow an esoteric entity like that of yours. This does not mean that you are held in high standing with such cults: the field of hidden worship is often a competitive one, and an adherent of one creed might stand in bloody opposition to a faithful of another. Nonetheless, you have insight into the nature of hidden religions and can usually recognize the basic features of any given cult.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Cultists are very much molded by the experiences they've faced within their own cult. Although many such cults are secretive and adherents don't speak publicly of their strange faith, cults tend to snake their way into all areas of a cultist's life. This influence, and the kind of personality it breeds, tends to linger long after a person has left the fold. Not all cultists are bad people, just as not all cults are inherently bad - but they do tend to be secretive, suspicious and even paranoid.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My past still haunts me in my dreams. I often wake up screaming or do not sleep at all.`,
				},
				{
					number: 2,
					description: `I anger quickly and I am prone to violent tantrums when someone tries to control me or give me orders.`,
				},
				{
					number: 3,
					description: `Being a pawn in someone else’s game left me with an inability to make choices of my own. I am indecisive.`,
				},
				{
					number: 4,
					description: `	I am having second thoughts about having left the cult. I am afraid I could easily return to my old ways given the right circumstances.`,
				},
				{
					number: 5,
					description: `Boundaries were violated time and time again in the cult until I lost sense of which boundaries were appropriate. I often behave inappropriately or in a seemingly random manner.`,
				},
				{
					number: 6,
					description: `	Constant feelings of shame, helplessness and inferiority make me change my mood at a moment’s notice. I suffer from mood swings or sudden emotional breakdowns`,
				},
				{
					number: 7,
					description: `I feel immense guilt over my past actions and welcome suffering as my atonement. I have little or no regard for my personal health.`,
				},
				{
					number: 8,
					description: `Every day I expect to get a knife in my gut and I see vengeful assassins in every shadow. I am paranoid or suspicious of others.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Protective`,
					description: `Dark cults trifle with powers that are beyond their understanding or control. Those fools must be stopped.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Nihilist`,
					description: `What’s the point of anything? People are insignificant and their struggle is futile. `,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bond: `Repentant`,
					description: `I cannot possibly undo the wrongs I have done, but I can still try and atone.`,
					alignment: `Good`,
				},
				{
					number: 4,
					bond: `Anarchist`,
					description: `Lives of men should not be ruled by anyone. No gods, no masters! `,
					alignment: `Chaotic`,
				},
				{
					number: 5,
					bold: `Faithful`,
					description: `While our cause is righteous, the cult's leaders are corrupt: I seek to follow my god's plans.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bond: ``,
					description: `Selfish. The world is doomed either way. Better make the most of it.`,
					alignment: `Evil`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `When I left the cult, I took one of its relics with me. For some strange reason, I cannot part with it.`,
				},
				{
					number: 2,
					description: `They were supposed to be sacrificed, but I helped them escape. Now I feel responsible for them.`,
				},
				{
					number: 3,
					description: `	It breaks my heart to know that my close friend, lover or family member is still a loyal follower of the cult.`,
				},
				{
					number: 4,
					description: `The cult leader made me kill my old friend during the initiation. I have not forgotten that and I want revenge.`,
				},
				{
					number: 5,
					description: `	I cannot stand by and watch as more children and youths get turned into mindless fanatics or are exploited for someone else's personal gain.`,
				},
				{
					number: 6,
					description: `No one must ever know about my involvement with the cult.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Sometimes, I hear voices in my head that command me to do terrible things. And sometimes, I give in.`,
				},
				{
					number: 2,
					description: `I trance out and lose touch with reality. I am sometimes delusional or experience delirious states.`,
				},
				{
					number: 3,
					description: `I take great solace in flagellation. The road to salvation is through blood and self-inflicted pain.`,
				},
				{
					number: 4,
					description: `Before I left, I was given a task by my cult's deity or leader that I am yet to fulfill.`,
				},
				{
					number: 5,
					description: `While at the cult, they kept us on drugs. I am still heavily addicted and I will do anything to get a dose.`,
				},
				{
					number: 6,
					description: `I dread the idea of killing another sentient creature. I have already spilled enough blood.`,
				},
			],
		},
	},
	Ancient_King: {
		isHomebrew: true,
		description: `At an ancient, perhaps long-forgotten point in history, you were a mighty ruler who lorded over your people, whether you were cruel or fair. Your name was known all across the land and your people prospered. But like all living things you eventually died, and were memorialised in a tomb. But now, for whatever reason you have risen again. Perhaps a necromancer rose you, or perhaps your patron god revived you for a certain purpose. But these lands are unfamiliar; the people, the environment, even the very ground beneath your feet may be different from how you remember. You had better get used to this new world quickly.`,
		skillProficiencies: `History, Survival`,
		toolProficiencies: `One type of gaming set`,
		languages: `Two of your choice`,
		startingEquipment: `A set of fine clothes, an ancient signet ring of your dynasty, and a ragged purse containing 15 gp.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Ancient Thinking`,
			description: `Since you died so long ago, your way of thinking is unusual for these modern times. Perhaps you believe something long since proven wrong, like that Drow are Fiends formed from the bowels of the earth. Perhaps you don't value the same things that other people do, like believing knowledge is a useless pursuit when compared to something strange such as jousting with boulders. Or perhaps you believe something more esoteric, like that nothing truly happens in the world without spirits deciding it should happen. Let your imagination flow and think of something like that.`,
		},
		alterateFeature: [
			{
				title: `Ancient Knowledge`,
				description: `Since you died so long ago, you may know things that have been lost to time, like how to manipulate a certain form of magic, or why an ancient civilisation fell. Whatever you know, there may be people searching for that information at any cost.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I've lost my kingdom, leave me to mourn for what I have lost.`,
				},
				{
					number: 2,
					description: `I don't need to care about anything anymore, my people have gone and I'm practically immortal now`,
				},
				{
					number: 3,
					description: `	This world is new, and I want to explore it!`,
				},
				{
					number: 4,
					description: `I ruled them once. So why don't people treat me the way I deserve!`,
				},
				{
					number: 5,
					description: `My anger often gets the better of me. But how dare people live while I don't!`,
				},
				{
					number: 6,
					description: `I am dignified in death, and have the patience only an undying ruler may have.`,
				},
				{
					number: 7,
					description: `I experienced death, and I fear it. Because of this, I'm a coward.`,
				},
				{
					number: 8,
					description: `There are new things to do in this world, and I want to do them all!`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Conquest`,
					description: `My rule will return, no matter how many bodies it takes!`,
					alignment: `Evil`,
				},
				{
					number: 2,
					bold: `Freedom`,
					description: `I've been gone for so long that I don't need to live up to any standards anymore. I can be whoever I want to be!`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Justice`,
					description: `Though my people may be gone, I still have to hold true to the ideal of a fair and just ruler.`,
					alignment: `Good`,
				},
				{
					number: 4,
					bold: `Order`,
					description: `The world I know is different from this new one, it must be tamed.`,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Rebuilding`,
					description: `This world has changed, but I have to rebuild my life no matter the cost`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Exploiting`,
					description: `This world is one of opportunity, and I plan to take advantage of that.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Whatever caused my people to be gone from this world will pay!`,
				},
				{
					number: 2,
					description: `	I need to find out what caused me to rise from my grave.`,
				},
				{
					number: 3,
					description: `Something was stolen from my tomb, and I want it back!`,
				},
				{
					number: 4,
					description: `I had a friend when I was alive, and I want to know what happened to them.`,
				},
				{
					number: 5,
					description: `My people are gone from this world, and I will preserve their memory.`,
				},
				{
					number: 6,
					description: `	I had an old rival from another Kingdom who wronged me, I want to know what happened to him, and whether or not I'll be able to settle the score.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I believe I'm above everybody else, and that they don't even deserve to be in the same building as me.`,
				},
				{
					number: 2,
					description: `My curiosity for this new world often gets me into trouble.`,
				},
				{
					number: 3,
					description: `	I often get distracted by thoughts of what could have happened to my Kingdom.`,
				},
				{
					number: 4,
					description: `I'm slow to come up with or trust new ideas because of my age.`,
				},
				{
					number: 5,
					description: `	Whenever someone speaks of my kingdom in a bad light, I fly into a burning rage.`,
				},
				{
					number: 6,
					description: `I am extremely superstitious, believing otherwise mundane things in a strange way, to ward off bad spirits and the like.`,
				},
			],
		},
	},
	Ancient_One: {
		isHomebrew: true,
		description: `Long, long ago, you ventured into the world to play your part in history. However, for whatever reason, history has moved on, and you continue to exist. You do not age naturally, or contract common diseases, and have lived several lifetimes beyond your race's eldest. Were you blessed by a deity, to gather knowledge far beyond your years? Cursed by fate to watch everyone around you wither away from age and disease? Or mayhap a victim of your own magical experimentation? Regardless of the cause, your soul refuses to give up its claim to life, and gives you an ancient perspective on life.

					Where some immortals are relatively young and rash, though, you are far older than your appearance may imply, and you've lived a far sight longer than much anyone alive. You've seen kingdoms rise and fall, history be made, and both good and evil waste away to the passage of time.

					The details of your immortality are best left to you and your DM, but it's recommended to use the vanilla Boon of Immortality that prevents aging. Alternative methods could be a dark magic using phylacteries, or some sort of rebirth as a child elsewhere on death.`,
		skillProficiencies: `History, Insight`,
		toolProficiencies: ``, // possibly add
		languages: `Two languages of your choice`,
		startingEquipment: `A set of traveller's clothes, a heavy cloak or robe, a small trinket from a past life that you always seem to find, and a pouch containing 15 gp`,
		backgroundSpecial: {
			title: `Source of your Soul`,
			description: `What gives you your undying soul? Why do you live on beyond your years?`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `I was blessed and given a purpose by a benevolent being.`,
				},
				{
					number: 2,
					description: `	I was cursed by a cruel being to watch the end of the world.`,
				},
				{
					number: 3,
					description: `	I obtained a Wish spell and gained immortality, for better or worse.`,
				},
				{
					number: 4,
					description: `I won a bet against a god of death itself in a time long past, and obtained reincarnation.`,
				},
				{
					number: 5,
					description: `I meticulously set up a cycle of clones and phylacteries to obtain my own immortality.`,
				},
				{
					number: 6,
					description: `I don't know why I'm immortal... only that I'm older than I've any right to be.`,
				},
			],
		},
		feature: {
			title: `Lifetimes of Experience`,
			description: `Ancient perspectives give one a broad range of knowledge and history to draw from, though they often cloud new ideas from being formed. You can often recall information about places that many characters have never ventured, or extrapolate based off similar events. Similarly, historical facts come naturally to you, and many a scholar or ruler values your counsel if you make it available.`,
		},
		alterateFeature: [
			{
				title: `A World of Connections`,
				description: `As time passed, you cultivated your connections. In any major town, you know ways to gain an audience with important people. Names to drop, people to refer to, symbols to pull up, and various catchphrases to get you into high (and sometimes low) places. These people may not always know why you know these things, though, so getting the audience itself may be all you can manage.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `While most Ancient Ones simply do not age or contract disease, some simply found a way to reincarnate, albeit generally slowly and with some form of penalty. Others have obtained some kind of far more effective means, though the player should consult with their DM for anything stronger than agelessness or rebirth. Most adventuring Ancient Ones, though, have some quirk pushing them out of their timeless vigils, or a cause pushing them on. Below are some ideas to get you started.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `	I obsess about my appearance. If I'm this old, I refuse to look it!`,
				},
				{
					number: 2,
					description: `My worldview is old and obtuse to many, but I won't change it for children.`,
				},
				{
					number: 3,
					description: `Having seen most everything, I spent time away from the world, to let it catch up. What new things can I explore?`,
				},
				{
					number: 4,
					description: `	I cannot, for the lives of me, replicate the cause of my immortality. I'm so close, though!`,
				},
				{
					number: 5,
					description: `The world is doomed to repeat itself, and my melancholy attitude makes few friends.`,
				},
				{
					number: 6,
					description: `My odd mannerisms tend to make people uneasy, though my knowledge tends to eventually make allies.`,
				},
				{
					number: 7,
					description: `I have a tendency to get bored with what many consider new, and seem disrespectful because of this.`,
				},
				{
					number: 8,
					description: `Others are unimportant compared to the grand designs of the universe, and I plan to be more than a cog.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Knowledge`,
					description: `My knowledge is meant to be gathered and shared freely, with all who wish to know.`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Prophecy`,
					description: `There are things far beyond the ken of mortals, and I will carry out what must be done.`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Entropy`,
					description: `Infinite time means infinite plans to serve my ends... and mine shall come to fruition soon.`,
					alignment: `Chaos`,
				},
				{
					number: 4,
					bold: `Calamity`,
					description: `The only way to end my cycle is to end the world, and I shall be the one to usher in the end of eras.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Rest`,
					description: `I only wish to find a way to end this cycle, and finally make peace`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Beyond`,
					description: `I have obtained immortality... but what could be even further beyond? `,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `	Bonds are hard to form, as other mortals have such short lives.`,
				},
				{
					number: 2,
					description: `My immortality is the closest of my secrets, and the knowledge slipping away could do irreversible harm.`,
				},
				{
					number: 3,
					description: `I do not form alliances easily, and trust slowly.`,
				},
				{
					number: 4,
					description: `I revere the one that gave me immortality, and seek to understand them.`,
				},
				{
					number: 5,
					description: `	I resent the one that thrust immortality upon me, and seek to undermine them.`,
				},
				{
					number: 6,
					description: `I wish to find those from my past - or their kin - and rekindle the bonds, but worry they won't realize who I am.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I tire of the world, and find no joy in things.`,
				},
				{
					number: 2,
					description: `Anything new sends me into an overexcited frenzy.`,
				},
				{
					number: 3,
					description: `I obsess over knowledge of all kinds, and must seek out anything new.`,
				},
				{
					number: 4,
					description: `My immortality and drive leave me somewhat callous, and underlings tend to get churned up in my wake.`,
				},
				{
					number: 5,
					description: `Time wears on the mind, looping over and over and over, until the madness sets in. Oh, the glorious madness!`,
				},
				{
					number: 6,
					description: `I know all. I am not wrong, and any who disagree with me are foolish whelps.`,
				},
			],
		},
	},
	Anthropologist: {
		isHomebrew: true,
		description: `You have always been fascinated by other cultures, from the most ancient and primeval lost lands to the most modern civilizations. By studying other cultures, customs, philosophies, laws, rituals, religious beliefs, languages, and art, you have learned how tribes, empires, and all forms of society in between craft their own destinies and doom. This knowledge came to you not only through books and scrolls, but also through firsthand observation – by visiting far-flung settlements and exploring local histories and customs.
					When making an anthropologist, consider how your character developed this interest in others. Usually, anthropologists have to be good at interacting with people of all cultures, so being a withdrawn misanthrope really doesn't fit the bill. Anthropologists are good at field work, like conducting ethnographies. They are also slow to judge, and good at gathering information and making inferences about the subjects of their study. Sometimes you may be ore interested in specifically the language of a culture, or maybe its history.
					Alternatively, forensic anthropologists are those who study the structure of bones. They are highly intellectual individuals that can piece together a skull from pieces, and also discern special things about a persons identity from their skeletal remains. This profession can invite stigma, as it closely deals with the dead. Fascination with bones overall is also not usually welcomed.`,
		skillProficiencies: `Insight, Religion`,
		toolProficiencies: ``,
		languages: `Two languages of your choice`,
		startingEquipment: `A leather-bound diary, a bottle of ink, a quill, a set of traveler's clothes, one trinket of special significance from a culture of your study, and a pouch containing 10 gp`,
		backgroundSpecial: {
			title: `Specialization`,
			description: `Anthropologists study a wide variety of cultures and subjects. A specialization helps better define what you have studied and perhaps what you know of your world and the locale.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Biological Anthropology`,
				},
				{
					number: 2,
					description: `Cultural Anthropology`,
				},
				{
					number: 3,
					description: `Linguistics`,
				},
				{
					number: 4,
					description: `Archaeology`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Cultural Chameleon`,
			description: `Before becoming an adventurer, you spent much of your adult life away from your homeland, living among people different from your kin. You came to understand these foreign cultures and the ways of their people, who eventually treated you as one of their own. One culture had more of an influence on you than any other, shaping your beliefs and customs. Choose a race whose culture you've adopted. You are considered a friend to the race by their major groups, and they will be willing to help you out, so long as it does not conflict with their own interests or endanger their own`,
		},
		alterateFeature: [
			{
				title: `Eye for Bone`,
				description: `You have adept eyes and senses for bones as an anthropologist. From skeletal remains, you can determine creature type, sex and age of the deceased.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Anthropologists leave behind the societies into which they were born to discover what life ls like in other parts of the world. They seek to see how other races and civilizations survive – or why they did not. Some anthropologists are driven by intellectual curiosity, while others want the fame and recognition that comes with being the first to discover a new people, a lost tribe, or the truth about an ancient empire's downfall.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I prefer the company of those who aren't like me, including people of other races.`,
				},
				{
					number: 2,
					description: `	I'm a stickler when it comes to observing proper etiquette and local customs`,
				},
				{
					number: 3,
					description: `I would rather observe than meddle.`,
				},
				{
					number: 4,
					description: `By living among violent people, I have become desensitized to violence.`,
				},
				{
					number: 5,
					description: `I would risk life and limb to discover a new culture or unravel the secrets of a dead one.`,
				},
				{
					number: 6,
					description: `When I arrive at a new settlement for the first time, I must learn all its customs.`,
				},
				{
					number: 7,
					description: `I ask more questions than I give answers.`,
				},
				{
					number: 8,
					description: `When I want to know something, everything else takes a back seat.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Discovery`,
					description: `I want to be the first person to discover a lost culture.`,
					alignment: `Any`,
				},
				{
					number: 2,
					bold: `Distance`,
					description: `One must not interfere with the affairs of another culture – even one in need of aid.`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Knowledge`,
					description: `By understanding other races and cultures, we learn to understand ourselves.`,
					alignment: `Any`,
				},
				{
					number: 4,
					bold: `Power`,
					description: `Common people crave strong leadership, and I do my utmost to provide it. `,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Protection`,
					description: `I must do everything possible to save a society facing extinction. `,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Indifference`,
					description: `Life is cruel. What's the point in saving people if they're going to die anyway? `,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.`,
				},
				{
					number: 2,
					description: `Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring`,
				},
				{
					number: 3,
					description: `Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.`,
				},
				{
					number: 4,
					description: `	I want to learn more about a particular humanoid culture that fascinates me.`,
				},
				{
					number: 5,
					description: `I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.`,
				},
				{
					number: 6,
					description: `I have a trinket that I believe is the key to finding a long-lost society.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Boats make me seasick.`,
				},
				{
					number: 2,
					description: `I talk to myself, and I don't make friends easily.`,
				},
				{
					number: 3,
					description: `I believe that I'm intellectually superior to people from other cultures and have much to teach them.`,
				},
				{
					number: 4,
					description: `I've picked up some unpleasant habits from living among races such as goblins, lizardfolk, or orcs`,
				},
				{
					number: 5,
					description: `I complain about everything.`,
				},
				{
					number: 6,
					description: `I sometimes get ahead of myself.`,
				},
			],
		},
	},
	Antiquarian: {
		isHomebrew: true,
		description: `You study ancient lore and recover priceless artifacts from past civilizations and bygone ages. You preserve that which was once thought lost, and seek to uncover the forgotten stories of those who came before. Your journeys often take you to abandoned ruins far removed from the comforts of modern civilization, but there is nowhere else you’d rather be. You’ve seen some of the greatest historical wonders the world has to offer, and you may have even helped discover some of them.`,
		skillProficiencies: `History, Investigation`,
		toolProficiencies: `Calligrapher's supplies`,
		languages: `One of your choice`,
		startingEquipment: `A bottle of black ink, a quill, a tome that appears to contain the history of an unknown settlement or culture, a set of traveler's clothes (Indiana Jones hat Included), and a belt pouch containing 10 gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `It Belonggs in a Museum`,
			description: `You are a member of a respected museum, university, or other organization that preserves relics of ages past. You can gain access to the facilities where such antiquities are stored and can participate in their study. You may be allowed to accompany expeditions seeking to explore ruins or retrieve items of historical interest, if your area of expertise is relevant to the task at hand.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Because they spend large amounts of time studying the past, antiquarians tend to be quite knowledgeable, although they can sometimes be ignorant to more modern happenings. They are often excited by new discoveries, and are fascinated by exotic cultures and practices. Their social lives often leave much to be desired, as they frequently disappear for days or weeks at a time exploring lost ruins.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I quote historical texts and famous philosophers whenever they seem relevant to the situations I’m in.`,
				},
				{
					number: 2,
					description: `	I insist on checking every ruined fortress, abandoned town, and forgotten castle I come across.`,
				},
				{
					number: 3,
					description: `I speak in a dull monotone that is more likely to put others to sleep than to entertain them.`,
				},
				{
					number: 4,
					description: `	I am more interested in the past than the present; as a result, I am mostly asocial.`,
				},
				{
					number: 5,
					description: `Whenever I meet a new person, I try to learn about their history if at all possible`,
				},
				{
					number: 6,
					description: `I freely offer my knowledge to those who wish to learn, and I encourage those I know to do so as well`,
				},
				{
					number: 7,
					description: `I enjoy going through ruins for the adventure; getting to experience lost history is just a bonus.`,
				},
				{
					number: 8,
					description: `Ignorance frustrates me, and I always try to correct others when they’re wrong.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Preservation`,
					description: `	Preservation We must protect the relics of the past, else their creators will fade from memory.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Betterment`,
					description: `Betterment By studying the mistakes of our elders, we might prevent the mistakes of our children.`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Dominance`,
					description: `The past holds secrets I can use against those who oppose me.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Trophy`,
					description: `The original inventors of these relics are dead; why shouldn’t I hold on to them for a while? `,
					alignment: `Chaotic`,
				},
				{
					number: 5,
					bold: `Expertise`,
					description: `I must become the authority in my field of study.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Vigil`,
					description: `Only by remembering the dead do we honor their accomplishments.`,
					alignment: `Lawful`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I must prevent the relics of the past from falling into the hands of thieves and looters.`,
				},
				{
					number: 2,
					description: `The historical works of my race must be preserved for the enrichment of future generations.`,
				},
				{
					number: 3,
					description: `I work to uncover the truth of past events, even if doing so is harmful to my nation or organization.`,
				},
				{
					number: 4,
					description: `My family, clan, or guild has a rich history, and I must ensure that others are aware of its importance`,
				},
				{
					number: 5,
					description: `I will perform the heroic deeds that future historians will surely write about.`,
				},
				{
					number: 6,
					description: `	If an artifact has been entrusted to me, I will protect it at all costs, even my life.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have falsely claimed to have discovered a forgotten civilization and faked evidence to support it.`,
				},
				{
					number: 2,
					description: `If I ever find a relic of singular worth, I might keep it for myself…or for the merchant down the road.`,
				},
				{
					number: 3,
					description: `There is an intense rivalry between myself and a particular colleague, and it often clouds my judgment.`,
				},
				{
					number: 4,
					description: `I pretend to know far more than I actually do, and will often ignore any evidence that proves me wrong.`,
				},
				{
					number: 5,
					description: `I care more for the money I’m paid by the museums than for the artifacts I deliver to them`,
				},
				{
					number: 6,
					description: `My obsessive search for a particular object has pushed my loved ones away.`,
				},
			],
		},
	},
	Apothecary: {
		isHomebrew: true,
		description: `The world you live in remains anchored in certain practices that have yet to approach that of modern medicine. But illness does not wait for progress. People are dying and ailing from a litany of diseases and poxes that plague your days. As an apothecary, you are one of the few recourses for the people. With your knowledge of tinctures and cures, you travel the land to find new cures and uses for nature's bounty. With rather primitive tools, you play the role of pharmacologist, doctor, and pharmacist. In addition to learning of ailments, you also know of their cures, causes, and how to construct their cures. Some apothecaries even know the opposite: they can recreate the poison. While apothecaries are not solely limited to what they can do with herbs, plants and natural minerals are their most trusted sources of medicine. Some even know the art of extracting vital material from animals.
					When making an apothecary character, think about their motivation for going down this route of work, which can be harsh and grating, as one has to witness death. Are you perhaps a stalwart believer in healing anyone, no matter their finances? Perhaps you are more of a scientist type, interested in the crafting aspect of apothecaries rather than the social doctor side of things. Being skilled with nonmagical means, apothecaries can often be called conmen who sell snake oils due to the inadequacy of their cures compared to magic. However, in a world where magic may not be ample, people are not picky. Apothecaries can often find themselves the judge of someone's life, holding the key to whether they live or die. Such a power can corrupt a healing man, making them depraved and arrogant. It is not impossible nor unheard of for apothecaries to be greedy, turning a blind eye to the poor in need. There are still yet even those who devote themselves solely to the concoctions of deadly poisons to kill, and sell them to assassins and figures of the underworld for the highest of prices.`,
		skillProficiencies: `Medicine and Nature.`,
		toolProficiencies: `Herbalism Kit.`,
		languages: `One of your choice.`,
		startingEquipment: `Herbalism kit, a merchant’s scale, a set of common clothes, and a belt pouch containing 10 gp.`,
		backgroundSpecial: {
			title: `Practice`,
			description: ``,
			die: `1d4`,
			roll: [
				{
					number: 1,
					description: `Poisoner. You specialize in the concoctions of lethal and deadly substances, including hallucinogens and other drugs`,
				},
				{
					number: 2,
					description: `Doctor. You spend your time mostly treating the sick`,
				},
				{
					number: 3,
					description: `Researcher. You focus on the procurement of materials and studying their uses for others to practice.`,
				},
				{
					number: 4,
					description: `Con Man. You peddle false cures for money, though you might know a thing or two about actual medicine.`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Purveyor of Cures`,
			description: `You have a reputation as a healer of the sick, and are often called upon by those who are diseased or injured. You can usually gain an audience with anyone who needs treatment — even if protocol would normally prevent you from doing so — simply by agreeing to offer your assistance.`,
		},
		alterateFeature: [
			{
				title: `Poison or Cure`,
				description: `By spending a few minutes examining a chemical — a vial of liquid, a packet of ground powder, or the like — you can determine whether the substance is intended to harm or heal (or neither). This examination does not reveal any specific information about the substance(such as that a powder is actually an inhaled poison, or that it paralyzes its victim), only that it is either harmful or helpful to those that it is used on.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Apothecaries are defined by their attention to detail. Because so many of the illnesses they treat often have similar symptoms, they are careful about the things they say and the questions they ask, always looking to gather precise and accurate information. They tend towards cleanliness and organization, as they need to keep their tools sterile and their supplies ready at all times.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I distance myself from everyone, even those I care about.`,
				},
				{
					number: 2,
					description: `I keep all of my possessions meticulously clean, and I hate any kind of filth.`,
				},
				{
					number: 3,
					description: `	I am honest to a fault; knowing all of the information is the only way to make an accurate diagnosis.`,
				},
				{
					number: 4,
					description: `I make incredibly poor jokes in an attempt to put others at ease.`,
				},
				{
					number: 5,
					description: `I talk down to others when speaking on a field I believe myself to be knowledgeable in.`,
				},
				{
					number: 6,
					description: `I present everything I say as a guess or estimate so that I don’t look bad if it turns out to be wrong.`,
				},
				{
					number: 7,
					description: `It seems like I always try to strike up a conversation at the worst possible moment.`,
				},
				{
					number: 8,
					description: `I set very high standards for myself, and expect others to follow my example.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Aid`,
					description: `Every sick or wounded person deserves my help, regardless of the life they lead.`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Control`,
					description: `By deciding who lives and who dies, I can shape the world to my liking.`,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Loyalty`,
					description: `It is my duty to treat those to whom I have sworn allegiance.`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Efficiency`,
					description: `I am not emotionally invested in those I aid; to act otherwise would compromise my work.`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Prevention`,
					description: `Stopping the spread of sickness is better than treating it. `,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Research`,
					description: `In order to treat patients effectively, we must understand the maladies afflicting them. `,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `	I share my discoveries with my fellow apothecaries, to further the goals of our trade.`,
				},
				{
					number: 2,
					description: `I give my aid to those who protect my country and my ruler.`,
				},
				{
					number: 3,
					description: `Many medicinal reagents are rare or hard to find; those who secure them deserve respect.`,
				},
				{
					number: 4,
					description: `I seek a cure to a mysterious disease that afflicts one of my loved ones.`,
				},
				{
					number: 5,
					description: `I wish to prove that “mundane” healing is just as viable as magic.`,
				},
				{
					number: 6,
					description: `I work closely with a group that aims to eliminate a particular disease from existence.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I use unproven treatments on my patients without their knowledge.`,
				},
				{
					number: 2,
					description: `	I refuse to give aid to those of a certain species or nationality, no matter how desperately they need it.`,
				},
				{
					number: 3,
					description: `If a disease is particularly deadly, I refuse to treat it out of fear for my own health.`,
				},
				{
					number: 4,
					description: `Memories of a horrible plague that I failed to cure still haunt me to this day.`,
				},
				{
					number: 5,
					description: `	The sight of blood makes me queasy, and I can only treat those who have no external wounds`,
				},
				{
					number: 6,
					description: `	I am only interested in the ailments my patients suffer from, not the people themselves.`,
				},
			],
		},
	},
	Archaeologist: {
		isHomebrew: true,
		description: `Following many years of education and workplace experience, digging up and researching ancient cultures and societies, you've made connections with various organizations; selling artifacts and historical research to nobles, governments, and collectors hoping to honor the past, as well as to mage houses and criminals hoping to harness ancient powers. Your own moral compass dictates whom you're willing to do business with, but there always seems to be interested buyers and benefactors when you're around people with money. Years in the field have taught you how to identify how old and how valuable (or worthless) these finds might be. And while this might make you some money, and gain you some notoriety, it's also likely to put you on a dangerous path from time to time. Many of your finds are in long-forgotten, trap-filled areas, and sometimes, legends - true or not - will put others on the same path as you.`,
		skillProficiencies: `History, Investigation`,
		toolProficiencies: `Thieves’ Tools`,
		languages: `While you can't speak either, you can understand and read both Celestial and Infernal`,
		startingEquipment: `Notepad w/ Charcoal Pencil, Map/Scroll Case, Climber's Kit, Lamp & flask of oil, Thieves' Tools, Empty Lockbox, 2 Empty Vials, and a keepsake from an early dig-site (ex: small animal skeleton, ancient arrowhead, centuries-old silverware, etc)`,
		backgroundSpecial: {
			title: `Historical Focus`,
			description: ``,
			die: `1d4`,
			roll: [
				{
					number: 1,
					description: `Gravesites`,
				},
				{
					number: 2,
					description: `Ancient Text`,
				},
				{
					number: 3,
					description: `Magical Artifacts`,
				},
				{
					number: 4,
					description: `Religious Origins`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Sixth Sense`,
			description: `You seem able to sense if you're close to discovering something special on an expedition, which gives you some insight or whether a dig is worth your time within the first hours, rather than wasting days, if not years on fruitless digs as some other do.`,
		},
		alterateFeature: [
			{
				title: `Fence Connections`,
				description: `While you might not be the greatest salesmen, over the years you've made connections with intermediaries in your field that can usually find a buyer for whatever it is you're trying to unload. You'll have to pay a percentage, but it usually works out in your favor overall.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I live for the thrill of the find`,
				},
				{
					number: 2,
					description: `	I love selling stuff I simply pulled out of the ground`,
				},
				{
					number: 3,
					description: `The knowledge gained is my reward`,
				},
				{
					number: 4,
					description: `I've been secretly looking for something specific this whole time`,
				},
				{
					number: 5,
					description: `I only started all this to impress someone`,
				},
				{
					number: 6,
					description: `I hate my life, but feel trapped in my station`,
				},
				{
					number: 7,
					description: `I'll never stop looking for the next treasure`,
				},
				{
					number: 8,
					description: `I long to find a score big enough to retire on`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Respect`,
					description: `The treasures of yesteryear should be honored and respected.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Reverence`,
					description: `The dead deserve to be remembered in a world full of so much loss. `,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Pragmatism`,
					description: `I could use this stuff more than the dead who possess it.`,
					alignment: `Neutral`,
				},
				{
					number: 4,
					bold: `Ambitious`,
					description: `There is power to be derived from the secret of the past, and it should be mine.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Excitement`,
					description: `Life is short, have fun while you can and enjoy your finds `,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Greed`,
					description: `In this world gold means survival, and I'll survive by any means.`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I will never forget the lessons learned from my teacher, he was a good man whom I will honor through my deeds.`,
				},
				{
					number: 2,
					description: `I will never part with _______, a relic from my first expedition that keeps me grounded.`,
				},
				{
					number: 3,
					description: `No matter how far I travel or how long I'm gone, I know that I have someone back home who awaits my return, and I take comfort in that.`,
				},
				{
					number: 4,
					description: `So long as there is coin in my pocket, my mind is generally at ease, as I draw a line from gold to peace.`,
				},
				{
					number: 5,
					description: `I loved someone long ago, and the memory of them (be it a delusional misremembrance or not) keeps me moving`,
				},
				{
					number: 6,
					description: `I've got my trusty shovel, and that's all I need. With it, the next find is always just a matter of when and where.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `	My arrogance often betrays me in social situations.`,
				},
				{
					number: 2,
					description: `I am better at dealing with skeletons than living people.`,
				},
				{
					number: 3,
					description: `My short fuse can be an issue in negotiations`,
				},
				{
					number: 4,
					description: `A lack of confidence causes me to bite my tongue when I should speak up.`,
				},
				{
					number: 5,
					description: `	I sometimes voice my unpopular opinion too loudly and at the wrong times.`,
				},
				{
					number: 6,
					description: `I am a fraud, but I'm pretty good at faking it so long as no one is around that knows more than me.`,
				},
			],
		},
	},
	Arranged_Marriage: {
		isHomebrew: true,
		description: `From an early age you were betrothed to someone of power and significance. Your whole life has been about preparing you for your marriage vow and married life. You have diligently practiced the skills, protocols, and customs expected of you. But now the marriage is finished! Your life was prescribed for you by others, but now you find yourself in existential limbo.
					What was the nature of your marriage? Was it to bond two powerful families or perhaps a regular custom among your people? Was the marriage a religious anointment and you were to be wedded to a supernatural entity? What caused the marriage to prematurely end or did you never reach the altar?`,
		skillProficiencies: `Performance, Persuasion`,
		toolProficiencies: ``,
		languages: ``,
		startingEquipment: `10gp, betrothal ring worth 15gp`,
		backgroundSpecial: {
			title: `A Narrow Escape`,
			description: `After years of preparation what caused the marriage to fail?`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `My betrothed rejected me.`,
				},
				{
					number: 2,
					description: `I jilted my betrothed.`,
				},
				{
					number: 3,
					description: `I decide who I’m going to marry.`,
				},
				{
					number: 4,
					description: `My betrothed died just before we were to be wedded.`,
				},
				{
					number: 5,
					description: `Duty is part of who I am.`,
				},
				{
					number: 6,
					description: `I am ambitious. I'm always looking for the next opportunity to further my standing.`,
				},
			],
		},
		feature: {
			title: `Tragic History`,
			description: `Your story is parable for the times. When goodly people hear your heart-rending tale (truthful or otherwise) they will be sympathetic towards you. The sympathetic can be counted as short-term friends; they will be inclined to give discounts for their trade and services.
`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am headstrong and willful.`,
				},
				{
					number: 2,
					description: `I can't take the weight of expectation and so I run from my responsibilities.`,
				},
				{
					number: 3,
					description: `I am a master of the long-game. I am calculating and patient.`,
				},
				{
					number: 4,
					description: `I do what is expected of me despite how I feel.`,
				},
				{
					number: 5,
					description: `Duty is part of who I am.`,
				},
				{
					number: 6,
					description: `I am ambitious. I'm always looking for the next opportunity to further my standing.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Honor`,
					description: `I failed my family I must find a way to repay them. `,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Liberty`,
					description: `No one should have their lives controlled by another.`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Corrupt`,
					description: `This was always the plan, take the dowry and run.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Penance`,
					description: `I seek redemption for past failings`,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Power`,
					description: `The stronger I become the more I can control my own destiny.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Self Interest`,
					description: `I’m free to do what I want to do`,
					alignment: `Evil`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My betrothed’s family and their agents are pursuing me.`,
				},
				{
					number: 2,
					description: `My family and their associates are pursuing me`,
				},
				{
					number: 3,
					description: `The marriage preparations were costly. I have debts that require repaying.`,
				},
				{
					number: 4,
					description: `The dowry should rightfully be mine. I will claim what is owed me.`,
				},
				{
					number: 5,
					description: `Someone I cared about died because the marriage failed. I must redeem myself.`,
				},
				{
					number: 6,
					description: `I will prove that I am worth more than that stupid marriage.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I find commitment difficult.`,
				},
				{
					number: 2,
					description: `I spent my formative years in indentured servitude. I won't take orders from anyone.`,
				},
				{
					number: 3,
					description: `My life was prescribed for me, now I struggle to make my own choices.`,
				},
				{
					number: 4,
					description: `Love is pain. I can never feel that way again.`,
				},
				{
					number: 5,
					description: `I am haunted by what happened to me. I fear betrayal at every turn.`,
				},
				{
					number: 6,
					description: `The scandal surrounding my marriage prevents me from ever going home again. Trouble seems to follow me around.`,
				},
			],
		},
	},
	Artist: {
		isHomebrew: true,
		description: `Artists are sought after and respected individuals all over the world. No matter their race age or gender, all artists are loved for their talent to place life and emotion into things such as clay, stone and paint. As an Artist you have perfected your art to the point that people pay to see you and pay your for your grand works of art. When choosing this background for your character you must ask yourself these questions: Is your character self taught? Are they a natural at what they do, or must they work as hard as they can everyday? Is your character struggling or successful? If they are indeed good at what they do, are they well known or new to the artist scene? Do they have a high opinion of themselves or are they humble? What has brought them into the world of adventuring? Did they choose to follow a band of warriors for inspiration? Or are they caught in the midst of a mess they cant get out of?`,
		skillProficiencies: `Sleight of Hand and History`,
		toolProficiencies: `Artist's Tools`,
		languages: `One language of your choice`,
		startingEquipment: `Artist's Tools, a set of common clothes and a belt pouch with 10gp.`,
		backgroundSpecial: {
			title: `Specialization`,
			description: `Not every artist is great at everything. Though you may dabble with the different types of artistry, there will always be one thing that places you above the rest. What is that thing? And are you the best?`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Painter`,
				},
				{
					number: 2,
					description: `Playwright`,
				},
				{
					number: 3,
					description: `Sculpter`,
				},
				{
					number: 4,
					description: `Composer`,
				},
				{
					number: 5,
					description: `Architect`,
				},
				{
					number: 6,
					description: `Novelist`,
				},
			],
		},
		feature: {
			title: `Commisioned Artist`,
			description: `You are a Commissioned Artist. You are known well throughout your local area or maybe even globally by many important figures. On request, you may even be able to gain entry into royal courts and meetings with rich merchants who want a commissioned piece. You get paid ahead of time for your efforts, you must discuss and negotiate the price you will be paid for your art work.`,
		},
		alterateFeature: [
			{
				title: `The People's Poet`,
				description: `You have made a name for yourself making works of art that point out the flaw in society, making fun of those in charge, of religion, law enforcement. Though Royals and Rich Merchants may not fancy your company the common people love you for your satirical and controversial artwork.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `A life surrounded by artists and critics has molded you into the person you are today. What do you create for?`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My art is my life, my works, my soul, and I will defend my creations at all costs.`,
				},
				{
					number: 2,
					description: `I am my own worst critic. There is nothing you can say about me I haven't already said to myself.`,
				},
				{
					number: 3,
					description: `I am not worth the time of the common folk. Their gold pouches are simply too light for me.`,
				},
				{
					number: 4,
					description: `The people deserve to be heard and I am their voice! Viva la revolution!`,
				},
				{
					number: 5,
					description: `I am like the art I create. I flow, I feel. I do what feels natural, what feels right.`,
				},
				{
					number: 6,
					description: `Art is like magic or science; there are strict rules to follow, and ignoring those leaves you no better than a three year old with a pile of clay.`,
				},
				{
					number: 7,
					description: `I create beautiful things to woo beautiful folk.`,
				},
				{
					number: 8,
					description: `My art is private. Only my commissioned works are for the public eye.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Cubism`,
					description: `I must do what is commissioned of me, or I wont get payed.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Abstract`,
					description: `I flow from place to place, doing what's best for me.`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Vandalism`,
					description: `The world is my canvas- I will paint it how I please and no one will tell me otherwise! `,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Realism`,
					description: `I deal with whats real, and try and help as many as I can along the way.`,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Impressionism`,
					description: `I have a great deal to learn from those around me. They are the inspiration for my work.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Minimalism`,
					description: `A little bit of this and a little bit of that is all you need in life.`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am forever indebted to the one who taught me my craft.`,
				},
				{
					number: 2,
					description: `I am simply trying to provide for my family.`,
				},
				{
					number: 3,
					description: `I am constantly trying to win the affection of the one whose caught my eye.`,
				},
				{
					number: 4,
					description: `I am drawn to travel, to see the world and recreate it's wonders in art.`,
				},
				{
					number: 5,
					description: `I am forever locked in competition with my long time rival. They always seem to be one step ahead.`,
				},
				{
					number: 6,
					description: `I will not call a task complete until I am certain it is the best I can possibly do`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I will kill the critic who depreciates my work!`,
				},
				{
					number: 2,
					description: `If there's no way I'll gain from it, there's no way I'll do it.`,
				},
				{
					number: 3,
					description: `I get jealous easily, especially around other artists`,
				},
				{
					number: 4,
					description: `I will do anything for a slow turn from a nice pair of legs.`,
				},
				{
					number: 5,
					description: `I am the BEST at what I do, and I laugh at those who suggest they can find one better than I.`,
				},
				{
					number: 6,
					description: `I spend most of my gold overindulging in life's pleasures.`,
				},
			],
		},
	},
	Aspirant: {
		isHomebrew: true,
		description: `Growing up, we’ve all heard or read legends of selfless heroes and dastardly villains. These stories stick with us our entire lives and tend to inspire us in one way or another. But you…you’ve taken it a step beyond. Whether you call it passion or obsession, the “hero” of these legends has influenced every facet of your life, down to very decisions you make. Some aspirants become traveling storytellers, spreading the tales of their idol across the world. Others follow in the footsteps of their idol, using him or her as an inspiration to aspire to. A small few, however, have become so enveloped in these legends that they’ve become completely delusional, believing THEMSELVES to be the very idol from these stories.`,
		skillProficiencies: `Performance and History`,
		toolProficiencies: `Calligrapher tools or Disguise Kit`,
		languages: `A language that your idol knows`,
		startingEquipment: `A bottle of black ink, a quill, a tome or scrolls with the legends of your idol written out, common clothes, a costume inspired by your idol, and a belt pouch containing 10 gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Just Like in the Stories`,
			description: `Considering how often their idol’s legacy is on their mind, aspiriants are always trying to find connections between their lives and the folklore surrounding their idol.

						Roll a D10. If you roll a 9 or 10, your current situation bears an uncanny resemblance to one your idol was in. What this means is completely up to the discretion of the DM. You may remember a weakness that your idol exposed against a similar enemy or meet a new person in the same way your idol met their love interest meaning you know that new person's motives.

						This may be rolled whenever you make a check where you are experiencing something "for the first time". Examples of this include the first time you meet a new NPC, the first time you visit a new location, the first time you see a quest specific item, etc.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I believe that my idol and I are connected in some way.`,
				},
				{
					number: 2,
					description: `I try to make connections between my idol’s situations and my own.`,
				},
				{
					number: 3,
					description: `Sometimes my passion is confused for obsession. However, sometimes those people are right.`,
				},
				{
					number: 4,
					description: `I am typically more interested in what my idol has done than what I am currently doing.`,
				},
				{
					number: 5,
					description: `I sometimes begin to daydream about my idol to a point where I lose focus of everything around me.`,
				},
				{
					number: 6,
					description: `I become incredibly excited whenever someone shows even the smallest amount of interest in my idol.`,
				},
				{
					number: 7,
					description: `I repeat the same stories about my idol to anyone who will listen, no matter how many times they have heard it before.`,
				},
				{
					number: 8,
					description: `I have a near encyclopedic knowledge of the legends of my idol.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Imitator`,
					description: `Never straying from the legends, I act identical to the way my idol has in similar situations.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Hero`,
					description: `My idol was a hero of the people and I was inspired by his or her good deeds.`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Villian`,
					description: `My idol spread terror throughout the land and hurt many innocent people.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Surpasser`,
					description: `Even though they have inspired me, I act distinctly from my idol. I’ll create my own legends.`,
					alignment: `Chaotic`,
				},
				{
					number: 5,
					bold: `Messenger`,
					description: `I will spread the legends of my idol far and wide. `,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Mogul`,
					description: `My idol became an incredibly wealthy and powerful man /woman and I aspire to be one as well.`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am obsessed with my idol or at least the legend surrounding him or her.`,
				},
				{
					number: 2,
					description: `The oral traditions of my idol must be passed on to future generations.`,
				},
				{
					number: 3,
					description: `I am more than just a fan of my idol. I have become them!`,
				},
				{
					number: 4,
					description: `My idol is an ancestor of mine and my family is proud that I am following in his or her footsteps.`,
				},
				{
					number: 5,
					description: `My idol is an ancestor of mine and my family is proud that I am following in his or her footsteps.`,
				},
				{
					number: 6,
					description: `The tomes or scrolls containing the stories of my idol must be protected at all costs, even at the expense of my life.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am completely delusional to a point where I have become my idol. The actual “me” no longer exists.`,
				},
				{
					number: 2,
					description: `I care little about the consequences of my actions and how they affect other people.`,
				},
				{
					number: 3,
					description: `I can hear my idol’s voice speaking to me in my head.`,
				},
				{
					number: 4,
					description: `I follow my idol around everywhere they go to the point where they have become a little uneasy around me.`,
				},
				{
					number: 5,
					description: `I struggle making decisions not based on my idol’s previous choices.`,
				},
				{
					number: 6,
					description: `My obsession with my idol has become so severe it has pushed my loved ones away.`,
				},
			],
		},
	},
	Assistant: {
		isHomebrew: true,
		description: `Your life before adventure was marked by its mundanity. Under the supervision of your higher ups, you have helped keep shops running, taverns full or farms working. This is the simple life many lead, but this is not the life cut out for you. You feel compelled towards adventure, with reasons ranging from a dramatic event which forced you into it, or a growing boredom with your current career. You know how shops are run and helped, can get on common terms with others in your previous trade, and up to this point have experienced, with joy or regret, the new active life of adventuring`,
		skillProficiencies: ` Insight, Persuasion`,
		toolProficiencies: ``,
		languages: `Two of your choice`,
		startingEquipment: `A keepsake from your previous career, a set of assistant's clothes, a small book with common phrases in Common, Elvish, Dwarvish, Gnomish and Undercommon, a pouch containing 15 gp.`,
		backgroundSpecial: {
			title: `Previous Profession`,
			description: `There are many professions which need some sort of assistant or apprentice in order to function. Many of these are found in towns or cities, though some are more rural in nature. Wherever you are from, the life of being told what to do is shared everywhere. Choose the previous profession you helped in, or roll on the table below.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Stablehand`,
				},
				{
					number: 2,
					description: `Library Clerk`,
				},
				{
					number: 3,
					description: `Apprentice Alchemist`,
				},
				{
					number: 4,
					description: `Shop Assistant`,
				},
				{
					number: 5,
					description: `Tavern Staff`,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Common Ground`,
			description: `Your time spent assisting others mean that you can empathize with those with jobs like yours. You can talk freely about your past with assistants of yours or other professions, be it stablehands, bartenders, or library clerks. Assistants typically enjoy the attention, and are inclined to trust you. These assistants can tell you much of the local gossip and information about the area, can be convinced to help you in minor tasks, and can talk enough about their profession in order for you to quickly get the gist of it.Assistants will often be more than happy to suggest you as a helping hand to their employer. You will be paid at a rate from 2 sp to 1 gp per hour. During work you can talk with other assistants freely and your employer on less distant terms. Any profession you have worked well for without issue are more inclined to favor you. They may give you or party members better treatment, offer discounts or trust you more than the average customer, if of course you or your party members haven't caused any trouble.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Assistants come from the lower classes in society, and may miss or despise their past profession. However, their training has leaned them towards a practical way of thinking. Their practicality, knowledge of commoners' lives and wanting to escape it may shape their ideals. Their bonds could be to their old employer, an assistant friend or an unique customer. Their flaws could be shaped by an overly simplistic view of the world, or excessive recklessness or caution due to their newfound freedom.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I despise people who are significantly more well off than me, and treat them with disrespect.`,
				},
				{
					number: 2,
					description: `I will always go on the side of talking a situation out rather than it descend to violence.`,
				},
				{
					number: 3,
					description: `I am eager to be taught new things by more experienced adventurers.`,
				},
				{
					number: 4,
					description: `I can deal with situations of rising anger and arguments coldly and calmly.`,
				},
				{
					number: 5,
					description: `I will revel in any moment of fame I get.`,
				},
				{
					number: 6,
					description: `I often zone out when people drone for too long, but I have learned to hide this from dealing with it in the shop.
`,
				},
				{
					number: 7,
					description: `I always attempt to barter the prices of goods.`,
				},
				{
					number: 8,
					description: `I am humble and get surprised and flustered whenever someone praises me.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Freedom`,
					description: `The boring life of an assistant wasn't for me. Now with this vast life ahead of me I can at last live.`,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					bold: `Heroism`,
					description: `Why stay in a shop when I could help solve the issues plaguing the land?`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Might`,
					description: `I have spent too much time being told what to do. It's time to change that.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Discipline`,
					description: `I will do what I have been told to, and I will do it well.`,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Fulfillment`,
					description: `Adventuring brings meaning to my life.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Oppurtunity`,
					description: `Anyone should be given an equal chance to rise.`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My old employer had his business looted, and I am doing this in order to help him.`,
				},
				{
					number: 2,
					description: `A mysterious customer once came into the premises and secretly handed me a scroll in a language I do not understand. What does it say?`,
				},
				{
					number: 3,
					description: `An old regular told me every night of his adventuring stories. I am doing this to show how he inspired me.`,
				},
				{
					number: 4,
					description: `My brother owns the family business while I do the cleaning. Wait until I show them what I am made of.`,
				},
				{
					number: 5,
					description: `Life was okay as an assistant until a work friend of mine became an adventurer. I regret not going with them.`,
				},
				{
					number: 6,
					description: `I still enjoy the work that I did, and find any reference or temporary return to it wondrous.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I pretend to know a lot more about my profession than I actually do.`,
				},
				{
					number: 2,
					description: `I am needlessly reckless or cautious due to my limited training as an adventurer.`,
				},
				{
					number: 3,
					description: `Abstract ideas bore me, as do overcomplicated plans.`,
				},
				{
					number: 4,
					description: `I will instinctively listen and obey to authority, as I fear the consequences of not doing so.`,
				},
				{
					number: 5,
					description: `I get easily nervous and may not share ideas or information on the assumption the other party members already thought of it and know about it.`,
				},
				{
					number: 6,
					description: `I get overly defensive about my humble past, and I am ready to lie about it or insult the person who asks.`,
				},
			],
		},
	},
	Astrologer: {
		isHomebrew: true,
		description: `You my friend are one of the few people across the world to dedicate your life to unraveling the mysteries of the universe. What led you to choose this life? Was it a desire to know more or do you just think stars are really cool. Either way you know more about the stars then just about anyone around and that comes with some perks`,
		skillProficiencies: `Arcana, Perception`,
		toolProficiencies: `navigators tools`,
		languages: `celestial and one other of your choice`,
		startingEquipment: `A bottle of black ink, a quill, a map of constellations, a set of navigator's tools, a set of traveler's clothes, and a pouch containing 10 gp.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Map of the Stars`,
			description: `you have spent most of your life studying the stars and their locations in the night sky, so naturally you are able to tell which way is which as long as you are able to see the stars, you have advantage on finding your way as long as you can see the stars above you`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `think about what caused you to start studying the night sky as thorough as you did, were you looking for some long forgotten secret, you could have been lost at sea and had nothing to do but study the stars, or maybe you just thought stars were cool`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I find the night sky extremely calming amd find peace under it.`,
				},
				{
					number: 2,
					description: `I would rather talk about the unknown than common small talk.`,
				},
				{
					number: 3,
					description: `There’s nothing I like more than a good mystery`,
				},
				{
					number: 4,
					description: `I’m willing to listen to every side of an argument before I make my own judgment.`,
				},
				{
					number: 5,
					description: `I’ve read every book in the world’s greatest libraries — or I like to boast that I have.`,
				},
				{
					number: 6,
					description: `I use polysyllabic words that convey the impression of great erudition.`,
				},
				{
					number: 7,
					description: `I’m used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.`,
				},
				{
					number: 8,
					description: `I … speak … slowly … when talking … to idiots, … which … almost … everyone … is … compared … to me.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Knowledge`,
					description: `The path to power and self-improvement is through knowledge`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Freedom`,
					description: `Everyone is like an individual star in the night sky`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Unity`,
					description: `The world is like a constellation, everyone is a star connecting to make something greater`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Self Improvement`,
					description: `I must work hard to be the brightest star I can be`,
					alignment: `Any`,
				},
				{
					number: 5,
					bold: `Greed`,
					description: `I am like a black hole in the void of space, I continue to take from everything around me so that I become the strongest`,
					alignment: `Evil`,
				},
				{
					number: 6,
					bold: `Nurture`,
					description: `I am like the sun in the sky, I help other grow to their greatest potentials`,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I protect the location of a powerful telescope for fear of what it might reveal`,
				},
				{
					number: 2,
					description: `My life’s work is a series of tomes related to a specific area of astronomy.`,
				},
				{
					number: 3,
					description: `I’ve been searching my whole life for the answer to a certain question.`,
				},
				{
					number: 4,
					description: `I witnessed the birth of a star that was prophesized long ago and I must proclaim this to all`,
				},
				{
					number: 5,
					description: `I do this for an old sage. I will make his/her dreams come true.`,
				},
				{
					number: 6,
					description: `The stars hold the key to a long forgotten magic, I will be the first to find it-`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I get too caught up in the complex that I sometime forget rudimentary knowledge`,
				},
				{
					number: 2,
					description: `Sometimes I think that I'm the only one as smart and daring as I am`,
				},
				{
					number: 3,
					description: `Unlocking an ancient mystery is worth the price of a civilization`,
				},
				{
					number: 4,
					description: `Most people scream and run when they see an aberration. I long to see something from out of this universe`,
				},
				{
					number: 5,
					description: `I sometimes get caught spacing out as I stare at the stars`,
				},
				{
					number: 6,
					description: `I overlook obvious solutions in favor of complicated ones.`,
				},
			],
		},
	},
	Asylum_Escapee: {
		isHomebrew: true,
		description: `You are on the lamb having escaped out of an asylum. You couldn't take it anymore: the mistreatment, their inability to believe any truths you spoke, the walls closing in around you. The law will try to find you and bring you back, if you are not cautious. If they do who knows what the doctors will do to you. You won't go back, you will never go back.
					Maybe there is nothing wrong with you, maybe you angered a noble, perhaps you are a woman with an opinion, maybe the voices are whisperings from you latent patron or maybe you divined the wrong voice from the far realms.`,
		skillProficiencies: `Persuasion, Insight`,
		toolProficiencies: `One of the player's choice.`,
		languages: `One of the player's choice.`,
		startingEquipment: `A straightjacket or head cage, a set of common clothes, one trinket of special significance, and 1 sp.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Ear for Madness`,
			description: `You have witnessed different forms of madness in the asylum. You can recognize it in others. If you interact with a creature for 1 minute, outside of combat, you can tell if they have a: short term, long term, or indefinite madness. You are not able to identify what madness effects they possess, only that they have it.
						For short term and long term madness, you are not able to identify the duration of their madness.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I try to make friends where ever I go. I want to form a support circle...maybe one day even tell them.`,
				},
				{
					number: 2,
					description: `I spend money freely and live life to the fullest, knowing that tomorrow I might die.`,
				},
				{
					number: 3,
					description: `I don't run from evil because I am oblivious to it or uncaring.`,
				},
				{
					number: 4,
					description: `I am very superstitious.`,
				},
				{
					number: 5,
					description: `I expect danger around every corner.`,
				},
				{
					number: 6,
					description: `I don't talk about my mental state with others. I'd rather not burden them.`,
				},
				{
					number: 7,
					description: `I try to help others who have been through what I have been through.`,
				},
				{
					number: 8,
					description: `I am unyieldingly genuine, and laugh, cry, or scream without restraint.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Improvement`,
					description: `Some day, I will make life better for everyone like me`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Survival`,
					description: `We have to take care of each other, because no one else is going to do it`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Similar`,
					description: `My mental state isn't like yours, but I'm just like you.`,
					alignment: `Neutral`,
				},
				{
					number: 4,
					bold: `Madness`,
					description: `It's only a matter of time... It's only a matter of time... It's only a matter of time...`,
					alignment: `Chaotic`,
				},
				{
					number: 5,
					bold: `Maniac`,
					description: `The people who did this to me are going to pay.`,
					alignment: `Evil`,
				},
				{
					number: 6,
					bold: `Seeking`,
					description: `I'm a good person. I deserve love.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I keep my thoughts and discoveries in a journal. My journal helps me cope.`,
				},
				{
					number: 2,
					description: `I seek to undo this cursed mental clouding, so I can return to my former life. But everyday I feel less stable, and closer to the point of no return.`,
				},
				{
					number: 3,
					description: `I believe there is a way to make me normal, and I am on a quest to find it.`,
				},
				{
					number: 4,
					description: `I blame everyone else for what happened to me.`,
				},
				{
					number: 5,
					description: `Growing up, there was only one person who could see past my affliction to the real me. I would do anything for them.`,
				},
				{
					number: 6,
					description: `All I want is to find somewhere I belong.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have certain rituals that I must follow every day. I can never break them.`,
				},
				{
					number: 2,
					description: `I am just as judgmental and prejudiced as everyone else- perhaps more so.`,
				},
				{
					number: 3,
					description: `I don't understand why people fear or pity me.`,
				},
				{
					number: 4,
					description: `Violence is my answer to almost any challenge.`,
				},
				{
					number: 5,
					description: `It doesn't matter what people say to me. I'm not crazy, I'm not a monster, I'm just ahead of the curve...more evolved.`,
				},
				{
					number: 6,
					description: `The voices... The voices... never... stop...`,
				},
			],
		},
	},
	Banker: {
		isHomebrew: true,
		description: `You either work for a large bank or own a small one. You spend your life learning how to make money out of money. Although seen as business only fit for greedy, soulless exploiters, you don't necessarily have to be one yourself. Some banks for example are forbidden by their faith from taking interest, while others participate in social projects, especially since their business is seen as amoral. Lastly, some who are forbidden from practicing an "honest" trade are pushed into the business, holding a risky position of influence and wealth that depends on the good will of the governing body. As soon as they get too rich or the ruler does not need them anymore, they can easily be expelled and their assets confiscated. Work with the DM to establish the nature of the bank you worked for, its size, influence and membership. In addition, you may want to find a justification for your adventuring lifestyle. Did you grow bored with the trade? Maybe you have some debts to collect? Did your bank go bankrupt? If so, is there anyone responsible for the deed? Do you still have friends from your former life?`,
		skillProficiencies: `Persuasion, Insight`,
		toolProficiencies: ``,
		languages: `Two languages of your choices`,
		startingEquipment: `An ink pen, Fine Clothes, a bottle of ink, 10 sheets of parchment, an accounting book, a taxroll and a pouch containing 25 gp`,
		backgroundSpecial: {
			title: `Specialization`,
			description: ``,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Accountant`,
				},
				{
					number: 2,
					description: `Moneylender`,
				},
				{
					number: 3,
					description: `Clerk`,
				},
				{
					number: 4,
					description: `Mortgage Specialist`,
				},
				{
					number: 5,
					description: `Financier`,
				},
				{
					number: 6,
					description: `Investor`,
				},
			],
		},
		feature: {
			title: `Struck it Rich`,
			description: `Your dealings have made you rich before you ever embarked on the life of an adventurer. And although the assets you obtained are not easily convertible into currency, they do allow you to live a life free of material want. As long as a banking house can be found in the city you currently reside in, you can maintain a wealthy lifestyle without expending money.`,
		},
		alterateFeature: [
			{
				title: `Banking Guild Membership`,
				description: `Not everyone in the banking business makes a fortune out of it. You, however, have made it your job to be reliable, competent and be held in esteem by the fellow members of your trade. This feature works similar to the "guild membership" feature.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Those working in the banking business are a varied lot. Some see the way banks accumulate money as a path out of the parochialism of a feudal rule, where war, famine and ignorance are fostered, into a future free from want. Others relish the money and debt give them over others, while a few use the money to do charitable work and use their power to change society for the better. In any case, appearing trustworthy, groomed and educated are very important to all bankers, especially when don't have any of these qualities.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My appearance and grooming are always impeccable, no matter how dire the situation.`,
				},
				{
					number: 2,
					description: `I use polished and refined language, to showcase my good education.`,
				},
				{
					number: 3,
					description: `I delight in ordering others around with spiteful and meaningless tasks.`,
				},
				{
					number: 4,
					description: `Too much work has left me morose and withdrawn.`,
				},
				{
					number: 5,
					description: `I prefer a cautious and safe approach. Charging ahead seems foolish.`,
				},
				{
					number: 6,
					description: `I am so much better than these uneducated brutes around me.`,
				},
				{
					number: 7,
					description: `A stovepipe is the sign of a refined person. As such, i never leave my home without one.`,
				},
				{
					number: 8,
					description: `I hold myself up to high standards of behavior and others just as much.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Obedience`,
					description: `If i do how i am told, everything will work out fine. `,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Money`,
					description: `Money is the first and foremost thing a banker should have in mind`,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bold: `People`,
					description: `Who cares about the money or what the bank wants? It's all the different people i met and talk to that matter in the end.`,
					alignment: `Any`,
				},
				{
					number: 4,
					bold: `Power`,
					description: `I relish the power money allows me to hold over others. There is nothing as delightful as legally robbing a person of everything they hold dear. `,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Charity`,
					description: ` I help the poor by investing in social projects, like housing for the homeless and universal education. All the money of the world isn't worth it if my soul goes to hell. `,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Change`,
					description: `The dynamic and efficient system i represent will one day do away with overcome traditions and silly believes.`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I work to pay off a debt.`,
				},
				{
					number: 2,
					description: `I plan to extend the influence of my bank to the far reaches of the world.`,
				},
				{
					number: 3,
					description: `I am loyal to my boss and will enforce their will, whatever it takes.`,
				},
				{
					number: 4,
					description: `I have only ever loved two things: money and my self.`,
				},
				{
					number: 5,
					description: `My current job is everything to me.`,
				},
				{
					number: 6,
					description: `I will take revenge on all who laughed at me while i was younger.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I don't care for the less fortunate. As far as i am concerned, they should have pulled themselves up by their bootstraps instead of wasting their lives.`,
				},
				{
					number: 2,
					description: `I utterly believe in the word of whoever governs the bank.`,
				},
				{
					number: 3,
					description: `I would do anything to get more money.`,
				},
				{
					number: 4,
					description: `I am unused to rough living, being used to living a life of luxury.`,
				},
				{
					number: 5,
					description: `I tend to trust the wrong persons too much, leading to unsound investments.`,
				},
				{
					number: 6,
					description: `Plagued by the fear of failure and i tend to overwork myself.`,
				},
			],
		},
	},
	Barmaid: {
		isHomebrew: true,
		description: `Have you ever wanted to spend your days babysitting belligerent drunkards while trying desperately to earn a living? Well too bad, someone has to do it. As a Barmaid you spent your life using both charisma and brute strength to "persuade" drunkards to follow the rules like everybody else`,
		skillProficiencies: `Persuasion and Intimidation`,
		toolProficiencies: `An instrument or game set, and your choice of one of the following: brewer's Supplies, calligrapher's Supplies, or cook's utensils.`,
		languages: `One of your choice`,
		startingEquipment: `A barmaid outfit, a weighted club, a flask filled with mead or hard cider, an instrument or game set, and a pouch with 15 gold.`,
		backgroundSpecial: {
			title: `Place of Employment`,
			description: `The type of establishment you were employed at can have a big impact on your life, as well as your future adventures`,
			die: `1d4`,
			roll: [
				{
					number: 1,
					description: `You worked in a tavern, where you met many travellers, and performed many songs.`,
				},
				{
					number: 2,
					description: `You worked in a speakeasy, where you found that deception was a necessary job skill.`,
				},
				{
					number: 3,
					description: `You worked in a saloon, where you had to learn how to handle the roudy.`,
				},
				{
					number: 4,
					description: `You worked in a Village Pub, where some of the locals taught you how to use the tools of their trade`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Innocous Persuasion`,
			description: `Perhaps it is your utterly innocent presence, but you rarely need to hide from people to hear in on what they talk about. You are just a simple barmaid that gives the drinks and takes them away when they are empty. People often forget that you're there to the point that even very important conversations not meant for average ears can be spoken near you. Underworld lords and powerful figures feel no threat from speaking liberally near you, discussing plans and such as long as you tend to them in some way.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I understand that sometimes a little bit of flirting goes a long way.`,
				},
				{
					number: 2,
					description: `Regulars always get the cheapest drinks. New-comers are almost always trouble.`,
				},
				{
					number: 3,
					description: `Drinking on the job is never a problem.`,
				},
				{
					number: 4,
					description: `My quick temper can end as many problems as it starts. At least, that's what I tell myself.`,
				},
				{
					number: 5,
					description: `Sleazebag pervert is one bad comment away from a slap.`,
				},
				{
					number: 6,
					description: `A jolly smile and cheerful laugh is the best way to start the day.`,
				},
				{
					number: 7,
					description: `I hate my job and everyone I have to serve.`,
				},
				{
					number: 8,
					description: `My loyalty to my employer is unmatched.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Kindness`,
					description: `Service with a smile is everyone's right`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Strictly Business`,
					description: `You get what you pay for and I can't help that.`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Loose Change`,
					description: `The drunk make easy money for stealing`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Work Ethic`,
					description: `Hard days work for a hard days pay`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Fickle`,
					description: `My time is worth whoever is paying me`,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Self-Betterment`,
					description: `I'm working to be the best I can be.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My employer saved me from a horrible fate. I want to repay him properly`,
				},
				{
					number: 2,
					description: `The regulars keep money in my pocket and food on my table, they're like family.`,
				},
				{
					number: 3,
					description: `A great debt keeps me tied to this tavern.`,
				},
				{
					number: 4,
					description: `I will never forget the name of the adventurer who saved me from a cruel fate.`,
				},
				{
					number: 5,
					description: `My family has run this tavern for years.`,
				},
				{
					number: 6,
					description: `I work at a tavern to support my family.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My bar was raided, which has led to a natural distrust of authority figures.`,
				},
				{
					number: 2,
					description: `I am a perfect example for why you shouldn't sample your own product.`,
				},
				{
					number: 3,
					description: `I can never turn down a chance to gamble.`,
				},
				{
					number: 4,
					description: `I'm willing to try anything to have a good time.`,
				},
				{
					number: 5,
					description: `A little coin and I will do anything you want.`,
				},
				{
					number: 6,
					description: `Never leave money out around me.`,
				},
			],
		},
	},
	Bartender: {
		isHomebrew: true,
		description: `You stand by a lot of the most famous scenes in all of stories and fantasy. Your establishment is the gathering, the crux, of many an adventure, the beginning of many a quest, and the meetings of many fates. That's right, you are the bartender. People, drunk or not, have often ended up before you, asking for succor from their troubles. Sometimes they ask for something less alcoholic. Those who fall under the spell of the ale and meads you churn out spew their secrets like gushing fountains to any ears willing to listen, and yours are usually the closest. Sometimes you do some things on the side, like slipping poison into someone's glass, or just also taking the role of chef as well. If you are the owner of a bar, it's pretty hard work.

					When making a character with the bartender background, think outside the occupational aspect and more towards the implications. Bartenders are not always able to hold their liquors, but they can have a heck of a connoisseurs smell and taste for them. After mixing cocktails for so long, you may have a signature brew even. Aside from drinks though, you may have heard many a drunken secret and witnessed several conflicts erupt in a scenery of merriment. Perhaps you are familiar with the fancier scotch clubs where nobles drivel on about politics. Or maybe you've kept your head down as resistance leaders in a greasy pub talked about inciting a rebellion.

					Bartenders are a dime in a dozen in the wide world. So long as people desire release from their awful realities, bartenders have obliged in exchange for coin and then some. You can easily find work in many places so long as there is some bar. If not, you could very easily start a business slinging drinks. Often sitting in the backdrop, bartenders are potential fonts of knowledge and the most interesting gossip. In a way you could be like a barber, but people visit the pub more than they visit the barber.`,
		skillProficiencies: `Choose 2 from: Perception, Sleight of hand, Performance, Persuasion, or Insight`,
		toolProficiencies: `Cook's utensils or brewer's supplies`,
		languages: `One language of your choice`,
		startingEquipment: `Cook's utensils, or brewer's Supplies, a set of common clothes and a belt pouch of 10 gp`,
		backgroundSpecial: {
			title: `Place of Employment`,
			description: `Where was the last place you worked? Which previous establishment was the most notable? It could very well have been a place you once owned as the barkeep. The atmosphere of the bar could possibly determine what things you have seen and heard throughout your career, as well as what company may be familiar with you.`,
			die: `1d4`,
			roll: [
				{
					number: 1,
					description: `A scandalous place of drunken sailors and gossip of murder and nautical conspiracies.`,
				},
				{
					number: 2,
					description: `An ill-reputed rats' nest where leaders of the local gangs and mafia congregated to conduct illegal business.`,
				},
				{
					number: 3,
					description: `A high-end bar where people clinked crystal glasses of cocktails and spoke of the higher caste politics.`,
				},
				{
					number: 4,
					description: `The layman's bar where common man came for a cold one after a long day at work.`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `The Bar's Shadow`,
			description: `Perhaps it is your utterly innocent presence, but you rarely need to hide from people to hear in on what they talk about. This is particularly true when you have all your working tools out to show you are a real bartender. The bartender image has been cultivated into you, that even very important conversations not meant for average ears can be spoken near you. Underworld lords and powerful figures feel no threat from speaking liberally near you, discussing plans and such over your concoctions.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `As a bartender, you don't have to act like a bystander even if everyone treats you like their servant. Maybe you're a real people person, able to befriend any patron. Or are you perhaps a silent watcher, or even an unfriendly server.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I don't talk unless spoken to.`,
				},
				{
					number: 2,
					description: `I tend to buy the drinks at the table.`,
				},
				{
					number: 3,
					description: `I never forget the face of those I've served.`,
				},
				{
					number: 4,
					description: `People tell me I have a big mouth..`,
				},
				{
					number: 5,
					description: `My first question is usually money-related.`,
				},
				{
					number: 6,
					description: `I serve and that's it. You couldn't pay me for lip service.`,
				},
				{
					number: 7,
					description: `Physical contact makes me uncomfortable.`,
				},
				{
					number: 8,
					description: `Patrons deserve my utmost respect.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Money`,
					description: `There is a lot of things money will give me.`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Secrets`,
					description: `I just like to hear the deepest darkest secrets of others`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Perfection`,
					description: `I am pursuing the quest for the greatest brew.`,
					alignment: `Any`,
				},
				{
					number: 4,
					bold: `Chaos`,
					description: `I sow discord through my drinks.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Listener`,
					description: `I'm here for those who need a shoulder to lean on`,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Employment`,
					description: `This is just a job, really, to survive.`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I feel a familial bond with the bar busters, wenches, and maids.`,
				},
				{
					number: 2,
					description: `The patrons are easily friends.`,
				},
				{
					number: 3,
					description: `In an environment like a bar, you never know what a true man's colors are.`,
				},
				{
					number: 4,
					description: `I am searching for one particular patron who I served years ago...`,
				},
				{
					number: 5,
					description: `I work to pay off a debt.`,
				},
				{
					number: 6,
					description: `My relationships are means to an end.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My only concern is how much I get paid.`,
				},
				{
					number: 2,
					description: `My relationships are ephemeral.`,
				},
				{
					number: 3,
					description: `I cannot trust anyone for real.`,
				},
				{
					number: 4,
					description: `I am easily beguiled by what I hear.`,
				},
				{
					number: 5,
					description: `I like to leave the hard work to others.`,
				},
				{
					number: 6,
					description: `I can appear cold to problems of others.`,
				},
			],
		},
	},
	Battlesmith: {
		isHomebrew: true,
		description: `Battlesmiths are the undisputed masters of traditional Dwarven martial arts. They originated as simple well-equipped berzerkers to counter the savage assaults of Orcish raiders and warbands. As time went on though, Battlesmith-driven victories raised their status to something of the Dwarven equivalent to a knight, socially. As Dwarven craftsmanship improved, battlesmiths became a class of people, each one of them a living symbol of Dwarven warfare.

					Many early battlesmiths were more than just great warriors. Some became kings, carving out new holdings for the Dwarven race from the ruins of enemy land. Others became legendary tactitians, conquering armies with little more than terrified peasants and livestock. Some were great craftsmen, and created fascinating Dwarven weapons, such as the urgrosh. Given this history, many battlesmiths model their beliefs and careers off the lives of these ancient heroes.

					The true power behind the battlesmith is more than brute strength or literal combat prowess, though most have both. Battlesmiths wage war on the minds of their enemies as much as their bodies. They aim to make the enemy believe they have already lost before a battle has even begun. Early battlesmiths blundered into this tactic when they discovered that simply killing the right orc can turn an army of thousands into a stampede of fleeing cowards. Making an enemy think they've lost more blood than they have can cause them to pass out from shock alone. As they became more refined, so too did their techniques.

					Today, battlesmith is mostly an inherited title, though it is possible to rise into their ranks through impressive military service. Those born into the title carry a heavy burden as they are expected to take on the responsibilities of their name. Battlesmiths are often the champion of a noble clan, leading the clan's military force, organizing defense of their land, or taking on special tasks presented only to them.

					Although almost all battlesmiths are dwarves, a few of other races have learned their ways- mostly elves who fought in ancient wars against orcish armies alongside battlesmiths. Humans have proven to be impressive battlesmiths, but most dwarves find their loyalties too difficult to discern or too fickle to maintain, and so humans have greater difficulty proving their worth. There are no records of any half orc battlesmiths, and you would be hard pressed to convince anyone that there should be- the title evolved out of a way of killing orcs after all!`,
		skillProficiencies: `Athletics, Intimidation`,
		toolProficiencies: `Your choice of Smith's, Mason's, or Brewer's Tools.`,
		languages: ``,
		startingEquipment: `A metal flask, a set of common or fine clothes, a Blacksmiths apron, a whetstone, a flask of oil, a letter from your patron, a badge showing your patron's crest, a hammer, 5ft of chain, and a small pouch containing 4gp.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Champion`,
			description: `You are or were, the champion of a patron, (likely a noble dwarven clan) and a known battlesmith. Your patron may come to you with demands or requests; enemies of your patron may try to buy, manipulate, or kill you; and you will likely have made some enemies of your own during your career. The life of a battlesmith can be busy, hectic, and complicated, even long after retirement or expulsion. Work with your DM to flesh out your patron, their enemies, and your personal enemies if you have any.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Battlesmiths are warrriors first, with a lifestyle revolving around combat. For all of the advantages of this lifestyle, there are many drawbacks, and time can take a heavy toll on the minds and spirits of battlesmiths.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My status as a battlesmith has brought me only bloodshed and sorrow.`,
				},
				{
					number: 2,
					description: `I am always ready to fight.`,
				},
				{
					number: 3,
					description: `I am unforgiving or intolerant.`,
				},
				{
					number: 4,
					description: `I envy the easier lives of commoners.`,
				},
				{
					number: 5,
					description: `I revere the lives and deaths of even my most cruel and fearsome enemies.`,
				},
				{
					number: 6,
					description: `I make light of violence and death.`,
				},
				{
					number: 7,
					description: `I'm never too far from a bottle of alcohol.`,
				},
				{
					number: 8,
					description: `I speak very little- if even at all.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Responsibility`,
					description: `My power is a gift not to be taken lightly, and I should avoid seeking out unnecessary conflict.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Duty`,
					description: `My purpose is the continued peace and safety of my people.`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Authority`,
					description: `I do as I wish- who's going to stop me?`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Power`,
					description: `All who oppose me must be crushed under my boot! `,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Function`,
					description: `This is what I was made to do.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Purification`,
					description: `I must stamp out evil wherever it may dwell`,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `A battlesmith saved me or someone close to me, and I strive towards filling their enormous footsteps.`,
				},
				{
					number: 2,
					description: `My patron clan is everything to me, and I will do whatever I can do to glorify their name.`,
				},
				{
					number: 3,
					description: `Countless battles have not shaken the faith I have in my allies.`,
				},
				{
					number: 4,
					description: `I became a battlesmith to defend my home and people from a great evil.`,
				},
				{
					number: 5,
					description: `My patron has sent me on one final task before I retire. It must be done at all costs.`,
				},
				{
					number: 6,
					description: `I am in love with either another battlesmith or a hated enemy.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I find any reason to fight, often attacking enemies when other solutions could have been met.`,
				},
				{
					number: 2,
					description: `I care more about my weapon, armor, or other possession, than I do about my friends.`,
				},
				{
					number: 3,
					description: `I have crossed a foreign military force and they have hunted me ever since.`,
				},
				{
					number: 4,
					description: `I am unwaveringly loyal to my patron, even if my orders conflict with my personal beliefs.`,
				},
				{
					number: 5,
					description: `I have offended my patron clan, nation, or fellow battlesmiths, and have been stripped of my title.`,
				},
				{
					number: 6,
					description: `I am actually a terrible coward, willing to do anything to gain glory or power without fighting, and will shy away from a fight if the battle goes sour.`,
				},
			],
		},
	},
	Beggar: {
		isHomebrew: true,
		description: `Why did you start begging? Did you suffer an injury or did you want some extra pocket change? Do you fake an injury or is it real? Have always lived on the streets or were you pushed away by loved ones? Whatever the reason you now rely on people better off than you for help`,
		skillProficiencies: `Deception, Sleight of Hand`,
		toolProficiencies: `Thieves tools, and one gaming set or musical instrument of your choice`,
		languages: `one non-exotic language of your choice`,
		startingEquipment: `Worn common cloths with many patches, thieves tools, a Fake Injury kit (see Tools section in equipment), and a hat with 5 gp.`,
		backgroundSpecial: {
			title: `A Poor Man's Story`,
			description: `Perhaps you weren't always begging. Perhaps you life forced you in that situation. Perhaps it was a choice.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `I used to be a criminal, and my name earns me no honest work now.`,
				},
				{
					number: 2,
					description: `I lost everything due to loans, and they did take all I had.`,
				},
				{
					number: 3,
					description: `I wronged my family too much for them to overlook, and they kicked me out.`,
				},
				{
					number: 4,
					description: `I may have been poor since I was born, but never in my life have I done a misdeed.`,
				},
				{
					number: 5,
					description: `I left all I had behind, in hopes to get rid of all the fake people in my life.`,
				},
				{
					number: 6,
					description: `I can't even think all the troubles the rich people go through. I pity them too.`,
				},
				{
					number: 7,
					description: `I try to collect enough money to stop being poor.`,
				},
				{
					number: 8,
					description: `Even with the money I get, I try to help others in need.`,
				},
			],
		},
		feature: {
			title: `An Ignorable Presence`,
			description: `After all this time, you have learned to be ignored, no matter the place you go. As long as you don't steal anything or speak to anyone, your presence is as good as your absence.`,
		},
		alterateFeature: [
			{
				title: `A Pig's feast`,
				description: `No matter where you eat or what you eat, you don't feel disgusted when you ingest anything. However, you cannot appreciate a finer taste either.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I always wish someone who leaves money well.`,
				},
				{
					number: 2,
					description: `I remember everyone who has given alms or spat in my face.`,
				},
				{
					number: 3,
					description: `I will do anything for even a piece of bread, if I haven't eaten for days.`,
				},
				{
					number: 4,
					description: `Every copper in the day is another piece of copper in the night.`,
				},
				{
					number: 5,
					description: `I hide my coins in places people would find either crude or weird.`,
				},
				{
					number: 6,
					description: `I want to be in no trouble; just to live in peace.`,
				},
				{
					number: 7,
					description: `I try to collect enough money to stop being poor.`,
				},
				{
					number: 8,
					description: `Even with the money I get, I try to help others in need.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Helper`,
					description: `Despite my misfortunes I will help others in place of getting out of poverty. (Good)`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Poor`,
					description: `I use my low social position and connections to aid authority's investigations, for a price.`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Hatred`,
					description: ``,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Freedom`,
					description: `I hate the social contract and will subvert it in every way I can, big or small.`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Revenge`,
					description: `I didn't choose this and I will get revenge on the people who betrayed me. Percieved or True.`,
					alignment: `Evil`,
				},
				{
					number: 6,
					bold: `Survival`,
					description: `We all do what we must to survive this cruel world. `,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I owe loyalty to a particular person and I am protecting them from the shadows.`,
				},
				{
					number: 2,
					description: `I'm a fugitive hiding in plain sight.`,
				},
				{
					number: 3,
					description: `I can't or choose not to remember my previous life.`,
				},
				{
					number: 4,
					description: `I have a particular skill that went out of popularity or legality, so now I use it for my own ends.`,
				},
				{
					number: 5,
					description: `There are voices that guide me to stop tragedy, but I'm afraid people with think I'm insane if I talk about them.`,
				},
				{
					number: 6,
					description: `I'm trying to find my place in the world.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am penchant to gambling and rarely stop until I am in debt.`,
				},
				{
					number: 2,
					description: `I'm lazy and avoid doing work as much as possible.`,
				},
				{
					number: 3,
					description: `I lack the self confidance and courage to take on opportunities presented to me.`,
				},
				{
					number: 4,
					description: `I'm always manage to insult or repulse people, perhaps through a lack of social awareness.`,
				},
				{
					number: 5,
					description: `I'm naïve and despite having a good work ethic, people take advantage of me.`,
				},
				{
					number: 6,
					description: `My addictions can be overwhelming and kick me down everytime things start going my way.`,
				},
			],
		},
	},
	Bereaved: {
		isHomebrew: true,
		description: `People come and go, yet sometimes they can affect your life long after their passing.
						Someone very important to you died. A family member, a lover or a friend. Perhaps a celebrity or role model. Whoever they were, they had an impact on your life so profound that they dominate your thoughts even now.
						Who was this person that I mourn? What was it about them that impacted me me so? Has the manner of their death left me with unresolved anguish? Do I refuse to let them go believing that they live again? Or am I revengeful, blaming their death on an individual or group? Do I mourn in sadness, or do I celebrate their life? And why did this lead me to the adventuring life? Did they have a powerful secret or unfinished work? Or do they deserve to be remembered? Also ask your GM about the mourning practices in the world the campaign takes place in`,
		skillProficiencies: `Religion, Insight.`,
		toolProficiencies: `One type of gaming set or toolset`,
		languages: `Any language of your choice`,
		startingEquipment: `A keepsake from your loved one (jewellery, artwork, or some other trinket), a letter of condolence, a gaming set or tool set, common clothes, and a pouch containing 10gp.`,
		backgroundSpecial: {
			title: `Your Loved One`,
			description: `Your loved one either had a life that lead you to adventuring, or events surrounding their death drive you on. Roll a d6 or choose from the options in the table below.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `They had unfinished work that I'm duty bound to finish.`,
				},
				{
					number: 2,
					description: `They deserve to be remembered by others. I do all in their name.`,
				},
				{
					number: 3,
					description: `Their deaths were murder or unjust and I will avenge them.`,
				},
				{
					number: 4,
					description: `They were spiritual and I must please their spirit.`,
				},
				{
					number: 5,
					description: `They had a powerful secret or artifact that must be protected.`,
				},
				{
					number: 6,
					description: `They were an adventurer, and I simply wish to follow in their footsteps.`,
				},
			],
		},
		feature: {
			title: `In Mourning`,
			description: `When something terrible happens to someone, people in good relations with that person tend to take pity. Friends might help you in ways that don't threaten their life. Like giving supplies or providing a place to stay as long as it seems to comfort the mourner. However, enemies of the mourner might take their emotional vulnerability to their advantage; so beware of charlatans and other villainous characters`,
		},
		alterateFeature: [
			{
				title: `Spiritual Presence`,
				description: `Nearly every culture believes in some form of a ghost or spirit. You believe that the spirit of your loved one is guiding you in your adventures. Sudden strokes of luck or mysterious events seem to not be a coincidence to you; but a sign that your loved one is watching over you. But sometimes this sense of guidance can make you seem overconfident or make you easy to fool.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I try to make new friends and want to move on.`,
				},
				{
					number: 2,
					description: `I'm working on my drinking problem.`,
				},
				{
					number: 3,
					description: `I'm hugely interested in reincarnation and the afterlife.`,
				},
				{
					number: 4,
					description: `I've become overly sympathetic to others.`,
				},
				{
					number: 5,
					description: `Darkness doesn't unnerve me like most people.`,
				},
				{
					number: 6,
					description: `I think I see people that look like my loved one all the time.`,
				},
				{
					number: 7,
					description: `I cherish my memories and will hold onto any keepsakes I have.`,
				},
				{
					number: 8,
					description: `I will never find someone to replace them.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Memories`,
					description: `I'll forever cherish the memories of my loved one`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Appeasement`,
					description: `I must appease the spirit of my loved one.`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Defilement`,
					description: `I'll break the laws of nature and the Gods to get my loved one back! `,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Non-Superstition`,
					description: `I miss my loved one, but that does not mean that they're watching me.`,
					alignment: `Chaotic`,
				},
				{
					number: 5,
					bold: `Preservation`,
					description: `I'll never forget my loved one, I want others to remember them too.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Future`,
					description: `I must learn to be concerned about my future.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I promised to follow my dreams.`,
				},
				{
					number: 2,
					description: `I will complete their life's goal.`,
				},
				{
					number: 3,
					description: `I will raise a monument to their memory.`,
				},
				{
					number: 4,
					description: `I will exonerate them after death.`,
				},
				{
					number: 5,
					description: `Their secret will remain hidden.`,
				},
				{
					number: 6,
					description: `I shall return them to life.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Don't even try to replace my loved one. You're not worthy to step in their shadow.`,
				},
				{
					number: 2,
					description: `I am often maudlin and introspective.`,
				},
				{
					number: 3,
					description: `I hide my pain behind a facade of bravado.`,
				},
				{
					number: 4,
					description: `I cry without provocation.`,
				},
				{
					number: 5,
					description: `I don't want to love again.`,
				},
				{
					number: 6,
					description: `Your pain is nothing compared to mine.`,
				},
			],
		},
	},
	Biologist: {
		isHomebrew: true,
		description:
			"You have always been fascinated with life, from insects to plants, to monsters. You desire to find and document as many creatures around the world as you can. By studying these creatures, you believe you can either use them for your own gain or you can hopefully better understand them and help others understand them.",
		skillProficiencies: "Animal Handling, Nature",
		toolProficiencies: "None",
		languages: "Two of your choice",
		startingEquipment:
			"A leather-bound diary, documentation of your favorite animal, a bottle of ink, an ink pen, a set of traveler’s clothes, and a pouch containing 10 gp",
		backgroundSpecial: {
			title: "Favored Animal",
			description:
				"Every biologist has a specialized type of animal that they excel at examining.",
			die: "d6",
			roll: [
				{
					number: 1,
					description: "Mammals",
				},
				{
					number: 2,
					description: "Birds",
				},
				{
					number: 3,
					description: "Reptiles",
				},
				{
					number: 4,
					description: "Amphibians",
				},
				{
					number: 5,
					description: "Bugs",
				},
				{
					number: 6,
					description: "Fish",
				},
			],
		},
		feature: {
			title: "Respectful Connections",
			description:
				"As a biologist, you are constantly trying to document as many creatures as you can. Other researchers of animals and creatures respect you depending on the number of creatures that you've documented. You gain the respect of people who view intelligence highly. These types of people are more willing to speak with you than others.",
		},
		alterateFeature: [
			{
				title: "",
				description: "",
			},
			{
				title: "",
				description: "",
			},
		],
		suggestedCharacteristics:
			"Biologists come in many different personalities. Some are benevolent, wanting to learn and expand their knowledge. Others only want to learn so they gain an advantage in combat. Some biologists even value animal life more than their own.",
		suggestedPersonalityTraits: {
			description: "",
			die: "d8",
			title: "Personality Traits",
			roll: [
				{
					number: 1,
					description: "I love the sound of small chirping outside.",
				},
				{
					number: 2,
					description:
						"My love for animals outweighs my love for people.",
				},
				{
					number: 3,
					description:
						"Many people dislike my favorite animal and I'm not sure why.",
				},
				{
					number: 4,
					description:
						"I am intolerant of people you dislike animals and life.",
				},
				{
					number: 5,
					description:
						"I don't actually like animals and only examine them to kill them later.",
				},
				{
					number: 6,
					description:
						"People are often weirded out by me for my love of animals.",
				},
				{
					number: 7,
					description:
						"I am constantly spouting off random facts about certain creatures.",
				},
				{
					number: 8,
					description:
						"Every time I meet someone, I often compare them to a certain animal's behavior.",
				},
			],
		},
		suggestedIdeal: {
			description: "",
			die: "d6",
			title: "Ideal",
			roll: [
				{
					number: 1,
					bold: "Preservation.",
					description:
						"Animals and creatures of all kinds must be preserved. Life deserves to remain.",
					alignment: "Good",
				},
				{
					number: 2,
					bold: "Circle of Life.",
					description:
						"The circle of life must be preserved regardless of others' fears or concerns.",
					alignment: "Neutral",
				},
				{
					number: 3,
					bold: "Fascination.",
					description:
						"The creatures at the top of the food chain should be idolized and looked up to.",
					alignment: "Chaotic",
				},
				{
					number: 4,
					bold: "Selfish Preservation.",
					description:
						"Creatures and animals only serve as food and supplies for my gain and mine alone.",
					alignment: "Evil",
				},
				{
					number: 5,
					bold: "Natural.",
					description:
						"Leaving the world to its natural state is the best course of action.",
					alignment: "Neutral",
				},
				{
					number: 6,
					bold: "Knowledge.",
					description:
						"The pursuit of knowledge for life is beneficial to both me and others.",
					alignment: "Any",
				},
			],
		},
		suggestedBond: {
			description: "",
			die: "d6",
			title: "Bond",
			roll: [
				{
					number: 1,
					description:
						"My house pet is the most important thing to me and I would die for them.",
				},
				{
					number: 2,
					description:
						"Injuries or cruelties to a creature is an injury or cruelty to me.",
				},
				{
					number: 3,
					description:
						"Poachers destroyed the vibrant life of my homeland and I will take revenge.",
				},
				{
					number: 4,
					description:
						"My mentor was killed by a raging animal and so I want to find out more about said animal.",
				},
				{
					number: 5,
					description:
						"The extinction of certain species scares me to my core.",
				},
				{
					number: 6,
					description: "It is my duty to preserve life in all forms.",
				},
			],
		},
		suggestedFlaw: {
			description: "",
			die: "d6",
			title: "Flaw",
			roll: [
				{
					number: 1,
					description:
						"Sometimes I can't resist the taste of an animal to leave it alive.",
				},
				{
					number: 2,
					description:
						"I often put myself and others in danger in order to examine creatures.",
				},
				{
					number: 3,
					description:
						"I remember the look and appearance of every animal I've ever come across more so than people's names.",
				},
				{
					number: 4,
					description:
						"I care more for the safety of a beast than the safety of my fellow peers.",
				},
				{
					number: 5,
					description:
						"I often like to pit certain species against each other to see what would happen for my own entertainment.",
				},
				{
					number: 6,
					description:
						"I'm actually very afraid of a specific species and refuse to document it.",
				},
			],
		},
	},
	Bodyguard: {
		isHomebrew: true,
		description:
			"Whether you hide in the shadows and watch those whom you protect, or boldly be at their side as their shield, clashing against those who would do them harm, you have devoted your life to servitude for the individuals who you have deemed in need of protection.",
		skillProficiencies: ["Perception", "Intimidation"],
		toolProficiencies: ["Thieves' tools", "Herbalism kit"],
		languages: ["One extra language of your choice"],
		startingEquipment: [
			"2 hand crossbows or 1 heavy crossbow",
			"Leather armor",
			"Thieves' tools",
			"Hooded cloak",
			"Set of common clothes",
			"Belt pouch with 15 gold",
		],
		backgroundSpecial: {
			title: "Guardian",
			description:
				"You may elect to place yourself in the path of danger in order to protect a friendly creature or humanoid. Any time that you are within 10 feet of them, and they suffer an attack, you may switch places with them and receive the attack in their place. You must declare this before the attack roll is made. You can use this feature a number of times equal to your Dexterity modifier, and it is restored after a long rest.",
			die: "d8",
			roll: [
				{
					number: 1,
					description:
						"I am overly cautious of all food and drink that either my companion or I consume.",
				},
				{
					number: 2,
					description:
						"I find it hard to leave my designated companion to themselves.",
				},
				{
					number: 3,
					description:
						"I try to take the safest routes through cities, roads, or passes: I am not a fan of dark alley shortcuts.",
				},
				{
					number: 4,
					description:
						"If my companion's legs were weary in the Nine Hells, I would carry them every step of the way.",
				},
				{
					number: 5,
					description:
						"Even though I am constantly by my companion's side, I cannot help but feel alone sometimes.",
				},
				{
					number: 6,
					description:
						"I often try to make situations sound better than they are to make my companion feel more comfortable.",
				},
				{
					number: 7,
					description:
						"II may be a stick in the mud while I am sober, but I am wilder than an owlbear when I am intoxicated.",
				},
				{
					number: 8,
					description:
						"I form attachments to those I care about, and often find myself going above and beyond to make them happy.",
				},
			],
		},
		feature: {
			title: "Guardian",
			description:
				"You may elect to place yourself in the path of danger in order to protect a friendly creature or humanoid. Any time that you are within 10 feet of them, and they suffer an attack, you may switch places with them and receive the attack in their place. You must declare this before the attack roll is made. You can use this feature a number of times equal to your Dexterity modifier, and it is restored after a long rest.",
		},
		alterateFeature: [
			{
				title: "",
				description: "",
			},
			{
				title: "",
				description: "",
			},
		],
		suggestedCharacteristics:
			"There are many reasons as to why you may be guarding someone. It could be that you and your family are in the service of a powerful individual, or that you owe a friend a life debt after they rescued you from some perilous encounter. You may be friends with the ones you protect: You may not. But in any case, your loyalties are unwavering, and your courage speaks for itself.",
		suggestedPersonalityTraits: {
			description: "",
			die: "d8",
			title: "",
			roll: [
				{
					number: 1,
					description:
						"I am overly cautious of all food and drink that either my companion or I consume.",
				},
				{
					number: 2,
					description:
						"I find it hard to leave my designated companion to themselves.",
				},
				{
					number: 3,
					description:
						"I try to take the safest routes through cities, roads, or passes: I am not a fan of dark alley shortcuts.",
				},
				{
					number: 4,
					description:
						"If my companion's legs were weary in the Nine Hells, I would carry them every step of the way.",
				},
				{
					number: 5,
					description:
						"Even though I am constantly by my companion's side, I cannot help but feel alone sometimes.",
				},
				{
					number: 6,
					description:
						"I often try to make situations sound better than they are to make my companion feel more comfortable.",
				},
				{
					number: 7,
					description: "I am vigilant and never let my guard down.",
				},
				{
					number: 8,
					description:
						"I have a deep sense of loyalty to those I protect.",
				},
			],
		},
		suggestedIdeal: {
			description: "",
			die: "d6",
			title: "",
			roll: [
				{
					number: 1,
					bold: "Guardian",
					description:
						"I dedicate my life to defending those who cannot defend themselves.",
					alignment: "Good",
				},
				{
					number: 2,
					bold: "Indifferent",
					description:
						"I do not have personal connections with my charge. They are merely part of the job.",
					alignment: "Neutral",
				},
				{
					number: 3,
					bold: "Determined",
					description:
						"I will protect those who I must... by any means necessary.",
					alignment: "Chaotic",
				},
				{
					number: 4,
					bold: "Underhanded",
					description:
						"I will learn what the weaknesses of my companion are so that I may take them down in the long run.",
					alignment: "Evil",
				},
				{
					number: 5,
					bold: "Resolute",
					description:
						"I follow the law laid down for me to protect those whom I am ordered to.",
					alignment: "Lawful",
				},
				{
					number: 6,
					bold: "Flexible",
					description:
						"I take into account my past experiences to help prepare for the future endeavors.",
					alignment: "Any",
				},
			],
		},
		suggestedBond: {
			description: "",
			die: "d6",
			title: "",
			roll: [
				{
					number: 1,
					description:
						"I have a home I love somewhere, though I may not often see it.",
				},
				{
					number: 2,
					description:
						"I am part of an order dedicated to protecting those in need.",
				},
				{
					number: 3,
					description:
						"The one who I look after saved me from something horrible once: I owe them everything.",
				},
				{
					number: 4,
					description:
						"I have other friends in this business who don't perform their duties exactly how I do.",
				},
				{
					number: 5,
					description:
						"I became as I am to escape a darker time in my life. That time is behind me now, but the faces from the past still linger.",
				},
				{
					number: 6,
					description:
						"My companion isn't the only one who I should protect. There are many more out there without a shield to stand behind.",
				},
			],
		},
		suggestedFlaw: {
			description: "",
			die: "d6",
			title: "",
			roll: [
				{
					number: 1,
					description:
						"I have lost companions before. I now detach myself from my new companions to prevent that same heartache from returning.",
				},
				{
					number: 2,
					description:
						"I am oftentimes forgetful, and find this is much to my companion's dismay.",
				},
				{
					number: 3,
					description:
						"Due to my experience and law, I am very stubborn in my ways. It is very nearly impossible to sway my opinions on how things should be handled.",
				},
				{
					number: 4,
					description:
						"Trust is a rare commodity in my line of work. As such, it is not something I often give to others.",
				},
				{
					number: 5,
					description:
						"My companion and I don't get along in the slightest. It makes it quite difficult to want to look after them.",
				},
				{
					number: 6,
					description:
						"Although I am sworn to protect my companion first and foremost, I will abandon them in the face of certain death. No pay is worth the trouble.",
				},
			],
		},
	},
	Botanist: {
		isHomebrew: true,
		description: `A botanist, plant scientist, or phytologist is a scientist who specializes in this field. Botany originated in prehistory as herbalism with the efforts of early humans to identify – and later cultivate – edible, medicinal, and poisonous plants, making it one of the oldest branches of science. Medieval physic gardens, often attached to monasteries, contained plants of medical importance. When did you had begun to specialize in the study of plants? Do you talk to the plants? Do you feel like they talk to you back? What would you do if foes manage to harm flora?`,
		skillProficiencies: `Medicine, Nature.`,
		toolProficiencies: `Herbalism Kit`,
		languages: `Sylvan`,
		startingEquipment: `A plant in one pot, a book of plants, a belt pouch containing 15gp.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Plant Whisperer`,
			description: `You are the one who feels that plants are indeed alive, you have absolute knowledge of every kind of plant without the need to do a Nature check, able to turn herbs into a medicine potion for allies or poison for foes, you also have advantage on checks against Plant-based monsters.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am that type of person who interacts more with plants than people.`,
				},
				{
					number: 2,
					description: `I often tell people to be kind to flora as one day Mother Nature will return the favor.`,
				},
				{
					number: 3,
					description: `Somethimes I think I am made out of grass.`,
				},
				{
					number: 4,
					description: `*Achoo!* Allergies don't matter, this little flower is nice!`,
				},
				{
					number: 5,
					description: `I see that autumn and winter times are coming, I become sad.`,
				},
				{
					number: 6,
					description: `Relax! There's nothing fine that a leafy buddy to chill with.`,
				},
				{
					number: 7,
					description: `A person always has the first word to speak than a plant, I still have common sense.`,
				},
				{
					number: 8,
					description: `Excuse me?! Did you just cut that leaf of that poor sprout?!`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Bloom`,
					description: `I will bloom my skills to shine for others!`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Poisonous`,
					description: `Plants shall rise as the superior race! `,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Withered`,
					description: `Maybe there's hope and other fellas can water me back to life?`,
					alignment: `Any`,
				},
				{
					number: 4,
					bold: `Ecology`,
					description: `Flora and fauna has to be perfectly balanced in order to coexist.`,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Rooted`,
					description: `I keep myself rooted neutrally when it comes to a meaty person and a bush.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Wicked Weed`,
					description: `People need to know the power of Mother Nature! `,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My garden, I would die to save my paradise of grassy friends!`,
				},
				{
					number: 2,
					description: `Knowledge is power when it comes to teaching people about the many use of different herbs.`,
				},
				{
					number: 3,
					description: `My beloved one, I want to give the finest roses to the most precious flower turned into a person.`,
				},
				{
					number: 4,
					description: `Will there be a person like me who understands the wonderful world of trees?`,
				},
				{
					number: 5,
					description: `My friends are like a forest. Burn them and I will chop and timber you down.`,
				},
				{
					number: 6,
					description: `No! People won't understand me and my love for the leaves! I need to keep them out!`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I put my plants over my friends too often.`,
				},
				{
					number: 2,
					description: `I get distracted easily seeing a little sprout in the middle of nowhere.`,
				},
				{
					number: 3,
					description: `Don't harm the flower, or I punish you with death. This is also addressed to my buddies.`,
				},
				{
					number: 4,
					description: `I love blossoms even if I'm very *Sniff* allergic to them.`,
				},
				{
					number: 5,
					description: `I once used to hate plants, if people find out, they will call me hypocrit.`,
				},
				{
					number: 6,
					description: `I get jealous when I meet a smartguy that shows to be more expert on plants than me.`,
				},
			],
		},
	},
	Bounty_Hunter: {
		isHomebrew: true,
		description: `However fine and noble the world might have seemed at first glance, once you dug a little deeper beneath the facade, a deeper truth revealed itself to you. Conflict and strife are the only real constants in "civilized" lands, and for you, therein lay the opportunity for profit. As a bounty hunter you had plied your trade well, offering dubious (if effective) services and skills to all manner of client for myriad reasons- superficial or otherwise. Regardless of the cause, the justification, or the moral impunity associated with locating your mark. Every job finished brought the clink of coin between your purse strings at the expense of another poor soul fated to endure consequences dire, and often foul.
					Though the time spent in this line of work has left you grim and jilted, your reputation for ruthlessness and cunning precedes you. More often than not, you found yourself sought after and petitioned to ferret a mark, never needing to eke out the work on your own. From the lowly debtor owing the wrong merchant guild, to the misguided runaway offspring of a minor noble, or the thieving murderer eluding the city guard, none could evade your dogged pursuit, and many more dared not try once your involvement was learned.`,
		skillProficiencies: `Pick two from: Perception, Insight, Survival, Investigation, Stealth, History`,
		toolProficiencies: `Thieves' Tools`,
		languages: `Choose one language`,
		startingEquipment: `Ink bottle, a set of traveler's clothes, ink pen, 5 pages of parchment, 2 hunting traps, thieves' tools, 3 trinkets from previous bounties (roll on table PHB pg. 160-161), and a belt pouch containing 10 gold`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Names, Faces, and Places`,
			description: `Though many claim the role of a bounty hunter, few actually excel at the profession save those with a keen eye for observation. Among the adept are those who are truly gifted, having an almost preternatural talent for anticipating the behavior of their targeted mark. Being among their ranks, you have an uncanny ability to recall specific details of conversation and names you overhear or participate in as it relates to your bounty, or otherwise see written, even if only for a moment or two. You can also sketch out faces and general locations you've seen with accuracy, possessing exceptional recollection. In addition, you often effortlessly identify clues when tracking your bounty's movements and disposition that would be otherwise lost on lesser pursuers.`,
		},
		alterateFeature: [
			{
				title: `Contacts and Forgery`,
				description: `As a bounty hunter you have traveled far and wide which has allowed you to have built up a network of contacts and informants that can help you track down your mark. If you are in a town or city where one of your contacts or informants reside (DM's discretion) you may inquire about information that pertains to your mark for the right price or trade a favor to gain the information (DM's discretion). Additionally you have trained yourself in creating documents that will allow you to gain entry into areas you would normally not be allowed to enter in order to capture your mark. You can forge documents including officials papers and personal letters, as long as you have seen an example of the kind of document or handwriting you are trying to copy.`,
			},
			{
				title: `Ear to the Ground`,
				description: `You are in frequent contact with people in the segment of society that your chosen mark moves through. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city you visit, a person who provides information about the people, places and the political standings of the local area.`,
			},
		],
		suggestedCharacteristics: `A bounty hunter's sole purpose is to hunt down people with a price on their head, for grievances ranging from the mundane to the terrible. Those who follow this life can be quiet, taciturn individuals as readily as they can be savage brutes living not for the pay, but for the thrill of pursuit. Hunters are therefore often as varied in personality as their marks.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I tend to approach conversation with people I've just met as though it were an interrogation.`,
				},
				{
					number: 2,
					description: `I project arrogance and conceit at times, especially after turning in a troublesome target.`,
				},
				{
					number: 3,
					description: `I'll accept the help of others with a bounty, so long as they can prove their skill to me first.`,
				},
				{
					number: 4,
					description: `It needn't be hunting down a mark - I'll chop firewood for an old woman if there's pay involved.`,
				},
				{
					number: 5,
					description: `I'm not prone to idle chatter, and prefer keeping to myself unless the topic's business.`,
				},
				{
					number: 6,
					description: `I've a great deal of practical experience from hunting bounties, and can relate to almost any situation.`,
				},
				{
					number: 7,
					description: `I'm rather adept at games of skill like darts, or five-finger fillet.`,
				},
				{
					number: 8,
					description: `I frequently move from town to town, eager to pursue new marks and seek new contacts.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Justice`,
					description: `These people have violated the law once. I won't let it happen twice`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Clean-Up`,
					description: `I will get these criminals off the street with help from the law or not.`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Brutality`,
					description: `Gold pales to the brilliance of the life draining from their eyes.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Morality`,
					description: `It's not enough to hunt them down. They have to understand what they've done is reprehensible.`,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Ambiguity`,
					description: `This job's just a job, like any other. Nothing personal against my targets.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Endurance`,
					description: `In no other line of work could anyone expect to test their limits so completely.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Once a soldier, my comrade's grave betrayal forced me from my home, and into this life.`,
				},
				{
					number: 2,
					description: `Though my friends are few, I owe them my life many times over, and would happily die for them.`,
				},
				{
					number: 3,
					description: `Horrendous tales and vile rumor destroyed my family's good name, and this path is the only recourse to find the truth.`,
				},
				{
					number: 4,
					description: `The contract turned sour, and now I find myself yoked to dangerously twisted employers.`,
				},
				{
					number: 5,
					description: `All my deeds would surely consign me to prison - only by servicing officials do I stay free.`,
				},
				{
					number: 6,
					description: `Mindless thuggery stole the life of one I cherished, and the price they must pay is one I will collect.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Sleep, when it comes, is no sleep at all. The time spent tracking marks has left me skittish and paranoid.`,
				},
				{
					number: 2,
					description: `Not only am I good at what I do, but I love what I do - and I hate myself for it.`,
				},
				{
					number: 3,
					description: `I refuse to believe anyone can be trusted, and will root through their life until I'm satisfied they can be.`,
				},
				{
					number: 4,
					description: `At a younger age my actions earned me the brand of a criminal, those mistakes haunting me and my fellows even today.`,
				},
				{
					number: 5,
					description: `It is only for my own selfish need to be the best at what I do that I abandon my team to bring the bounty in first.`,
				},
				{
					number: 6,
					description: `Contract or not, I never bring murder bounties back alive. They showed no mercy, and so neither will I.`,
				},
			],
		},
	},
	Butler: {
		isHomebrew: true,
		description: `As a servant to a noble or a high ranking family, you spent your time as their faithful retainer. Your daily chores might have included laundry, helping others dress, cooking, taking care of animals, gardening, mending worn out clothes, cleaning, playing with kids as a babysitter, shopping, and other tasks given by your master. The people you served under became your family, something very close to you. Your own family might be deceased, or you might be a part of a servant ancestry with a long tradition of working under your master's family.
					Your life might not have been eventful, or interesting, but that will change soon. Right now you are called somewhere else, towards adventure. When picking this background, ask yourself why you decided to take a detour from a simple life you led so far? Perhaps you were forced to by something? What were the circumstances of you becoming a butler? How much do you know about your biological family? Is service to your master the only way to satisfy you in your life? Were you always diligent in your work? Perhaps you were always planning on leaving your master behind along with your profession?`,
		skillProficiencies: `Investigation and Perception`,
		toolProficiencies: `Cook’s utensils,Brewer’s supplies`,
		languages: `You can optionally pick two additional languages from Dwarvish, Elvish, Gnomish or Halfling. It must be the same languages your master is able to speak.`,
		startingEquipment: `A fine butler's suit (equivalent to Fine Clothes), a signet ring given to the servants of the family you worked for and a pouch containing 10 gp.`,
		backgroundSpecial: {
			title: `Relation with Master`,
			description: `What was your relationship with your master from when you were a butler?`,
			die: `1d8`,
			roll: [
				{
					number: 1,
					description: `I was always happy to see master's face, and I always tried to ease their mood.`,
				},
				{
					number: 2,
					description: `My master was a good person, albeit greedy. I never had the money or time to spend it on the things I wanted.`,
				},
				{
					number: 3,
					description: `My master treated me as nothing more than their servant. As long as I was doing my job properly I never got scolded.`,
				},
				{
					number: 4,
					description: `My master always taught me things so that I could help my master and their descendants.`,
				},
				{
					number: 5,
					description: `According to my master, I never understood my position. Many times I suffered physical abuse, after which I sometimes plotted to murder them`,
				},
				{
					number: 6,
					description: `I secretly fell in love with my master, but I never confessed my feeling towards them.`,
				},
				{
					number: 7,
					description: `My master always tried their best at prohibiting me from social interactions. I had to cleverly lie about my relations with others.`,
				},
				{
					number: 8,
					description: `I want to become just like my master. I openly idolize them even if my master never acknowledged that.`,
				},
			],
		},
		feature: {
			title: `Butler's Profession`,
			description: `As a long servant to your family, noble or high ranking people will recognize your origin. They might be willing to listen to you, if your family had any connections with them, but they also might be reluctant to trust you. As a servant to your family, whenever former or present, you are still seen through their reputation.
						Additionally, your expertise and heritage is useful in the eyes of your potential employers. You should be able to find a job that involves your profession easier.`,
		},
		alterateFeature: [
			{
				title: `Talented Butler`,
				description: `Due to the many years of servitude to your master, you have learned how to perform tasks that a servant could do, such as fetching things, cleaning, Mending, folding clothes, lighting fires, serving food, and pouring wine. Because of this it takes you half the time to learn Tool Proficiencies.
							Additionally, Because of your expertise and skills you gain the ability to cast Mending and Prestidigitation.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Being a butler doesn't mean that you didn't have a personality or a life of your own. Pick the ones you find pleasing and fitting for your character or roll for them. You should only pick one from each table.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am always cheerful, thinking about what I am going to do tomorrow.`,
				},
				{
					number: 2,
					description: `I enjoy peaceful music and relaxing downtime activities.`,
				},
				{
					number: 3,
					description: `I'm only glad when the work is over, it is the only time when I can finally doze off.`,
				},
				{
					number: 4,
					description: `I live my life day-to-day, I can't imagine changing anything.`,
				},
				{
					number: 5,
					description: `I am a perfectionist. I always push myself to my limit when I'm working or doing something.`,
				},
				{
					number: 6,
					description: `I am confident in my own skills and I will do what I want, even things that would hurt my master indirectly.`,
				},
				{
					number: 7,
					description: `I have many goals and dreams I want to achieve, but I am not sure which are the ones I want to pursue.`,
				},
				{
					number: 8,
					description: `I respect my master more than anyone in the world. I always try to mimic their pattern of speech and demeanour.`,
				},
			],
		}, //test
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: ``,
					description: ``,
					alignment: ``,
				},
				{
					number: 2,
					bold: ``,
					description: ``,
					alignment: ``,
				},
				{
					number: 3,
					bold: ``,
					description: ``,
					alignment: ``,
				},
				{
					number: 4,
					bold: ``,
					description: ``,
					alignment: ``,
				},
				{
					number: 5,
					bold: ``,
					description: ``,
					alignment: ``,
				},
				{
					number: 6,
					bold: ``,
					description: ``,
					alignment: ``,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
	},
	Cannibal: {
		isHomebrew: true,
		description: `One way or another, you have developed a taste for the repulsive: forbidden flesh. While cannibals are known to usually eat the flesh of their own kind, this does not restrict, say, a human who eats elves and dwarves from being called a detestable cannibal. There is a colorful amount of cannibals, with a mix of motive and method. Some cannibals see their diet as a ritual, and cannibalism being integral to it. Religious ceremonies sometimes involve sacrifices and a following feast of the sacrificed body. Other forms of this include cultures which have enshrined the act of cannibalism in their diet. This can be a practical application, as they eat the elderly, who do not have anymore perceived use in society. They have no qualms eating the weak as a way to fuel the strong.

						There are always outlier cases. Cannibals can be deranged hedonists who simply developed a perverted taste for the forbidden. They do so because it satisfies them, regardless of society's views on it. Keep in mind that this background requires that cannibalism encompass a significant portion of a character's composition. It cannot simply be a trait, or it will not suffice as a complete background. Cannibalism maintains a firm central base for your character, and it heavily affected how they grew up and became who they are today. Perhaps they were thoroughly enlightened by their taste of forbidden flesh, which then made them incredibly driven for more. There are cannibals who see it as an art they wish to perfect, and so they travel in search of exotic tastes. Some cannibals are defined by a crucial moment in their life which involved cannibalism. They could have been trapped in a desperate situation which forced them to do the unthinkable, and it now remains a part of them forever.

						So, what sort of cannibal is your character? Do they do it for the religious or ritual experience? How did they acquire this taste? Did someone introduce it to them? Do they still openly practice, or do they feast away from even the gaze of allies? Do they want to change, by any chance?`,
		skillProficiencies: `Survival, Deception`,
		toolProficiencies: `Cook's Utensils`,
		languages: ``,
		startingEquipment: `A set of traveler's clothes, two knives, a recipe book for how to safely prepare various races for consumpton, and a belt pouch of 5gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: `I want to be free of these disgusting cravings.`,
				},
				{
					number: 2,
					description: `Others need only realize that this is not an abhorrent thing to do. Everyone should do it.`,
				},
				{
					number: 3,
					description: `I want to try all the species there are in the world. `,
				},
				{
					number: 4,
					description: `There is a single individual I want to eat before I die...`,
				},
				{
					number: 5,
					description: ` I can eat whatever I want and no one can tell me otherwise! `,
				},
				{
					number: 6,
					description: `I want to eat the world.`,
				},
			],
		},
		feature: {
			title: `Thoe of a Different Taste`,
			description: `As those of a complex and niche taste preference, you and others with this persecuted diet have ways to get what you need. You have some shady contacts with dealers of forbidden comestibles. This can extend beyond just forbidden meat, and can cover parts of the underworld, including illegal substances like poison. Since this is largely with criminal undertones, these people will not provide for your lifestyle, but they can pass on information down the grapevine about illegal smuggling, dealing, and safe-houses.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `There are charming cannibals who can talk their way out of jail and make themselves like victims. Better yet are the affable ones who try to convert others to their diet.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I try not to talk to people.`,
				},
				{
					number: 2,
					description: `I like to smile a lot and put people at ease.`,
				},
				{
					number: 3,
					description: `Fear is the best way I introduce myself. Be afraid.`,
				},
				{
					number: 4,
					description: `I hate waste in general, but especially in food.`,
				},
				{
					number: 5,
					description: `I will do whatever necessary to achieve my goals.`,
				},
				{
					number: 6,
					description: `I like to experiment and am open to try new things.`,
				},
				{
					number: 7,
					description: `I can be picky and pedantic about what even allies do.`,
				},
				{
					number: 8,
					description: `Cooking is a wonderful outlet for me.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Conversion`,
					description: ``,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Converting`,
					description: ``,
					alignment: `Any`,
				},
				{
					number: 3,
					bold: `Connoisseur`,
					description: ``,
					alignment: `Neutral`,
				},
				{
					number: 4,
					bold: `End Meal`,
					description: ``,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Survival`,
					description: ``,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Devour`,
					description: ``,
					alignment: `Evil`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I was raised by a person who endowed me with this diet.`,
				},
				{
					number: 2,
					description: `I have fellow cultists who believe in this food as well.`,
				},
				{
					number: 3,
					description: `My tribe has practiced this and I grew up mimicking them.`,
				},
				{
					number: 4,
					description: `People are useless ultimately. Why get to know your next meal?`,
				},
				{
					number: 5,
					description: `I would like to know what love tastes like.`,
				},
				{
					number: 6,
					description: `This lifestyle has isolated me from everyone I cared about.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am an absolute glutton who eats too greedily.`,
				},
				{
					number: 2,
					description: `I am too lazy to get my own food, most of the time.`,
				},
				{
					number: 3,
					description: `I follow things traditionally to the letter, and I hate change.`,
				},
				{
					number: 4,
					description: `My whimsy is capricious. I can't make up my mind.`,
				},
				{
					number: 5,
					description: `I lack empathy entirely.`,
				},
				{
					number: 6,
					description: `I think too much about my stomach and nothing else.`,
				},
			],
		},
	},
	Cartographer: {
		isHomebrew: true,
		description: `As a Cartographer, you are a master of mapmaking and navigation, skilled in creating accurate representations of the world and charting courses through unknown territories. Whether you're mapping unexplored lands, charting sea routes, or documenting the intricate layout of a city, your expertise lies in capturing the essence of geography and providing invaluable guidance to travelers and explorers.`,
		skillProficiencies: `Intelligence, Perception`,
		toolProficiencies: `Cartographer's Tools, Navigator's Tools`,
		languages: `One language of your choice`,
		startingEquipment: `A set of artisan's tools (Cartographer's Tools), a compass, a measuring chain, a parchment scroll, a quill and ink, a magnifying glass, a set of common clothes, and a pouch containing 10gp`,
		backgroundSpecial: {
			title: `Mapmaking Techniques`,
			description: `Specialization`,
			die: `1d4`,
			roll: [
				{
					number: 1,
					description: `Topographic Maps. Specializing in depicting elevation and landforms, you excel at creating detailed maps that accurately portray the contours of the terrain.`,
				},
				{
					number: 2,
					description: `	Nautical Charts. Specializing in maritime navigation, you excel at creating maps of coastal regions and sea routes, including navigational hazards and tidal patterns.`,
				},
				{
					number: 3,
					description: `Urban Cartography. Specializing in city mapping, you excel at documenting the layout of urban environments, including streets, buildings, and landmarks.`,
				},
				{
					number: 4,
					description: `Exploratory Mapping. Specializing in exploration, you excel at mapping uncharted territories and discovering new lands, using a combination of surveying techniques and field observations.`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Cartographer's Insight`,
			description: `Your keen eye for detail and intuitive understanding of geography make you an expert in interpreting maps and navigating unfamiliar terrain. You can quickly analyze a map to identify key landmarks, estimate distances, and plot the most efficient routes. Additionally, you can create simple maps of your surroundings using basic materials, providing valuable guidance to your companions during travels.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `As a Cartographer, you possess a deep fascination with the intricacies of the world and a passion for uncovering its secrets. Your experiences have shaped your personality and worldview, influencing how you interact with others and approach challenges.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am curious and inquisitive, always eager to explore new lands and uncover hidden treasures.`,
				},
				{
					number: 2,
					description: `I am meticulous and detail-oriented, ensuring that every map I create is accurate and precise.`,
				},
				{
					number: 3,
					description: `	I am patient and methodical, willing to spend hours studying maps and planning routes before embarking on a journey.`,
				},
				{
					number: 4,
					description: `I am observant and perceptive, noticing subtle details that others overlook and using them to my advantage.`,
				},
				{
					number: 5,
					description: `I am resourceful and adaptable, able to navigate through unfamiliar terrain and find creative solutions to obstacles.`,
				},
				{
					number: 6,
					description: `I am introverted and reserved, preferring the solitude of my studies and the quiet contemplation of maps.`,
				},
				{
					number: 7,
					description: `I am independent and self-reliant, trusting my own instincts and abilities above all else.`,
				},
				{
					number: 8,
					description: `I am passionate and enthusiastic, eager to share my knowledge and discoveries with others.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Exploration`,
					description: `I am driven by a thirst for discovery and adventure, constantly seeking to uncover new lands and chart unexplored territories.`,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					bold: `Knowledge`,
					description: `I believe that knowledge is the key to understanding the world, and I am dedicated to documenting its wonders for future generations.`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Freedom`,
					description: `I value my independence and autonomy, cherishing the freedom to roam the world and explore its mysteries`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Unity`,
					description: `I believe that maps have the power to bring people together, bridging the gap between cultures and fostering cooperation and understanding`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Preservation`,
					description: `I am committed to preserving the natural beauty of the world, using my maps to promote conservation and environmental stewardship.`,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Ambition`,
					description: `I aspire to create the greatest maps ever made, pushing the boundaries of cartography and leaving a lasting legacy for posterity.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am dedicated to completing a comprehensive atlas of the known world, documenting every land, sea, and sky.`,
				},
				{
					number: 2,
					description: `I owe my life to a mentor who taught me the art of cartography and inspired me to pursue my dreams.`,
				},
				{
					number: 3,
					description: `I am searching for a lost civilization whose secrets are said to be hidden within the pages of ancient maps.`,
				},
				{
					number: 4,
					description: `I am indebted to a wealthy patron who funds my expeditions and commissions me to create maps of exotic locales.`,
				},
				{
					number: 5,
					description: `I am driven by the memory of a loved one who perished due to a navigational error, spurring me to become a master cartographer.`,
				},
				{
					number: 6,
					description: `I am on a quest to map the fabled lands of legend, seeking to separate fact from fiction and uncover the truth behind the myths.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I become so engrossed in my work that I often neglect other aspects of my life, including relationships and personal well-being.`,
				},
				{
					number: 2,
					description: `I am overly critical of my own work, constantly striving for perfection and becoming frustrated when I fall short of my high standards.`,
				},
				{
					number: 3,
					description: `I sometimes underestimate the dangers of the unknown, assuming that my skills as a cartographer will protect me from harm.`,
				},
				{
					number: 4,
					description: `I prefer the company of maps and charts to that of other people, leading me to withdraw from social interactions and become isolated from society.`,
				},
				{
					number: 5,
					description: `I am resistant to change and new ideas, clinging to outdated mapping techniques and refusing to adapt to modern innovations.`,
				},
				{
					number: 6,
					description: `I have a compulsive need to map every location I visit, regardless of its significance or importance, often at the expense of more pressing tasks.`,
				},
			],
		},
	},
	Child: {
		isHomebrew: true,
		description: `You are a child. Not even a young teenager, a child. There could be many reasons why you're ready to take on dragons, lichs, or other nasty things, but it's still a little unsettling for you to be ready for that sort of danger at such a young age. Whether you're motivated by the pressures of your family, an important personal goal, or by simple curiosity, you are a child in a world of grown-ups; This won't be easy, but it'll be fun!`,
		skillProficiencies: `Choose two from: Persuasion, Deception, Animal Handling, Acrobatics, Performance`,
		toolProficiencies: `Gaming Set, musical instrument`,
		languages: `One language of your choice.`,
		startingEquipment: `Mess kit, set of common clothes, small belt pouch containing 3 GP and a small toy of your choosing`,
		backgroundSpecial: {
			title: `Child-Like Wonder`,
			description: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Child-Like Wonder`,
			description: `Your naivety and inexperience with the world around you lead you to have an overwhelming appreciation for everything you see. You can use this to your advantage in order to seem innocent or non-threatening, or just to convince that cool wizard to let you pet their familiar. Some magic items will work better for you if "sense of childlike wonder" is mentioned in the lore`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Every kid is different, so don't feel like you have to slot into the types below. Have fun with it! After all, you won't be little for long!`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I'm really energetic and tend to get real excited about everything!!!`,
				},
				{
					number: 2,
					description: `I like making up my own jokes and pranks, and I think it's hilarious!`,
				},
				{
					number: 3,
					description: `I'm weirdly knowledgeable in one really niche area, and I can hold a full conversation about it. Otherwise, I'm pretty normal.`,
				},
				{
					number: 4,
					description: `I'm really clingy and shy, and will latch onto one person as my "safe place."`,
				},
				{
					number: 5,
					description: `I'm very physical and express affection by wrestling or aggressively hugging people.`,
				},
				{
					number: 6,
					description: `I'm super curious about everything! Tell me more!`,
				},
				{
					number: 7,
					description: `I'm very calm and quiet around big groups, but I'm rambunctious and lively around my friends.`,
				},
				{
					number: 8,
					description: `I'm kind of obnoxious, but I'm completely unaware of it.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Fun`,
					description: `I want to have a ton of fun, even if I might get in trouble! `,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					bold: `Knowledge`,
					description: `I want to be the smartest kid my age.`,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bold: `Family`,
					description: `I want to find a better family than the one I have.`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Family`,
					description: `I want to make my family proud of me.`,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Rebellion`,
					description: `I'm sick of all the pointless rules my parents make me follow.`,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Happiness`,
					description: `I want everyone I meet to have a reason to be happy that day!`,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My older sibling is the coolest person ever, and I want to be just like them!`,
				},
				{
					number: 2,
					description: `My parents want me to be a perfect child, and I'm willing to try if it makes them happy.`,
				},
				{
					number: 3,
					description: `My grandma says I have to write home to her if I go on this adventure!`,
				},
				{
					number: 4,
					description: `I intend to go to an expensive school when I'm old enough, but my family can't afford it. I refuse to accept defeat and I'm going to get the gold on my own.`,
				},
				{
					number: 5,
					description: `I've gotta get money for my mom's healing spell costs, otherwise she won't get better.`,
				},
				{
					number: 6,
					description: `My dad is a retired adventurer, and he's super supportive of my chosen career. I can't wait to show him all the things I've done!`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I always think of things as much simpler or much more complicated then they actually are.`,
				},
				{
					number: 2,
					description: `I can't stand the feeling of armor much heavier than hide.`,
				},
				{
					number: 3,
					description: `I can't eat anything if it hasn't been cut into smaller bites.`,
				},
				{
					number: 4,
					description: `I'm still learning to tie my shoes by myself. I get really upset when I can't do it alone.`,
				},
				{
					number: 5,
					description: `I'm easily distracted. Like, really easily.`,
				},
				{
					number: 6,
					description: `I have little to no filter, and will say whatever comes to mind.`,
				},
			],
		},
	},
	Child_Soldier: {
		isHomebrew: true,
		description: `As a child, you were part of an organization that specialized in turning children into weapons. Your time there made you proficient in many different fighting styles, assassination, all so you could eventually serve the organization you trained under in the real world. You have been forced to kill and have almost been killed, all in the name of making you stronger. One way or another, you are able to escape this place. However, a lot of resources went into making you the weapon you are today, and there are people out there still looking for you.`,
		skillProficiencies: `Survival, Stealth`,
		toolProficiencies: `Disguise kit`,
		languages: `Any one of your choosing`,
		startingEquipment: `A trinket of your past, a set of worn combat style clothes, a hooded cloak, a weapon of your choice, a backpack, and 15 gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Vigilant`,
			description: `Because of your rigorous training, you are an extremely light sleeper and it is almost impossible for anything or anyone to sneak up on you. Your constant vigilance also means that you may pick up on things happening that others might not immediately notice. You gain advantage on perception`,
		},
		alterateFeature: [
			{
				title: `Respect and Fear`,
				description: `criminal organizations are inclined to fear you, and people assume you have the right to be wherever you are. Everyone will probably make every effort to accommodate you and avoid your displeasure, and other people of high riches treat you as a member of the same social sphere.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I take charge of a situation. I am rough around the edges, and forceful in conversations.`,
				},
				{
					number: 2,
					description: `I am constantly seeking any sliver of knowledge or secret item which can give me a new edge over my enemy.`,
				},
				{
					number: 3,
					description: `My body is covered in scars, or other markings- my trophies earned from each mark I have claimed.`,
				},
				{
					number: 4,
					description: `My time hunting my mark has caused me to think so much like them, I sometimes frighten or confuse those around me.`,
				},
				{
					number: 5,
					description: `I am extremely protective of my employers, as though they were my own family.`,
				},
				{
					number: 6,
					description: `I distract myself from my memories of work by escaping in indulgences and good company.`,
				},
				{
					number: 7,
					description: `I trivialize the true depth or magnitude of a situation.`,
				},
				{
					number: 8,
					description: `I am very proud of myself and my history, and consider my past career to be glorious and honorable.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Purity`,
					description: `I fight to destroy the the evil which corrupts our world`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Balance`,
					description: `My marks defy the natural order and destabilize nature.`,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bold: `Prejudice`,
					description: `My marks must all be destroyed without question or hesitation.`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Police`,
					description: `My profession is a necessary extension of law enforcement. `,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Righteousness`,
					description: `I will defeat them at all costs- with or without your help.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Thrill`,
					description: `Wherever they rear their ugly heads, I'll be there.`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have been hunting for the greatest, rarest mark.`,
				},
				{
					number: 2,
					description: `My loved one(s) were taken from me by a mark.`,
				},
				{
					number: 3,
					description: `My master, (possibly a parent) made me who I am today.`,
				},
				{
					number: 4,
					description: `I am fighting to protect something or someone important to me.`,
				},
				{
					number: 5,
					description: `A mark once spared my life. I have always wondered why.`,
				},
				{
					number: 6,
					description: `I want to reform my marks into forces of justice/good.`,
				},
			],
		},
		suggestedFlaw: {
			//
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `A specific, extremely powerful mark, has a vendetta against me, and will stop at nothing to kill me.`,
				},
				{
					number: 2,
					description: `I am obsessed with killing every last mark, and will brave insane dangers in my quest.`,
				},
				{
					number: 3,
					description: `Decades of death and combat have made me cruel, reclusive, dangerous, or addicted.`,
				},
				{
					number: 4,
					description: `I am secretly deeply terrified of my marks.`,
				},
				{
					number: 5,
					description: `I am a phony, all of my marks were illusions, actors, or lies.`,
				},
				{
					number: 6,
					description: `My actions have incidentally put me at odds with a specific nation, religion, faction, or other organization.`,
				},
			],
		},
	},
	City_Guard: {
		isHomebrew: true,
		description: `City Guards come from all walks of life, whether they be born into it, a retired solider or mercenary, a reformed criminal or perhaps just your average citizen in need of a job. They form the back bone of law and order but also form an effective fighting unit in the event of a siege or bandit raid. Garrisons vary wildly depending on location and culture. Some are the perfect aspiration of honor and justice while others are little better than enforcers for the local ruler. Important things for a City Guard to consider are: How did you end up a guard? What city are you from? Why did you leave? What was your garrison like?`,
		skillProficiencies: `Athletics or Acrobatics and Insight or Investigation`,
		toolProficiencies: `Musical Instrument - Horn`,
		languages: `Choose one Standard Language`,
		startingEquipment: `Instrument - Horn, a set of common clothes, City Insignia on a necklace, pair of shackles and 2 keys, Guards Cloak, and a belt pouch containing 10gp`,
		backgroundSpecial: {
			title: `Guardsman`,
			description: `During your time as a guardsman what duties did you most frequently carry out.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Wall Watchman`,
				},
				{
					number: 2,
					description: `Gate Guard`,
				},
				{
					number: 3,
					description: `Palace Guard`,
				},
				{
					number: 4,
					description: `Street Patroller`,
				},
				{
					number: 5,
					description: `Guard Officer`,
				},
				{
					number: 6,
					description: `Dungeon Warden`,
				},
			],
		},
		feature: {
			title: `One of the Guard`,
			description: `When in a city or town you can always find food and a place to sleep with the local guards garrison. The local Guards will be hesitant to start a fight with you and are likely to come to your aid in a fight, the guards will also believe you except in the face of overwhelming evidence or under the command of a superior. For this effect to apply you must be in a city that you would fit in as a Guard, this is decided by the DM.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `City Guards end up in their line of work for all manner of reasons so their personalities and flaws are often as varied as the citizens they protect.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am always on the watch and never let my guard down.`,
				},
				{
					number: 2,
					description: `My friends know they can rely on me no matter what.`,
				},
				{
					number: 3,
					description: `Breaking up a brawl is the fun part of my day.`,
				},
				{
					number: 4,
					description: `I can stare down a hell hound without flinching.`,
				},
				{
					number: 5,
					description: `I enjoy being strong and able to protect others.`,
				},
				{
					number: 6,
					description: `My language is as foul as a bug-bear.`,
				},
				{
					number: 7,
					description: `I like the night patrols best, very peaceful or very not.`,
				},
				{
					number: 8,
					description: `I like gate duty best.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Sacrifice`,
					description: `Our lot is to lay down our lives for others.`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Ordained`,
					description: `I must do as the city rulers command to keep order.`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Breaker`,
					description: `I must do what is right for the city despite orders.`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Enforcement`,
					description: `People will always do as I say with force.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Realist`,
					description: `There will always be crime, as sure as there will be guards.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Lover`,
					description: `I love my city, and I will do anything to protect it`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `It is my duty to protect the city and its citizens.`,
				},
				{
					number: 2,
					description: `My fellow Guards are my brothers/sisters in arms.`,
				},
				{
					number: 3,
					description: `Someone saved my life on patrol, and I still owe them to this day.`,
				},
				{
					number: 4,
					description: `My honor is my life.`,
				},
				{
					number: 5,
					description: `I will never forget or forgive the crime lord who killed my fellows.`,
				},
				{
					number: 6,
					description: `I fight for those who cannot fight for themselves.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I made a mistake once, and it cost a lot of lives.`,
				},
				{
					number: 2,
					description: `My hatred for raiders is blinding and furious.`,
				},
				{
					number: 3,
					description: `I obey the law even when it serves no good.`,
				},
				{
					number: 4,
					description: `I can be bribed easily; a few gold here, please...`,
				},
				{
					number: 5,
					description: `I care only for my own authority.`,
				},
				{
					number: 6,
					description: `I will never let injustice pass me by.`,
				},
			],
		},
	},
	Collector: {
		isHomebrew: true,
		description: `You were once, and still somewhat are, a collector of some sort of semi-rare object that serve little or no practical use, be it gems, spoons, or some other thing. The interest may have come from a family collection passed down to you, or simply through a fascination with a certain thing. You may have even begun travelling and adventuring in pursuit of expanding your collection. You might have heard of a rare item resting as part of a dragon's treasure hoard, or heard rumors of an influential noble with a collection much like yours being willing to trade.`,
		skillProficiencies: `History, Persuasion`,
		toolProficiencies: `A set of artisan's tools of your choice`,
		languages: `A mundane language of your choice`,
		startingEquipment: `a set of common clothes, your collection in its container (A sack, jar, book, display case, etc.), and a belt pouch containing 10 gp. If you do not wear other armor, you may have Collector's Armor`,
		backgroundSpecial: {
			title: `Collection`,
			description: `Specialization`,
			die: `1d12`,
			roll: [
				{
					number: 1,
					description: `Spoons`,
				},
				{
					number: 2,
					description: `Forks`,
				},
				{
					number: 3,
					description: `Gems`,
				},
				{
					number: 4,
					description: `Out of Mint Coins`,
				},
				{
					number: 5,
					description: `Feathers`,
				},
				{
					number: 6,
					description: `Trinkets`,
				},
				{
					number: 7,
					description: `Cards`,
				},
				{
					number: 8,
					description: `Stamps`,
				},
				{
					number: 9,
					description: `Puzzle Pieces`,
				},
				{
					number: 10,
					description: `Fish`,
				},
				{
					number: 11,
					description: `Butterflies`,
				},
				{
					number: 12,
					description: `Dice`,
				},
			],
		},
		feature: {
			title: `Collective History`,
			description: `You have extensive knowledge on the object you collect. It may not seem important to some, but these object have been somewhat ubiquitous across history. You know when your objects have been touched by famous figures, like Kings and Queens, heroes and villains, and even prominent figures of the peasantry. You know its purpose as well as a rough selling price and potential buyer.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I'm defensive about my collection.`,
				},
				{
					number: 2,
					description: `When I see something to add to my collection, I will stop at nothing to get it.`,
				},
				{
					number: 3,
					description: `I often correct people about my collection.`,
				},
				{
					number: 4,
					description: `I'm self conscious about my collection and sharing it.`,
				},
				{
					number: 5,
					description: `I'm great at organizing.`,
				},
				{
					number: 6,
					description: `I try to get all of my friends and family into collecting.`,
				},
				{
					number: 7,
					description: `I'm an awkward individual.`,
				},
				{
					number: 8,
					description: `I steal things for my collection.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Knowledge`,
					description: `I must learn all about my collection and what history it holds.`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Community`,
					description: `I share my hobby with everyone else.`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Narcissism`,
					description: `I must have the best collection.`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Wealth`,
					description: `I will sell my collection once it's worth more.`,
					alignment: `Chaotic`,
				},
				{
					number: 5,
					bold: `Love`,
					description: `My collection is the coolest, I'll get all the wenches.`,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Boredom`,
					description: `It gives me something to do.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My father bought me the thing to start my collection, then died.`,
				},
				{
					number: 2,
					description: `I love to see a completed collection.`,
				},
				{
					number: 3,
					description: `I want to spread my knowledge to all.`,
				},
				{
					number: 4,
					description: `I will sell my collection.`,
				},
				{
					number: 5,
					description: `I have a rival who thinks he's better at collecting than me.`,
				},
				{
					number: 6,
					description: `There is one part of my collection I will never give up.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I value my collection over other lives, including mine.`,
				},
				{
					number: 2,
					description: `I will do anything to add to my collection. Even crimes.`,
				},
				{
					number: 3,
					description: `I am jealous of other collections.`,
				},
				{
					number: 4,
					description: `I'm somewhat antisocial. I care about my collection more than friendship.`,
				},
				{
					number: 5,
					description: `I'm very clingy, with objects and people.`,
				},
				{
					number: 6,
					description: `I can't accept someone criticizing my collection.`,
				},
			],
		},
	},
	Conscript: {
		isHomebrew: true,
		description: `You never asked to be a fighter, a soldier in a war. You had nothing to do with the cause, and it was not yours personally. But it is the cause of the blanketing system in which you are a civilian and member of. As such, you have a duty to serve, and they can call on you when they want to. They can tell you to lay down your life for them, to pick up the blade and put down whatever life you've made for yourself, and be thrown into the maws of the beast that is battle. Conscription, or drafting, is a method from antiquity to rally troops when needed by calling upon compulsory service of the people. Able bodies are pulled from the population to pay their public dues in blood.Consider some of the following questions when making a conscript: Are you happy with having been displaced from your normal life and thrown into a chaotic new environment? Were other members in your family previously conscripted? How do you view this system of drafting, and do you resent the powers behind it? Some are drafted, but have the means to have others go in their place, while others may be forcibly drafted despite their medical conditions due to the lack of manpower. What did you leave behind as a result of the draft? Is the battle over for you yet? If so, how did things change when you returned from battle?`,
		skillProficiencies: `Athletics, Perception`,
		toolProficiencies: `Gaming Set`,
		languages: `Any one`,
		startingEquipment: `Writ of release from conscription (served or dismissed), worn emblem of a conscript, a set of common clothing, and 5 gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Lasting Recognition`,
			description: `Serving in a war or battle at all earns you some presence. While you are not highly ranked or decorated, you made some connections in the military. Soldiers loyal to your former military organization still recognize your service and show you preference over those who did not serve. Other conscripts that served like you are also friendly to you and your allies, perhaps willing to provide you with some emergency supplies and aid, so long as it does not put them in immediate danger.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `This was never my fight..`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am in it to win it.`,
				},
				{
					number: 2,
					description: `Why do i crave battles?`,
				},
				{
					number: 3,
					description: `I just want to go home!`,
				},
				{
					number: 4,
					description: `I will make the best of a bad situation.`,
				},
				{
					number: 5,
					description: `I face it with honor.`,
				},
				{
					number: 6,
					description: `When it's over I'll bring it to those who placed me in bondage!`,
				},
				{
					number: 7,
					description: `My comrades are worth fighting for! `,
				},
				{
					number: 8,
					description: `Perhaps, I too will die this day.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Reservation`,
					description: `I fight for my own reasons.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Continued Spillage`,
					description: `War has left me changed. I have an unquenchable blood lust.`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Repatriation`,
					description: `One day, I'll return to home and hearth. Until then, I live honorably.`,
					alignment: `Good`,
				},
				{
					number: 4,
					bold: `Wealth`,
					description: `War is profitable. I have learned to capitalize on the death of others.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Virtue`,
					description: `My time as a conscript has taught me the value of the aid of others. I will fight for their sake!`,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Perpetiuty`,
					description: `If you can't beat 'em, conscript 'em`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I hold those who were conscripted along side me dear.`,
				},
				{
					number: 2,
					description: `I will return to my family.`,
				},
				{
					number: 3,
					description: `I remember, and Honor those that fell beside me.`,
				},
				{
					number: 4,
					description: `I have a special kind of hatred for soldiers.`,
				},
				{
					number: 5,
					description: `I know that I am strong, I will teach others that they are strong too!`,
				},
				{
					number: 6,
					description: `I vividly remember the faces of the enemies I have slain.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `At times, I feel such anger towards military personnel, I wish to kill them.`,
				},
				{
					number: 2,
					description: `Memories, plagued with memories...`,
				},
				{
					number: 3,
					description: `My hands often shake, causing me to drop things I am holding.`,
				},
				{
					number: 4,
					description: `I haven't been able to stop killing. I cannot hold myself back in a fight.`,
				},
				{
					number: 5,
					description: `I despise those who are cowards in battle.`,
				},
				{
					number: 6,
					description: `I drink to cope. Like a lot.`,
				},
			],
		},
	},
	Cursed: {
		isHomebrew: true,
		description: `Woe is you, unfortunate soul. You have been cursed, whether from birth or some unfortunate series of events, and this curse holds sway over your life. You are not sure if the curse can be broken, but certainly your life would be much more pleasant without it. Each time the fates seem to be working in your favor some disaster strikes and suddenly all your efforts seem thwarted. You may at times feel helpless against the power of this curse, or maybe you reject these dark fortunes and strive against them. In the end though, luck is not on your side. It is up to you and your DM to determine what kinds of effects your curse may have on you beyond what is detailed in this background.`,
		skillProficiencies: `Perception, and one of the following that is associated with your curse's origin: Arcana, Nature, Religion`,
		toolProficiencies: `One of your choice`,
		languages: `One of your choice`,
		startingEquipment: `Religious book, thyme, a set of common clothes, and a small pouch with 15gp, and a gothic trinket.`,
		backgroundSpecial: {
			title: `Origin of Curse`,
			description: `What cursed you?`,
			die: `1d10`,
			roll: [
				{
					number: 1,
					description: `Demonic: A demon has placed this curse upon you.`,
				},
				{
					number: 2,
					description: `Divine: A good or evil deity has cursed you.`,
				},
				{
					number: 3,
					description: `Primal: The spirits of nature or a primordial has cursed you.`,
				},
				{
					number: 4,
					description: `Fey: An elven or other fey creature has set a curse on you.`,
				},
				{
					number: 5,
					description: `Arcane: A wizard or other arcane force has stricken you with a curse.`,
				},
				{
					number: 6,
					description: `Draconic: A dragon saw it fit to curse you.`,
				},
				{
					number: 7,
					description: `Elemental: An elemental or the elements themselves have conspired and cursed you.`,
				},
				{
					number: 8,
					description: `Immortal: An immortal being, neither divine nor demonic, has found amusement in cursing you.`,
				},
				{
					number: 9,
					description: `Aberration: A being from beyond your plane has inflicted a curse upon you, whether it knows is the question.`,
				},
				{
					number: 10,
					description: `Unknown: Somehow, you are so unlucky it is considered a curse.`,
				},
			],
		},
		feature: {
			title: `Curse Catcher`,
			description: `You are drawn to others who are under the influence of a curse or similar magics. NPCs that are suffering from a curse will be drawn to you, and you to them. In addition to this, you have an eye for curses similar to your own. You can determine if a curse shares its origin with your own (demonic, fey, primal, etc.) due to your lengthy time spent under the influence of the curse.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I'm incredibly optimistic in the face of my terrible curse.`,
				},
				{
					number: 2,
					description: `I get angry when I hear people complaining about their lives. They don't know what true misfortune is!`,
				},
				{
					number: 3,
					description: `I engage in a variety of rituals to attempt to lessen my curse.`,
				},
				{
					number: 4,
					description: `I am fearful of creatures that share an origin with my curse.`,
				},
				{
					number: 5,
					description: `I pray frequently, hoping the gods will break my curse.`,
				},
				{
					number: 6,
					description: `I always try to persevere when the odds are against me.`,
				},
				{
					number: 7,
					description: `Taking risks is worth it, if it gives me a chance to test the curse's power.`,
				},
				{
					number: 8,
					description: `I am often melancholic when presented with the effects of my curse.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Fate`,
					description: `I was cursed for a reason, and therefore I will live with this burden.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Experimental`,
					description: `Perhaps this will break the curse! No? Well, then maybe I'll give this a try! Not that either? Then maybe...`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Suffering`,
					description: `If I must bear this pain then so shall the world!`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Defiance`,
					description: `I will do the one thing that this curse cannot stop me from doing... ignoring it.`,
					alignment: `Any`,
				},
				{
					number: 5,
					bold: `Retribution`,
					description: `My ancestors deserved this curse but I will do whatever i must to cleanse my bloodline!`,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Triumph`,
					description: `Each victory I have is precious, for each one is a blow against my curse! `,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `The being that cursed me knows a dark secret about me or my bloodline. This is payment for them keeping silent.`,
				},
				{
					number: 2,
					description: `This curse pushed my family or lover away. I would do anything to get them back.`,
				},
				{
					number: 3,
					description: `I had a master who died in an attempt to remove my curse.`,
				},
				{
					number: 4,
					description: `I took the place of the one who was supposed to have this curse.`,
				},
				{
					number: 5,
					description: `I've been kicked out of towns and cities before because they were afraid I'd bring bad luck.`,
				},
				{
					number: 6,
					description: `I almost had a lover once but they fled when they found out. It was probably my lowest point.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I blame misfortune on the curse even when I know it was my own actions that caused it.`,
				},
				{
					number: 2,
					description: `I secretly wish I could transfer my curse onto another to escape it, no matter who that person is.`,
				},
				{
					number: 3,
					description: `I have become cold and bitter as the curse has pushed people away.`,
				},
				{
					number: 4,
					description: `I am afflicted with devastating nightmares and sometimes have panic attacks.`,
				},
				{
					number: 5,
					description: `I am slow to trust others. After all, others cursed me once, and I've never cursed anyone!`,
				},
				{
					number: 6,
					description: `I hate it when other people refer to me as "cursed" or "unfortunate", and will get verbal when they do.`,
				},
			],
		},
	},
	Demonologist: {
		isHomebrew: true,
		description: `A demonologist has spent most of their life cloistered away because of their studies. Why have they become so obsessed with demons, devils, and fiends that they would leave behind society? Do they come from a long line of warlocks and seek to know more information about the ones they’ve formed a pact with? Are they slayers of demons, devils and fiends and need to know everything about them? Are they looking to summon and control these types of beings? Or perhaps they need knowledge for a mission given to them by the church. Whatever their reasoning may be, their knowledge would surely be useful in a battle.`,
		skillProficiencies: `Choose two: Arcana, History, or Religion`,
		toolProficiencies: `Abyssal and Infernal`,
		languages: ``,
		startingEquipment: `A backpack, a set of common clothes, a hooded cloak, a silvered or cold-iron weapon you are proficient with, a bedroll, six tattered scrolls, a pouch containing 5 gp, and several (3-6) books about demons and devils (Origin of Demons and Devils, Origins of Demons, Origins of Devils, The Baatezu of Baator, The Tanar'ri of the Abyss, The Blood War, Fiend Folio, Guide to the Lower Planes, Summoning Rites and Binding Procedures, Fiendish Familiars and Their Masters, etc.)`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Obsession`,
			description: `Having spent several years of your life studying demons, devils, and fiends, you’ve gained vast knowledge about them. You are able to recognize any fiend as well as recall more than basic information about them. (i.e. resistances, vulnerabilities, special abilities, and other information the DM may choose to disclose) However, people who learn of your obsession may try to avoid contact with you if at all possible`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I think we can relate more to demons than celestials.`,
				},
				{
					number: 2,
					description: `I don’t understand the role of religion.`,
				},
				{
					number: 3,
					description: `I have far more important things to do than save the world.`,
				},
				{
					number: 4,
					description: `I honestly forgot why I started my research, but it passes the time.`,
				},
				{
					number: 5,
					description: `I'll settle for nothing less than perfection.`,
				},
				{
					number: 6,
					description: `I believe that everything worth doing is worth doing right. I can't help it--I'm a perfectionist.`,
				},
				{
					number: 7,
					description: `I am utterly serene, even in the face of disaster.`,
				},
				{
					number: 8,
					description: `I once spent a night at an inn with a succubus… We just talked, I swear.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Sincerity`,
					description: `There's no good pretending to be something I'm not. `,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Aspiration`,
					description: `I'm determined to make something of myself.`,
					alignment: `Any`,
				},
				{
					number: 3,
					bold: `Creativity`,
					description: `The world is in need of new ideas and bold action. `,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Respect`,
					description: `People deserve to be treated with dignity and respect.`,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Logic`,
					description: `Emotions must not cloud our sense of what is right and true, or our logical thinking.`,
					alignment: `Lawful`,
				},
				{
					number: 6,
					bold: `Knowledge`,
					description: `The path to power and self-improvement is through knowledge. `,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I'm trying to discover the truth behind the demon my family has pacted with.`,
				},
				{
					number: 2,
					description: `My life’s work was stolen from me, and I will stop at nothing to get it back.`,
				},
				{
					number: 3,
					description: `The church that took me in as a child is the most important place in the world to me.`,
				},
				{
					number: 4,
					description: `I’m trying desperately to find my apprentice ever since he’d disappeared during an experiment.`,
				},
				{
					number: 5,
					description: `I work to preserve a library, university, scriptorium, or monastery.`,
				},
				{
					number: 6,
					description: `I owe a debt I can never repay to the person who took pity on me.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am a little too flexible with my thinking.`,
				},
				{
					number: 2,
					description: `I have a weakness for the vices of the city, especially the brothel.`,
				},
				{
					number: 3,
					description: `Once I start drinking, it's hard for me to stop.`,
				},
				{
					number: 4,
					description: `Now that I've returned to the world, I enjoy its delights a little too much.`,
				},
				{
					number: 5,
					description: `I’d forgotten what the outside looks like, and it’s only disappointed me.`,
				},
				{
					number: 6,
					description: `...Okay. Maybe I did more than talk with the succubus.`,
				},
			],
		},
	},
	Denizen: {
		isHomebrew: true,
		description: `You are a spirit, a soul that has come into possession of a body that did not originally belong to you; whether the original occupant gave up their body willingly, you deceived or tricked them out of it, or some other way entirely. Who were you before? Perhaps you were once a terrible human warlock, trapped in an amulet and hidden away. A dwarven hero who gave in to selfish desire and escaped death. An ancient halfling wizard who desired to see the future, and so contained your soul for a thousand years. You see with new eyes, and feel with new hands. What is your desire for your new life?`,
		skillProficiencies: `Arcana, Deception`,
		toolProficiencies: `One of your choice`,
		languages: `One of your choice`,
		startingEquipment: `A small trinket, a pouch of 8 gp, a set of common clothes`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Soul Whisper`,
			description: `Your time spent as a soul without a body, whether for a millennium or a mere moment, granted you valuable insight into spirits and other paranormal beings. As a result, you have the ability to converse with the souls of the recently deceased, ghosts, as well as those souls that may be magically contained.`,
		},
		alterateFeature: [
			{
				title: `Phantom Body`,
				description: `Adjusting to a new body can be an odd sensation, and something that many never get used to. You may catch yourself ducking under a doorway as a dwarf, or breaking a door when you simply meant to open it as an orc.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am very secretive. No one can find out about my past life.`,
				},
				{
					number: 2,
					description: `I am somewhat absentminded and will sometimes ramble about my past life`,
				},
				{
					number: 3,
					description: `Preoccupied with death, I constantly seek a way to escape it`,
				},
				{
					number: 4,
					description: `I am extremely cheerful, even a terrible day can’t bring me down`,
				},
				{
					number: 5,
					description: `The living don't matter so much as the secrets of the dead`,
				},
				{
					number: 6,
					description: `The memories of my host body co-exist with my own, making me appear at times to have two personalities`,
				},
				{
					number: 7,
					description: `Despite the many who view me as an abomination, I am very open about my past life`,
				},
				{
					number: 8,
					description: `I fear paladins and priests, and will avoid them at all costs`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Oppurtunity`,
					description: `This new body offers me another chance to prove myself, I’ll make the most of it`,
					alignment: `Any`,
				},
				{
					number: 2,
					bold: `Immortality`,
					description: `I must escape death, no matter the cost`,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Knowledge`,
					description: `With another lifetime, I can learn so much more.`,
					alignment: `Neutral`,
				},
				{
					number: 4,
					bold: `Redemption`,
					description: ` My new body came at great cost, I must repay my debt to the people, and help them wherever they may need it.`,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Chance`,
					description: `Death is just the roll of the dice, and I plan to gamble with it`,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Balance`,
					description: `Death is a delicate thing, no one must be allowed to cheat it again`,
					alignment: `Lawful`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have family who believe me dead, I must find them`,
				},
				{
					number: 2,
					description: `The ancient trinket my soul was contained in was stolen, I wish to find it`,
				},
				{
					number: 3,
					description: `The gods would see me returned to the grave, I will not allow it`,
				},
				{
					number: 4,
					description: `I wish to find, and win back, my lover from my past life`,
				},
				{
					number: 5,
					description: `I have a very strong bond with the people from my past life, but they must never know I still live`,
				},
				{
					number: 6,
					description: `I owe a great debt to the family of my host, and I will repay them in kind`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Others are more often a burden than not, I like to do things alone`,
				},
				{
					number: 2,
					description: `If I come too close to death, I will abandon the field out of cowardice`,
				},
				{
					number: 3,
					description: `Ambition blinds me, I sometimes ignore everything else in pursuit of what I want`,
				},
				{
					number: 4,
					description: `My new body is simply a shell, losing life and limb doesn't matter to me`,
				},
				{
					number: 5,
					description: `I am above everyone, even the most powerful of mortal authorities`,
				},
				{
					number: 6,
					description: `I am a pathological liar, even in the smallest of things`,
				},
			],
		},
	},
	Detective: {
		isHomebrew: true,
		description: `In a world of magic and monsters, crime is an ever-present factor. From petty thieves to kidnapping fey, the work of a detective is never finished. But why did you become a detective? Do you, or did you, have a partner? Does your work pay well, or do you struggle to make ends meet? What was your breakout case, or are you still trying to make your name known? How have you dealt with the stress of your job?`,
		skillProficiencies: `Investigation, Insight`,
		toolProficiencies: `Forgery kit`,
		languages: `1 common language of your choice.`,
		startingEquipment: `Lamp, forgery kit, a quill, an ink well, a set of common or travaller's clothes and a pouch with 15 gold pieces.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Can I ask you some questions?`,
			description: `You’re a detective, investigation is what you do. Innocent people are typically more willing to talk to you when it pertains to the administration of justice, and high ranking servants of the law may come to you for help more often.`,
		},
		alterateFeature: [
			{
				title: `Weathered`,
				description: `You’ve seen enough of the criminal underworld and put enough law-breakers behind bars to know how they work. You can blend in with the crowd a little easier, and you pack innocuously enough that you’re less likely to be stolen from.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `The life of a detective is filled with sleepless nights and stressful deliberation. This comes with a slurry of mental and physical fatigue.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I’m not actually a great detective, I just get lucky.`,
				},
				{
					number: 2,
					description: `I don’t like people knowing anything about my real identity.`,
				},
				{
					number: 3,
					description: `I forget useless information, including common knowledge.`,
				},
				{
					number: 4,
					description: `I’m not that strong, I’m just used to pain.`,
				},
				{
					number: 5,
					description: `Don’t talk to me until I’ve had my daily dose.`,
				},
				{
					number: 6,
					description: `I don’t get much sleep, but when I do it’s impossible to wake me.`,
				},
				{
					number: 7,
					description: `I may act extroverted, but it’s just that, an act.`,
				},
				{
					number: 8,
					description: `I see the face of someone close to me in every victim.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Justice`,
					description: `I want the law to triumph.`,
					alignment: `Lawful`,
				},
				{
					number: 2,
					bold: `Pain`,
					description: `I love watching people get punished harshly, especially for crimes they didn’t commit.`,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Comfort`,
					description: `I don’t want people to suffer.`,
					alignment: `Good`,
				},
				{
					number: 4,
					bold: `Tracking`,
					description: `I’m looking for someone personally`,
					alignment: `Any`,
				},
				{
					number: 5,
					bold: `Justice`,
					description: `I’m the only one who can administer true justice.`,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Wealth`,
					description: `I’m just in it for the money.`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I own my own detective agency.`,
				},
				{
					number: 2,
					description: `I’ll do whatever’s necessary to close a case.`,
				},
				{
					number: 3,
					description: `I can’t turn down a case.`,
				},
				{
					number: 4,
					description: `Fey are almost always one of my top suspects.`,
				},
				{
					number: 5,
					description: `I have a decent network of informants.`,
				},
				{
					number: 6,
					description: `I’ve been tracking the same perp for years.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I chase tail faster than I chase leads.`,
				},
				{
					number: 2,
					description: `The memories of mistakes I made and people I couldn’t save, keep me up at night.`,
				},
				{
					number: 3,
					description: `I despise criminals, and true justice entails their death.`,
				},
				{
					number: 4,
					description: `I can’t let a case go, even if it’s a dead end.`,
				},
				{
					number: 5,
					description: `I have a debilitating reliance on a substance I can barely afford.`,
				},
				{
					number: 6,
					description: `I see the face of someone important to me in every criminal.`,
				},
			],
		},
	},
	Disgrace: {
		isHomebrew: true,
		description: `You're a disappointment. A worthless waste of food and air. A disgrace. At least, that's what others will say about you. You may have always been frowned upon by society, or perhaps you were once a respected member of your community, but regardless, you are now considered a nuisance at best or a downright curse to your community at worst. You're hated by all and loved by few, if any.`,
		skillProficiencies: `Intimidation, Perception`,
		toolProficiencies: `Brewer's Supplies and a Gaming Set of your choice`,
		languages: `Choose any one language`,
		startingEquipment: `An old set of commoner's clothes, a gaming set of your choice, a bottle of hard liqueur, and 1d12 copper pieces.`,
		backgroundSpecial: {
			title: `Origins of Disgrace`,
			description: `There's a reason you're hated.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `I am a drunkard and a layabout. I have done nothing but prove that I am useless.`,
				},
				{
					number: 2,
					description: `I was born into a noble family, but I didn't live up to my family's expectations.`,
				},
				{
					number: 3,
					description: `I am a bastard child, and nobody cares for a fatherless wretch.`,
				},
				{
					number: 4,
					description: `I was accused of a terrible crime that I didn't commit. Even though no evidence came of the investigations, rumors are still spread about me.`,
				},
				{
					number: 5,
					description: `I spoke out against the local government's injustices. The nail that sticks out gets hammered down...`,
				},
				{
					number: 6,
					description: `I was supposedly a prophesied hero, but I failed to meet the expectations of my people.`,
				},
			],
		},
		feature: {
			title: `Wretched Kinship`,
			description: `The undesirables of society trust you, mostly because they assume that you fear persecution as much as they do. You are able to find free 'lodging' (You sleep for free, but you are only experiencing the 'comforts' of the squalid lifestyle) with criminals and vagrants alike. However, if you are in a town, village, or city in which your name is known, you are unable to stay in any respectable establishment.`,
		},
		alterateFeature: [
			{
				title: `Redeemer`,
				description: `Though you are still hated by the masses, you have found a generous bunch that is willing to overlook your societal standing. Be it a wealthy employer or a religious sect, you are able to obtain free food and lodging when dealing with associates of your ward. (Work with your DM to decide if you wish to work with a church, be a servant, or maybe even a bodyguard to a wealthy noble.) You will still be looked down upon by commoners and nobility alike, but the organization that took you in will treat you with respect so long as you do the same.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I don't speak much since I have been stigmatized by my people.`,
				},
				{
					number: 2,
					description: `I believe that others are always looking for an excuse to hate me.`,
				},
				{
					number: 3,
					description: `I know people hate me, and that's fine. I hate them more.`,
				},
				{
					number: 4,
					description: `I won't let some stupid stigma against me hold me back. I still have a life to live.`,
				},
				{
					number: 5,
					description: `I am excessively apologetic to others, fearing that any little mistake is a potential angry mob in my future.`,
				},
				{
					number: 6,
					description: `I don't let the little things bother me. There's plenty worse than judgmental stares and whispered rumors.`,
				},
				{
					number: 7,
					description: `I am aggressive and abrasive, always making sure to let people know that they're no better than me.`,
				},
				{
					number: 8,
					description: `I am determined to grow and rise above this adversity, taking every day in stride.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Refuge`,
					description: `I just want to be left to live my life without constantly hearing others gripe.`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Revenge`,
					description: `There's a reason I'm hated, and that's because there were those who thought themselves more powerful than me. I'll prove them wrong...`,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Redemption`,
					description: `I am flawed, and I have done wrong before, but I can become a productive member of society once again.`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Respite`,
					description: `I don't care what it takes, I will ensure that no other faces unjust persecution like I did. `,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Ravage`,
					description: `Society is to blame for my ill fortune. Surely, society must be made anew... `,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Revitalize`,
					description: `I know I can be more than this. I will become better, stronger, smarter.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I once had a child, but either before or after I fell to this level of depravity, they were taken from me. I wish to find them again.`,
				},
				{
					number: 2,
					description: `My childhood friend stood with me even after all others turned on me. I owe them so much.`,
				},
				{
					number: 3,
					description: `I used to own a business, but it was taken from me in the trials. I will have it once again.`,
				},
				{
					number: 4,
					description: `I truly did wrong someone (Be it an individual, a group or a family) and I must make amends for the suffering I have caused them.`,
				},
				{
					number: 5,
					description: `I was imprisoned after my trial, but a traveling businessman heard me out and paid my bail. I will repay him however I can.`,
				},
				{
					number: 6,
					description: `My faith has kept me strong through my disgrace, I thank my god every day for the freedom I still have.`,
				},
			],
		},
		Dragon_Raised: {
			isHomebrew: true,
			description: `You were raised by dragons. You have learned to persuade and intimidate from the best of the best. You've gained the trust of a dragon and all their connections. But how? Maybe a gold dragon took pity on you, living in a largely working class settlement. Maybe you impressed a red dragon by overthrowing a political leader, and bringing chaos to - and possibly ending a civilization. Maybe a deep dragon found you stranded in the underdark and worked you as a slave, or maybe you impressed them and they thought highly of you.`,
			skillProficiencies: `Persuasion, Intimidation`,
			toolProficiencies: `One type of gaming set`,
			languages: `Draconic, or if you already know it choose another one of your choice.`,
			startingEquipment: `One type of gaming set, a set of fine clothes, a trinket (page 160 PHB) and a pouch containing 30 gp`,
			backgroundSpecial: {
				title: ``,
				description: ``,
				die: ``,
				roll: [
					{
						number: 1,
						description: ``,
					},
					{
						number: 2,
						description: ``,
					},
					{
						number: 3,
						description: ``,
					},
					{
						number: 4,
						description: ``,
					},
					{
						number: 5,
						description: ``,
					},
					{
						number: 6,
						description: ``,
					},
				],
			},
			feature: {
				title: `Draconic Connections`,
				description: `Thanks to your dragon parent, you share any connections they may have had. If the dragon used a messenger, you know where to find them. This could be a follower of the dragon, such as a dragon blessed, chosen, or speaker, or maybe a kobold. If the dragon did not use a messenger, then you have to contact the connections yourself. They should be willing to help, depending on what you're asking for.`,
			},
			alterateFeature: [
				{
					title: ``,
					description: ``,
				},
				{
					title: ``,
					description: ``,
				},
			],
			suggestedCharacteristics: `Dragon raised have huge respect for dragons, value culture and love gold. Some go crazy at the sight of gold, and will do anything to get it, while some might appreciate culture more.`,
			suggestedPersonalityTraits: {
				description: ``,
				die: `1d8`,
				title: ``,
				roll: [
					{
						number: 1,
						description: `I ask a lot of questions about different cultures.`,
					},
					{
						number: 2,
						description: `I have huge respect for dragons, and their connections.`,
					},
					{
						number: 3,
						description: `I expect kobolds to worship me, even though I'm not a dragon.`,
					},
					{
						number: 4,
						description: `I treat dragonborn as if they were below me, because they are.`,
					},
					{
						number: 5,
						description: `I get very angry when any kind of dragon is threatened.`,
					},
					{
						number: 6,
						description: `I treat dragonborn with great respect, due to their draconic heritage and shared culture.`,
					},
					{
						number: 7,
						description: `I have no remorse for dragons, because my draconic parent abused and used me.`,
					},
					{
						number: 8,
						description: `I have flashbacks to when I was being raised or enslaved when I see a dragon('s lair) of the same type as my parent.`,
					},
				],
			},
			suggestedIdeal: {
				description: ``,
				die: `1d6`,
				title: ``,
				roll: [
					{
						number: 1,
						bold: `Money`,
						description: `Money is the most important thing in the world, and I'd do anything to get some, even if that means breaking the law.`,
						alignment: `Chaotic`,
					},
					{
						number: 2,
						bold: `Culture`,
						description: `There is nothing more important than culture. It shapes history and laws, which we must follow.`,
						alignment: `Lawful`,
					},
					{
						number: 3,
						bold: `Control`,
						description: `I love control. I must be the head of any group I'm in, and if they refuse me, I'll get there by authoritarian means `,
						alignment: `Evil`,
					},
					{
						number: 4,
						bold: `Religion`,
						description: `Worship is the most important thing, especially to Tiamat or Bahamut `,
						alignment: `Any`,
					},
					{
						number: 5,
						bold: `Connections`,
						description: `Cooperation between creatures is the best way to figure anything out.`,
						alignment: `Good`,
					},
					{
						number: 6,
						bold: `Balance`,
						description: `Everything is a complex interaction of forces that must be kept in a delicate balance`,
						alignment: `Neutral`,
					},
				],
			},
			suggestedBond: {
				description: ``,
				die: `1d6`,
				title: ``,
				roll: [
					{
						number: 1,
						description: `Dragons are the most important thing to me, I'll do anything to protect them.`,
					},
					{
						number: 2,
						description: `I'll do anything to keep my (rather small) horde safe.`,
					},
					{
						number: 3,
						description: `Culture is the strongest force, and I stick to it, no matter the cost`,
					},
					{
						number: 4,
						description: `I was given a magic item from my draconic parent, and wish to keep it safe.`,
					},
					{
						number: 5,
						description: `Money is something sacred to me.`,
					},
					{
						number: 6,
						description: ``,
					},
				],
			},
			suggestedFlaw: {
				description: ``,
				die: `1d6`,
				title: ``,
				roll: [
					{
						number: 1,
						description: `I'll do anything for money, and it gets in the way of my relationships.`,
					},
					{
						number: 2,
						description: `Common is a language I hardly understand.`,
					},
					{
						number: 3,
						description: `I am so devoted to worshipping the dragon gods, that anyone who opposes them I must kill`,
					},
					{
						number: 4,
						description: `The thought of dragons makes me mad, and enact violence on any mildly draconic creature.`,
					},
					{
						number: 5,
						description: `Fire is beautiful, and so is anything on fire, so why not set fire to everything?`,
					},
					{
						number: 6,
						description: `Anyone who is uncultured doesn't deserve my respect.`,
					},
				],
			},
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `The distrust of others has led me to my own suspicions of others.`,
				},
				{
					number: 2,
					description: `I hate all nobility. It's because of their damnable politicking that my life fell apart.`,
				},
				{
					number: 3,
					description: `I've taken a bit too well to pariah-hood. I'm uncomfortable around law-abiding individuals.`,
				},
				{
					number: 4,
					description: `I've only recently re-entered the civilized world. My hostile environment still haunts me, making me skittish and fearful.`,
				},
				{
					number: 5,
					description: `High ranking officials who ask too many questions often receive thinly veiled death threats from me.`,
				},
				{
					number: 6,
					description: `I'm still just as much of a disgrace as I was accused of being. I will lie, cheat and steal to my heart's content.`,
				},
			],
		},
	},
	Entomologist: {
		isHomebrew: true,
		description: `You are a professional bug researcher, spending hours everyday discovering, protecting, hunting, and researching insects. Are you a field researcher, are you trying to solve a locust epidemic? Do you simply love being around invertebrates? What kind of invertebrates do you study? Myriapods? Worms? Ants? Arachnids? Are you trying to find an antivenom for a deadly spider? Maybe you see a future where you can make lots of money selling pesticide. Maybe a specific insect trusts you through months of training. Possibly a tarantula, mantis, or centipede will never attack you, even though it is normally very aggressive. This may seem like a niche profession, but there is so much you can do with it.`,
		skillProficiencies: `Survival, Nature, or Animal Handling`,
		toolProficiencies: `Bug-Catching Net, Microscope`,
		languages: `Choose any language`,
		startingEquipment: `Bug net, microscope, traveler's clothes, bee suit, insect encyclopedia`,
		backgroundSpecial: {
			title: `Specialization`,
			description: `Entomology is a broad term. Which type of invert do you study?`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Myriologist`,
				},
				{
					number: 2,
					description: `Entomologist(Insects only)`,
				},
				{
					number: 3,
					description: `Arachnologist`,
				},
				{
					number: 4,
					description: `Gastrology or Conchology`,
				},
				{
					number: 5,
					description: `Wormologist`,
				},
				{
					number: 6,
					description: `Isopologist`,
				},
			],
		},
		feature: {
			title: `Slow, but possible training`,
			description: `As an entomologist, you can employ the capture, use, and companionship of an insect. You can spend your downtime to train an insect of no more than CR 1/2 to perform special tricks, like basic commands through scents or sounds. Each trick takes 10 days of downtime to learn. You can only have 1 insect that can learn an attack.`,
		},
		alterateFeature: [
			{
				title: `Knowledge of Insects`,
				description: `You generally can tell a lot about an invert just by looking at it; you have advantage on Intelligence checks to recall and gather information on myriapods, insects, arachnids, worms, slugs, snails, etc.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `When other people scream at a spider in their pack, you might pick it up, identify it, and take notes. In the middle of an intense moment, spotting a rare insect might pull your attention away from whatever was important.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `You don't care about animals and only became an entomologist so you cold get away from civilization and still make money.`,
				},
				{
					number: 2,
					description: `You struggle to make friends, as most people think you are weird for picking your profession.`,
				},
				{
					number: 3,
					description: `You have a lot of grit and never stop working until you achieve your goals.`,
				},
				{
					number: 4,
					description: `You are extremely brave and have little care for your own life.`,
				},
				{
					number: 5,
					description: `You have an immense fear of spiders, but your family pressured you to pursue your career to get over the fear. So far, no luck.`,
				},
				{
					number: 6,
					description: `You are super forgiving. Even when people bully you non-stop, you forgive them as soon as they apologize.`,
				},
				{
					number: 7,
					description: ``,
				},
				{
					number: 8,
					description: ``,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Humane`,
					description: `Cruelty is wrong and you feel you should protect the suffering`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Peace`,
					description: `Violence solves nothing`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Order`,
					description: `Chaos cuases countless problems`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Working with Nature`,
					description: `Nature and people can work together to achieve greatness`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Greed`,
					description: `You always act for your own good, never doing service for others`,
					alignment: `Evil`,
				},
				{
					number: 6,
					bold: `Freedom`,
					description: `Everyone should be free to do whatever they want`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `You love a specific invert that goes with you wherever you go.`,
				},
				{
					number: 2,
					description: `Your best friend is also your mentor or master when you were an apprentice.`,
				},
				{
					number: 3,
					description: `You get homesick when you are away from the wilderness.`,
				},
				{
					number: 4,
					description: `You miss your peers from zoology class who moved on with their lives.`,
				},
				{
					number: 5,
					description: `Your pet tarantula was killed by your rival: besting them or getting revenge is your #1 priority.`,
				},
				{
					number: 6,
					description: `You would sacrifice your life to protect an insect species that has been hunted nearly to extinction for its medicinal uses.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `You went into zoology because you are terrible at interacting with people, and talk to bugs instead.`,
				},
				{
					number: 2,
					description: `You are always out in the wild, so you never have time to take a shower or bath.`,
				},
				{
					number: 3,
					description: `The only people you knew well was a teacher and your parents, so you don't have practice in society.`,
				},
				{
					number: 4,
					description: `You are always grumpy because you find your profession terribly boring.`,
				},
				{
					number: 5,
					description: `You are super lazy because you find your job ridiculously easy.`,
				},
				{
					number: 6,
					description: `You have a terrible sense of humor, even though you try to make jokes.`,
				},
			],
		},
	},
	Exiled: {
		isHomebrew: true,
		description: `You have been thrown out of your home and may never return. Where were you before you were exiled? What did you do to deserve the exile? Were you falsely accused and if so why? What are the conditions of your return if there are any? Are you over your exile, or are you still torn by it? Do you still have contacts with your old life, or have you been fully cut off? Do you carry something with you to remember and if so to remember what? Your home? Your crime? Revenge?`,
		skillProficiencies: `Insight, Perception and Survival`,
		toolProficiencies: `One type of Artisan's tools of your choice`,
		languages: `two of your choice`,
		startingEquipment: `One set of Artisan's tools of your choice, travelers clothes, a winter blanket, a pouch containing 5 gp, and a reminder of home (a drawing, a leaf, a ring...)`,
		backgroundSpecial: {
			title: `Origin`,
			description: `You've had to have been exiled from somewhere. Consider what your home was like and what it meant to you. You may roll on the following table to find your home setting, or simply choose one that fits your character.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Noble Family`,
				},
				{
					number: 2,
					description: `Mountaintop Monastery`,
				},
				{
					number: 3,
					description: `Nomadic Tribe`,
				},
				{
					number: 4,
					description: `Smalltown/City`,
				},
				{
					number: 5,
					description: `Military Unit`,
				},
				{
					number: 6,
					description: `A Guild`,
				},
			],
		},
		feature: {
			title: `Echoes of the Past`,
			description: `You may have been forced to leave your previous life, but it hasn't left you. You have knowledge about the ways people treat one another and therefore have been gifted with skills revolving around a quick-witted nature. with each long rest you are guaranteed persuasion or deception`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Some exiles take time to adjust to their new life, others adapt fairly quickly and try to drown out their memories of home. Exiles may be slow to trust others, but they are eager to make allies. Some exiles seek only to return home no matter the cost. Are you one of them?`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I talk to travelers frequently for any news about home.`,
				},
				{
					number: 2,
					description: `I feel a need to prove myself to others so I won't be thrown out again.`,
				},
				{
					number: 3,
					description: `I am full of stories from my old life, and am eager to share them.`,
				},
				{
					number: 4,
					description: `I don't talk about my past, it's too painful for me.`,
				},
				{
					number: 5,
					description: `I still follow the culture and practices of my old life.`,
				},
				{
					number: 6,
					description: `I'd rather make friends than enemies.`,
				},
				{
					number: 7,
					description: `I don't do relationships, they could fall apart at any time.`,
				},
				{
					number: 8,
					description: `I blow up when someone badmouths my old home.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Spite`,
					description: `Those fools will RUE the day they threw me out`,
					alignment: `Evil`,
				},
				{
					number: 2,
					bold: `Customs`,
					description: `I had to be thrown out. There was no other choice`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Change`,
					description: `The rules I was exiled for were dated and wrong. I must change them.`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Belonging`,
					description: `I need to find myself a place to belong.`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Destiny`,
					description: ` I must make the best of my exile and use my abilities to help others.`,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Return`,
					description: `I will be back.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I will never forget my old home.`,
				},
				{
					number: 2,
					description: `I still have a friend or two from my old life who I can still talk to.`,
				},
				{
					number: 3,
					description: `I was falsely accused and exiled, I will not stand for injustice toward others.`,
				},
				{
					number: 4,
					description: `When I was exiled, I was separated from the love of my life. I must reunite with them.`,
				},
				{
					number: 5,
					description: `There were people who conspired my exile. I will get my revenge.`,
				},
				{
					number: 6,
					description: `My friends are all I have now, I would gladly die for them instead of being alone again.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have learned of a dark secret from my old life, something with grave consequences if revealed.`,
				},
				{
					number: 2,
					description: `I get flustered easily when I feel people are going to leave me.`,
				},
				{
					number: 3,
					description: `I am often incredibly defensive, seeing accusations where none were made.`,
				},
				{
					number: 4,
					description: `My desire to return home often blinds me from seeing the big picture.`,
				},
				{
					number: 5,
					description: `I am always in a foul mood.`,
				},
				{
					number: 6,
					description: `There are people from my old life who want me dead.`,
				},
			],
		},
	},
	Explorer: {
		isHomebrew: true,
		description: `Venturing to places deemed too dangerous or too deeply shrouded in mystery for even the most experienced of scouts is what you do. Or, at least, it's what you used to do. The question remains: is that still who you are, or are you trying to distance yourself from your exploratory tendencies? What drove you to seek the unknown in the first place? A promise of immeasurable treasure? The fame and adoration of countless would-be adventurers?`,
		skillProficiencies: `Acrobatics, Animal handling`,
		toolProficiencies: `Herbalism Kit, Vehicles (land), Vehicles (water)`,
		languages: `One of your choice`,
		startingEquipment: `A climber's kit, Herbalism Kit, a set of traveler's clothes, a belt pouch containing 10 gp, and a small telescope`,
		backgroundSpecial: {
			title: `Specialization`,
			description: `Explorers have few specializations. Most fall into the general idea of explorer, someone who goes into the wild and explores, but some have unique motives or goals. Here are some examples of explorer specialization.`,
			die: `1d6`,
			roll: [
				{
					number: 1,
					description: `Cartographer`,
				},
				{
					number: 2,
					description: `Guide`,
				},
				{
					number: 3,
					description: `Royal Explorer`,
				},
				{
					number: 4,
					description: `Climber`,
				},
				{
					number: 5,
					description: `Relic Hunter`,
				},
				{
					number: 6,
					description: `Wilderness Explorer`,
				},
			],
		},
		feature: {
			title: `Experience`,
			description: `You always know how to find water, food, and can make a shelter if the land provides. You have absolute knowledge of every kind of plant without the need to do a Nature check, you have advantage for any checks to turn herbs into a medicine potion for allies or poison for foes.`,
		},
		alterateFeature: [
			{
				title: `Scout/Dexterous Explorer`,
				description: `The scout, or dexterous explorer is very much similar to the explorer, yet they lean towards dexterity as their main skill. They are proficient in Dexterity (Acrobatics) instead of Strength (Athletics) and can make Dexterity (Acrobatics) checks for any checks you make with your climber's kit or grappling hook. You have advantage on checks to gauge the value of an item.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `When I'm in the city, I'm quick-tempered and annoyed at everyone.`,
				},
				{
					number: 2,
					description: `I always expect everyone to be as good as me at exploration and travel.`,
				},
				{
					number: 3,
					description: `I jot down notes on everything I see in the wild.`,
				},
				{
					number: 4,
					description: `Even when I'm not exploring, I delve into alleys and climb the tallest buildings in the city so I can get a little of what I love.`,
				},
				{
					number: 5,
					description: `I don't really care about the beauty of the land, just the treasure hidden inside it.`,
				},
				{
					number: 6,
					description: `I take every chance I have to have fun or feel exhilarated.`,
				},
				{
					number: 7,
					description: `If I'm not exploring, I'm trading my relics and maps for whatever I can find.`,
				},
				{
					number: 8,
					description: `When I'm in the wild, I'm calm and respectful to everyone.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `People`,
					description: `I don't care for ideals, but for the people that help me with the thing I love.`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Nature`,
					description: `While surrounded by nature, I have seen wonderful things and have had moments of serenity`,
					alignment: `Good`,
				},
				{
					number: 3,
					bold: `Live`,
					description: `Exploration is dangerous, but I have accustomed myself to the laws of the wild`,
					alignment: `Neutral`,
				},
				{
					number: 4,
					bold: `Greed`,
					description: `The ancient artifacts that can be traded for a hefty cost are all I want from the land.`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Knowledge`,
					description: `Whenever I chart a new land or find a new thing, I feel more complete than I had before`,
					alignment: `Lawful`,
				},
				{
					number: 6,
					bold: `Freedom`,
					description: `When I explore and discover new lands, only then do I feel truly free.`,
					alignment: `Chaotic`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I began a life of exploration at a young age. However, this came at the cost of leaving my noble family.`,
				},
				{
					number: 2,
					description: `I found a dangerous relic of a fallen god on my travels, and must safeguard it for the rest of my life.`,
				},
				{
					number: 3,
					description: `I will do anything to protect the wilds that I have come to love more than any city.`,
				},
				{
					number: 4,
					description: `I left my companions to die when I could have sacrificed myself to save them. Now, I will only return to that life for something I truly believe in.`,
				},
				{
					number: 5,
					description: `I would rather die than retire, my job is my life.
`,
				},
				{
					number: 6,
					description: `I get a blast of excitement whenever I discover something new.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I'm greedy as a goblin.`,
				},
				{
					number: 2,
					description: `I act like I'm the most important member of the party.`,
				},
				{
					number: 3,
					description: `I get overly excited easily.`,
				},
				{
					number: 4,
					description: `Finding whatever I am looking for is more important than the lives of my friends.`,
				},
				{
					number: 5,
					description: `Don't tell me what I can't do.`,
				},
				{
					number: 6,
					description: `Don't tell me what I can't do.`,
				},
			],
		},
	},
	Fishmonger: {
		isHomebrew: true,
		description: `You spent your days working by the docks or in the bustling marketplace, selling fresh catches from the nearby rivers, lakes, or seas. Your livelihood depended on your ability to haggle, clean, and display the day's catch, earning you a reputation as a reliable provider of seafood. Whether you're a seasoned veteran of the trade or a newcomer learning the ropes, your experiences as a fishmonger have shaped your skills and outlook on life.`,
		skillProficiencies: `Persuasion, Sleight of Hand`,
		toolProficiencies: `Fisherman's Tools`,
		languages: `One language of your choice, often a regional dialect or pidgin common among sailors and fishermen`,
		startingEquipment: `A set of artisan's tools (chosen from the appropriate options), a scale, a knife, a set of common clothes, a pouch containing 10 gp, and a token from your first day as a fishmonger (perhaps a lucky charm or a trinket from a memorable catch).`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Market Expertise`,
			description: `Your time spent in the marketplace has granted you insight into the local economy and social dynamics. You know where to find the freshest seafood, the best prices, and the juiciest gossip. Additionally, you can often rely on fellow fishmongers and market vendors for assistance or information when needed, provided you approach them with respect and courtesy.`,
		},
		alterateFeature: [
			{
				title: `Sea-Farer's Connections`,
				description: `Through your connections with fellow seafarers and merchants, you have access to valuable information and resources. Whether it's learning about the best fishing spots or gaining insights into local trade routes, your network of contacts proves invaluable in your endeavors.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: `Fishmongers come from all walks of life, but they share a deep connection to the aquatic life and a passion for their trade. Whether they are grizzled veterans or wide-eyed newcomers, they possess a unique blend of practicality, resilience, and resourcefulness.`,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have a knack for striking up conversations with strangers and making them feel at ease.`,
				},
				{
					number: 2,
					description: `I'm always on the lookout for a good deal or an opportunity to turn a profit.`,
				},
				{
					number: 3,
					description: `I take pride in my work and go to great lengths to ensure that my customers receive the best quality seafood.`,
				},
				{
					number: 4,
					description: `I have a quick wit and a sharp tongue, honed by years of haggling and bantering with customers.`,
				},
				{
					number: 5,
					description: `I'm a bit superstitious and always carry a lucky charm or perform a ritual before heading out to sea or starting a new day at the market.`,
				},
				{
					number: 6,
					description: `I have a deep respect for the ocean and its creatures, viewing them not just as a source of livelihood but as majestic beings worthy of reverence.`,
				},
				{
					number: 7,
					description: `I love to share stories of my adventures fishing or at sea, embellishing them for dramatic effect.`,
				},
				{
					number: 8,
					description: `I'm fiercely protective of my territory and won't hesitate to confront anyone who tries to encroach on my turf.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Community`,
					description: `I believe in supporting my fellow fishermen and market vendors, knowing that together we are stronger.`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Oppurtunity`,
					description: `I'm always on the lookout for new business ventures and ways to expand my enterprise.`,
					alignment: `Neutral`,
				},
				{
					number: 3,
					bold: `Independance`,
					description: `I cherish my freedom and autonomy, refusing to be tied down by obligations or commitments.`,
					alignment: `Chaotic`,
				},
				{
					number: 4,
					bold: `Tradition`,
					description: `I adhere to the time-honored practices and rituals of my trade, respecting the wisdom of those who came before me`,
					alignment: `Lawful`,
				},
				{
					number: 5,
					bold: `Growth`,
					description: `I strive to improve myself and my skills, seeking out challenges and experiences that will help me evolve.`,
					alignment: `Any`,
				},
				{
					number: 6,
					bold: `Hospitality`,
					description: `I take pleasure in sharing the bounty of the sea with others, welcoming friends and strangers alike to my table.`,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I owe a debt of gratitude to the mentor who taught me the ways of the fishmonger, and I will always cherish their guidance.`,
				},
				{
					number: 2,
					description: `My family has been in the fishing business for generations, and I am proud to carry on the tradition.`,
				},
				{
					number: 3,
					description: `I have formed close bonds with the fishermen and sailors who brave the dangers of the sea, and I will always stand by them in times of need.`,
				},
				{
					number: 4,
					description: `The sea holds many secrets and treasures, and I am determined to uncover them all, no matter the cost.`,
				},
				{
					number: 5,
					description: `I am deeply invested in the prosperity of my hometown or community, and I will do whatever it takes to ensure its success.`,
				},
				{
					number: 6,
					description: `I have a soft spot for stray cats and dogs, often bringing home scraps of fish to feed them.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have a tendency to exaggerate or embellish stories about my fishing exploits, especially when trying to impress others.`,
				},
				{
					number: 2,
					description: `I am easily swayed by flattery or smooth talkers, often making deals or decisions that I later regret.`,
				},
				{
					number: 3,
					description: `I can be fiercely competitive, sometimes resorting to underhanded tactics to outshine rival fishmongers.`,
				},
				{
					number: 4,
					description: `I have a short temper, especially when dealing with rude or disrespectful customers.`,
				},
				{
					number: 5,
					description: `I am overly superstitious, believing in signs and omens that others might dismiss as mere coincidence.`,
				},
				{
					number: 6,
					description: `I have a weakness for gambling and often find myself risking more than I can afford to lose in games of chance.`,
				},
			],
		},
	},
	Fortune_Teller: {
		isHomebrew: true,
		description: `You are a kind of diviner who makes a name for themselves doing things like tarot, palm-reading, and the like. Sometimes it is for profit, and other times you are a sibyl of the city perhaps, in a royal court. Your tongue can commune supposedly with forces beyond mortal understanding, reaching into the fate that entwines all planes of existence. You may be self-employed, traveling the lands and reading fortunes, setting up shop here and there. Perhaps you cater to a selectly powerful circle of those who use you to plan their next steps in the world. Armies are known to consult auguries to ensure their odds in battle. They come to people like you. Are your abilities real, though? Or are you merely a swindler?`,
		skillProficiencies: `Perception and either Insight or Persuasion`,
		toolProficiencies: `Playing card set`,
		languages: `Two languages of your choice`,
		startingEquipment: `A medium through which you read fortunes (tarot deck, small bag of bones, crystal orb, collapsible divining board, etc.), a set of traveler's clothes, and a belt pouch containing 15 gp`,
		backgroundSpecial: {
			title: `Specialization`,
			description: ``,
			die: `1d8`,
			roll: [
				{
					number: 1,
					description: `Crystal Ball Seer`,
				},
				{
					number: 2,
					description: `Tea Leaf Reader`,
				},
				{
					number: 3,
					description: `Palm Reader`,
				},
				{
					number: 4,
					description: `Psychic / Clairvoyant`,
				},
				{
					number: 5,
					description: `Bone Reader`,
				},
				{
					number: 6,
					description: `Medium`,
				},
				{
					number: 7,
					description: `Astrologer`,
				},
				{
					number: 8,
					description: `Smoke Reader`,
				},
			],
		},
		feature: {
			title: `Sign Reader`,
			description: `The future is not always clear, even to you. Unlike a mystic, you don't even get visions so clearly, Instead, you see them in the natural world and the surroundings about you. At the DM's discretion, you may notice small subtle hints of odd patterns or portents that you can interpret to decipher an event. You may not always know when it will happen or where, and the magnitude or significance may not be clear. `,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I travel far and wide to uncover the secrets of the world.`,
				},
				{
					number: 2,
					description: `My powers are my profession.`,
				},
				{
					number: 3,
					description: `I've seen empires fall before it even happened.`,
				},
				{
					number: 4,
					description: `I've read enough books and tomes it would make a wizard blush.`,
				},
				{
					number: 5,
					description: `I feel more comfortable outdoors than inside claustrophobic spaces.`,
				},
				{
					number: 6,
					description: `I always have a plan for when things go wrong.`,
				},
				{
					number: 7,
					description: ``,
				},
				{
					number: 8,
					description: ``,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Freedom`,
					description: `I'm a free spirit unbound by the laws of man.`,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					bold: `Greed`,
					description: `I'll tell any lie to make it rich`,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Tradition`,
					description: `The stories, legends, and songs must never be forgotten, for they make us who we are. `,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Profit`,
					description: `I tell a story, they like it. I get paid. Everyone's happy.`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Generosity`,
					description: `My talents were given to me so that I could use them to benefit the world.`,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Self-Knowledge`,
					description: `If you know yourself, there's nothing left to know, nothing to tell`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d4`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I had to leave the people I care about for I put them in constant danger.`,
				},
				{
					number: 2,
					description: `Should my discoveries come to light, they could bring ruin to the world.`,
				},
				{
					number: 3,
					description: `I sponsor an orphanage to keep others from enduring what I to.`,
				},
				{
					number: 4,
					description: `I pursue wealth to secure someone's love.`,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I never want to use my gifts to help people.`,
				},
				{
					number: 2,
					description: `I am often drowning in self pity because of the cursed nature of my power.`,
				},
				{
					number: 3,
					description: `I suffer horrible nightmares from my abilities.`,
				},
				{
					number: 4,
					description: `I can't help but pocket trinkets and loose coins that I did not rightfully earn.`,
				},
				{
					number: 5,
					description: `I'm a fraud who keeps on lying.`,
				},
				{
					number: 6,
					description: `I'll say anything to avoid extra work.`,
				},
			],
		},
	},
	Hitman: {
		isHomebrew: true,
		description: `A hitman is someone who is either so far gone from their previous selves or just enjoys the work enough to kill people for money. How might your character have gotten into this kind of work? Is he or she willingly in this line or forcefully? Are there any jobs that your character might regret taking for various reasons? What type of reputation in the crime world does your character have? Is he or she feared, respected, or even hated?`,
		skillProficiencies: `Stealth, Perception`,
		toolProficiencies: `Disguise kit, Thieves' tools`,
		languages: `Choose two languages`,
		startingEquipment: `2 hand crossbows or 1 heavy crossbow, leather armor, thieve's tools, a hooded cloak, a set of common clothes, and a belt pouch with 15 gold.`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Contract Killing`,
			description: `Your character kills people for money and generally has taken a few jobs before the start of the game. In places where crime is heavy such as a larger city your character should be able to find a job or a contract to complete for local crime bosses or people just willing to pay to have someone else killed.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My years of killing have made me cold and distant to those around me.`,
				},
				{
					number: 2,
					description: `I take pride in what I do and brag about my exploits to those I trust not to tell.`,
				},
				{
					number: 3,
					description: `Money is king, it is the only thing worth killing for.`,
				},
				{
					number: 4,
					description: `My time spent with the wrong crowd has made me untrusting to new people.`,
				},
				{
					number: 5,
					description: `I am wary of those who also kill because if they are like me, I know what they are capable of.`,
				},
				{
					number: 6,
					description: `If someone is in the way of me completing a job it's on them, not me.`,
				},
				{
					number: 7,
					description: `I am quick to violence because in my line of work that is usually how it ends up. Might as well not stand around arguing first.`,
				},
				{
					number: 8,
					description: `I will break your jaw if you start to annoy me.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Reputation`,
					description: `In this business reputation is key and I've got to keep mine`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Destruction`,
					description: `I want to be not only the best option for those looking to hire but the only option`,
					alignment: `Evil`,
				},
				{
					number: 3,
					bold: `Immediate`,
					description: `If you are not willing to do what it takes to get the job done, don't do it.`,
					alignment: `Chaos`,
				},
				{
					number: 4,
					bold: `Swords`,
					description: `There are a thousand men to do the job. I want to be top of the list, however possible`,
					alignment: `Evil`,
				},
				{
					number: 5,
					bold: `Honorable`,
					description: `I only take the jobs I need to survive. There is no purpose in senseless killing. `,
					alignment: `Good`,
				},
				{
					number: 6,
					bold: `Savior`,
					description: `I only kill the bad ones. I won't kill an honorable man`,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Once while on a job I killed the wrong man. That mistake still haunts me today.`,
				},
				{
					number: 2,
					description: `When I do a job I have to do it with my specific calling card or else I consider it a failure.`,
				},
				{
					number: 3,
					description: `Snitches get stitches. I learned that the hard way.`,
				},
				{
					number: 4,
					description: `I take a trophy from every job to remind me of what I have done.`,
				},
				{
					number: 5,
					description: `There was a man in my youth who taught me everything I know. He was my first contract.`,
				},
				{
					number: 6,
					description: `I never kill children. Everyone has a line and that is mine.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `All of this killing and doing it myself has made me not work well with others.`,
				},
				{
					number: 2,
					description: `I must complete the job at all costs. No exceptions.`,
				},
				{
					number: 3,
					description: `I close myself off when anything about my work or my past is mentioned for fear someone will use it against me.`,
				},
				{
					number: 4,
					description: `I always assume everyone of stature in the room knows of my exploits.`,
				},
				{
					number: 5,
					description: `I always assume that everyone is looking to hire.`,
				},
				{
					number: 6,
					description: `My one fear is the law and I don't think I would hold up if I was questioned by them.`,
				},
			],
		},
	},
	Innkeeper: {
		isHomebrew: true,
		description: `Throughout your entire life, you've heard of the grand adventures by grander adventurers, and from the amount of heroes that pass through your inn you've finally become fed up, and have decided to start up the adventuring life of your own, with from what you've wrangled up spare from lost property to using card games to earn a little extra gold, you saved up enough to begin your adventure, selling or granting your inn, you set out and begin a new chapter in your life`,
		skillProficiencies: ``,
		toolProficiencies: ``,
		languages: ``,
		startingEquipment: ``,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Former Proprieter`,
			description: `You ran an inn, which you have abandoned for the life of adventure. However, the new owner of the inn or tavern may give you free room and board at a modest standard. Other innkeepers will likely favor you, upon learning your background. You may also know patrons, who may offer favors or jobs.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: `Innkeepers are mostly defined by their customers, for better or worse.`,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Everyone has a story to tell, for the right price.`,
				},
				{
					number: 2,
					description: `In my books, if you're a Patron, you're a friend.`,
				},
				{
					number: 3,
					description: `I've always believed that alcohol is the best medicine.`,
				},
				{
					number: 4,
					description: `I've never been scared to back down from a fight.`,
				},
				{
					number: 5,
					description: `My sharp wit and cunning remarks can cut tension like a hot knife.`,
				},
				{
					number: 6,
					description: `I have a joke for every occasion.`,
				},
				{
					number: 7,
					description: `I like to collect trinkets and magical objects, even if that means stealing them sometimes.`,
				},
				{
					number: 8,
					description: `I always have a story that relates to the matter at hand.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Kindness`,
					description: `A smile and a free ale can raise a lot of spirits`,
					alignment: `Good`,
				},
				{
					number: 2,
					bold: `Frugal`,
					description: `If I can haggle a price I will`,
					alignment: `Lawful`,
				},
				{
					number: 3,
					bold: `Power`,
					description: `Gold can get you a lot, but a threat can get you more`,
					alignment: `Evil`,
				},
				{
					number: 4,
					bold: `Curiosity`,
					description: `I'm always thinking of new concoctions to introduce to the inn`,
					alignment: `Neutral`,
				},
				{
					number: 5,
					bold: `Knowledge`,
					description: `With enough alcohol, you can make someone tell you anything`,
					alignment: `Chaotic`,
				},
				{
					number: 6,
					bold: `Freedom`,
					description: `If something is being given away, chances are, I will always take it`,
					alignment: `Neutral`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I will always be grateful to my mentor who taught me everything I know.`,
				},
				{
					number: 2,
					description: `I remember being a "gutter rat" and will push for them to be treated equally.`,
				},
				{
					number: 3,
					description: `I am forever in debt to the family that adopted me when no one else would.`,
				},
				{
					number: 4,
					description: `A monster destroyed my village and family, and now it is my duty to slay the beast.`,
				},
				{
					number: 5,
					description: `I accidentally served a dangerous criminal and now the guards don't trust me.`,
				},
				{
					number: 6,
					description: `I have grown up fixing my families mistakes.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I always speak my mind, for better or worse.`,
				},
				{
					number: 2,
					description: `I'm not the most careful of people and tend to break things now and again.`,
				},
				{
					number: 3,
					description: `I have a serious drinking problem.`,
				},
				{
					number: 4,
					description: `My wit has landed me in more jails than I can count.`,
				},
				{
					number: 5,
					description: `I tend to get carried away when insulting someone.`,
				},
				{
					number: 6,
					description: `My anger issues have been responsible for many broken jaws.`,
				},
			],
		},
	},
	Intellectual: {
		isHomebrew: true,
		description: `You have dedicated your life to the pursuit of knowledge, critical thinking, and intellectual discourse. Whether as an academic, philosopher, scientist, or historian, your mind is your greatest asset. You are well-versed in various schools of thought and possess a deep understanding of complex ideas. Your expertise lies in one of the following specialties:`,
		skillProficiencies: `Choose any two from Arcana, History, Investigation, Medicine, Nature, Religion.`,
		toolProficiencies: `Choose any one from Alchemist's Supplies, Calligrapher's Supplies, Cartographer's Tools, Herbalism Kit, or Musical Instrument.`,
		languages: `Choose two languages of your choice.`,
		startingEquipment: `A set of common clothes, a writing kit (small pouch with a quill, a bottle of ink, folded parchment, and a small penknife), a book related to your chosen specialty, a pouch containing 10 gp.`,
		backgroundSpecial: {
			title: `Specialty`,
			description: `Choose one of the following specialties to define your intellectual focus:`,
			die: `1d10`,
			roll: [
				{
					number: 1,
					description: `You value the preservation of cultural customs, rituals, and beliefs. You have studied ancient texts, folklore, and traditional practices extensively, and you strive to uphold and pass on these traditions to future generations.`,
				},
				{
					number: 2,
					description: `You advocate for a system of government where power is held by the people. You have studied political theory, revolutionary movements, and the history of republics. You are knowledgeable about the principles of democracy and seek to dismantle oppressive monarchies.`,
				},
				{
					number: 3,
					description: `You believe in a centralized authority that regulates and controls society for the greater good. You have studied social engineering, propaganda, and political ideologies such as socialism or communism. Your goal is to establish a system where the state has complete control over all aspects of life.`,
				},
				{
					number: 4,
					description: `You are an advocate for a legal system where laws and their operation derive their validity from their existence. You have studied jurisprudence, legal history, and philosophy of law. Your goal is to contribute to the development and improvement of legal systems.`,
				},
				{
					number: 5,
					description: `You believe that actual power and recognized power should align as closely as possible. You have studied political structures, governance, and power dynamics. Your expertise lies in understanding the mechanisms that shape authority and influence.`,
				},
				{
					number: 6,
					description: `You believe that society should adhere to the natural order and reject artificial constructs. You have studied evolutionary biology, anthropology, and social dynamics. Your goal is to promote a social system that aligns with the natural order of society`,
				},
				{
					number: 7,
					description: `You reject all religious and moral principles, believing that life is inherently meaningless. You have studied existential philosophy, nihilistic literature, and postmodern thought. Your goal is to challenge and deconstruct existing societal norms and values.`,
				},
				{
					number: 8,
					description: `You believe in the existence of a creator who intervenes in the universe, above all other gods. You have studied theology, religious texts, and the history of religious practices. Your goal is to deepen your understanding of divine intervention and promote the beliefs associated with your chosen faith.`,
				},
				{
					number: 9,
					description: `You hold the belief that certain races are superior or inferior to others. You have studied racial theories, eugenics, and social hierarchies. Your goal is to advance your racial ideology and shape society based on these principles`,
				},
				{
					number: 10,
					description: `You believe that power and dominance determine the rightful order of society. You have studied political realism, military strategy, and historical conquests. Your goal is to acquire and consolidate power, enforcing your will upon others.`,
				},
			],
		},
		feature: {
			title: `Intellectual Network`,
			description: `Your intellectual pursuits have connected you with like-minded individuals and granted you access to a network of scholars, thinkers, and experts within your chosen specialty. You can reach out to this network for assistance or information. To make use of your network, spend time in a library, university, or other scholarly institutions, or send letters or messages to your contacts. The information and assistance you receive depend on the nature of your request and the availability of your network members.`,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I constantly seek to challenge established ideas and norms.`,
				},
				{
					number: 2,
					description: `I find solace and inspiration in the pursuit of knowledge.`,
				},
				{
					number: 3,
					description: `I am highly curious and always eager to learn more.`,
				},
				{
					number: 4,
					description: `I am skeptical and question everything, seeking the truth.`,
				},
				{
					number: 5,
					description: `I am aloof and prefer the company of books and thoughts to people.`,
				},
				{
					number: 6,
					description: `I enjoy debating and discussing ideas with others.`,
				},
				{
					number: 7,
					description: `I am driven by a strong desire to understand the mysteries of the world.`,
				},
				{
					number: 8,
					description: `I am passionate about my belief and love sharing my knowledge with others.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Knowledge`,
					description: `The pursuit of knowledge is the greatest goal in life`,
					alignment: `Neutral`,
				},
				{
					number: 2,
					bold: `Progress`,
					description: `Advancement and innovation are essential for society's well-being`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Truth`,
					description: `Seeking and promoting truth is of utmost importance.`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					bold: `Freedom`,
					description: `Everyone should have the freedom to think and express their ideas.`,
					alignment: `Chaotic`,
				},
				{
					number: 5,
					bold: `Wisdom`,
					description: `Knowledge should be used to guide and benefit others.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					bold: `Harmony`,
					description: `Intellectual pursuits should aim to bring harmony and balance. `,
					alignment: `Good`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I have a mentor or role model who inspired me to pursue intellectual pursuits.`,
				},
				{
					number: 2,
					description: `My research or studies have a direct impact on my family or community.`,
				},
				{
					number: 3,
					description: `I am part of a prestigious intellectual society, and its reputation is important to me.`,
				},
				{
					number: 4,
					description: `I seek to uncover ancient secrets or forgotten knowledge.`,
				},
				{
					number: 5,
					description: `I am determined to prove a controversial theory or idea.`,
				},
				{
					number: 6,
					description: `I am searching for a rare artifact or text that holds great significance in my field.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I am so focused on my belief that I sometimes neglect other aspects of my life.`,
				},
				{
					number: 2,
					description: `I can be condescending and dismissive of those who lack intellectual curiosity.`,
				},
				{
					number: 3,
					description: `I am easily distracted by new topics or ideas, often abandoning current pursuits.`,
				},
				{
					number: 4,
					description: `I am secretive about my research, fearing that others may steal my ideas.`,
				},
				{
					number: 5,
					description: `I struggle to communicate my ideas clearly and often come across as confusing.`,
				},
				{
					number: 6,
					description: `I am obsessed with a particular subject or theory and disregard opposing viewpoints.`,
				},
			],
		},
	},
	Inventor: {
		isHomebrew: true,
		description: `You are essentially a creator. You have brilliant ideas and then you translate them into reality via technology or magic. You go for original content or at least try to. People may find you eccentric and funny or attractive in personality. Others may decry your practices as unorthodox or dangerous even. Inventors vary far and wide in aims and specialties, from weaponry to tinkering, and even the realm of metaphysical, like theorists and magic spell makers. Bottom line is that you bring new things to the table.`,
		skillProficiencies: `Arcana, Investigation`,
		toolProficiencies: `Tinker's Tools`,
		languages: `Choose between Gnomish or Dwarven`,
		startingEquipment: `A set of common clothes, Tinker's Tools, a hammer, an hourglass, a magnifying glass, and 10 gp`,
		backgroundSpecial: {
			title: ``,
			description: ``,
			die: ``,
			roll: [
				{
					number: 1,
					description: ``,
				},
				{
					number: 2,
					description: ``,
				},
				{
					number: 3,
					description: ``,
				},
				{
					number: 4,
					description: ``,
				},
				{
					number: 5,
					description: ``,
				},
				{
					number: 6,
					description: ``,
				},
			],
		},
		feature: {
			title: `Inventor's Eye`,
			description: `Your inquisitive eye and critical thinking let you come up with ad hoc solutions to problems as they pop up. By spending at least a minute looking over something no larger than a 5-foot cube, you can figure out new and innovative ways to use it in tandem with other materials at hand or that you know of. You can speak to your DM about inventing the thought process for wholly new and incredible things like guns in the age of swords, given you have the sound logic behind it.`,
		},
		alterateFeature: [
			{
				title: `Inspiring Inventions`,
				description: `​With your ability to create wonderful contraptions, you command respect among both artists and craftsmen. As a fellow creator, you are on friendly terms with these folk, provided you have done nothing to offend them, and their local connections can often prove invaluable to a traveling artisan such as yourself. Through these connections, you learn of the best suppliers of raw goods in the area as well as the identities of local people who would be the most interested in purchasing your inventions.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: `Inventors are rather intelligent people with a drive to change the world for the better or the worse. They love to make objects of complete wonder or complete destruction. There are two types of Inventors: Those that want to share their gifts with the world and those that want to hide their inventions for themselves.`,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I ask a lot of questions.`,
				},
				{
					number: 2,
					description: `I am always polite.`,
				},
				{
					number: 3,
					description: `I quote famous philosophers, sometimes adding my own twist.`,
				},
				{
					number: 4,
					description: `I am more of an indoors person. Being outside (literally or figuratively) gives me hives.`,
				},
				{
					number: 5,
					description: `The idea of multiple Gods is ridiculous to me.`,
				},
				{
					number: 6,
					description: `I treat my creations with the same care a parent does for their child.`,
				},
				{
					number: 7,
					description: `I change the topic at hand if it doesn't interest me.`,
				},
				{
					number: 8,
					description: `I absentmindedly construct/destruct when I'm thinking over something.`,
				},
				
				
				
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					bold: `Mastermind`,
					description: `​I refer to others as tools that I can use`,
					alignment: `Evil`,
				},
				{
					number: 2,
					bold: `Ingenious`,
					description: `Sometimes, I speak in random nonsense just to see others' reactions.`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					bold: `Resolved`,
					description: `We build our own destinies, we are the real gods. `,
					alignment: `Neutral`,
				},
				{
					number: 4,
					bold: `Supportive`,
					description: `I hope to build a grand machine to help the community.`,
					alignment: `Good`,
				},
				{
					number: 5,
					bold: `Purposeful`,
					description: `We have been created for a purpose, we need to follow our orders.`,
					alignment: `Lawful`,
				},
				{
					number: 6,
					bold: `Inventive`,
					description: `I build to help myself or others, whichever is more important.`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `My creations are my only true companions.`,
				},
				{
					number: 2,
					description: `I am trying to outdo a rival inventor with my own inventions.`,
				},
				{
					number: 3,
					description: `I stole the ideas from my old partner and they want revenge.`,
				},
				{
					number: 4,
					description: `My old partner stole some valuable blueprints and I plan on ​getting them back.`,
				},
				{
					number: 5,
					description: `My mentor taught me everything I know to this day, I could not be where i am without them.`,
				},
				{
					number: 6,
					description: `I love seeing the looks of amazement as I build something new and wonderful.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Anyone who criticises my creations will find a hammer coming their way.`,
				},
				{
					number: 2,
					description: `I refuse to stop once I begin a task, I can't leave something incomplete.`,
				},
				{
					number: 3,
					description: `When explaining something I end up speaking far too quickly for anyone to understand.`,
				},
				{
					number: 4,
					description: `I snap at others pretty often, especially if they're distracting me.`,
				},
				{
					number: 5,
					description: `I end up treating everyone else as complete idiots.`,
				},
				{
					number: 6,
					description: `I can be pretty blunt.`,
				},
			],
		},
	},
	Charlatan: {
		description: `You have always had a way with people. You know 
					what makes them tick, you can tease out their hearts' 
					desires after a few minutes of conversation, and with a 
					few leading questions you can read them like they were 
					children's books. It’s a useful talent, and one that you’re 
					perfectly willing to use for your advantage.

					You know what people want and you deliver, or rather, 
					you promise to deliver. Common sense should steer 
					people away from things that sound too good to be true, 
					but common sense seems to be in short supply when 
					you’re around. The bottle of pink-colored liquid will 
					surely cure that unseemly rash, this ointment—nothing 
					more than a bit of fat with a sprinkle of silver dust—can 
					restore youth and vigor, and there’s a bridge in the city 
					that just happens to be for sale. These marvels sound 
					implausible, but you make them sound like the real deal.`,
		skillProficiencies: `Deception, Sleight of Hand `,
		toolProficiencies: ` Disguise kit, forgery kit `,
		startingEquipment: ` A set of fine clothes, a disguise kit, tools 
							of the con of your choice (ten stoppered bottles filled 
							with colored liquid, a set of weighted dice, a deck of 
							marked cards, or a signet ring of an imaginary duke), 
							and a belt pouch containing 15 gp`,
		feature: {
			title: `Flase Identity`,
			description: `You have created a second identity that includes 
						documentation, established acquaintances, and 
						disguises that allow you to assume that persona. 
						Additionally, you can forge documents including official 
						papers and personal letters, as long as you have seen an 
						example of the kind of document or the handwriting you 
						are trying to copy.`,
		},

		suggestedCharacteristics: ` Charlatans are colorful characters who conceal their 
									true selves behind the masks they construct. They 
									reflect what people want to see, what they want to 
									believe, and how they see the world. But their true 
									selves are sometimes plagued by an uneasy conscience, 
									an old enemy, or deep-seated trust issues.`,

		suggestedPersonalityTraits: ` d8 Personality Trait
									1
									2
									I fall in and out of love easily, and am always pursuing 
									someone.
									I have a joke for every occasion, especially occasions 
									where humor is inappropriate.
									3 Flattery is my preferred trick for getting what I want.
									4 I’m a born gambler who can't resist taking a risk for a 
									potential payoff.
									5 I lie about almost everything, even when there’s no 
									good reason to.
									6
									Sarcasm and insults are my weapons of choice.
									7 I keep multiple holy symbols on me and invoke 
									whatever deity might come in useful at any given 
									moment.
									8
									I pocket anything I see that might have some value.`,
		suggestedIdeal: `  d6 Ideal
							1
							2
							Independence. I am a free spirit—no one tells me what 
							to do. (Chaotic)
							Fairness. I never target people who can’t afford to lose 
							a few coins. (Lawful)
							3 Charity. I distribute the money I acquire to the people 
							who really need it. (Good)
							4 Creativity. I never run the same con twice. (Chaotic)
							5 Friendship. Material goods come and go. Bonds of 
							friendship last forever. (Good)
							6
							Aspiration. I’m determined to make something 
							of myself. (Any)`,
		suggestedBond: `  d6 Bond
						1
						2
						I fleeced the wrong person and must work to ensure 
						that this individual never crosses paths with me or 
						those I care about.
						I owe everything to my mentor—a horrible person 
						who’s probably rotting in jail somewhere.
						3 Somewhere out there, I have a child who doesn’t 
						know me. I’m making the world better for him or her.
						4 I come from a noble family, and one day I’ll reclaim my 
						lands and title from those who stole them from me.
						5 A powerful person killed someone I love. Some day 
						soon, I’ll have my revenge.
						6
						I swindled and ruined a person who didn’t deserve it. I 
						seek to atone for my misdeeds but might never be able 
						to forgive myself.`,
		suggestedFlaw: ` d6 Flaw
						1
						2
						I can’t resist a pretty face.
						I'm always in debt. I spend my ill-gotten gains on 
						decadent luxuries faster than I bring them in..
						3 I’m convinced that no one could ever fool me the way 
						I fool others.
						4 I’m too greedy for my own good. I can’t resist taking a 
						risk if there’s money involved.
						5 I can’t resist swindling people who are more powerful 
						than me.
						6
						I hate to admit it and will hate myself for it, but I'll run 
						and preserve my own hide if the going gets tough.
						`,
	},
	Criminal: {
		description: ` You are an experienced criminal with a history of 
					breaking the law. You have spent a lot of time among 
					other criminals and still have contacts within the 
					criminal underworld. You’re far closer than most people 
					to the world of murder, theft, and violence that pervades 
					the underbelly of civilization, and you have survived up to 
					this point by flouting the rules and regulations of society.`,
		skillProficiencies: `Deception, Stealth `,
		toolProficiencies: `One type of gaming set, 
							thieves’ tools`,
		startingEquipment: `A crowbar, a set of dark common clothes 
							including a hood, and a belt pouch containing 15 gp`,

		custom: {
			// additional 0000
			title: `Criminal Specialty`,
			feature: `There are many kinds of criminals, and within a thieves’ 
							guild or similar criminal organization, individual 
							members have particular specialties. Even criminals 
							who operate outside of such organizations have strong 
							preferences for certain kinds of crimes over others. 
							Choose the role you played in your criminal life, or roll 
							on the table below.
							d8 Specialty
							1
							2
							Blackmailer
							Burglar
							3 Enforcer
							4 Fence
							d8 Specialty
							5 Highway robber
							6
							Hired killer
							7 Pickpocket
							8
							Smuggler`,
		},
		feature: {
			title: `Criminal Contact`,
			description: ` You have a reliable and trustworthy contact who acts as 
						your liaison to a network of other criminals. You know 
						how to get messages to and from your contact, even 
						over great distances; specifically, you know the local 
						messengers, corrupt caravan masters, and seedy sailors 
						who can deliver messages for you.`,
		},
		suggestedCharacteristics: ` Criminals might seem like villains on the surface, 
								and many of them are villainous to the core. But some 
								have an abundance of endearing, if not redeeming, 
								characteristics. There might be honor among thieves, but 
								criminals rarely show any respect for law or authority.`,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ` d6 Ideal
						1
						2
						Honor. I don’t steal from others in the trade. (Lawful)
						Freedom. Chains are meant to be broken, as are those 
						who would forge them. (Chaotic)
						3 Charity. I steal from the wealthy so that I can help 
						people in need. (Good)
						4 Greed. I will do whatever it takes to become 
						wealthy. (Evil)
						5 People. I’m loyal to my friends, not to any ideals, and 
						everyone else can take a trip down the Styx for all I 
						care. (Neutral)
						6
						Redemption. There’s a spark of good in everyone. 
						(Good)`,
		suggestedBond: ` d6 Bond
						1
						2
						I’m trying to pay off an old debt I owe to a generous 
						benefactor.
						My ill-gotten gains go to support my family.
						3 Something important was taken from me, and I aim to 
						steal it back.
						4 I will become the greatest thief that ever lived.
						5 I’m guilty of a terrible crime. I hope I can redeem 
						myself for it.
						6
						Someone I loved died because of a mistake I made. 
						That will never happen again.`,
		suggestedFlaw: `d6 Flaw
						1 When I see something valuable, I can’t think about 
						anything but how to steal it.
						2 When faced with a choice between money and my 
						friends, I usually choose the money.
						3 If there’s a plan, I’ll forget it. If I don’t forget it, I’ll 
						ignore it.
						4 I have a “tell” that reveals when I'm lying.
						5 I turn tail and run when things look bad.
						6 An innocent person is in prison for a crime that I 
						committed. I’m okay with that.`, // possiblyt add variant criminal spy
		variant: {
			title: `Spy`,
			description: ` Although your capabilities are not much different 
						from those of a burglar or smuggler, you learned 
						and practiced them in a very different context: as an 
						espionage agent. You might have been an officially 
						sanctioned agent of the crown, or perhaps you sold the 
						secrets you uncovered to the highest bidder.`,
		},
	},
	Entertainer: {
		description: ` You thrive in front of an audience. You know how to 
					entrance them, entertain them, and even inspire them. 
					Your poetics can stir the hearts of those who hear you, 
					awakening grief or joy, laughter or anger. Your music 
					raises their spirits or captures their sorrow. Your dance 
					steps captivate, your humor cuts to the quick. Whatever 
					techniques you use, your art is your life.`,
		skillProficiencies: ` Acrobatics, Performance `,
		toolProficiencies: `Disguise kit, one type of 
							musical instrument `,
		startingEquipment: `A musical instrument (one of your choice), 
							the favor of an admirer (love letter, lock of hair, or 
							trinket), a costume, and a belt pouch containing 15 gp`,
		custom: {
			title: `Entertainer Routines`, // additional 0000
			description: ` A good entertainer is versatile, spicing up every 
						performance with a variety of different routines. Choose 
						one to three routines or roll on the table below to define 
						your expertise as an entertainer.
						
						 d10 Entertainer Routine
						1 Actor
						Dancer
						2
						3 Fire-eater
						4 jester
						5 juggler
						d10 Entertainer Routine
						6
						Instrumentalist
						7 Poet
						8
						Singer
						9 Storyteller
						10 Tumbler`,
		},

		feature: {
			title: `By Popular Demand`,
			description: ` You can always find a place to perform, usually in an 
						inn or tavern but possibly with a circus, at a theater, or 
						even in a noble’s court. At such a place, you receive free 
						lodging and food of a modest or comfortable standard 
						(depending on the quality of the establishment), as 
						long as you perform each night. In addition, your 
						performance makes you something of a local figure. 
						When strangers recognize you in a town where you have 
						performed, they typically take a liking to you.`,
		},
		suggestedCharacteristics: `Successful entertainers have to be able to capture 
								and hold an audience’s attention, so they tend to 
								have flamboyant or forceful personalities. They’re 
								inclined toward the romantic and often cling to 
								high-minded ideals about the practice of art and the 
								appreciation of beauty.`,
		suggestedPersonalityTraits: `d8
								Personality Trait
								1 I know a story relevant to almost every situation.
								2 Whenever I come to a new place, I collect local rumors 
								and spread gossip.
								3 I’m a hopeless romantic, always searching for that 
								“special someone.”
								4 Nobody stays angry at me or around me for long, since 
								I can defuse any amount of tension.
								5 I love a good insult, even one directed at me.
								6 I get bitter if I’m not the center of attention.
								7 I’ll settle for nothing less than perfection.
								8 I change my mood or my mind as quickly as I change 
								key in a song.`,
		suggestedIdeal: `d6 Ideal
						1 Beauty. When I perform, I make the world better than 
						it was. (Good)
						2 Tradition. The stories, legends, and songs of the past 
						must never be forgotten, for they teach us who we 
						are. (Lawful)
						3 Creativity. The world is in need of new ideas and bold 
						action. (Chaotic)
						4 Greed. I’m only in it for the money and fame. (Evil)
						5 People. I like seeing the smiles on people’s faces when 
						I perform. That’s all that matters. (Neutral)
						6 Honesty. Art should reflect the soul; it should come 
						from within and reveal who we really are. (Any)`,
		suggestedBond: ` d6 Bond
						1 My instrument is my most treasured possession, and it 
						reminds me of someone I love.
						2 Someone stole my precious instrument, and someday 
						I’ll get it back.
						3 I want to be famous, whatever it takes.
						4 I idolize a hero of the old tales and measure my deeds 
						against that person’s.
						5 I will do anything to prove myself superior to my hated 
						rival.
						6 I would do anything for the other members of my 
						old troupe.`,
		suggestedFlaw: ` d6 Flaw
						1 I’ll do anything to win fame and renown.
						2 I’m a sucker for a pretty face.
						3 A scandal prevents me from ever going home again. 
						That kind of trouble seems to follow me around.
						4 I once satirized a noble who still wants my head. It was 
						a mistake that I will likely repeat.
						5 I have trouble keeping my true feelings hidden. My 
						sharp tongue lands me in trouble.
						6 Despite my best efforts, I am unreliable to my friends.`,
		variant: {
			// additional 0000
			title: `Gladiator`,
			description: ` A gladiator is as much an entertainer as any minstrel 
						or circus performer, trained to make the arts of combat 
						into a spectacle the crowd can enjoy. This kind of 
						flashy combat is your entertainer routine, though you 
						might also have some skills as a tumbler or actor.
						Using your By Popular Demand feature, you can find a 
						place to perform in any place that features combat for 
						entertainment—perhaps a gladiatorial arena or secret 
						pit fighting club. You can replace the musical instrument 
						in your equipment package with an inexpensive but 
						unusual weapon, such as a trident or net.`,
		},
	},
	Folk_Hero: {
		description: `You come from a humble social rank, but you are 
					destined for so much more. Already the people of 
					your home village regard you as their champion, and 
					your destiny calls you to stand against the tyrants and 
					monsters that threaten the common folk everywhere`,
		skillProficiencies: `animal Handling, Survival `,
		toolProficiencies: ` One type of artisan’s tools, 
							vehicles (land)`,
		startingEquipment: ` A set of artisan’s tools (one of your choice), 
							a shovel, an iron pot, a set of common clothes, and a 
							belt pouch containing 10 gp`,
		custom: {
			title: `Defining Event`,
			description: `You previously pursued a simple profession among 
						the peasantry, perhaps as a farmer, miner, servant, 
						shepherd, woodcutter, or gravedigger. But something 
						happened that set you on a different path and marked 
						you for greater things. Choose or randomly determine a 
						defining event that marked you as a hero of the people.
						
						d10 Defining Event
					1 I stood up to a tyrant’s agents.
					2 I saved people during a natural disaster.
					3 I stood alone against a terrible monster.
					4 I stole from a corrupt merchant to help the poor.
					5 I led a militia to fight off an invading army.
					6 I broke into a tyrant’s castle and stole weapons to arm 
					the people.
					7 I trained the peasantry to use farm implements as 
					weapons against a tyrant’s soldiers.
					8 A lord rescinded an unpopular decree after I led a 
					symbolic act of protect against it.
					9 A celestial, fey, or similar creature gave me a blessing 
					or revealed my secret origin.
					10 Recruited into a lord’s army, I rose to leadership and 
					was commended for my heroism.`,
		},
		feature: {
			title: `Rustic Hospitality`,
			description: ` Since you come from the ranks of the common folk, 
						you fit in among them with ease. You can find a place 
						to hide, rest, or recuperate among other commoners, 
						unless you have shown yourself to be a danger to 
						them. They will shield you from the law or anyone 
						else searching for you, though they will not risk 
						their lives for you.`,
		},
		suggestedCharacteristics: `A folk hero is one of the common people, for better 
								or for worse. Most folk heroes look on their humble 
								origins as a virtue, not a shortcoming, and their home 
								communities remain very important to them.`,
		suggestedPersonalityTraits: ` d8 Personality Trait
										8
										1 I judge people by their actions, not their words.
										2 If someone is in trouble, I’m always ready to lend help.
										3 When I set my mind to something, I follow through no 
										matter what gets in my way.
										4 I have a strong sense of fair play and always try to find 
										the most equitable solution to arguments.
										5 I’m confident in my own abilities and do what I can to 
										instill confidence in others.
										6 Thinking is for other people. I prefer action.
										7 I misuse long words in an attempt to sound smarter.
										I get bored easily. When am I going to get on with my 
										destiny?
										`,
		suggestedIdeal: `d6 Ideal
						1
						2
						Respect. People deserve to be treated with dignity and 
						respect. (Good)
						Fairness. No one should get preferential treatment 
						before the law, and no one is above the law. (Lawful)
						3 Freedom. Tyrants must not be allowed to oppress the 
						people. (Chaotic)
						4 Might. If I become strong, I can take what I want— 
						what I deserve. (Evil)
						5 Sincerity. There’s no good in pretending to be 
						something I’m not. (Neutral)
						6
						Destiny. Nothing and no one can steer me away from 
						my higher calling. (Any)`,
		suggestedBond: ` d6 Bond
						1
						2
						I have a family, but I have no idea where they are. One 
						day, I hope to see them again.
						I worked the land, I love the land, and I will protect the 
						land.
						3 A proud noble once gave me a horrible beating, and I 
						will take my revenge on any bully I encounter.
						4 My tools are symbols of my past life, and I carry them 
						so that I will never forget my roots.
						5 I protect those who cannot protect themselves.
						6
						I wish my childhood sweetheart had come with me to 
						pursue my destiny.`,
		suggestedFlaw: ` d6 Flaw
						1 The tyrant who rules my land will stop at nothing to 
						see me killed.
						2
						6
						I’m convinced of the significance of my destiny, and s
						blind to my shortcomings and the risk of failure.v
						3 The people who knew me when I was young know my 
						shameful secret, so I can never go home again.
						4 I have a weakness for the vices of the city, especially 
						hard drink.
						5 Secretly, I believe that things would be better if I were a 
						tyrant lording over the land.
						I have trouble trusting in my allies.`,
	},
	Guild_Artisan: {
		description: ` You are a member of an artisan’s guild, skilled in 
					a particular field and closely associated with other 
					artisans. You are a well-established part of the 
					mercantile world, freed by talent and wealth from the 
					constraints of a feudal social order. You learned your 
					skills as an apprentice to a master artisan, under the 
					sponsorship of your guild, until you became a master in 
					your own right.`,
		skillProficiencies: `Insight, Persuasion `,
		toolProficiencies: `One type of artisan’s tools `,
		startingEquipment: `A set of artisan’s tools (one of your choice), 
						a letter of introduction from your guild, a set of 
						traveler’s clothes, and a belt pouch containing 15 gp`,

		custom: {
			// additional 0000
			title: `Guild Business`,
			description: `  Guilds are generally found in cities large enough to 
						support several artisans practicing the same trade. 
						However, your guild might instead be a loose network 
						of artisans who each work in a different village within 
						a larger realm. Work with your DM to determine the 
						nature of your guild. You can select your guild business 
						from the Guild Business table or roll randomly.
						d20 Guild Business

						1 Alchemists and apothecaries
						2
						3
						4
						5
						6
						7
						8
						9
						Armorers, locksmiths, and finesmiths
						Brewers, distillers, and vintners
						Calligraphers, scribes, and scriveners
						Carpenters, roofers, and plasterers
						Cartographers, surveyors, and chart-makers
						Cobblers and shoemakers
						Cooks and bakers
						Glassblowers and glaziers
						10 Jewelers and gemcutters
						11
						12
						13
						14
						15
						16
						17
						Leatherworkers, skinners, and tanners
						Masons and stonecutters
						Painters, limners, and sign-makers
						Potters and tile-makers
						Shipwrights and sailmakers
						Smiths and metal-forgers
						Tinkers, pewterers, and casters
						18 Wagon-makers and wheelwrights
						19
						20
						Weavers and dyers
						Woodcarvers, coopers, and bowyers
						As a member of your guild, you know the skills needed 
						to create finished items from raw materials (reflected in 
						your proficiency with a certain kind of artisan’s tools), 
						as well as the principles of trade and good business 
						practices. The question now is whether you abandon 
						your trade for adventure, or take on the extra effort to 
						weave adventuring and trade together.`,
		},
		feature: {
			title: `Guild Membership`,
			description: `As an established and respected member of a guild, you 
						can rely on certain benefits that membership provides. 
						Your fellow guild members will provide you with 
						lodging and food if necessary, and pay for your funeral 
						if needed. In some cities and towns, a guildhall offers a 
						central place to meet other members of your profession, 
						which can be a good place to meet potential patrons, 
						allies, or hirelings.
						Guilds often wield tremendous political power. If 
						you are accused of a crime, your guild will support you 
						if a good case can be made for your innocence or the 
						crime is justifiable. You can also gain access to powerful 
						political figures through the guild, if you are a member 
						in good standing. Such connections might require the 
						donation of money or magic items to the guild’s coffers.
						You must pay dues of 5 gp per month to the guild. If 
						you miss payments, you must make up back dues to 
						remain in the guild’s good graces.`,
		},
		suggestedCharacteristics: ` Guild artisans are among the most ordinary people in 
								the world—until they set down their tools and take up 
								an adventuring career. They understand the value of  
								hard work and the importance of community, but they’re 
								vulnerable to sins of greed and covetousness.`,
		suggestedPersonalityTraits: ` d8 Personality Trait
									1
									I believe that anything worth doing is worth doing 
									right. I can’t help it— I’m a perfectionist.
									2 I’m a snob who looks down on those who can’t 
									appreciate fine art.
									3 I always want to know how things work and what 
									makes people tick.
									4 I’m full of witty aphorisms and have a proverb for 
									every occasion.
									5 I’m rude to people who lack my commitment to hard 
									work and fair play.
									6 I like to talk at length about my profession.
									7 I don’t part with my money easily and will haggle 
									tirelessly to get the best deal possible.
									8 I’m well known for my work, and I want to make sure 
									everyone appreciates it. I'm always taken aback when 
									people haven’t heard of me.`,
		suggestedIdeal: ` d6 Ideal
						1
						2
						Community. It is the duty of all civilized people to 
						strengthen the bonds of community and the security 
						of civilization. (Lawful)
						Generosity. My talents were given to me so that I could 
						use them to benefit the world. (Good)
						3 Freedom. Everyone should be free to pursue his or her 
						own livelihood. (Chaotic)
						4 Greed. I’m only in it for the money. (Evil)
						5 People. I’m committed to the people I care about, not 
						to ideals. (Neutral)
						6
						Aspiration. I work hard to be the best there is at 
						my craft`,
		suggestedBond: `d6 Bond
						1
						2
						The workshop where I learned my trade is the most 
						important place in the world to me.
						I created a great work for someone, and then found 
						them unworthy to receive it. I’m still looking for 
						someone worthy.
						3 I owe my guild a great debt for forging me into the 
						person I am today.
						4 I pursue wealth to secure someone’s love.
						5 One day I will return to my guild and prove that I am 
						the greatest artisan of them all.
						6
						I will get revenge on the evil forces that destroyed my 
						place of business and ruined my livelihood.`,
		suggestedFlaw: `d6 Flaw
						1
						2
						I’ll do anything to get my hands on something rare or 
						priceless.
						I’m quick to assume that someone is trying to cheat 
						me.
						3 No one must ever learn that I once stole money from 
						guild coffers.
						4 I’m never satisfied with what I have—I always want 
						more.
						5 I would kill to acquire a noble title.
						6
						I’m horribly jealous of anyone who can outshine my 
						handiwork. Everywhere I go, I’m surrounded by rivals.`,
		variant: {
			// additional 0000
			title: `Guild Merchant`,
			description: `Instead of an artisans’ guild, you might belong to a 
						guild of traders, caravan masters, or shopkeepers. You 
						don’t craft items yourself but earn a living by buying 
						and selling the works of others (or the raw materials 
						artisans need to practice their craft). Your guild might 
						be a large merchant consortium (or family) with 
						interests across the region. Perhaps you transported 
						goods from one place to another, by ship, wagon, or 
						caravan, or bought them from traveling traders and sold 
						them in your own little shop. In some ways, the traveling 
						merchant’s life lends itself to adventure far more than 
						the life of an artisan.
						Rather than proficiency with artisan’s tools, you might 
						be proficient with navigator’s tools or an additional 
						language. And instead of artisan’s tools, you can start 
						with a mule and a cart.
						`,
		},
	},
	Hermit: {
		description: ` You lived in seclusion—either in a sheltered community 
					such as a monastery, or entirely alone—for a formative 
					part of your life. In your time apart from the clamor of 
					society, you found quiet, solitude, and perhaps some of 
					the answers you were looking for.`,
		skillProficiencies: ` Medicine, Religion `,
		toolProficiencies: ` Herbalism kit `,
		startingEquipment: `A scroll case stuffed full of notes from your 
							studies or prayers, a winter blanket, a set of common 
							clothes, an herbalism kit, and 5 gp`,
		custom: {
			title: `Life of Seclusion`,
			description: ` What was the reason for your isolation, and what 
						changed to allow you to end your solitude? You can work 
						with your DM to determine the exact nature of your 
						seclusion, or you can choose or roll on the table below to 
						determine the reason behind your seclusion.
						
						 d8 Life of Seclusion
						1
						I was searching for spiritual enlightenment.
						2 I was partaking of communal living in accordance with 
						the dictates of a religious order.
						3 I was exiled for a crime I didn’t commit.
						4 I retreated from society after a life-altering event.
						d8 Life of Seclusion
						5 I needed a quiet place to work on my art, literature, 
						music, or manifesto.
						6 I needed to commune with nature, far from civilization.
						7 I was the caretaker of an ancient ruin or relic.
						8 I was a pilgrim in search of a person, place, or relic of 
						spiritual significance.`,
		},
		feature: {
			title: `Discovery`,
			description: ` The quiet seclusion of your extended hermitage gave you 
						access to a unique and powerful discovery. The exact 
						nature of this revelation depends on the nature of your 
						seclusion. It might be a great truth about the cosmos, 
						the deities, the powerful beings of the outer planes, or 
						the forces of nature. It could be a site that no one else 
						has ever seen. You might have uncovered a fact that has 
						long been forgotten, or unearthed some relic of the past 
						that could rewrite history. It might be information that 
						would be damaging to the people who or consigned you 
						to exile, and hence the reason for your return to society.
						Work with your DM to determine the details of your 
						discovery and its impact on the campaign.`,
		},
		suggestedCharacteristics: ` Some hermits are well suited to a life of seclusion, 
									whereas others chafe against it and long for company. 
									Whether they embrace solitude or long to escape it, the 
									solitary life shapes their attitudes and ideals. A few are 
									driven slightly mad by their years apart from society.`,
		suggestedPersonalityTraits: ` d8 Personality Trait
									1
									2
									I’ve been isolated for so long that I rarely speak, 
									preferring gestures and the occasional grunt.
									I am utterly serene, even in the face of disaster.
									3 The leader of my community had something wise 
									to say on every topic, and I am eager to share 
									that wisdom.
									4 I feel tremendous empathy for all who suffer.
									5 I’m oblivious to etiquette and social expectations.
									6
									8
									I connect everything that happens to me to a grand, 
									cosmic plan.
									7 I often get lost in my own thoughts and contemplation, 
									becoming oblivious to my surroundings.
									I am working on a grand philosophical theory and love 
									sharing my ideas.`,
		suggestedIdeal: `d6 Ideal
						1 Greater Good. My gifts are meant to be shared with all, 
						not used for my own benefit. (Good)
						Logic. Emotions must not cloud our sense of what is 
						right and true, or our logical thinking. (Lawful)
						3 Free Thinking. Inquiry and curiosity are the pillars of 
						progress. (Chaotic)
						4 Power. Solitude and contemplation are paths toward 
						mystical or magical power. (Evil)
						5 Live and Let Live. Meddling in the affairs of others only 
						causes trouble. (Neutral)
						6
						Self-Knowledge. If you know yourself, there’s nothing 
						left to know. (Any)`,
		suggestedBond: `d6 Bond
						1
						2
						Nothing is more important than the other members of 
						my hermitage, order, or association.
						I entered seclusion to hide from the ones who might 
						still be hunting me. I must someday confront them.
						3 I’m still seeking the enlightenment I pursued in my 
						seclusion, and it still eludes me.
						4 I entered seclusion because I loved someone I could 
						not have.
						5 Should my discovery come to light, it could bring ruin to 
						the world.
						6
						My isolation gave me great insight into a great evil that 
						only I can destroy.`,
		suggestedFlaw: ` d6 Flaw
						1
						2
						Now that I've returned to the world, I enjoy its delights 
						a little too much.
						I harbor dark, bloodthirsty thoughts that my isolation 
						and meditation failed to quell.
						3 I am dogmatic in my thoughts and philosophy.
						4 I let my need to win arguments overshadow 
						friendships and harmony.
						5 I’d risk too much to uncover a lost bit of knowledge.
						6
						I like keeping secrets and won’t share them with 
						anyone.`,
		variant: {
			title: `Other Hermit`,
			description: ` This hermit background assumes a contemplative sort 
						of seclusion that allows room for study and prayer. If you 
						want to play a rugged wilderness recluse who lives off 
						the land while shunning the company of other people, 
						look at the outlander background. On the other hand, if 
						you want to go in a more religious direction, the acolyte 
						might be what you’re looking for. Or you could even be a 
						charlatan, posing as a wise and holy person and letting 
						pious fools support you.`,
		},
	},
	Noble: {
		description: ` You understand wealth, power, and privilege. You 
					carry a noble title, and your family owns land, collects 
					taxes, and wields significant political influence. You 
					might be a pampered aristocrat unfamiliar with 
					work or discomfort, a former merchant just elevated 
					to the nobility, or a disinherited scoundrel with a 
					disproportionate sense of entitlement. Or you could be 
					an honest, hard-working landowner who cares deeply 
					about the people who live and work on your land, keenly 
					aware of your responsibility to them.
					Work with your DM to come up with an appropriate 
					title and determine how much authority that title 
					carries. A noble title doesn’t stand on its own—it’s 
					connected to an entire family, and whatever title you 
					hold, you will pass it down to your own children. Not 
					only do you need to determine your noble title, but you 
					should also work with the DM to describe your family 
					and their influence on you.
					Is your family old and established, or was your title 
					only recently bestowed? How much influence do they 
					wield, and over what area? What kind of reputation
					does your family have among the other aristocrats of the 
					region? How do the common people regard them?
					What’s your position in the family? Are you the heir 
					to the head of the family? Have you already inherited 
					the title? How do you feel about that responsibility? Or 
					are you so far down the line of inheritance that no one 
					cares what you do, as long as you don’t embarrass the 
					family? How does the head of your family feel about 
					your adventuring career? Are you in your family’s good 
					graces, or shunned by the rest of your family?
					Does your family have a coat of arms? An insignia you 
					might wear on a signet ring? Particular colors you wear 
					all the time? An animal you regard as a symbol of your 
					line or even a spiritual member of the family?
					These details help establish your family and your title 
					as features of the world of the campaign`,
		skillProficiencies: `History, Persuasion `,
		toolProficiencies: `One type of gaming set `,
		startingEquipment: `A set of fine clothes, a signet ring, a scroll 
							of pedigree, and a purse containing 25 gp`,
		feature: {
			title: `Position of Privelege`,
			description: `Thanks to your noble birth, people are inclined to 
						think the best of you. You are welcome in high society, 
						and people assume you have the right to be wherever 
						you are. The common folk make every effort to 
						accommodate you and avoid your displeasure, and other 
						people of high birth treat you as a member of the same 
						social sphere. You can secure an audience with a local 
						noble if you need to.`,
		},
		suggestedCharacteristics: `Nobles are born and raised to a very different lifestyle 
								than most people ever experience, and their personalities 
								reflect that upbringing. A noble title comes with a 
								plethora of bonds—responsibilities to family, to other 
								nobles (including the sovereign), to the people entrusted 
								to the family’s care, or even to the title itself. But this 
								responsibility is often a good way to undermine a noble.`,
		suggestedPersonalityTraits: ` d8 Personality Trait
									1
									2
									My eloquent flattery makes everyone I talk to feel 
									like the most wonderful and important person in the 
									world.
									The common folk love me for my kindness and 
									generosity.
									3 No one could doubt by looking at my regal bearing that 
									I am a cut above the unwashed masses.
									4 I take great pains to always look my best and follow the 
									latest fashions.
									5 I don’t like to get my hands dirty, and I won’t be caught 
									dead in unsuitable accommodations.
									6
									8
									Despite my noble birth, I do not place myself above 
									other folk. We all have the same blood.
									7 My favor, once lost, is lost forever.
									If you do me an injury, I will crush you, ruin your name, 
									and salt your fields`,
		suggestedIdeal: `d6 Ideal
						1
						2
						3
						4
						5
						6
						Respect. Respect is due to me because of my position, 
						but all people regardless of station deserve to be 
						treated with dignity. (Good)
						Responsibility. It is my duty to respect the authority of 
						those above me, just as those below me must respect 
						mine. (Lawful)
						Independence. I must prove that I can handle myself 
						without the coddling of my family. (Chaotic)
						Power. If I can attain more power, no one will tell me 
						what to do. (Evil)
						Family. Blood runs thicker than water. (Any)
						Noble Obligation. It is my duty to protect and care for 
						the people beneath me. (Good)`,
		suggestedBond: ` d6 Bond
						1
						2
						3
						4
						5
						I will face any challenge to win the approval of my 
						family.
						My house’s alliance with another noble family 
						must be sustained at all costs.
						Nothing is more important than the other members 
						of my family.
						I am in love with the heir of a family that my family 
						despises.
						My loyalty to my sovereign is unwavering.
						6 The common folk must see me as a hero of the people.`,
		suggestedFlaw: ` d6 Flaw
						1
						2
						3
						4
						5
						6
						I secretly believe that everyone is beneath me.
						I hide a truly scandalous secret that could ruin my 
						family forever.
						I too often hear veiled insults and threats in every word 
						addressed to me, and I’m quick to anger.
						I have an insatiable desire for carnal pleasures.
						In fact, the world does revolve around me.
						By my words and actions, I often bring shame to 
						my family.`,
		variant: {
			title: `Knight`,
			description: ` A knighthood is among the lowest noble titles in most 
						societies, but it can be a path to higher status. If you 
						wish to be a knight, choose the Retainers feature (see 
						the sidebar) instead of the Position of Privilege feature. 
						One of your commoner retainers is replaced by a noble 
						who serves as your squire, aiding you in exchange for training on his or her own path to knighthood. Your two 
						remaining retainers might include a groom to care for 
						your horse and a servant who polishes your armor (and 
						even helps you put it on).
						As an emblem of chivalry and the ideals of courtly 
						love, you might include among your equipment a banner 
						or other token from a noble lord or lady to whom you 
						have given your heart—in a chaste sort of devotion.
						(This person could be your bond.)
						
						Variant Feature: Retainers
						If your character has a noble background, you may select this 
						background feature instead of Position of Privilege.
						You have the service of three retainers loyal to your family. 
						These retainers can be attendants or messengers, and one 
						might be a majordomo. Your retainers are commoners who 
						can perform mundane tasks for you, but they do not fight 
						for you, will not follow you into obviously dangerous areas 
						(such as dungeons), and will leave if they are frequently 
						endangered or abused.`,
		},
	},
	Outlander: {
		description: ` You grew up in the wilds, far from civilization and the 
					comforts of town and technology. You’ve witnessed the 
					migration of herds larger than forests, survived weather 
					more extreme than any city-dweller could comprehend, 
					and enjoyed the solitude of being the only thinking 
					creature for miles in any direction. The wilds are in 
					your blood, whether you were a nomad, an explorer, a 
					recluse, a hunter-gatherer, or even a marauder. Even in 
					places where you don’t know the specific features of the 
					terrain, you know the ways of the wild.`,
		skillProficiencies: `Athletics, Survival `,
		toolProficiencies: `One type of musical instrument `,
		startingEquipment: `A staff, a hunting trap, a trophy from an 
							animal you killed, a set of traveler’s clothes, and a belt 
							pouch containing 10 gp`,
		custom: {
			title: `Origin`,
			description: ` You've been to strange places and seen things that 
						others cannot begin to fathom. Consider some of the 
						distant lands you have visited, and how they impacted 
						you. You can roll on the following table to determine 
						your occupation during your time in the wild, or choose 
						one that best fits your character.
						d10 Origin
						1
						2
						3
						4
						5
						Forester
						Trapper
						Homesteader
						Guide
						Exile or outcast
						d10 Origin
						6
						7
						8
						9
						Bounty hunter
						Pilgrim
						Tribal nomad
						Hunter-gatherer
						10 Tribal marauder`,
		},
		feature: {
			title: `Wanderer`,
			description: ` You have an excellent memory for maps and geography, 
						and you can always recall the general layout of terrain, 
						settlements, and other features around you. In addition, 
						you can find food and fresh water for yourself and up to 
						five other people each day, provided that the land offers 
						berries, small game, water, and so forth.`,
		},
		suggestedCharacteristics: ` Often considered rude and uncouth among civilized 
									folk, outlanders have little respect for the niceties of 
									life in the cities. The ties of tribe, clan, family, and the 
									natural world of which they are a part are the most 
									important bonds to most outlanders.
									`,
		suggestedPersonalityTraits: `d8 Personality Trait
									1 I’m driven by a wanderlust that led me away 
									from home.
									2 I watch over my friends as if they were a litter of 
									newborn pups.
									3 I once ran twenty-five miles without stopping to warn 
									to my clan of an approaching orc horde. I’d do it again 
									if I had to.
									4 I have a lesson for every situation, drawn from 
									observing nature.
									5 I place no stock in wealthy or well-mannered folk. 
									Money and manners won’t save you from a hungry 
									owlbear.
									6 I’m always picking things up, absently fiddling with 
									them, and sometimes accidentally breaking them.
									7 I feel far more comfortable around animals than 
									people.
									8 I was, in fact, raised by wolves.`,
		suggestedIdeal: ` d6 Ideal
						1 Change. Life is like the seasons, in constant change, 
						and we must change with it. (Chaotic)
						2 Greater Good. It is each person’s responsibility to 
						make the most happiness for the whole tribe. (Good)
						3 Honor. If I dishonor myself, I dishonor my whole 
						clan. (Lawful)
						4 Might. The strongest are meant to rule. (Evil)
						5 Nature. The natural world is more important than all 
						the constructs of civilization. (Neutral)
						6 Glory. I must earn glory in battle, for myself and 
						my clan. (Any)`,
		suggestedBond: ` d6 Bond
						1
						My family, clan, or tribe is the most important thing in 
						my life, even when they are far from me.
						2 An injury to the unspoiled wilderness of my home is an 
						injury to me.
						3 I will bring terrible wrath down on the evildoers who 
						destroyed my homeland.
						4 I am the last of my tribe, and it is up to me to ensure 
						their names enter legend.
						5 I suffer awful visions of a coming disaster and will do 
						anything to prevent it.
						6 It is my duty to provide children to sustain my tribe.`,
		suggestedFlaw: ` d6 Flaw
						1
						I am too enamored of ale, wine, and other intoxicants.
						2 There’s no room for caution in a life lived to the fullest.
						3 I remember every insult I’ve received and nurse a silent 
						resentment toward anyone who’s ever wronged me.
						4 I am slow to trust members of other races, tribes, and 
						societies.
						5 Violence is my answer to almost any challenge.
						6 Don’t expect me to save those who can’t save 
						themselves. It is nature’s way that the strong thrive 
						and the weak perish`,
	},
	Sage: {
		description: ` You spent years learning the lore of the multiverse. You 
						scoured manuscripts, studied scrolls, and listened to the 
						greatest experts on the subjects that interest you. Your 
						efforts have made you a master in your fields of study.`,
		skillProficiencies: `Arcana, History `,
		toolProficiencies: `Two of your choice`, // this needs to be thought about and fixed werd 2 roon timbs
		startingEquipment: `A bottle of black ink, a quill, a small knife, 
							a letter from a dead colleague posing a question you 
							have not yet been able to answer, a set of common 
							clothes, and a belt pouch containing 10 gp`,
		custom: {
			title: `Specialty`,
			description: `To determine the nature of your scholarly training, roll a 
						d8 or choose from the options in the table below.
						d8 Specialty
						1
						2
						Alchemist
						Astronomer
						3 Discredited
						academic
						4 Librarian
						d8 Specialty
						5 Professor
						6
						Researcher
						7 Wizard’s apprentice
						8
						Scribe
						`,
		},
		feature: {
			title: `Researcher`,
			description: ` When you attempt to learn or recall a piece of lore, if you 
						do not know that information, you often know where and 
						from whom you can obtain it. Usually, this information 
						comes from a library, scriptorium, university, or a sage 
						or other learned person or creature. Your DM might 
						rule that the knowledge you seek is secreted away in an 
						almost inaccessible place, or that it simply cannot be 
						found. Unearthing the deepest secrets of the multiverse 
						can require an adventure or even a whole campaign.`,
		},
		suggestedCharacteristics: ` Sages are defined by their extensive studies, and their 
									characteristics reflect this life of study. Devoted to 
									scholarly pursuits, a sage values knowledge highly— 
									sometimes in its own right, sometimes as a means 
									toward other ideals.`,
		suggestedPersonalityTraits: ` d8 Personality Trait
									1 I use polysyllabic words that convey the impression of 
									great erudition.
									2 I've read every book in the world’s greatest libraries— 
									or I like to boast that I have.
									3 I'm used to helping out those who aren’t as smart as I 
									am, and I patiently explain anything and everything to 
									others.
									4 There’s nothing I like more than a good mystery.
									5 I’m willing to listen to every side of an argument before 
									I make my own judgment.
									6 I . . . speak . . . slowly . . . when talking . . . to idiots, . . . 
									which . . . almost . . . everyone . . . is . . . compared . . . 
									to me.
									7 I am horribly, horribly awkward in social situations.
									8 I’m convinced that people are always trying to steal my 
									secrets.`,
		suggestedIdeal: ` d6 Ideal
						1
						2
						6
						Knowledge. The path to power and self-improvement 
						is through knowledge. (Neutral)
						Beauty. What is beautiful points us beyond itself 
						toward what is true. (Good)
						3 Logic. Emotions must not cloud our logical thinking. 
						(Lawful)
						4 No Limits. Nothing should fetter the infinite possibility 
						inherent in all existence. (Chaotic)
						5 Power. Knowledge is the path to power and 
						domination. (Evil)
						Self-Improvement. The goal of a life of study is the 
						betterment of oneself. (Any)`,
		suggestedBond: ` d6 Bond
						1
						2
						It is my duty to protect my students.
						I have an ancient text that holds terrible secrets that 
						must not fall into the wrong hands.
						3 I work to preserve a library, university, scriptorium, 
						or monastery.
						4 My life’s work is a series of tomes related to a specific 
						field of lore.
						5 I've been searching my whole life for the answer to a 
						certain question.
						6
						I sold my soul for knowledge. I hope to do great deeds 
						and win it back.`,
		suggestedFlaw: `d6 Flaw
						1
						2
						I am easily distracted by the promise of information.
						Most people scream and run when they see a demon. I 
						stop and take notes on its anatomy.
						3 Unlocking an ancient mystery is worth the price of a 
						civilization.
						4 I overlook obvious solutions in favor of complicated 
						ones.
						5 I speak without really thinking through my words, 
						invariably insulting others.
						I can’t keep a secret to save my life, or anyone else’s.`,
	},
	Sailor: {
		description: `You sailed on a seagoing vessel for years. In that 
					time, you faced down mighty storms, monsters of the 
					deep, and those who wanted to sink your craft to the 
					bottomless depths. Your first love is the distant line of 
					the horizon, but the time has come to try your hand 
					at something new.
					Discuss the nature of the ship you previously sailed 
					with your Dungeon Master. Was it a merchant ship, 
					a naval vessel, a ship of discovery, or a pirate ship?
					How famous (or infamous) is it? Is it widely traveled?
					Is it still sailing, or is it missing and presumed lost 
					with all hands?
					What were your duties on board—boatswain, captain, 
					navigator, cook, or some other position? Who were the 
					captain and first mate? Did you leave your ship on good 
					terms with your fellows, or on the run?`,
		skillProficiencies: `Athletics, Perception `,
		toolProficiencies: `Navigator’s tools, vehicles (water) `,
		startingEquipment: `A belaying pin (club), 50 feet of silk rope, 
							a lucky charm such as a rabbit foot or a small stone 
							with a hole in the center (or you may roll for a random 
							trinket on the Trinkets table in chapter 5), a set of 
							common clothes, and a belt pouch containing 10 gp`,
		feature: {
			title: `Ship's Passage`,
			description: ` When you need to, you can secure free passage on 
						a sailing ship for yourself and your adventuring 
						companions. You might sail on the ship you served on, 
						or another ship you have good relations with (perhaps 
						one captained by a former crewmate). Because you’re 
						calling in a favor, you can’t be certain of a schedule or 
						route that will meet your every need. Your Dungeon 
						Master will determine how long it takes to get where 
						you need to go. In return for your free passage, you 
						and your companions are expected to assist the crew 
						during the voyage.`,
		},
		suggestedCharacteristics: ` Sailors can be a rough lot, but the responsibilities of 
									life on a ship make them generally reliable as well. Life 
									aboard a ship shapes their outlook and forms their most 
									important attachments.`,
		suggestedPersonalityTraits: ` d8 Personality Trait
									1 My friends know they can rely on me, no matter what.
									2 I work hard so that I can play hard when the work 
									is done.
									3 I enjoy sailing into new ports and making new friends 
									over a flagon of ale.
									4 I stretch the truth for the sake of a good story.
									5 To me, a tavern brawl is a nice way to get to know a 
									new city.
									6 I never pass up a friendly wager.
									7 My language is as foul as an otyugh nest.
									8 I like a job well done, especially if I can convince 
									someone else to do it.`,
		suggestedIdeal: ` d6 Ideal
						1
						2
						Respect. The thing that keeps a ship together is mutual 
						respect between captain and crew. (Good)
						Fairness. We all do the work, so we all share in the 
						rewards. (Lawful)
						3 Freedom. The sea is freedom—the freedom to go 
						anywhere and do anything. (Chaotic)
						4 Mastery. I’m a predator, and the other ships on the sea 
						are my prey. (Evil)
						5 People. I’m committed to my crewmates, not to ideals. 
						(Neutral)
						6
						Aspiration. Someday I’ll own my own ship and chart 
						my own destiny. (Any)`,
		suggestedBond: ` d6 Bond
						1
						2
						I’m loyal to my captain first, everything else second.
						The ship is most important—crewmates and captains 
						come and go.
						3 I’ll always remember my first ship.
						4 In a harbor town, I have a paramour whose eyes nearly 
						stole me from the sea.
						5 I was cheated out of my fair share of the profits, and I 
						want to get my due.
						6
						Ruthless pirates murdered my captain and crewmates, 
						plundered our ship, and left me to die. Vengeance will 
						be mine.`,
		suggestedFlaw: ` d6 Flaw
						1
						2
						I follow orders, even if I think they’re wrong.
						I’ll say anything to avoid having to do extra work.
						3 Once someone questions my courage, I never back 
						down no matter how dangerous the situation.
						4 Once I start drinking, it’s hard for me to stop.
						5 I can’t help but pocket loose coins and other trinkets I 
						come across.
						6
						My pride will probably lead to my destruction.`,
		variant: {
			title: `Pirate`, // possibly add variant feature
			description: `You spent your youth under the sway of a dread pirate, 
						a ruthless cutthroat who taught you how to survive in a 
						world of sharks and savages. You’ve indulged in larceny 
						on the high seas and sent more than one deserving soul 
						to a briny grave. Fear and bloodshed are no strangers 
						to you, and you’ve garnered a somewhat unsavory 
						reputation in many a port town.
						If you decide that your sailing career involved piracy, 
						you can choose the Bad Reputation feature (see sidebar) 
						instead of the Ship’s Passage feature.

						Variant Feature: Bad Reputation          
						If your character has a sailor background, you may select this 
						background feature instead of Ship’s Passage.
						No matter where you go, people are afraid of you due to 
						your reputation. When you are in a civilized settlement, you 
						can get away with minor criminal offenses, such as refusing 
						to pay for food at a tavern or breaking down doors at a local 
						shop, since most people will not report your activity to the 
						authorities`,
		},
	},
	Secret: {
		isHomebrew: true,
		description: `You or your past were kept secret for some reason or another. Maybe your parents wanted to protect you from those who might harm you, or maybe they wanted to secret you away to use for their own gain. Maybe they aren’t your parents at all, or maybe you have no parents, being born of a higher power. But why? Are you an alien? A being of extreme power? Or maybe you’re just cursed, and no one wanted to tell you. Whether you led a normal life up to this point or not is of no consequence because now you know, and your life will never be normal again.`,
		skillProficiencies: `Arcana or History, and Insight or Intimidation`,
		toolProficiencies: `Disguise Kit`,
		startingEquipment: `One trinket from your past related to your secret, Disguise Kit, a set of traveller's clothes, a set of common clothes, and a pouch containing 10 gp`,
		languages: `One exotic language of your choice.`,
		backgroundSpecial: {
			description: `Your secret was a big one, and now you get to choose it. Pick one from the table below (or roll the appropriate die for a random one), or make up a new one, at your DM’s discretion.`,
			die: "1d6",
			title: `Your Secret`,
			roll: [
				{
					number: 1,
					description: `You have angelic/demonic blood.`,
				},
				{
					number: 2,
					description: `You are of a different race that is physically similar to your parents. (eg. Aasimar`,
				},
				{
					number: 3,
					description: `You have been cursed somehow, and you must find a way to reverse it.`,
				},
				{
					number: 4,
					description: `	You are a lycanthrope, or something similar.`,
				},
				{
					number: 5,
					description: `	You were polymorphed from a different creature.`,
				},
				{
					number: 6,
					description: `	You have special powers not easily explained by science or magic.`,
				},
			],
		},
		feature: {
			title: `Fabricated Background`,
			description: `Having the wool pulled over your eyes for so long has some benefits, as you now know how to do it to others. Weaving false stories has become second nature to you, so you gain advantage on Deception checks pertaining to any backstory you have fabricated about your past to make someone believe it as fact.`,
		},
		alterateFeature: [
			{
				title: `Heralded`,
				description: `It turns out that the entire town knew your secret but you. Your first thought is to get mad at your parents (if they even are your parents), but soon you realize that it was impossible not to tell them. However, now that you know, they are ready to help you in any way possible. You will always have a place to stay in your home, and your companions will have free food and lodging, with anything else they (or you) need at a hefty discount, if not free too. In addition, any connections they have are now your connections. At the DM’s discretion, by mentioning certain townspeople in other cities, you may be able to procure goods and services at a slight discount.`,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: {
			description: ``,
			die: `1d8`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `I lived a very sheltered life, so standard customs seem foreign to me.`,
				},
				{
					number: 2,
					description: `I see my secret as fate calling me to a new adventure.`,
				},
				{
					number: 3,
					description: `My life has been very mundane until now, so I jump at the chance to try new things!`,
				},
				{
					number: 4,
					description: `People are nervous of my secret, so I strive to change their views.`,
				},
				{
					number: 5,
					description: `I’m still not used to the attention my secret draws, so I tend to stay away from crowds.`,
				},
				{
					number: 6,
					description: `I take extra lengths to hide my secret, going so far as to hide myself if necessary.`,
				},
				{
					number: 7,
					description: `I am always afraid of others trying to use my secret for their own gain.`,
				},
				{
					number: 8,
					description: `I’ll do anything to protect my secret, even if I have to kill.`,
				},
			],
		},
		suggestedIdeal: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Jaded. People are only trying to use me. I won’t let them get the chance.`,
					alignment: `Evil`,
				},
				{
					number: 2,
					description: `Freedom. My family always held me back because of my secret. Now that I know, I can do whatever I want.`,
					alignment: `Chaotic`,
				},
				{
					number: 3,
					description: `Duty. My secret has given me a chance to make right was goes wrong in this world, and I can’t ignore that. (Lawful)`,
					alignment: ``,
				},
				{
					number: 4,
					description: `Hero. I can use my secret to help others, and inspire others to do the same.`,
					alignment: `Good`,
				},
				{
					number: 5,
					description: `Recluse. My secret has only caused problems for everyone around me. I just want to be left alone.`,
					alignment: `Neutral`,
				},
				{
					number: 6,
					description: `Curiosity. I want to know more about my secret, and why it was bestowed upon me`,
					alignment: `Any`,
				},
			],
		},
		suggestedBond: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `Something gave me this secret, and I need to know why.`,
				},
				{
					number: 2,
					description: `I was cursed, and now I need vengeance.`,
				},
				{
					number: 3,
					description: `Fate gave me my secret to help others, and I have a constant urge to do so.`,
				},
				{
					number: 4,
					description: `My home wouldn’t accept me due to my secret, and I’m constantly searching for a place that does.`,
				},
				{
					number: 5,
					description: `I had to leave my home because of my secret; I feel my destiny is elsewhere.`,
				},
				{
					number: 6,
					description: `My secret is my curse, and I need to find a cure.`,
				},
			],
		},
		suggestedFlaw: {
			description: ``,
			die: `1d6`,
			title: ``,
			roll: [
				{
					number: 1,
					description: `A part of my life was kept from me without my knowledge, so I’m slow to trust others.`,
				},
				{
					number: 2,
					description: `	I think my life would be easier without my secret; I’ll do anything to be rid of it.`,
				},
				{
					number: 3,
					description: `I have to help literally anyone I see in trouble, no matter the cost.`,
				},
				{
					number: 4,
					description: `My worldview is small and restricted; I often can’t see past my secret.`,
				},
				{
					number: 5,
					description: `People think I’m a freak, so I’m very hostile and susceptible to any criticism.`,
				},
				{
					number: 6,
					description: `I don’t think I deserve my secret. It should’ve gone to someone better than me.`,
				},
			],
		},
	},
	Soldier: {
		description: ` War has been your life for as long as you care to 
						remember. You trained as a youth, studied the use of 
						weapons and armor, learned basic survival techniques, 
						including how to stay alive on the battlefield. You 
						might have been part of a standing national army or a 
						mercenary company, or perhaps a member of a local 
						militia who rose to prominence during a recent war.
						When you choose this background, work with your 
						DM to determine which military organization you were 
						a part of, how far through its ranks you progressed, and 
						what kind of experiences you had during your military 
						career. Was it a standing army, a town guard, or a village 
						militia? Or it might have been a noble’s or merchant’s 
						private army, or a mercenary company.`,
		skillProficiencies: `Athletics, Intimidation `,
		toolProficiencies: ` One type of gaming set, 
							vehicles (land)`,
		startingEquipment: ` An insignia of rank, a trophy taken from 
						a fallen enemy (a dagger, broken blade, or piece of a 
						banner), a set of bone dice or deck of cards, a set of 
						common clothes, and a belt pouch containing 10 gp`,
		custom: {
			title: `Specialty`,
			description: ` During your time as a soldier, you had a specific role to 
						play in your unit or army. Roll a d8 or choose from the 
						options in the table below to determine your role:
						d8 Specialty
						1
						Officer
						2 Scout
						3 Infantry
						4 Cavalry
						5 Healer
						d8 Specialty
						6 Quartermaster
						7 Standard bearer
						8
						Support staff (cook, 
						blacksmith, or the 
						like)`,
		},
		feature: {
			title: `Military Rank`,
			description: ` You have a military rank from your career as a soldier. 
						Soldiers loyal to your former military organization 
						still recognize your authority and influence, and they 
						defer to you if they are of a lower rank. You can invoke 
						your rank to exert influence over other soldiers and 
						requisition simple equipment or horses for temporary 
						use. You can also usually gain access to friendly 
						military encampments and fortresses where your 
						rank is recognized.`,
		},
		suggestedCharacteristics: ` The horrors of war combined with the rigid discipline of 
								military service leave their mark on all soldiers, shaping 
								their ideals, creating strong bonds, and often leaving 
								them scarred and vulnerable to fear, shame, and hatred.`,
		suggestedPersonalityTraits: `d8 Personality Trait
									1
									I'm always polite and respectful.
									2 I’m haunted by memories of war. I can’t get the images 
									of violence out of my mind.
									3 I’ve lost too many friends, and I’m slow to make new 
									ones.
									4 I’m full of inspiring and cautionary tales from my 
									military experience relevant to almost every combat 
									situation.
									5 I can stare down a hell hound without flinching.
									6 I enjoy being strong and like breaking things.
									7 I have a crude sense of humor.
									8 I face problems head-on. A simple, direct solution is 
									the best path to success.`,
		suggestedIdeal: `d6 Ideal
						1 Greater Good. Our lot is to lay down our lives in 
						defense of others. (Good)
						2 Responsibility. I do what I must and obey just 
						authority. (Lawful)
						3 Independence. When people follow orders blindly, they 
						embrace a kind of tyranny. (Chaotic)
						4 Might. In life as in war, the stronger force wins. (Evil)
						5 Live and Let Live. Ideals aren’t worth killing over or 
						going to war for. (Neutral)
						6 Nation. My city, nation, or people are all that matter. 
						(Any)
						`,
		suggestedBond: `d6 Bond
					1 I would still lay down my life for the people I 
					served with.
					2 Someone saved my life on the battlefield. To this day, I 
					will never leave a friend behind.
					3 My honor is my life.
					4 I’ll never forget the crushing defeat my company 
					suffered or the enemies who dealt it.
					5 Those who fight beside me are those worth dying for.
					6 I fight for those who cannot fight for themselves.`,
		suggestedFlaw: ` d6 Flaw
						1 The monstrous enemy we faced in battle still leaves 
						me quivering with fear.
						2 I have little respect for anyone who is not a 
						proven warrior.
						3 I made a terrible mistake in battle cost many lives— 
						and I would do anything to keep that mistake secret.
						4 My hatred of my enemies is blind and unreasoning.
						5 I obey the law, even if the law causes misery.
						6 I’d rather eat my armor than admit when I’m wrong`,
	},
	Urchin: {
		description: `You grew up on the streets alone, orphaned, and poor. 
					You had no one to watch over you or to provide for 
					you, so you learned to provide for yourself. You fought 
					fiercely over food and kept a constant watch out for other 
					desperate souls who might steal from you. You slept on 
					rooftops and in alleyways, exposed to the elements, and 
					endured sickness without the advantage of medicine or 
					a place to recuperate. You’ve survived despite all odds, 
					and did so through cunning, strength, speed, or some 
					combination of each.
					You begin your adventuring career with enough 
					money to live modestly but securely for at least ten days. 
					How did you come by that money? What allowed you to 
					break free of your desperate circumstances and embark 
					on a better life?`,
		skillProficiencies: `Sleight of Hand, Stealth `,
		toolProficiencies: `Disguise kit, thieves’ tools `,
		startingEquipment: ` A small knife, a map of the city you 
							grew up in, a pet mouse, a token to remember your 
							parents by, a set of common clothes, and a belt pouch 
							containing 10 gp`,
		feature: {
			title: `City Secrets`,
			description: ` You know the secret patterns and flow to cities and can 
						find passages through the urban sprawl that others would 
						miss. When you are not in combat, you (and companions 
						you lead) can travel between any two locations in the city 
						twice as fast as your speed would normally allow.`,
		},
		suggestedCharacteristics: `Urchins are shaped by lives of desperate poverty, for 
								good and for ill. They tend to be driven either by a 
								commitment to the people with whom they shared life 
								on the street or by a burning desire to find a better life— 
								and maybe get some payback on all the rich people who 
								treated them badly.`,
		suggestedPersonalityTraits: ` d8 Personality Trait
									1
									2
									6
									I hide scraps of food and trinkets away in my pockets.
									I ask a lot of questions.
									3 I like to squeeze into small places where no one else 
									can get to me.
									4 I sleep with my back to a wall or tree, with everything I 
									own wrapped in a bundle in my arms.
									5 I eat like a pig and have bad manners.
									I think anyone who’s nice to me is hiding evil intent.
									7 I don’t like to bathe.
									8
									I bluntly say what other people are hinting at or hiding.`,
		suggestedIdeal: ` d6 Ideal
						1
						2
						Respect. All people, rich or poor, deserve respect. 
						(Good)
						Community. We have to take care of each other, 
						because no one else is going to do it. (Lawful)
						3 Change. The low are lifted up, and the high and mighty 
						are brought down. Change is the nature of things. 
						(Chaotic)
						4 Retribution. The rich need to be shown what life and 
						death are like in the gutters. (Evil)
						5 People. I help the people who help me—that’s what 
						keeps us alive. (Neutral)
						6
						Aspiration. I'm going to prove that I'm worthy of a 
						better life.`,
		suggestedBond: `d6 Bond
						1
						2
						6
						My town or city is my home, and I’ll fight to defend it.
						I sponsor an orphanage to keep others from enduring 
						what I was forced to endure.
						3 I owe my survival to another urchin who taught me to 
						live on the streets.
						4 I owe a debt I can never repay to the person who took 
						pity on me.
						5 I escaped my life of poverty by robbing an important 
						person, and I’m wanted for it.
						No one else should have to endure the hardships I’ve 
						been through.`,
		suggestedFlaw: ` d6 Flaw
						1
						2
						6
						If I'm outnumbered, I will run away from a fight.
						Gold seems like a lot of money to me, and I’ll do just 
						about anything for more of it.
						3 I will never fully trust anyone other than myself.
						4 I’d rather kill someone in their sleep then fight fair.
						5 It’s not stealing if I need it more than someone else.
						People who can't take care of themselves get what they 
						deserve.`,
	},
	Far_Traveler: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		backgroundSpecial: ``,
		feature: {
			title: ``,
			description: ``,
		},
		alterateFeature: [
			{
				title: ``,
				description: ``,
			},
			{
				title: ``,
				description: ``,
			},
		],
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Haunted_One: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Knight: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Pirate: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	City_Watch: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Clan_Crafter: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Cloistered_Scholar: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Courtier: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Faction_Agent: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Inheritor: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Investigator: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Mercenary_Veteran: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Urban_Bounty_Hunter: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
	Waterdhavian_Noble: {
		description: ``,
		skillProficiencies: ``,
		toolProficiencies: ``,
		startingEquipment: ``,
		feature: {
			title: ``,
			description: ``,
		},
		suggestedCharacteristics: ``,
		suggestedPersonalityTraits: ``,
		suggestedIdeal: ``,
		suggestedBond: ``,
		suggestedFlaw: ``,
	},
};

export const exoticLanguageArray = [
	"Abyssal",
	"Celestial",
	"Draconic",
	"Deep Speech",
	"Infernal",
	"Primordial",
	"Sylvan",
	"Undercommon",
];

export const exoticLanguageDesc = {
	Abyssal: {
		typicalSpeakers: "Demons",
		script: "Infernal",
	},
	Celestial: {
		typicalSpeakers: "Celestials",
		script: "Celestial",
	},
	Deep_Speech: {
		typicalSpeakers: "Mind Flayers and Beholders",
		script: "None",
	},
	Draconic: {
		typicalSpeakers: "Dragons and Dragonborn",
		script: "Draconic",
	},
	Infernal: {
		typicalSpeakers: "Devils",
		script: "Infernal",
	},
	Primordial: {
		typicalSpeakers: "Elementals",
		script: "Dwarvish",
	},
	Sylvan: {
		typicalSpeakers: "Fey Creatures",
		script: "Elvish",
	},
	Undercommon: {
		typicalSpeakers: "Underdark Traders",
		script: "Elvish",
	},
};

export const sexArray = ["Male", "Female", "Both"];

export const skinArray = [
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

export const hairArray = [
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

export const eyesArray = [
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
