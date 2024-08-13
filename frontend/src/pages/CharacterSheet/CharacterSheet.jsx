import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import {
	classesArray,
	classDesc,
	subclasses,
	subclassDesc,
	skillsObj,
	maxSkills,
	skillsDesc,
	raceArray,
	raceDesc,
	subracesObj,
	subracesDesc,
	alignmentArray,
	alignmentDesc,
	backgroundsArray,
	backgroundDesc,
	exoticLanguageArray,
	exoticLanguageDesc,
	sexArray,
	skinArray,
	hairArray,
	eyesArray,
} from "./option.js";

const maxAttributePoints = 20;

const CharacterSheet = () => {
	const [characterFirstName, setCharacterFirstName] = useState("");
	const [characterLastName, setCharacterLastName] = useState("");
	const [age, setAge] = useState(1);
	const [height, setHeight] = useState(10);
	const [weight, setWeight] = useState(50);
	const [sex, setSex] = useState("");
	const [skin, setSkin] = useState("");
	const [backstory, setBackstory] = useState("");
	const [hair, setHair] = useState("");
	const [eyes, setEyes] = useState("");
	const [strength, setStrength] = useState(1);
	const [dexterity, setDexterity] = useState(1);
	const [constitution, setConstitution] = useState(1);
	const [intelligence, setIntelligence] = useState(1);
	const [wisdom, setWisdom] = useState(1);
	const [charisma, setCharisma] = useState(1);
	const [totalAttributePointsRemaining, setTotalAttributePointsRemaining] =
		useState(maxAttributePoints - 6);
	const [primaryClass, setPrimaryClass] = useState("");
	const [subclass, setSubclass] = useState("");
	const [skills, setSkills] = useState(["", "", "", ""]);
	const maxSkillCount = maxSkills[primaryClass] || 2;
	const [race, setRace] = useState("");
	const [subraces, setSubraces] = useState("");
	const [background, setBackground] = useState("");
	const [exoticLanguage, setExoticLanguage] = useState("");
	const [alignment, setAlignment] = useState("");
	const [ideal, setIdeal] = useState("");
	const [bond, setBond] = useState("");
	const [flaw, setFlaw] = useState("");
	const [personalityTraitOne, setPersonalityTraitOne] = useState("");
	const [personalityTraitTwo, setPersonalityTraitTwo] = useState("");

	const navigate = useNavigate();

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
		setSkills(["", "", "", ""]); // Reset skills if the class changes
	};

	const handleSkillChange = (index, value) => {
		const newSkills = [...skills];
		newSkills[index] = value;
		setSkills(newSkills);
	};

	// Filter out already selected skills for the dropdown options
	const availableSkills = (index) =>
		skillsObj[primaryClass]?.filter(
			(s) => !skills.includes(s) || s === skills[index]
		) || [];

	const handleRaceChange = (e) => {
		setRace(e.target.value);

		// Reset subraces when a new race is selected
		setSubraces("");

		// Check if the selected race has subraces
		if (!subracesObj[e.target.value]) {
			// Disable the subraces dropdown if no subraces are found
			document.getElementById("subraces").disabled = true;
		} else {
			// Enable the subraces dropdown if subraces are found
			document.getElementById("subraces").disabled = false;
		}
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			//const res = await login({ ... }).unwrap();
			navigate("/home");
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
									First Name:{" "}
									{!characterFirstName && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<input
									type="text"
									id="characterFirstName"
									value={characterFirstName}
									onChange={(e) =>
										setCharacterFirstName(e.target.value)
									}
									required
									maxLength={30}
								/>
							</div>
							<div>
								<label htmlFor="characterLastName">
									Last Name:{" "}
									{!characterLastName && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<input
									type="text"
									id="characterLastName"
									value={characterLastName}
									onChange={(e) =>
										setCharacterLastName(e.target.value)
									}
									required
									maxLength={30}
								/>
							</div>
							<div>
								<label htmlFor="age">
									Age (Years):{" "}
									{!age && <sup className="red-star">*</sup>}
								</label>
								<input
									type="number"
									id="age"
									value={age}
									onChange={(e) => setAge(e.target.value)}
									min={1}
									max={10000}
								/>
							</div>
							<div>
								<label htmlFor="height">
									Height (Inches):{" "}
									{!height && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<input
									type="number"
									id="height"
									value={height}
									onChange={(e) => setHeight(e.target.value)}
									min={25}
									max={300}
								/>
							</div>
							<div>
								<label htmlFor="weight">
									Weight (Pounds):{" "}
									{!weight && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<input
									type="number"
									id="weight"
									value={weight}
									onChange={(e) => setWeight(e.target.value)}
									min={50}
									max={500}
								/>
							</div>
							<div>
								<label htmlFor="sex">
									Sex:{" "}
									{!sex && <sup className="red-star">*</sup>}
								</label>
								<select
									id="sex"
									value={sex}
									onChange={(e) => setSex(e.target.value)}
									required
								>
									<option value="">Select a Sex</option>
									{sexArray.map((s) => (
										<option key={s} value={s}>
											{s}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="skin">
									Skin Color:{" "}
									{!skin && <sup className="red-star">*</sup>}
								</label>
								<select
									id="skin"
									value={skin}
									onChange={(e) => setSkin(e.target.value)}
									required
								>
									<option value="">
										Select a Skin Color
									</option>
									{skinArray.map((s) => (
										<option key={s} value={s}>
											{s}
										</option>
									))}
								</select>
							</div>
						</div>
						<div>
							<div>
								<label htmlFor="backstory">
									Background (1000 Char Limit):{" "}
									{!backstory && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<textarea
									id="backstory"
									value={backstory}
									onChange={(e) =>
										setBackstory(e.target.value)
									}
									maxLength="1000"
									className="backstory-text-area"
									required
								/>
							</div>
							<div>
								<label htmlFor="hair">
									Hair Color:{" "}
									{!hair && <sup className="red-star">*</sup>}
								</label>
								<select
									id="hair"
									value={hair}
									onChange={(e) => setHair(e.target.value)}
									required
								>
									<option value="">
										Select a Hair Color
									</option>
									{hairArray.map((h) => (
										<option key={h} value={h}>
											{h}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="eyes">
									Eye Color:{" "}
									{!eyes && <sup className="red-star">*</sup>}
								</label>
								<select
									id="eyes"
									value={eyes}
									onChange={(e) => setEyes(e.target.value)}
									required
								>
									<option value="">
										Select an Eye Color
									</option>
									{eyesArray.map((e) => (
										<option key={e} value={e}>
											{e}
										</option>
									))}
								</select>
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
					<div className="character-sheet-bottom">
						<div className="character-sheet-bottom-left">
							<div>
								<label htmlFor="primaryClass">
									Classes:{" "}
									{!primaryClass && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<select
									id="primaryClass"
									value={primaryClass}
									onChange={handleClassChange}
									required
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
								<label htmlFor="subclass">
									Subclasses:{" "}
									{!subclass && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<select
									id="subclass"
									value={subclass}
									onChange={(e) =>
										setSubclass(e.target.value)
									}
									disabled={!primaryClass}
									required
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
							{Array.from({ length: maxSkillCount }).map(
								(_, index) => (
									<div key={index}>
										<label htmlFor={`skill${index + 1}`}>
											Skill {index + 1}:{" "}
											{!skills[index] && (
												<sup className="red-star">
													*
												</sup>
											)}
										</label>
										<select
											id={`skill${index + 1}`}
											value={skills[index]}
											onChange={(e) =>
												handleSkillChange(
													index,
													e.target.value
												)
											}
											disabled={!primaryClass}
											required
										>
											<option value="">
												{primaryClass
													? `Select a Skill`
													: `Select a Class`}
											</option>
											{availableSkills(index).map((s) => (
												<option key={s} value={s}>
													{s}
												</option>
											))}
										</select>
									</div>
								)
							)}
							<div>
								<label htmlFor="race">
									Races:{" "}
									{!race && <sup className="red-star">*</sup>}
								</label>
								<select
									id="race"
									value={race}
									onChange={handleRaceChange}
									required
								>
									<option value="">Select a Race</option>
									{raceArray.map((r) => (
										<option key={r} value={r}>
											{r}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="subraces">
									Subraces:{" "}
									{subracesObj[race] && !subraces && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<select
									id="subraces"
									value={subraces}
									onChange={(e) =>
										setSubraces(e.target.value)
									}
									disabled={!race || !subracesObj[race]}
									required={subracesObj[race] && !subraces}
								>
									{race ? (
										subracesObj[race] ? (
											<>
												<option value="">
													Select a Subrace
												</option>
												{subracesObj[race].map((sr) => (
													<option key={sr} value={sr}>
														{sr}
													</option>
												))}
											</>
										) : (
											<option value="">
												No subraces available for this
												race
											</option>
										)
									) : (
										<option value="">Select a Race</option>
									)}
								</select>
							</div>
							<div>
								<label htmlFor="background">
									Backgrounds:{" "}
									{!background && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<select
									id="background"
									value={background}
									onChange={(e) =>
										setBackground(e.target.value)
									}
								>
									<option value="">
										Select a Background
									</option>
									{backgroundsArray.map((b) => (
										<option key={b} value={b}>
											{b}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="exoticLanguage">
									Exotic Languages:{" "}
									{!exoticLanguage && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<select
									id="exoticLanguage"
									value={exoticLanguage}
									onChange={(e) =>
										setExoticLanguage(e.target.value)
									}
								>
									<option value="">
										Select an Exotic Language
									</option>
									{exoticLanguageArray.map((e) => (
										<option key={e} value={e}>
											{e}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="alignment">
									Alignments:{" "}
									{!alignment && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<select
									id="alignment"
									value={alignment}
									onChange={(e) =>
										setAlignment(e.target.value)
									}
								>
									<option value="">
										Select an Alignment
									</option>
									{alignmentArray.map((a) => (
										<option key={a} value={a}>
											{a}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="ideal">
									Ideal:{" "}
									<sub
										style={{
											verticalAlign: "sub",
											fontSize: "0.8rem",
											cursor: "pointer",
										}}
										onClick={() =>
											window.scrollTo(
												0,
												document.body.scrollHeight
											)
										}
									>
										1
									</sub>{" "}
									{!ideal && (
										<sup className="red-star">*</sup>
									)}
								</label>
								<textarea
									id="ideal"
									value={ideal}
									onChange={(e) => setIdeal(e.target.value)}
									maxLength="100"
									style={{ height: "8rem", width: "100%" }}
								/>
							</div>
							<div>
								<label htmlFor="bond">
									Bond:{" "}
									<sub
										style={{
											verticalAlign: "sub",
											fontSize: "0.8rem",
											cursor: "pointer",
										}}
										onClick={() =>
											window.scrollTo(
												0,
												document.body.scrollHeight
											)
										}
									>
										2
									</sub>{" "}
									{!bond && <sup className="red-star">*</sup>}
								</label>
								<textarea
									id="bond"
									value={bond}
									onChange={(e) => setBond(e.target.value)}
									maxLength="100"
									style={{ height: "8rem", width: "100%" }}
								/>
							</div>
							<div>
								<label htmlFor="flaw">
									Flaw:{" "}
									<sub
										style={{
											verticalAlign: "sub",
											fontSize: "0.8rem",
											cursor: "pointer",
										}}
										onClick={() =>
											window.scrollTo(
												0,
												document.body.scrollHeight
											)
										}
									>
										3
									</sub>{" "}
									{!flaw && <sup className="red-star">*</sup>}
								</label>
								<textarea
									id="flaw"
									value={flaw}
									onChange={(e) => setFlaw(e.target.value)}
									maxLength="100"
									style={{ height: "8rem", width: "100%" }}
								/>
							</div>
							<div>
								<label htmlFor="personalityTraitOne">
									First Personality Trait:{" "}
									<sub
										style={{
											verticalAlign: "sub",
											fontSize: "0.8rem",
											cursor: "pointer",
										}}
										onClick={() =>
											window.scrollTo(
												0,
												document.body.scrollHeight
											)
										}
									>
										4
									</sub>{" "}
									{!personalityTraitOne && <sup className="red-star">*</sup>}
								</label>
								<textarea
									id="personalityTraitOne"
									value={personalityTraitOne}
									onChange={(e) => setPersonalityTraitOne(e.target.value)}
									maxLength="50"
									style={{ height: "6rem", width: "100%" }}
								/>
							</div>
							<div>
								<label htmlFor="personalityTraitTwo">
									Second Personality Trait:{" "}
									<sub
										style={{
											verticalAlign: "sub",
											fontSize: "0.8rem",
											cursor: "pointer",
										}}
										onClick={() =>
											window.scrollTo(
												0,
												document.body.scrollHeight
											)
										}
									>
										4
									</sub>{" "}
									{!personalityTraitTwo && <sup className="red-star">*</sup>}
								</label>
								<textarea
									id="personalityTraitTwo"
									value={personalityTraitTwo}
									onChange={(e) => setPersonalityTraitTwo(e.target.value)}
									maxLength="50"
									style={{ height: "6rem", width: "100%" }}
								/>
							</div>
						</div>
						<div className="character-sheet-bottom-right">
							<h6>Class</h6>
							<p>
								{primaryClass
									? `${primaryClass} - ${classDesc[primaryClass]}`
									: `Select a class to populate more information here.`}
							</p>
							<h6>Subclass</h6>
							<p>
								{subclass
									? `${subclass} - ${
											subclassDesc[primaryClass][
												subclass.replaceAll(" ", "_")
											]
									  }`
									: `Select a class and a subclass to populate more information here.`}
							</p>
							<h6>Skills</h6>
							{Array.from({ length: maxSkillCount }).map(
								(_, index) => (
									<p key={index}>
										{skills[index] &&
											`${skills[index]} - ${
												skillsDesc[
													skills[index].replaceAll(
														" ",
														"_"
													)
												]
											}`}
									</p>
								)
							)}
							{!skills[0] &&
								!skills[1] &&
								!skills[2] &&
								!skills[3] && (
									<p>
										Select a class and a skill to populate
										more information here.
									</p>
								)}
							<h6>Race</h6>
							<p>
								{race
									? `${race} - ${
											raceDesc[
												race
													.replaceAll("-", "0")
													.replaceAll(" ", "_")
											]
									  }`
									: `Select a race to populate more information here.`}
							</p>
							<h6>Subrace</h6>
							<p>
								{race
									? subracesObj[race]
										? subraces
											? `${subraces} - ${
													subracesDesc[
														race.replaceAll(
															" ",
															"_"
														)
													][
														subraces.replaceAll(
															" ",
															"_"
														)
													]
											  }`
											: `Select a subrace to populate more information here.`
										: `This race has no subraces.`
									: `Select a race to determine if it has subraces.`}
							</p>
							<h6>Background</h6>
							<p>
								{background
									? `${background} - ${
											backgroundDesc[
												background.replaceAll(" ", "_")
											]
									  }`
									: `Select a background to populate more information here.`}
							</p>
							<h6>Exotic Language</h6>
							<p>
								{exoticLanguage ? (
									<>
										{exoticLanguage}:
										<p>
											- Typical Speakers:{" "}
											{
												exoticLanguageDesc[
													exoticLanguage.replaceAll(
														" ",
														"_"
													)
												].typicalSpeakers
											}
										</p>
										<p>
											- Script:{" "}
											{
												exoticLanguageDesc[
													exoticLanguage.replaceAll(
														" ",
														"_"
													)
												].script
											}
										</p>
									</>
								) : (
									`Select and exotic language to populate more information here.`
								)}
							</p>
							<h6>Alignment</h6>
							<p>
								{alignment
									? `${alignment} - ${
											alignmentDesc[
												alignment.replaceAll(" ", "_")
											]
									  }`
									: `Select an alignment to populate more information here.`}
							</p>
						</div>
					</div>
					<button
						type="submit"
						className="character-sheet-submit-btn"
					>
						Save Character
					</button>
					<div style={{ marginTop: "1rem" }}>
						<p>
							1. Your ideals are the things that you believe in
							most strongly, the fundamental moral and ethical
							principles that com pel you to act as you do. Ideals
							encom pass everything from your life goals to your
							core belief system. Ideals may answer the following
							questions: What are the principles that you will
							never betray? What would prompt you to make
							sacrifices? What drives you to act and guides your
							goals and ambitions? What is the single most
							important thing you strive for? (100 char limit)
						</p>
						<p>
							2. Bonds represent a character’s connections to
							people, places, and events in the world. Bonds may
							answer the following questions: Whom do you care
							most about? To what place do you feel a special
							connection? What is your most treasured possession?
							(100 char limit)
						</p>
						<p>3.</p>
						<p>4.</p>
					</div>
				</form>
			</div>
		</>
	);
};

export default CharacterSheet;
