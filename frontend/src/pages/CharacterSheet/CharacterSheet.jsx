import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components";

const maxAttributePoints = 20;

const idealsArray = [
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
];

const bondsArray = [
	"Family",
	"Mentor",
	"Homeland",
	"Artifact",
	"Heirloom",
	"Oath",
	"Revenge",
	"Justice",
	"Love",
];

const classesArray = [
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

const racesArray = [
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

const subracesObj = {
	Dwarf: ["Hill Dwarf", "Mountain Dwarf"],
	Elf: [
		"High Elf",
		"Wood Elf",
		"Dark Elf (Drow)",
		"Eladrin",
		"Sea Elf",
		"Shadar-Kai",
	],
	Gnome: ["Forest Gnome", "Rock Gnome", "Deep Gnome"],
	Haffling: ["Lightfoot Halfling", "Stout Halfling", "Ghostwise Halfling"],
	Tiefling: ["Feral Tiefling", "Asmodeus", "Zariel", "Levistus"],
	Aasimar: ["Protector Aasimar", "Scourge Aasimar", "Fallen Aasimar"],
	Genasi: ["Air Genasi", "Earth Genasi", "Fire Genasi", "Water Genasi"],
	Shifter: ["Beasthide", "Longtooth", "Swiftstride", "Wildhunt"],
	Gith: ["Githyanki", "Githzerai"],
};

const CharacterSheet = () => {
	const [characterFirstName, setCharacterFirstName] = useState("");
	const [characterLastName, setCharacterLastName] = useState("");
	const [age, setAge] = useState(1);
	const [height, setHeight] = useState(10);
	const [weight, setWeight] = useState(5);
	const [background, setBackground] = useState("");
	const [primaryClass, setPrimaryClass] = useState("");
	const [subclass, setSubclass] = useState("");
	const [idealOne, setIdealOne] = useState("");
	const [idealTwo, setIdealTwo] = useState("");
	const [bonds, setBonds] = useState("");
	const [races, setRaces] = useState("");
	const [subraces, setSubraces] = useState("");
	const [flaws, setFlaws] = useState("");
	const [languages, setLanguages] = useState("");
	const [alignments, setAlignments] = useState("");
	const [strength, setStrength] = useState(1);
	const [dexterity, setDexterity] = useState(1);
	const [constitution, setConstitution] = useState(1);
	const [intelligence, setIntelligence] = useState(1);
	const [wisdom, setWisdom] = useState(1);
	const [charisma, setCharisma] = useState(1);
	const [totalAttributePointsRemaining, setTotalAttributePointsRemaining] =
		useState(maxAttributePoints - 6);

	useEffect(() => {
		const pointsLeft =
			maxAttributePoints -
			strength -
			dexterity -
			constitution -
			intelligence -
			wisdom -
			charisma;
		setTotalAttributePointsRemaining(pointsLeft);
	}, [strength, dexterity, constitution, intelligence, wisdom, charisma]);

	const handleAttributeChange = (attributeSetter, currentValue, change) => {
		// Prevent increasing if no points are remaining
		if (change > 0 && totalAttributePointsRemaining === 0) {
			return;
		}

		// Ensure attribute value stays within 1 and 20
		if (
			currentValue + change < 1 ||
			currentValue + change > maxAttributePoints
		) {
			return;
		}
		attributeSetter(currentValue + change);
	};

	const handleClassChange = (e) => {
		setPrimaryClass(e.target.value);
		setSubclass(""); // Reset subclass when a new class is selected
	};

	const handleIdealOneChange = (e) => {
		setIdealOne(e.target.value);
		if (idealTwo === e.target.value) {
			setIdealTwo("");
		}
	};

	const handleIdealTwoChange = (e) => {
		setIdealTwo(e.target.value);
		if (idealOne === e.target.value) {
			setIdealOne("");
		}
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			//const res = await login({ ... }).unwrap();
		} catch (err) {
			console.error(err?.data?.message || err.error);
		}
	};

	return (
		<>
			<Header />
			<div className="character-sheet-container">
				<form onSubmit={submitHandler}>
					<div className="character-sheet-top">
						<div>
							<div>
								<label htmlFor="characterFirstName">
									First Name:
								</label>
								<input
									type="text"
									id="characterFirstName"
									value={characterFirstName}
									onChange={(e) =>
										setCharacterFirstName(e.target.value)
									}
									required
								/>
							</div>
							<div>
								<label htmlFor="characterLastName">
									Last Name:
								</label>
								<input
									type="text"
									id="characterLastName"
									value={characterLastName}
									onChange={(e) =>
										setCharacterLastName(e.target.value)
									}
									required
								/>
							</div>
							<div>
								<label htmlFor="age">Age (Years):</label>
								<input
									type="number"
									id="age"
									value={age}
									onChange={(e) => setAge(e.target.value)}
									min="1"
									max="10000"
									style={{}}
								/>
							</div>
							<div>
								<label htmlFor="height">Height (Inches):</label>
								<input
									type="number"
									id="height"
									value={height}
									onChange={(e) => setHeight(e.target.value)}
									min="25"
									max="300"
								/>
							</div>
							<div>
								<label htmlFor="weight">Weight (Pounds):</label>
								<input
									type="number"
									id="weight"
									value={weight}
									onChange={(e) => setWeight(e.target.value)}
									min="5"
									max="1000"
								/>
							</div>
						</div>
						<div>
							<div>
								<label htmlFor="background">
									Background (1000 Char Limit):
								</label>
								<textarea
									id="background"
									value={background}
									onChange={(e) =>
										setBackground(e.target.value)
									}
									maxLength="1000"
									className="background-text-area"
								/>
							</div>
						</div>
					</div>
					<div className="character-sheet-attribute">
						<div className="character-sheet-attribute-top">
							<p>
								Attribute Points Remaining:{" "}
								{totalAttributePointsRemaining}
							</p>
						</div>
						<div className="character-sheet-attribute-bottom">
							<div>
								<label htmlFor="strength">Strength:</label>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setStrength,
											strength,
											-1
										)
									}
								>
									-
								</button>
								<input
									type="number"
									id="strength"
									value={strength}
									readOnly
								/>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setStrength,
											strength,
											1
										)
									}
								>
									+
								</button>
							</div>
							<div>
								<label htmlFor="dexterity">Dexterity:</label>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setDexterity,
											dexterity,
											-1
										)
									}
								>
									-
								</button>
								<input
									type="number"
									id="dexterity"
									value={dexterity}
									readOnly
								/>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setDexterity,
											dexterity,
											1
										)
									}
								>
									+
								</button>
							</div>
							<div>
								<label htmlFor="constitution">
									Constitution:
								</label>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setConstitution,
											constitution,
											-1
										)
									}
								>
									-
								</button>
								<input
									type="number"
									id="constitution"
									value={constitution}
									readOnly
								/>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setConstitution,
											constitution,
											1
										)
									}
								>
									+
								</button>
							</div>
							<div>
								<label htmlFor="intelligence">
									Intelligence:
								</label>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setIntelligence,
											intelligence,
											-1
										)
									}
								>
									-
								</button>
								<input
									type="number"
									id="intelligence"
									value={intelligence}
									readOnly
								/>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setIntelligence,
											intelligence,
											1
										)
									}
								>
									+
								</button>
							</div>
							<div>
								<label htmlFor="wisdom">Wisdom:</label>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setWisdom,
											wisdom,
											-1
										)
									}
								>
									-
								</button>
								<input
									type="number"
									id="wisdom"
									value={wisdom}
									readOnly
								/>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setWisdom,
											wisdom,
											1
										)
									}
								>
									+
								</button>
							</div>
							<div>
								<label htmlFor="charisma">Charisma:</label>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setCharisma,
											charisma,
											-1
										)
									}
								>
									-
								</button>
								<input
									type="number"
									id="charisma"
									value={charisma}
									readOnly
								/>
								<button
									type="button"
									onClick={() =>
										handleAttributeChange(
											setCharisma,
											charisma,
											1
										)
									}
								>
									+
								</button>
							</div>
						</div>
					</div>
					<div></div>
					<div>
						<label htmlFor="primaryClass">Class:</label>
						<select
							id="primaryClass"
							value={primaryClass}
							onChange={handleClassChange}
						>
							<option value="">Select a Class</option>
							{classesArray.map((c) => (
								<option key={c} value={c}>
									{c}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="subClass">Subclass:</label>
						<select
							id="subClass"
							value={subclass}
							onChange={(e) => setSubclass(e.target.value)}
							disabled={!primaryClass}
						>
							<option value="">Select a Subclass</option>
							{primaryClass &&
								subclasses[primaryClass]?.map((sc) => (
									<option key={sc} value={sc}>
										{sc}
									</option>
								))}
						</select>
					</div>
					<div>
						<label htmlFor="races">Races:</label>
						<select
							id="races"
							value={races}
							onChange={(e) => setRaces(e.target.value)}
						>
							<option value="">Select a Race</option>
							{racesArray.map((r) => (
								<option key={r} value={r}>
									{r}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="subraces">Subraces:</label>
						<select
							id="subraces"
							value={subraces}
							onChange={(e) => setSubraces(e.target.value)}
							disabled={!races}
						>
							<option value="">Select a Race First</option>
							{races &&
								subracesObj[races]?.map((sr) => (
									<option key={sr} value={sr}>
										{sr}
									</option>
								))}
						</select>
					</div>
					<div>
						<label htmlFor="idealOne">Ideal One:</label>
						<select
							id="idealOne"
							value={idealOne}
							onChange={handleIdealOneChange}
						>
							<option value="">Select an Ideal</option>
							{idealsArray
								.filter((ideal) => ideal !== idealTwo)
								.map((ideal) => (
									<option key={ideal} value={ideal}>
										{ideal}
									</option>
								))}
						</select>
					</div>
					<div>
						<label htmlFor="idealTwo">
							Ideal Two (Not Required):
						</label>
						<select
							id="idealTwo"
							value={idealTwo}
							onChange={handleIdealTwoChange}
						>
							<option value="">Select an Ideal</option>
							{idealsArray
								.filter((ideal) => ideal !== idealOne)
								.map((ideal) => (
									<option key={ideal} value={ideal}>
										{ideal}
									</option>
								))}
						</select>
					</div>
					<div>
						<label htmlFor="bonds">Bonds:</label>
						<select
							id="bonds"
							value={bonds}
							onChange={(e) => setBonds(e.target.value)}
						>
							<option value="">Select a Bond</option>
							{bondsArray.map((bond) => (
								<option key={bond} value={bond}>
									{bond}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="flaws">Flaws:</label>
						<select
							id="flaws"
							value={flaws}
							onChange={(e) => setFlaws(e.target.value)}
						>
							{/* Add options here */}
						</select>
					</div>
					<div>
						<label htmlFor="languages">Languages:</label>
						<select
							id="languages"
							value={languages}
							onChange={(e) => setLanguages(e.target.value)}
						>
							{/* Add options here */}
						</select>
					</div>
					<div>
						<label htmlFor="alignments">Alignments:</label>
						<select
							id="alignments"
							value={alignments}
							onChange={(e) => setAlignments(e.target.value)}
						>
							{/* Add options here */}
						</select>
					</div>
					<button
						type="submit"
						className="character-sheet-submit-btn"
					>
						Save Character
					</button>
				</form>
			</div>
		</>
	);
};

export default CharacterSheet;
