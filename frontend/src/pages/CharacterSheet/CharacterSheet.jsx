import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components";

const CharacterSheet = () => {
	const [characterFirstName, setCharacterFirstName] = useState("");
	const [characterLastName, setCharacterLastName] = useState("");
	const [age, setAge] = useState(0);
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [background, setBackground] = useState("");
	const [idealOne, setIdealOne] = useState("");
	const [idealTwo, setIdealTwo] = useState("");
	const [bonds, setBonds] = useState("");
	const [races, setRaces] = useState("");
	const [subraces, setSubraces] = useState("");
	const [flaws, setFlaws] = useState("");
	const [languages, setLanguages] = useState("");
	const [alignments, setAlignments] = useState("");
	const [strength, setStrength] = useState(0);
	const [dexterity, setDexterity] = useState(0);
	const [constitution, setConstitution] = useState(0);
	const [intelligence, setIntelligence] = useState(0);
	const [wisdom, setWisdom] = useState(0);
	const [charisma, setCharisma] = useState(0);

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
							/>
						</div>
						<div>
							<label htmlFor="height">Height (Inches):</label>
							<input
								type="text"
								id="height"
								value={height}
								onChange={(e) => setHeight(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="weight">Weight (Pounds):</label>
							<input
								type="text"
								id="weight"
								value={weight}
								onChange={(e) => setWeight(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="background">Background:</label>
							<textarea
								id="background"
								value={background}
								onChange={(e) => setBackground(e.target.value)}
								maxLength="500"
							/>
						</div>
					</div>
					<div></div>
					<div></div>
					<div>
						<label htmlFor="idealOne">Ideal One:</label>
						<select
							id="idealOne"
							value={idealOne}
							onChange={(e) => setIdealOne(e.target.value)}
						>
							<option>1</option>
							<option>2</option>
						</select>
					</div>
					<div>
						<label htmlFor="idealTwo">Ideal Two:</label>
						<select
							id="idealTwo"
							value={idealTwo}
							onChange={(e) => setIdealTwo(e.target.value)}
						>
							{/* Add options here */}
						</select>
					</div>
					<div>
						<label htmlFor="bonds">Bonds:</label>
						<select
							id="bonds"
							value={bonds}
							onChange={(e) => setBonds(e.target.value)}
						>
							{/* Add options here */}
						</select>
					</div>
					<div>
						<label htmlFor="races">Races:</label>
						<select
							id="races"
							value={races}
							onChange={(e) => setRaces(e.target.value)}
						>
							{/* Add options here */}
						</select>
					</div>
					<div>
						<label htmlFor="subraces">Subraces:</label>
						<select
							id="subraces"
							value={subraces}
							onChange={(e) => setSubraces(e.target.value)}
						>
							{/* Add options here */}
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
					<div>
						<label htmlFor="strength">Strength:</label>
						<input
							type="number"
							id="strength"
							value={strength}
							onChange={(e) => setStrength(e.target.value)}
							min="1"
							max="20"
						/>
					</div>
					<div>
						<label htmlFor="dexterity">Dexterity:</label>
						<input
							type="number"
							id="dexterity"
							value={dexterity}
							onChange={(e) => setDexterity(e.target.value)}
							min="1"
							max="20"
						/>
					</div>
					<div>
						<label htmlFor="constitution">Constitution:</label>
						<input
							type="number"
							id="constitution"
							value={constitution}
							onChange={(e) => setConstitution(e.target.value)}
							min="1"
							max="20"
						/>
					</div>
					<div>
						<label htmlFor="intelligence">Intelligence:</label>
						<input
							type="number"
							id="intelligence"
							value={intelligence}
							onChange={(e) => setIntelligence(e.target.value)}
							min="1"
							max="20"
						/>
					</div>
					<div>
						<label htmlFor="wisdom">Wisdom:</label>
						<input
							type="number"
							id="wisdom"
							value={wisdom}
							onChange={(e) => setWisdom(e.target.value)}
							min="1"
							max="20"
						/>
					</div>
					<div>
						<label htmlFor="charisma">Charisma:</label>
						<input
							type="number"
							id="charisma"
							value={charisma}
							onChange={(e) => setCharisma(e.target.value)}
							min="1"
							max="20"
						/>
					</div>
					<button type="submit">Save Character</button>
				</form>
			</div>
		</>
	);
};

export default CharacterSheet;
