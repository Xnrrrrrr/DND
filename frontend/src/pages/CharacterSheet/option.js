export const classesArray = [
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
];

// pg 39 in DND 5e pdf
export const classDesc = {
	Artificer: {
		description:
			"A master of invention, Artificers use ingenuity and magic to unlock extraordinary abilities, crafting magical items and imbuing objects with their own arcane energy.",
		hitDie: "1d8",
		primaryAbility: "Intelligence",
		savingThrowProficiencies: "Constitution, Intelligence",
		armorAndWeaponProficiencies:
			"Light armor, medium armor, shields, simple weapons",
	},

	Barbarian: {
		description:
			"A fierce warrior of primitive background who can enter a battle rage",
		hitDie: "d12",
		primaryAbility: "Strength",
		savingThrowProficiencies: "Strength and Constitution",
		armorAndWeaponProficiencies:
			" Light and medium armor, shields,simple and martial weapons",
	},
	Bard: {
		description:
			" An inspiring magician whose power echoes the music of creation",
		hitDie: "d8",
		primaryAbility: "Charisma",
		savingThrowProficiencies: "Dexterity and Charisma",
		armorAndWeaponProficiencies:
			" Light armor, simple weapons, hand,crossbows, longswords, rapiers, shortswords",
	},
	Cleric: {
		description:
			"A priestly champion who wields divine magic in service of a higher power",
		hitDie: "d8",
		primaryAbility: "Wisdom",
		savingThrowProficiencies: "Wisdom and Charisma",
		armorAndWeaponProficiencies:
			" Light and medium armor, shields, simple weapons",
	},
	Druid: {
		description:
			" A priest of the Old Faith, wielding the powers of nature—moonlight and plant growth, fire and lightning—and adopting animal forms",
		hitDie: "d8",
		primaryAbility: "Wisdom",
		savingThrowProficiencies: "Intelligence and Wisdom",
		armorAndWeaponProficiencies:
			"Light and medium armor (nonmetal), shields (nonmetal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
	},
	Fighter: {
		description:
			"A master of martial combat, skilled with a variety of weapons and armor",
		hitDie: "d10",
		primaryAbility: "Strength or Dexterity",
		savingThrowProficiencies: "Strength and Constitution",
		armorAndWeaponProficiencies:
			" All armor, shields, simple and martial weapons",
	},
	Monk: {
		description:
			"An master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
		hitDie: "d8",
		primaryAbility: "Dexterity and Wisdom",
		savingThrowProficiencies: "Strength and Dexterity",
		armorAndWeaponProficiencies: "Simple weapons, shortswords",
	},
	Paladin: {
		description: "A holy warrior bound to a sacred oath",
		hitDie: "d10",
		primaryAbility: "Strength and Charisma",
		savingThrowProficiencies: "Wisdom and Charisma",
		armorAndWeaponProficiencies:
			" All armor, shields, simple and martial weapons",
	},
	Ranger: {
		description:
			" A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
		hitDie: "d10",
		primaryAbility: "Dexterity and Wisdom",
		savingThrowProficiencies: "Strength and Dexterity",
		armorAndWeaponProficiencies:
			" Light and medium armor, shields, simple and martial weapons",
	},
	Rogue: {
		description:
			" A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
		hitDie: "d8",
		primaryAbility: "Dexterity",
		savingThrowProficiencies: "Dexterity and Intelligence",
		armorAndWeaponProficiencies:
			" Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords",
	},
	Sorcerer: {
		description:
			" A spellcaster who draws on inherent magic from a gift or bloodline",
		hitDie: "d6",
		primaryAbility: "Charisma",
		savingThrowProficiencies: "Constitution and Charisma",
		armorAndWeaponProficiencies:
			"Daggers, darts, slings, quarterstaffs, light crossbows",
	},
	Warlock: {
		description:
			" A wielder of magic that is derived from a bargain with an extraplanar entity",
		hitDie: "d8",
		primaryAbility: "Charisma",
		savingThrowProficiencies: "Wisdom and Charisma",
		armorAndWeaponProficiencies: "Light armor, simple weapons",
	},
	Wizard: {
		description:
			"A scholarly magic-user capable of manipulating the structures of reality",
		hitDie: "d6",
		primaryAbility: "Intelligence",
		savingThrowProficiencies: "Intelligence and Wisdom",
		armorAndWeaponProficiencies:
			" Daggers, darts, slings, quarterstaffs, light crossbows",
	},
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
								suspended for the duration of the rage.`
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
								use this feature on that creature again for 24 hours.`
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
								as described in chapter 10.`

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
								the wolf makes you a leader of hunters.`
				},
				{
						title:"Aspect Of The Beast",
					description:` At 6th level, you gain a magical benefit based on the 
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
								pace (see chapter 8 for rules on travel pace)`
				},
				{
					title: "Spirit Walker",
					description: ` At 10th level, you can cast the commune with nature 
								spell, but only as a ritual. When you do so, a spiritual 
								version of one of the animals you chose for Totem Spirit 
								or Aspect of the Beast appears to you to convey the 
								information you seek.`
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
								when you hit it with melee weapon attack`
				}
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
								proficiency with three skills of your choice.`
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
								it’s immune to being charmed.`
                },
                {
                    title: "Additional Magical Secrets",
                    description: ` At 6th level, you learn two spells of your choice from any 
								class. A spell you choose must be of a level you can cast, 
								as shown on the Bard table, or a cantrip. The chosen 
								spells count as bard spells for you but don’t count 
								against the number of bard spells you know.`
                },
				{
                    title: "Peerless Skill",
                    description:` Starting at 14th level, when you make an ability check, 
								you can expend one use of Bardic Inspiration. Roll a 
								Bardic Inspiration die and add the number rolled to 
								your ability check. You can choose to do so after you roil 
								the die for the ability check, but before the DM tells you 
								whether you succeed or fail.`
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
								martial weapons.`
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
								but before knowing whether it hits or misses.`
                },
                {
                    title: "Extra Attack",
                    description: `Starting at 6th level, you can attack twice, instead of 
								once, whenever you take the Attack action on your turn.`
                },
				{
                    title: "Battle Magic",
                    description: ` At 14th level, you have mastered the art of weaving 
								spellcasting and weapon use into a single harmonious 
								act. When you use your action to cast a bard spell, you 
								can make one weapon attack as a bonus action.
								`
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
                    title: "",
                    description: "",
                },
                {
                    title: "",
                    description: "",
                },
                {
                    title: "",
                    description: "",
                },
            ],
        },
		Life_Domain: "",
		Light_Domain: "",
		Nature_Domain: "",
		Tempest_Domain: "",
		Trickery_Domain: "",
		War_Domain: "",
		Death_Domain: "",
		Arcana_Domain: "",
		Forge_Domain: "",
		Grave_Domain: "",
		Order_Domain: "",
		Peace_Domain: "",
		Twilight_Domain: "",
	},
	Druid: {
		Circle_of_the_Land: "",
		Circle_of_the_Moon: "",
		Circle_of_Dreams: "",
		Circle_of_the_Shepherd: "",
		Circle_of_Spores: "",
		Circle_of_Stars: "",
		Circle_of_Wildfire: "",
	},
	Fighter: {
		Champion: "",
		Battle_Master: "",
		Eldritch_Knight: "",
		Arcane_Archer: "",
		Cavalier: "",
		Samurai: "",
		Psi_Warrior: "",
		Echo_Knight: "",
	},
	Monk: {
		Way_of_the_Open_Hand: "",
		Way_of_Shadow: "",
		Way_of_the_Four_Elements: "",
		Way_of_the_Drunken_Master: "",
		Way_of_the_Kensei: "",
		Way_of_the_Sun_Soul: "",
		Way_of_the_Long_Death: "",
		Way_of_the_Astral_Self: "",
		Way_of_Mercy: "",
	},
	Paladin: {
		Oath_of_Devotion: "",
		Oath_of_the_Ancients: "",
		Oath_of_Vengeance: "",
		Oath_of_Conquest: "",
		Oath_of_Redemption: "",
		Oath_of_Glory: "",
		Oath_of_the_Crown: "",
		Oath_of_the_Watchers: "",
	},
	Ranger: {
		Hunter: "",
		Beast_Master: "",
		Gloom_Stalker: "",
		Horizon_Walker: "",
		Monster_Slayer: "",
		Fey_Wanderer: "",
		Swarmkeeper: "",
	},
	Rogue: {
		Thief: "",
		Assassin: "",
		Arcane_Trickster: "",
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

export const skillsDesc = {
	// Strength Related
	Athletics: "",

	// Dexterity Related
	Acrobatics: "",
	Sleight_of_Hand: "",
	Stealth: "",

	// Intelligence Related
	Arcana: "",
	History: "",
	Investigation: "",
	Nature: "",
	Religon: "",

	// Wisdom Related
	Animal_Handling: "",
	Insight: "",
	Medicine: "",
	Perception: "",
	Survival: "",

	// Charisma Related
	Deception: "",
	Intimidation: "",
	Performance: "",
	Persuasion: "",
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
export const raceDesc = {
	Aasimar: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Autognome: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Bugbear: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Centaur: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Changeling: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Dragonborn: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Dwarf: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Elf: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Fairy: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Firbolg: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Genasi: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Gith: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Gnome: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Goblin: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Goliath: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Grung: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Hadozee: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Half0Elf: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Half0Orc: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Halfling: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Harengon: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Hobgoblin: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Human: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Kalashtar: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Kenku: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Kobold: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Leonin: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Lizardfolk: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Loxodon: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Minotaur: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Orc: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Owlin: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Plasmoid: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Satyr: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Shifter: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Simic_Hybrid: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Tabaxi: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Thri0Kreen: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Tiefling: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Triton: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Vedalken: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Verdan: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Warforged: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
	},
	Yuan0ti_Pureblood: {
		description: "",
		expectedLifeSpan: "",
		expectedSize: "", // In feet/inches
		abilityScoreIncrease: "", // ex: Charisma +2, Strength +1, and Intelligence +1
		speed: "",
		standardLanguages: "",
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

export const alignmentDesc = {
	Lawful_Good: "",
	Neutral_Good: "",
	Chaotic_Good: "",
	Lawful_Neutral: "",
	Neutral: "",
	Chaotic_Neutral: "",
	Lawful_Evil: "",
	Neutral_Evil: "",
	Chaotic_Evil: "",
};

export const backgroundsArray = [
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
];

export const backgroundDesc = {
	Acolyte: "",
	Charlatan: "",
	Criminal: "",
	Entertainer: "",
	Folk_Hero: "",
	Guild_Artisan: "",
	Hermit: "",
	Noble: "",
	Outlander: "",
	Sage: "",
	Sailor: "",
	Soldier: "",
	Urchin: "",
	Far_Traveler: "",
	Haunted_One: "",
	Knight: "",
	Pirate: "",
	City_Watch: "",
	Clan_Crafter: "",
	Cloistered_Scholar: "",
	Courtier: "",
	Faction_Agent: "",
	Inheritor: "",
	Investigator: "",
	Mercenary_Veteran: "",
	Urban_Bounty_Hunter: "",
	Waterdhavian_Noble: "",
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
