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
                    title: "Blessings of Knowledge",
                    description: `At 1st level, you learn two languages of your choice.
								You also become proficient in your choice of two of the 
								following skills: Arcana, History, Nature, or Religion.
								Your proficiency bonus is doubled for any ability check 
								you make that uses either of those skills.`
                },
                {
                    title: "Channel Divinity: Knowledge of the Ages",
                    description: ` Starting at 2nd level, you can use your Channel Divinity 
								to tap into a divine well of knowledge. As an action, 
								you choose one skill or tool. For 10 minutes, you have 
								proficiency with the chosen skill or tool.`
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
								fails its saving throw against the spell`
                },
				{
                    title: "Potent Spellcasting",
                    description: `  Starting at 8th level, you add your Wisdom modifier to 
									the damage you deal with any cleric cantrip.`
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
								in your current situation`
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
								proficiency with heavy armor.`
                },
                {
                    title: "Disciple of Life",
                    description: ` Also starting at 1st level, your healing spells are more 
								effective. Whenever you use a spell of 1st level or higher 
								to restore hit points to a creature, the creature regains 
								additional hit points equal to 2 + the spell’s level`
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
								use this feature on an undead or a construct`
                },
				{
                    title: "Blessed Healer",
                    description: `Beginning at 6th level, the healing spells you cast on 
								others heal you as well. When you cast a spell of 1st 
								level or higher that restores hit points to a creature 
								other than you, you regain hit points equal to 2 + the 
								spell’s level.`
                },
                {
                    title: "Divine Strike",
                    description: `At 8th level, you gain the ability to infuse your weapon 
								strikes with divine energy. Once on each of your turns 
								when you hit a creature with a weapon attack, you can 
								cause the attack to deal an extra 1d8 radiant damage to 
								the target. When you reach 14th level, the extra damage 
								increases to 2d8.`
                },
                {
                    title: "Supreme Healing",
                    description: `Starting at 17th level, when you would normally roll 
								one or more dice to restore hit points with a spell, you 
								instead use the highest number possible for each die. 
								For example, instead of restoring 2d6 hit points to a 
								creature, you restore 12.`
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
								light cantrip if you don’t already know it.`
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
								all expended uses when you finish a long rest`
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
								is not affected.`
                },
				{
                    title: "Improved Flare",
                    description: `Starting at 6th level, you can also use your Warding 
								Flare feature when a creature that you can see within 
								30 feet of you attacks a creature other than you.`
                },
                {
                    title: "Potent Spellcasting",
                    description: ` Starting at 8th level, you add your Wisdom modifier to 
								the damage you deal with any cleric cantrip.`
                },
                {
                    title: "Corona of Light",
                    description: `Starting at 17th level, you can use your action to activate 
								an aura of sunlight that lasts for 1 minute or until you 
								dismiss it using another action. You emit bright light in 
								a 60-foot radius and dim light 30 feet beyond that. Your 
								enemies in the bright light have disadvantage on saving 
								throws against any spell that deals fire or radiant damage`
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
								your choice: Animal Handling, Nature, or Survival`
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
								creatures you designate.`
                },
				{
                    title: "Dampen Elements",
                    description: ` Starting at 6th level, when you or a creature within 30 
								feet of you takes acid, cold, fire, lightning, or thunder 
								damage, you can use your reaction to grant resistance to 
								the creature against that instance of the damage.`
                },
                {
                    title: "Divine Strike",
                    description: ` At 8th level, you gain the ability to infuse your weapon 
								strikes with divine energy. Once on each of your turns 
								when you hit a creature with a weapon attack, you 
								can cause the attack to deal an extra 1d8 cold, fire, or 
								lightning damage (your choice) to the target. When you 
								reach 14th level, the extra damage increases to 2d8.`
                },
                {
                    title: "Master of Nature",
                    description: `At 17th level, you gain the ability to command animals 
								and plant creatures. While creatures are charmed by 
								your Charm Animals and Plants feature, you can take 
								a bonus action on your turn to verbally command what 
								each of those creatures will do on its next turn.`
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
                    title: "Spellcasting",        // needs formatting 4 a real rite runny and add spellcasting table 
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
