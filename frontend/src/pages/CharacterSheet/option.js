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

// pg 39 in DND 5e pdf

// all classDescs need formatting
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
		hitDie: "1d12",
		primaryAbility: "Strength",
		savingThrowProficiencies: "Strength and Constitution",
		armorAndWeaponProficiencies:
			" Light and medium armor, shields,simple and martial weapons",
	},
	Bard: {
		description:
			" An inspiring magician whose power echoes the music of creation",
		hitDie: "1d8",
		primaryAbility: "Charisma",
		savingThrowProficiencies: "Dexterity and Charisma",
		armorAndWeaponProficiencies:
			" Light armor, simple weapons, hand,crossbows, longswords, rapiers, shortswords",
	},
	Cleric: {
		description:
			"A priestly champion who wields divine magic in service of a higher power",
		hitDie: "1d8",
		primaryAbility: "Wisdom",
		savingThrowProficiencies: "Wisdom and Charisma",
		armorAndWeaponProficiencies:
			" Light and medium armor, shields, simple weapons",
	},
	Druid: {
		description:
			" A priest of the Old Faith, wielding the powers of nature—moonlight and plant growth, fire and lightning—and adopting animal forms",
		hitDie: "1d8",
		primaryAbility: "Wisdom",
		savingThrowProficiencies: "Intelligence and Wisdom",
		armorAndWeaponProficiencies:
			"Light and medium armor (nonmetal), shields (nonmetal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
	},
	Fighter: {
		description:
			"A master of martial combat, skilled with a variety of weapons and armor",
		hitDie: "1d10",
		primaryAbility: "Strength or Dexterity",
		savingThrowProficiencies: "Strength and Constitution",
		armorAndWeaponProficiencies:
			" All armor, shields, simple and martial weapons",
	},
	Monk: {
		description:
			"An master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
		hitDie: "1d8",
		primaryAbility: "Dexterity and Wisdom",
		savingThrowProficiencies: "Strength and Dexterity",
		armorAndWeaponProficiencies: "Simple weapons, shortswords",
	},
	Paladin: {
		description: "A holy warrior bound to a sacred oath",
		hitDie: "1d10",
		primaryAbility: "Strength and Charisma",
		savingThrowProficiencies: "Wisdom and Charisma",
		armorAndWeaponProficiencies:
			" All armor, shields, simple and martial weapons",
	},
	Ranger: {
		description:
			" A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
		hitDie: "1d10",
		primaryAbility: "Dexterity and Wisdom",
		savingThrowProficiencies: "Strength and Dexterity",
		armorAndWeaponProficiencies:
			" Light and medium armor, shields, simple and martial weapons",
	},
	Rogue: {
		description:
			" A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
		hitDie: "1d8",
		primaryAbility: "Dexterity",
		savingThrowProficiencies: "Dexterity and Intelligence",
		armorAndWeaponProficiencies:
			" Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords",
	},
	Sorcerer: {
		description:
			" A spellcaster who draws on inherent magic from a gift or bloodline",
		hitDie: "1d6",
		primaryAbility: "Charisma",
		savingThrowProficiencies: "Constitution and Charisma",
		armorAndWeaponProficiencies:
			"Daggers, darts, slings, quarterstaffs, light crossbows",
	},
	Warlock: {
		description:
			" A wielder of magic that is derived from a bargain with an extraplanar entity",
		hitDie: "1d8",
		primaryAbility: "Charisma",
		savingThrowProficiencies: "Wisdom and Charisma",
		armorAndWeaponProficiencies: "Light armor, simple weapons",
	},
	Wizard: {
		description:
			"A scholarly magic-user capable of manipulating the structures of reality",
		hitDie: "1d6",
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
		abilityScoreIncrease: "Charisma +2, Constitution +1",
		speed: "30 feet",
		standardLanguages: "Common, Celestial",
	},
	Autognome: {
		description:
			"Small, mechanical gnomes created by the gnomes of the world to assist them.",
		expectedLifeSpan: "Variable",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: "Constitution +2, Intelligence +1",
		speed: "25 feet",
		standardLanguages: "Common, Gnomish",
	},
	Bugbear: {
		description:
			"Large, hairy goblinoids known for their surprising stealth and physical prowess.",
		expectedLifeSpan: "80 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: "Strength +2, Dexterity +1",
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Centaur: {
		description:
			"Half-human, half-horse creatures with a strong connection to nature and a powerful build.",
		expectedLifeSpan: "100 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: "Strength +2, Wisdom +1",
		speed: "40 feet",
		standardLanguages: "Common, Sylvan",
	},
	Changeling: {
		description:
			"Shapechangers with the ability to alter their appearance at will.",
		expectedLifeSpan: "80 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: "Charisma +2, Dexterity +1",
		speed: "30 feet",
		standardLanguages: "Common, Primordial",
	},
	Dragonborn: {
		description:
			"Humanoid dragons with draconic ancestry and the ability to breathe elemental energy.",
		expectedLifeSpan: "80 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: "Strength +2, Charisma +1",
		speed: "30 feet",
		standardLanguages: "Common, Draconic",
	},
	Dwarf: {
		description:
			"Short, stout, and resilient beings known for their craftsmanship and endurance.",
		expectedLifeSpan: "350 years",
		expectedSize: "4 to 5 feet",
		abilityScoreIncrease: "Constitution +2",
		speed: "25 feet",
		standardLanguages: "Common, Dwarvish",
	},
	Elf: {
		description:
			"Graceful and long-lived beings with keen senses and an affinity for magic.",
		expectedLifeSpan: "750 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: "Dexterity +2",
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Fairy: {
		description:
			"Tiny, magical creatures with wings and a playful demeanor.",
		expectedLifeSpan: "100 years",
		expectedSize: "2.5 to 3 feet",
		abilityScoreIncrease: "Dexterity +2, Charisma +1",
		speed: "30 feet (fly 30 feet)",
		standardLanguages: "Common, Sylvan",
	},
	Firbolg: {
		description:
			"Large, reclusive forest dwellers with a natural affinity for the land.",
		expectedLifeSpan: "500 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: "Strength +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Elvish, Sylvan",
	},
	Genasi: {
		description:
			"Beings with elemental heritage, exhibiting traits of their elemental ancestors.",
		expectedLifeSpan: "120 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease:
			"Constitution +2, another +1 depending on the subrace",
		speed: "30 feet",
		standardLanguages: "Common, Primordial",
	},
	Gith: {
		description:
			"Alien humanoids with a history of interplanar conflict and psionic abilities.",
		expectedLifeSpan: "80 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: "Intelligence +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Gith",
	},
	Gnome: {
		description:
			"Inventive and curious beings known for their cleverness and affinity with magic.",
		expectedLifeSpan: "400 years",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: "Intelligence +2",
		speed: "25 feet",
		standardLanguages: "Common, Gnomish",
	},
	Goblin: {
		description:
			"Small, cunning creatures with a knack for mischief and survival.",
		expectedLifeSpan: "60 years",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: "Dexterity +2, Constitution +1",
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Goliath: {
		description:
			"Giant humanoids with a powerful build and a competitive nature.",
		expectedLifeSpan: "80 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: "Strength +2, Constitution +1",
		speed: "30 feet",
		standardLanguages: "Common, Giant",
	},
	Grung: {
		description:
			"Small, amphibious humanoids with a toxic skin and a unique culture.",
		expectedLifeSpan: "60 years",
		expectedSize: "2 to 3 feet",
		abilityScoreIncrease: "Dexterity +2, Constitution +1",
		speed: "25 feet (jump 20 feet)",
		standardLanguages: "Common, Grung",
	},
	Hadozee: {
		description:
			"A race of winged creatures with a love for exploration and adventure.",
		expectedLifeSpan: "70 years",
		expectedSize: "4 to 5 feet",
		abilityScoreIncrease: "Dexterity +2, Charisma +1",
		speed: "30 feet (fly 30 feet)",
		standardLanguages: "Common, Auran",
	},
	Half0Elf: {
		description:
			"Versatile and adaptable individuals born of human and elven parentage.",
		expectedLifeSpan: "180 years",
		expectedSize: "5.5 to 6 feet",
		abilityScoreIncrease:
			"Charisma +2, and two other ability scores of your choice +1",
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Half0Orc: {
		description:
			"Strong and resilient beings born of human and orcish lineage, known for their combat prowess.",
		expectedLifeSpan: "75 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: "Strength +2, Constitution +1",
		speed: "30 feet",
		standardLanguages: "Common, Orc",
	},
	Halfling: {
		description:
			"Small and agile beings with a penchant for good luck and stealth.",
		expectedLifeSpan: "150 years",
		expectedSize: "3 to 4 feet",
		abilityScoreIncrease: "Dexterity +2",
		speed: "25 feet",
		standardLanguages: "Common, Halfling",
	},
	Harengon: {
		description:
			"Rabbit-like humanoids known for their swiftness and connection to nature.",
		expectedLifeSpan: "80 years",
		expectedSize: "4 to 5 feet",
		abilityScoreIncrease: "Dexterity +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Sylvan",
	},
	Hobgoblin: {
		description:
			"Disciplined and militaristic goblinoids with a strong sense of order and hierarchy.",
		expectedLifeSpan: "80 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: "Constitution +2, Intelligence +1",
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Human: {
		description:
			"The most adaptable and diverse of races, with a wide range of potential.",
		expectedLifeSpan: "80 years",
		expectedSize: "5.5 to 6 feet",
		abilityScoreIncrease: "Two ability scores of your choice +1",
		speed: "30 feet",
		standardLanguages: "Common",
	},
	Kalashtar: {
		description:
			"Mystical beings with a psychic connection to a collective consciousness.",
		expectedLifeSpan: "120 years",
		expectedSize: "5.5 to 6 feet",
		abilityScoreIncrease: "Wisdom +2, Charisma +1",
		speed: "30 feet",
		standardLanguages: "Common, Quori",
	},
	Kenku: {
		description:
			"Crow-like humanoids with the ability to mimic sounds and voices.",
		expectedLifeSpan: "60 years",
		expectedSize: "5 to 5.5 feet",
		abilityScoreIncrease: "Dexterity +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Auran",
	},
	Kobold: {
		description:
			"Small, draconic creatures known for their cunning and trap-making skills.",
		expectedLifeSpan: "60 years",
		expectedSize: "2.5 to 3 feet",
		abilityScoreIncrease: "Dexterity +2, Strength +1",
		speed: "30 feet",
		standardLanguages: "Common, Draconic",
	},
	Leonin: {
		description:
			"Leonin are lion-like humanoids with a strong sense of pride and a warrior culture.",
		expectedLifeSpan: "60-80 years",
		expectedSize: "About 6 to 7 feet tall",
		abilityScoreIncrease: "Strength +2, Dexterity +1",
		speed: "35 feet",
		standardLanguages: "Common, Sylvan",
	},
	Lizardfolk: {
		description:
			"Reptilian humanoids with a natural affinity for the swamp and a primal outlook.",
		expectedLifeSpan: "80 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: "Constitution +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Draconic",
	},
	Loxodon: {
		description:
			"Loxodons are elephantine humanoids with great physical strength and a peaceful nature, often serving as diplomats or guardians.",
		expectedLifeSpan: "200-300 years",
		expectedSize: "About 7 to 8 feet tall",
		abilityScoreIncrease: "Constitution +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Loxodon",
	},
	Minotaur: {
		description:
			"Bull-headed humanoids known for their strength and labyrinthine culture.",
		expectedLifeSpan: "80 years",
		expectedSize: "7 to 8 feet",
		abilityScoreIncrease: "Strength +2, Constitution +1",
		speed: "30 feet",
		standardLanguages: "Common, Minotaur",
	},
	Orc: {
		description:
			"Large, brutish creatures with a fierce demeanor and exceptional physical power.",
		expectedLifeSpan: "70 years",
		expectedSize: "6 to 7 feet",
		abilityScoreIncrease: "Strength +2, Constitution +1",
		speed: "30 feet",
		standardLanguages: "Common, Orc",
	},
	Owlin: {
		description:
			"Owlin are bird-like humanoids with large, owl-like eyes and the ability to glide.",
		expectedLifeSpan: "60-80 years",
		expectedSize: "About 4 to 5 feet tall",
		abilityScoreIncrease: "Dexterity +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Auran",
	},
	Plasmoid: {
		description:
			"Plasmoids are amorphous beings capable of changing their shape and form, often resembling oozes or slimes.",
		expectedLifeSpan: "60-80 years",
		expectedSize: "Variable, but generally around 5 to 6 feet tall",
		abilityScoreIncrease: "Constitution +2, Dexterity +1",
		speed: "30 feet",
		standardLanguages: "Common, Abyssal",
	},
	Satyr: {
		description:
			"Satyrs are fey creatures with the lower bodies of goats and the upper bodies of humanoids, known for their love of revelry and nature.",
		expectedLifeSpan: "90-120 years",
		expectedSize: "About 4 to 5 feet tall",
		abilityScoreIncrease: "Dexterity +2, Charisma +1",
		speed: "35 feet",
		standardLanguages: "Common, Sylvan",
	},
	Shifter: {
		description:
			"Beings with a bestial nature and the ability to assume animal-like traits.",
		expectedLifeSpan: "80 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: "Dexterity +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Sylvan",
	},
	Simic_Hybrid: {
		description:
			"Simic Hybrids are experimental beings created by the Simic Combine, combining traits of various creatures for specific purposes.",
		expectedLifeSpan: "80-120 years",
		expectedSize: "Varies, typically 5 to 6 feet tall",
		abilityScoreIncrease: "Constitution +2, Intelligence +1",
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Tabaxi: {
		description:
			"Cat-like humanoids with a penchant for curiosity and agility.",
		expectedLifeSpan: "70 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: "Dexterity +2, Charisma +1",
		speed: "30 feet",
		standardLanguages: "Common, Elvish",
	},
	Thri0Kreen: {
		description:
			"Thri-kreen are insectoid humanoids with a chitinous exoskeleton and powerful limbs, known for their agility and natural predatory skills.",
		expectedLifeSpan: "50-60 years",
		expectedSize: "About 6 to 7 feet tall",
		abilityScoreIncrease: "Dexterity +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Thri-Kreen",
	},
	Tiefling: {
		description:
			"Infernal-heritaged beings with horns, tails, and a touch of dark magic.",
		expectedLifeSpan: "100 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: "Charisma +2, Intelligence +1",
		speed: "30 feet",
		standardLanguages: "Common, Infernal",
	},
	Triton: {
		description:
			"Aquatic beings with a connection to the ocean and an affinity for water magic.",
		expectedLifeSpan: "100 years",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease: "Strength +1, Constitution +1, Charisma +1",
		speed: "30 feet (swim 30 feet)",
		standardLanguages: "Common, Primordial",
	},
	Vedalken: {
		description:
			"Vedalken are a race of tall, blue-skinned humanoids known for their intellectual prowess and dedication to knowledge and order.",
		expectedLifeSpan: "150 years",
		expectedSize: "About 6 to 7 feet tall",
		abilityScoreIncrease: "Intelligence +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Vedalken",
	},
	Verdan: {
		description:
			"Verdan are a race of small, green-skinned humanoids who evolve rapidly and have a unique biological adaptability.",
		expectedLifeSpan: "40-60 years",
		expectedSize: "About 3 to 4 feet tall",
		abilityScoreIncrease: "Dexterity +2, Wisdom +1",
		speed: "30 feet",
		standardLanguages: "Common, Goblin",
	},
	Warforged: {
		description:
			"Constructed beings with a humanoid form and a capacity for sentience and emotion.",
		expectedLifeSpan: "Variable",
		expectedSize: "6 to 6.5 feet",
		abilityScoreIncrease:
			"Constitution +2, another +1 depending on the subrace",
		speed: "30 feet",
		standardLanguages: "Common, Warforged",
	},
	Yuan0ti_Pureblood: {
		description:
			"Serpent-like humanoids with a mysterious and sinister heritage.",
		expectedLifeSpan: "120 years",
		expectedSize: "5 to 6 feet",
		abilityScoreIncrease: "Charisma +2, Intelligence +1",
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
		option: "Abandoned",
		isHomebrew: false,
	},
	{
		option: "Abyssdweller",
		isHomebrew: false,
	},
	{
		option: "Acolyte",
		isHomebrew: false,
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
		description: `Not everyone will have someone with them their entire life. Even if there is a crowd of potential relationships waiting to happen, they will tend to not want to forge a relationship, so as to not be abandoned again. These individuals tend to shy away from very large crowds, acting as an observer of sorts (like an outsider observing the in crowd, etc.). A person who is abandoned also has a unique viewpoint as they interpret events drastically from other party members.

					Think for a moment. Who abandoned you? Are you holding a grudge against them, Or are you willing to forgive them? For how long have you been abandoned? These are questions you should ask yourself, and answer in the shoes of your character. You could've been abandoned by a ragtag group of adventurers, after you discussed that you wanted to leave the group behind! Or perhaps, you were abandoned by your family, left to starve in the alleyways of a run down village.`,
		skillProficiencies: ` Deception, Intimidation, Performance, Persuasion, or Stealth. `,
		toolProficiencies: `One artisan's tool of your choice.`,
		languages: `One language of your choice`,
		startingEquipment: `You start with dark common clothes, a few (1d4) pieces of gold, one trinket from your life, before you were abandoned.`,
		backgroundSpecial: ``,
		feature: {
			title: `Pity or Hope`,
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
		suggestedCharacteristics: `AWAITING FILLING`, // NEEDS TO BE FILLED IN
		suggestedPersonalityTraits: `d4	Personality Traits (Pity)
								1	I don’t know what I’m supposed to do with my life anymore…
								2	People always tell me to look on the bright side...what one, though?
								3	I worry that even if I help complete some sort of magical quest, I’ll be forgotten.
								4	I don’t even like to help...I just do it for a second chance.
								d4	Personality Traits (Hope)
								1	Everybody deserves a second chance!
								2	I'll never give up on the people I care about!
								3	Everything is gonna turn out a-O.K!
								4	Come on, there's always a bright side!`,
		suggestedIdeal: `d6	Ideals
						1	Chaos. I'm just here to cause chaos! no wrong, no right! (Chaotic)
						2	Self-Improvement. I must go on a journey of self-improvement, or else, what's the point of this all? (Neutral)
						3	Guidance. I feel that I've broken something, and must been guided by some type of kind deity or system! (Lawful)
						4	Vengeance. I will find the one that has abandoned me first, and I will have revenge. (Evil)
						5	The World. The World needs to hear the story of someone like me, someone who's broken boundaries of life. (Any)
						6	Friendship. I'll go from being abandoned, to having made wondrous friends. (Good)`,
		suggestedBond: `d6	Bond
						1	The inn owner that took me in was quite kind...I owe them thanks, still.
						2	A small group of adventurers guided me to this place...I should thank them if I see them again.
						3	Whenever I see someone in a similar situation as me, I simply must help them.
						4	Seeing even little animals get along makes me smile, I can't stand to see one hurt.
						5	Sometimes I think there's someone out there for me, and that makes all the worries go away.
						6	Thinking of the people I can call my friends...that makes me smile.`,
		suggestedFlaw: `d6	Flaw
						1	I get paranoid and anxious easily.
						2	If it's to protect my new friends, I will never stand down; no matter how strong the foe.
						3	I think of myself as some sort of "Tough Guy", having gone through what I have.
						4	I get angry at the little things in life...
						5	I often apologize for things out of my control to try and avoid conflict.
						6	When things get too hard, I push people away before they can abandon me again.`,
	},
	AbyssDweller: {
		description: `You were spawned in the layers of the Abyss. You might be a demon, or a lost soul.

					Do you have any memories of the time in the Abyss? What have you experienced? Have you received torture or torment in any kind and if yes, was there a reason for that? Were you part of the army of a demon lord? Did you fight against devils or other demons? What is the reason that you are not part of that world anymore? Maybe you found a way out by yourself, someone sent you on a mission, or you were summoned by a cult or other force?`,
		skillProficiencies: `Intimidation, Deception`,
		toolProficiencies: `Disguise Kit`,
		languages: `Choose one from the following list: Abyssal, Infernal, Celestial or Deep Speech`,
		startingEquipment: `A Disguise kit, a set of dark common clothes, a small belt pouch containing 5 gp, and a trinket from the lower planes`,
		backgroundSpecial: ``,
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
		suggestedCharacteristics: `AWAITING FILLING`, // NEEDS FILLING
		suggestedPersonalityTraits: `
									d8	Personality Trait
									1	Friendship is new and strange to me.
									2	I'm not a man of many words.
									3	The stage is mine; I'm the center of everything.
									4	I like to express emotions and feelings in wild gestures.
									5	Staying at one place for too long is not in my interest.
									6	For some reason, I enjoy nature and it's beauty.
									7	It's hard/easy to adapt to this world.
									8	It's easier to kill someone than to be nice to someone.`,
		suggestedIdeal: `d6	Ideal
						1	Order. Following orders is sometimes a good option, that might lead in less pain. (Lawful)
						2	Pain. Feeling pain reminds people of the fact that they are still alive, so it’s good to give them that feeling. [A fact that they forget too easy] (Evil)
						3	Freedom. If you have the possibility to do everything you want, what could stop you from doing that? (Chaotic)
						4	Hate. Everyone not from the Abyss does not deserve to live. (Evil)
						5	Integrity. Reducing the pain of someone means less pain in the entire world. (Good)
						6	Destruction. Chaos is more likely than order. Let's help with this process. (Chaotic)`,
		suggestedBond: `
						d6	Bond
						1	There is this one special place in the abyss where I always came back to.
						2	I took part in the blood war against the devils.
						3	I was/am under the command of a demon lord/prince.
						4	I had some friends/comrades in the abyss. I wonder what happened to them.
						5	I once fought in a huge battle between two demon lords/princes.
						6	I have connections to a cult from the Material Plane.`,
		suggestedFlaw: `d6	Flaw
					1	There is no way I'll go back to the abyss. If there is a way to survive, I will take it, even when that means I have to leave others behind.
					2	Thinking about the abyss always makes me angry.
					3	Everyone is hateable.
					4	I have an explosive nature. It's pretty easy to trigger me.
					5	Sometimes I talk to myself. The time in the abyss was long and lonely...
					6	I usually keep stuff I find or get for me.`,
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
		description: `Addiction can happen to anyone. While genetics can help increase or decrease the chances of addiction, everything that causes pleasure can become an addiction.

					You've became dependent on some sort of substance or activity. You become jittery and unreasonable if you don't feed your addiction for a while. You may be working to rid yourself of the addiction, became numb to it, or revel in it. In a way, you are a sick person afflicted with a disease that keeps you hooked. You may have tried to get help. Did it work? Are you on recovery?Or perhaps you recovered and fell back into the hole, or even found some new form of addiction. It's a slippery slope, after all.

					When you pick this background, talk with your GM about any addictive substances in the campaign. Is there support for addicts or is knowledge on addictions vague or nonexistent? How long have you been addicted? Is your addiction deadly? What are your withdrawal symptoms and when do they start occurring? And do you do anything to help subdue withdraw and/or the addiction itself? When discussing with your DM, it is recommended you make an addiction that is feasible to the campaign to sustain. It should not be something overly rare, just to keep it always within reach.`,
		skillProficiencies: `Choose between Deception or Persuasion, your 2nd skill must be related to something you've learned from your addiction (ie: sex or drugs could be medicine, gambling could be sleight of hand).`,
		toolProficiencies: `1 tool set that facilitates your addiction (ie: alchemy lab for drugs, game set for gambling, a bondage set for sex.)`,
		languages: `Any one`,
		startingEquipment: ` Medical diagnosis papers, paraphernalia that relates to your addiction (usually the tool you are proficient in), common clothes, and a pouch containing 5gp.`,
		backgroundSpecial: `Addiction, Not all addicts are the same. Anything can become addictive with the right person; even symptoms can vary from addict to addict.

							d6	Addiction
							1	Drugs (can be recreational or medicinal, be sure to know the drug and its intended effects)
							2	Food (whether this shows up as a crazy chocolate hunter/lover type, or an unhealthy reaction to purging and unhealthy diets type, is up to you)
							3	Gambling and/or gaming.
							4	Sex and/or masturbation.
							5	A certain activity (maybe you just REALLY love climbing trees, perhaps your fingers tingle and shake to knit scarves, you just can't go very long without needing to do that activity)
							6	You have a rare genetic disorder that makes anything remotely pleasurable addictive.`,
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
		suggestedCharacteristics: `Not all addicts are the same. Anything can become addictive with the right person; even symptoms can vary from addict to addict.`,
		suggestedPersonalityTraits: `d8	Personality Trait
									1	I think constantly about my choice of substance/Activity.
									2	I will do anything to get more of what I want.
									3	I try to get other people addicted as well.
									4	I believe my addiction is normal for everyone.
									5	I hate myself but can't seem to stop.
									6	I frequently twitch and babble about my addiction.
									7	I am prone to random and frequently inappropriate emotional changes.
									8	I spend most of my earnings on my addiction.`,
		suggestedIdeal: `d6	Ideal
						1	Love and Betterment I'm trying to get a better handle on my addiction so that I can be better for someone I love. (Good)
						2	Magic Cure I'm chasing the cure for my addiction because the process to quit is WAY too much work. (Chaotic)
						3	Self Improvement . I am determined to get my life in order. (Lawful)
						4	Ambrosia I believe my addiction is the key to happiness and spiritual transcendence. (Neutral)
						5	Improvement I can make my addiction even better, with the right tweaks I could reach new highs. (Neutral)
						6	MORE I want more, I want it all to myself, I can never get enough, and no one can stop me. (Evil)`,
		suggestedBond: `d6	Bond
						1	My addiction is my choice, if I want to let it run my life, that's my prerogative.
						2	I am trying to get better for the sake my family and friends.
						3	I will never stop trying to relive that first high.
						4	my addiction was the only thing that kept me going in trying times.
						5	I owe someone a mountain of debt.
						6	I made a tidy sum from other addicts but can't use the money (guilt or the law)
						`,
		suggestedFlaw: `d6	Flaw
						1	I'm allergic (to the material, substance, food, drink, activity, etc, required for my addiction)
						2	I've become a bit defined by my addiction.
						3	I have to bring the supplies to aid/sustain my addiction and sometimes people say it's more trouble than it's worth.
						4	I have an uncontrollable twitch that never stops, not even when I sleep.
						5	When going through withdrawal, I become very violent and aggressive to everyone around me.
						6	When I don't get my addiction satisfied I can barely sleep.`,
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
					description: `Amusement. If there isn’t any fun in doing something then why do it `,
					alignment: `Chaotic`,
				},
				{
					number: 2,
					description: `Belonging. Everyone should know where they belong `,
					alignment: `Good`,
				},
				{
					number: 3,
					description: `Rule-follower. Regardless as to what you are, everyone should follow the rules`,
					alignment: `Lawful`,
				},
				{
					number: 4,
					description: `	Vengeance. For all that happened at my birth, there will be blood to pay`,
					alignment: `Evil`,
				},
				{
					number: 5,
					description: `Opinions. Everyone is entitled to their own opinions, of course this includes myself `,
					alignment: `Any`,
				},
				{
					number: 6,
					description: `Whatever. Everyone just does what they want anyway`,
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
	Adopted: {
		isHomebrew: true,
		description: ``,
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
		suggestedPersonalityTraits: {
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
		suggestedIdeal: {
			description: ``,
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: ``,
					alignment: ``,
				},
				{
					number: 2,
					description: ``,
					alignment: ``,
				},
				{
					number: 3,
					description: ``,
					alignment: ``,
				},
				{
					number: 4,
					description: ``,
					alignment: ``,
				},
				{
					number: 5,
					description: ``,
					alignment: ``,
				},
				{
					number: 6,
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
	
	Afflicted: {
	isHomebrew: true ,
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
				}
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
			die: ``,
			title: ``,
			roll: [
				{
					number: 1,
					description: ``,
					alignment: ``,
				},
				{
					number: 2,
					description: ``,
					alignment: ``,
				},
				{
					number: 3,
					description: ``,
					alignment: ``,
				},
				{
					number: 4,
					description: ``,
					alignment: ``,
				},
				{
					number: 5,
					description: ``,
					alignment: ``,
				},
				{
					number: 6,
					description: ``,
					alignment: ``,
				}
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
				}
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
				}
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
