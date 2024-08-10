import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components";

const maxAttributePoints = 20;

const CharacterSheet = () => {
	const [characterFirstName, setCharacterFirstName] = useState("");
	const [characterLastName, setCharacterLastName] = useState("");
	const [age, setAge] = useState(1);
	const [height, setHeight] = useState(10);
	const [weight, setWeight] = useState(5);
	const [background, setBackground] = useState("");
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
						<label htmlFor="idealTwo">
							Ideal Two (Not Required):
						</label>
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
