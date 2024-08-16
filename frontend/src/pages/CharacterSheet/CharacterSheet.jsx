import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, SliderSwitch } from "../../components";
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
	sexArray,
	skinArray,
	hairArray,
	eyesArray,
} from "./option.js";
import { useCreateCharacterSheetMutation } from "../../slices/characterSheet/characterSheetApiSlice.js";
import { ClipLoader } from "react-spinners";
import { classImages } from "./image.js";
import selectClassImage from "../../assets/classes/select-class.jpg";

const baseAbilityValue = 8;
const costTable = [0, 1, 2, 3, 4, 5, 7, 9]; // Costs for scores 8-15

const CharacterSheet = () => {
	const [isHomebrew, setIsHomebrew] = useState(false);
	const [characterFirstName, setCharacterFirstName] = useState("");
	const [characterLastName, setCharacterLastName] = useState("");
	const [age, setAge] = useState(1);
	const [height, setHeight] = useState(25);
	const [weight, setWeight] = useState(50);
	const [sex, setSex] = useState("");
	const [skin, setSkin] = useState("");
	const [backstory, setBackstory] = useState("");
	const [hair, setHair] = useState("");
	const [eyes, setEyes] = useState("");
	const [isPointBuy, setIsPointBuy] = useState(true);
	const [strength, setStrength] = useState(baseAbilityValue);
	const [strengthRoll, setStrengthRoll] = useState(0);
	const [isStrengthRolled, setIsStrengthRolled] = useState(false);
	const [dexterity, setDexterity] = useState(baseAbilityValue);
	const [dexterityRoll, setDexterityRoll] = useState(0);
	const [isDexterityRolled, setIsDexterityRolled] = useState(false);
	const [constitution, setConstitution] = useState(baseAbilityValue);
	const [constitutionRoll, setConstitutionRoll] = useState(0);
	const [isConstitutionRolled, setIsConstitutionRolled] = useState(false);
	const [intelligence, setIntelligence] = useState(baseAbilityValue);
	const [intelligenceRoll, setIntelligenceRoll] = useState(0);
	const [isIntelligenceRolled, setIsIntelligenceRolled] = useState(false);
	const [wisdom, setWisdom] = useState(baseAbilityValue);
	const [wisdomRoll, setWisdomRoll] = useState(0);
	const [isWisdomRolled, setIsWisdomRolled] = useState(false);
	const [charisma, setCharisma] = useState(baseAbilityValue);
	const [charismaRoll, setCharismaRoll] = useState(0);
	const [isCharismaRolled, setIsCharismaRolled] = useState(false);
	const [maxAbilityPoints, setMaxAbilityPoints] = useState(27);
	const [totalAbilityPointsRemaining, setTotalAbilityPointsRemaining] =
		useState(maxAbilityPoints - 6);
	const [primaryClass, setPrimaryClass] = useState("");
	const [subclass, setSubclass] = useState("");
	const [skills, setSkills] = useState(["", "", "", ""]);
	const maxSkillCount = maxSkills[primaryClass] || 2;
	const [race, setRace] = useState("");
	const [subraces, setSubraces] = useState("");
	const [background, setBackground] = useState("");
	const [alignment, setAlignment] = useState("");
	const [ideal, setIdeal] = useState("");
	const [bond, setBond] = useState("");
	const [flaw, setFlaw] = useState("");
	const [personalityTraits, setPersonalityTraits] = useState(["", ""]);

	const navigate = useNavigate();

	const [create, { isCreateLoading }] = useCreateCharacterSheetMutation();

	const calculateTotalPointsSpent = () => {
		return (
			costTable[strength - baseAbilityValue] +
			costTable[dexterity - baseAbilityValue] +
			costTable[constitution - baseAbilityValue] +
			costTable[intelligence - baseAbilityValue] +
			costTable[wisdom - baseAbilityValue] +
			costTable[charisma - baseAbilityValue]
		);
	};

	useEffect(() => {
		if (isPointBuy) {
			const pointsSpent = calculateTotalPointsSpent();
			setTotalAbilityPointsRemaining(maxAbilityPoints - pointsSpent);
		} else {
			setTotalAbilityPointsRemaining(0);
		}
	}, [
		strength,
		dexterity,
		constitution,
		intelligence,
		wisdom,
		charisma,
		isPointBuy,
	]);

	const toggleHomebrew = (e) => {
		setIsHomebrew(e.target.checked);
		setPrimaryClass("");
		setSubclass("");
		setSkills(["", "", "", ""]);
		setRace("");
		setSubraces("");
		setBackground("");
		setAlignment("");
		setIdeal("");
		setBond("");
		setFlaw("");
		setPersonalityTraits(["", ""]);
	};

	const handleNumberChange = (e, setValue, min, max) => {
		// Allow empty input or leading zeros
		const inputValue = e.target.value;
		if (
			inputValue === "" ||
			inputValue.match(/^0+\d*$/) ||
			inputValue.match(/^\d+$/)
		) {
			setValue(inputValue);
		}
	};

	const enforceMinMax = (e, setValue, min, max) => {
		let value = Number(e.target.value);

		// If input is empty, keep it as empty, otherwise enforce limits
		if (e.target.value === "") {
			setValue("");
		} else {
			if (value < min) value = min;
			if (value > max) value = max;
			setValue(value.toString());
		}
	};

	const toggleAbility = (e) => {
		setIsPointBuy(e.target.checked);
		setStrength(isPointBuy ? strengthRoll || 0 : baseAbilityValue);
		setDexterity(isPointBuy ? 0 : baseAbilityValue);
		setConstitution(isPointBuy ? 0 : baseAbilityValue);
		setIntelligence(isPointBuy ? 0 : baseAbilityValue);
		setWisdom(isPointBuy ? 0 : baseAbilityValue);
		setCharisma(isPointBuy ? 0 : baseAbilityValue);
	};

	const handleAbilityBuyChange = (abilitySetter, currentValue, change) => {
		if (isPointBuy) {
			const newValue = currentValue + change;

			// Ensure value stays within range 8-15 and points don't exceed max
			if (newValue < baseAbilityValue || newValue > 15) return;

			const pointsSpent = calculateTotalPointsSpent();
			const costDifference =
				costTable[newValue - baseAbilityValue] -
				costTable[currentValue - baseAbilityValue];

			if (costDifference > totalAbilityPointsRemaining) return;

			abilitySetter(newValue);
		}
	};

	const roll4d6DropLowest = (setIsAbilityRolled, setIsAbility) => {
		const rolls = [];
		for (let i = 0; i < 4; i++) {
			rolls.push(Math.floor(Math.random() * 6) + 1);
		}
		// Sort the rolls and drop the lowest one
		rolls.sort((a, b) => a - b);
		rolls.shift(); // Remove the lowest roll
		setIsAbilityRolled(true);
		setIsAbility(rolls.reduce((sum, roll) => sum + roll, 0));
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

	const handleSubLabelClick = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth",
		});
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		if (totalAbilityPointsRemaining) {
			// Make this a toastify msg
			console.error("You must spend all of your ability points.");
			return;
		}

		if (isPointBuy) {
			if (
				!strengthRoll ||
				!dexterityRoll ||
				!constitutionRoll ||
				!intelligenceRoll ||
				!wisdomRoll ||
				!charismaRoll
			)
				console.error("You must roll for all of your ability points.");
			return;
		}

		const filteredSkills = skills.filter((skill) => skill.trim() !== "");

		// Prepare the request payload
		const payload = {
			characterFirstName,
			characterLastName,
			ideals: ideal,
			bonds: bond,
			flaws: flaw,
			backgrounds: background,
			primaryClass,
			subclass,
			skills: filteredSkills,
			race,
			alignment,
			personalityTraits,
			age,
			height,
			weight,
			sex,
			skin,
			hair,
			eyes,
			backstory,
		};

		// Only include subrace if it's not an empty string
		if (subraces.trim() !== "") {
			payload.subrace = subraces;
		}

		if (isPointBuy) {
			payload.strength = strength;
			payload.dexterity = dexterity;
			payload.constitution = constitution;
			payload.intelligence = intelligence;
			payload.wisdom = wisdom;
			payload.charisma = charisma;
		} else {
			payload.strength = strengthRoll;
			payload.dexterity = dexterityRoll;
			payload.constitution = constitutionRoll;
			payload.intelligence = intelligenceRoll;
			payload.wisdom = wisdomRoll;
			payload.charisma = charismaRoll;
		}

		try {
			const res = await create(payload).unwrap();
			if (res) {
				navigate("/home");
			}
		} catch (err) {
			console.error(err?.data?.message || err.error);
		}
	};

	return (
		<>
			<Header />
			<div className="character-sheet-background">
				<div className="character-sheet-container">
					<form onSubmit={submitHandler}>
						<div className="character-sheet-top">
							<div>
								<div>
									<SliderSwitch
										label="Include Homebrew?"
										subLabel="1"
										subLabelAction={handleSubLabelClick}
										checked={isHomebrew}
										onChange={toggleHomebrew}
										id="homebrew-toggle"
									/>
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
											setCharacterFirstName(
												e.target.value
											)
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
										{!age && (
											<sup className="red-star">*</sup>
										)}
									</label>
									<input
										type="number"
										id="age"
										value={age}
										onChange={(e) =>
											handleNumberChange(
												e,
												setAge,
												1,
												300
											)
										}
										onBlur={(e) =>
											enforceMinMax(e, setAge, 1, 300)
										}
										min={1}
										max={300}
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
										onChange={(e) =>
											handleNumberChange(
												e,
												setHeight,
												25,
												300
											)
										}
										onBlur={(e) =>
											enforceMinMax(e, setHeight, 25, 300)
										}
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
										onChange={(e) =>
											handleNumberChange(
												e,
												setWeight,
												50,
												500
											)
										}
										onBlur={(e) =>
											enforceMinMax(e, setWeight, 50, 500)
										}
									/>
								</div>
								<div>
									<label htmlFor="sex">
										Sex:{" "}
										{!sex && (
											<sup className="red-star">*</sup>
										)}
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
							</div>
							<div className="character-sheet-top-right-container">
								<div>
									<label htmlFor="backstory">
										Backstory (1000 Char Limit):{" "}
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
									<label htmlFor="skin">
										Skin Color:{" "}
										{!skin && (
											<sup className="red-star">*</sup>
										)}
									</label>
									<select
										id="skin"
										value={skin}
										onChange={(e) =>
											setSkin(e.target.value)
										}
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
								<div>
									<label htmlFor="hair">
										Hair Color:{" "}
										{!hair && (
											<sup className="red-star">*</sup>
										)}
									</label>
									<select
										id="hair"
										value={hair}
										onChange={(e) =>
											setHair(e.target.value)
										}
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
										{!eyes && (
											<sup className="red-star">*</sup>
										)}
									</label>
									<select
										id="eyes"
										value={eyes}
										onChange={(e) =>
											setEyes(e.target.value)
										}
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
						<div className="character-sheet-ability">
							<div className="character-sheet-ability-top">
								<div>
									<SliderSwitch
										label="Purchase Ability Score?"
										subLabel="2"
										subLabelAction={handleSubLabelClick}
										checked={isPointBuy}
										onChange={toggleAbility}
										id="ability-toggle"
									/>
								</div>
								{isPointBuy && (
									<h6>
										Ability Points Remaining:{" "}
										{totalAbilityPointsRemaining}
									</h6>
								)}
							</div>
							<div className="character-sheet-ability-bottom">
								<div>
									<label htmlFor="strength">Strength:</label>
									{isPointBuy ? (
										<>
											<button
												type="button"
												onClick={() =>
													handleAbilityBuyChange(
														setStrength,
														strength,
														-1
													)
												}
												disabled={
													strength <=
														baseAbilityValue ||
													!isPointBuy
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
													handleAbilityBuyChange(
														setStrength,
														strength,
														1
													)
												}
												disabled={
													totalAbilityPointsRemaining ===
														0 ||
													strength >= 15 ||
													(strength >= 13 &&
														totalAbilityPointsRemaining <=
															1) ||
													!isPointBuy
												}
											>
												+
											</button>
										</>
									) : (
										<>
											<button
												disabled={isStrengthRolled}
												type="button"
												onClick={() =>
													roll4d6DropLowest(
														setIsStrengthRolled,
														setStrengthRoll
													)
												}
											>
												4d6
											</button>
											<input
												type="number"
												id="strength"
												value={strengthRoll}
												readOnly
											/>
										</>
									)}
								</div>
								<div>
									<label htmlFor="dexterity">
										Dexterity:
									</label>
									{isPointBuy ? (
										<>
											<button
												type="button"
												onClick={() =>
													handleAbilityBuyChange(
														setDexterity,
														dexterity,
														-1
													)
												}
												disabled={
													dexterity <=
														baseAbilityValue ||
													!isPointBuy
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
													handleAbilityBuyChange(
														setDexterity,
														dexterity,
														1
													)
												}
												disabled={
													totalAbilityPointsRemaining ===
														0 ||
													dexterity >= 15 ||
													(dexterity >= 13 &&
														totalAbilityPointsRemaining <=
															1) ||
													!isPointBuy
												}
											>
												+
											</button>
										</>
									) : (
										<>
											<button
												disabled={isDexterityRolled}
												type="button"
												onClick={() =>
													roll4d6DropLowest(
														setIsDexterityRolled,
														setDexterityRoll
													)
												}
											>
												4d6
											</button>
											<input
												type="number"
												id="dexterity"
												value={dexterityRoll}
												readOnly
											/>
										</>
									)}
								</div>
								<div>
									<label htmlFor="constitution">
										Constitution:
									</label>
									{isPointBuy ? (
										<>
											<button
												type="button"
												onClick={() =>
													handleAbilityBuyChange(
														setConstitution,
														constitution,
														-1
													)
												}
												disabled={
													constitution <=
														baseAbilityValue ||
													!isPointBuy
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
													handleAbilityBuyChange(
														setConstitution,
														constitution,
														1
													)
												}
												disabled={
													totalAbilityPointsRemaining ===
														0 ||
													constitution >= 15 ||
													(constitution >= 13 &&
														totalAbilityPointsRemaining <=
															1) ||
													!isPointBuy
												}
											>
												+
											</button>
										</>
									) : (
										<>
											<button
												disabled={isConstitutionRolled}
												type="button"
												onClick={() =>
													roll4d6DropLowest(
														setIsConstitutionRolled,
														setConstitutionRoll
													)
												}
											>
												4d6
											</button>
											<input
												type="number"
												id="constitution"
												value={constitutionRoll}
												readOnly
											/>
										</>
									)}
								</div>
								<div>
									<label htmlFor="intelligence">
										Intelligence:
									</label>
									{isPointBuy ? (
										<>
											<button
												type="button"
												onClick={() =>
													handleAbilityBuyChange(
														setIntelligence,
														intelligence,
														-1
													)
												}
												disabled={
													intelligence <=
														baseAbilityValue ||
													!isPointBuy
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
													handleAbilityBuyChange(
														setIntelligence,
														intelligence,
														1
													)
												}
												disabled={
													totalAbilityPointsRemaining ===
														0 ||
													intelligence >= 15 ||
													(intelligence >= 13 &&
														totalAbilityPointsRemaining <=
															1) ||
													!isPointBuy
												}
											>
												+
											</button>
										</>
									) : (
										<>
											<button
												disabled={isIntelligenceRolled}
												type="button"
												onClick={() =>
													roll4d6DropLowest(
														setIsIntelligenceRolled,
														setIntelligenceRoll
													)
												}
											>
												4d6
											</button>
											<input
												type="number"
												id="intelligence"
												value={intelligenceRoll}
												readOnly
											/>
										</>
									)}
								</div>
								<div>
									<label htmlFor="wisdom">Wisdom:</label>
									{isPointBuy ? (
										<>
											<button
												type="button"
												onClick={() =>
													handleAbilityBuyChange(
														setWisdom,
														wisdom,
														-1
													)
												}
												disabled={
													wisdom <=
														baseAbilityValue ||
													!isPointBuy
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
													handleAbilityBuyChange(
														setWisdom,
														wisdom,
														1
													)
												}
												disabled={
													totalAbilityPointsRemaining ===
														0 ||
													wisdom >= 15 ||
													(wisdom >= 13 &&
														totalAbilityPointsRemaining <=
															1) ||
													!isPointBuy
												}
											>
												+
											</button>
										</>
									) : (
										<>
											<button
												disabled={isWisdomRolled}
												type="button"
												onClick={() =>
													roll4d6DropLowest(
														setIsWisdomRolled,
														setWisdomRoll
													)
												}
											>
												4d6
											</button>
											<input
												type="number"
												id="wisdom"
												value={wisdomRoll}
												readOnly
											/>
										</>
									)}
								</div>
								<div>
									<label htmlFor="charisma">Charisma:</label>
									{isPointBuy ? (
										<>
											<button
												type="button"
												onClick={() =>
													handleAbilityBuyChange(
														setCharisma,
														charisma,
														-1
													)
												}
												disabled={
													charisma <=
														baseAbilityValue ||
													!isPointBuy
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
													handleAbilityBuyChange(
														setCharisma,
														charisma,
														1
													)
												}
												disabled={
													totalAbilityPointsRemaining ===
														0 ||
													charisma >= 15 ||
													(charisma >= 13 &&
														totalAbilityPointsRemaining <=
															1) ||
													!isPointBuy
												}
											>
												+
											</button>
										</>
									) : (
										<>
											<button
												disabled={isCharismaRolled}
												type="button"
												onClick={() =>
													roll4d6DropLowest(
														setIsCharismaRolled,
														setCharismaRoll
													)
												}
											>
												4d6
											</button>
											<input
												type="number"
												id="charisma"
												value={charismaRoll}
												readOnly
											/>
										</>
									)}
								</div>
							</div>
						</div>
						<div>Ability Modifiers...</div>
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
										<option value="">
											Select a Subclass
										</option>
										{primaryClass &&
											subclasses[primaryClass]?.map(
												(sc) => (
													<option key={sc} value={sc}>
														{sc}
													</option>
												)
											)}
									</select>
								</div>
								{Array.from({ length: maxSkillCount }).map(
									(_, index) => (
										<div key={index}>
											<label
												htmlFor={`skill${index + 1}`}
											>
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
												{availableSkills(index).map(
													(s) => (
														<option
															key={s}
															value={s}
														>
															{s}
														</option>
													)
												)}
											</select>
										</div>
									)
								)}
								<div>
									<label htmlFor="race">
										Races:{" "}
										{!race && (
											<sup className="red-star">*</sup>
										)}
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
										required={
											subracesObj[race] && !subraces
										}
									>
										{race ? (
											subracesObj[race] ? (
												<>
													<option value="">
														Select a Subrace
													</option>
													{subracesObj[race].map(
														(sr) => (
															<option
																key={sr}
																value={sr}
															>
																{sr}
															</option>
														)
													)}
												</>
											) : (
												<option value="">
													No subraces available for
													this race
												</option>
											)
										) : (
											<option value="">
												Select a Race
											</option>
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
										{backgroundsArray
											.filter(
												(b) =>
													isHomebrew || !b.isHomebrew
											) // Only include non-homebrew when isHomebrew is false
											.map((b) => (
												<option
													key={b.option}
													value={b.option}
												>
													{b.option}{" "}
													{b.isHomebrew &&
														`(Homebrew)`}
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
												color: "#edf2f4",
											}}
											onClick={handleSubLabelClick}
										>
											3
										</sub>{" "}
										{!ideal && (
											<sup className="red-star">*</sup>
										)}
									</label>
									{/* <textarea
										id="ideal"
										value={ideal}
										onChange={(e) =>
											setIdeal(e.target.value)
										}
										maxLength="100"
										style={{
											height: "8rem",
											width: "100%",
										}}
									/> */}
									<select
										id="ideal"
										value={ideal}
										onChange={(e) =>
											setIdeal(e.target.value)
										}
									>
										<option value="">
											Select an Ideal
										</option>
									</select>
								</div>
								<div>
									<label htmlFor="bond">
										Bond:{" "}
										<sub
											style={{
												verticalAlign: "sub",
												fontSize: "0.8rem",
												cursor: "pointer",
												color: "#edf2f4",
											}}
											onClick={handleSubLabelClick}
										>
											4
										</sub>{" "}
										{!bond && (
											<sup className="red-star">*</sup>
										)}
									</label>
									{/* <textarea
										id="bond"
										value={bond}
										onChange={(e) =>
											setBond(e.target.value)
										}
										maxLength="100"
										style={{
											height: "8rem",
											width: "100%",
										}}
									/> */}
									<select
										id="bond"
										value={bond}
										onChange={(e) =>
											setBond(e.target.value)
										}
										disabled={!background}
										required
									>
										<option value="">
											{background
												? `Select a Bond`
												: `Select a Background`}
										</option>
										{background &&
											backgroundDesc[
												background.replaceAll(" ", "_")
											].suggestedBond.roll.map((b) => (
												<option
													key={b.number}
													value={b.description}
												>
													{b.description}
												</option>
											))}
									</select>
								</div>
								<div>
									<label htmlFor="flaw">
										Flaw:{" "}
										<sub
											style={{
												verticalAlign: "sub",
												fontSize: "0.8rem",
												cursor: "pointer",
												color: "#edf2f4",
											}}
											onClick={handleSubLabelClick}
										>
											5
										</sub>{" "}
										{!flaw && (
											<sup className="red-star">*</sup>
										)}
									</label>
									{/* <textarea
										id="flaw"
										value={flaw}
										onChange={(e) =>
											setFlaw(e.target.value)
										}
										maxLength="100"
										style={{
											height: "8rem",
											width: "100%",
										}}
									/> */}
									<select
										id="flaw"
										value={flaw}
										onChange={(e) =>
											setFlaw(e.target.value)
										}
										disabled={!background}
										required
									>
										<option value="">
											{background
												? `Select a Flaw`
												: `Select a Background`}
										</option>
										{background &&
											backgroundDesc[
												background.replaceAll(" ", "_")
											].suggestedFlaw.roll.map((f) => (
												<option
													key={f.number}
													value={f.description}
												>
													{f.description}
												</option>
											))}
									</select>
								</div>
								<div>
									<label htmlFor="personalityTraitOne">
										First Personality Trait:{" "}
										<sub
											style={{
												verticalAlign: "sub",
												fontSize: "0.8rem",
												cursor: "pointer",
												color: "#edf2f4",
											}}
											onClick={handleSubLabelClick}
										>
											6
										</sub>{" "}
										{!personalityTraits[0] && (
											<sup className="red-star">*</sup>
										)}
									</label>
									<textarea
										id="personalityTraitOne"
										value={personalityTraits[0]}
										onChange={(e) => {
											const newTraits = [
												...personalityTraits,
											];
											newTraits[0] = e.target.value;
											setPersonalityTraits(newTraits);
										}}
										maxLength="50"
										style={{
											height: "6rem",
											width: "100%",
										}}
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
												color: "#edf2f4",
											}}
											onClick={handleSubLabelClick}
										>
											6
										</sub>{" "}
										{!personalityTraits[1] && (
											<sup className="red-star">*</sup>
										)}
									</label>
									<textarea
										id="personalityTraitTwo"
										value={personalityTraits[1]}
										onChange={(e) => {
											const newTraits = [
												...personalityTraits,
											];
											newTraits[1] = e.target.value;
											setPersonalityTraits(newTraits);
										}}
										maxLength="50"
										style={{
											height: "6rem",
											width: "100%",
										}}
									/>
								</div>
							</div>
							<div>
								<div className="character-sheet-image-container">
									{primaryClass ? (
										<img
											src={classImages[primaryClass]}
											alt={primaryClass}
										/>
									) : (
										<img
											src={selectClassImage}
											alt="Select a Class"
										/>
									)}
								</div>
								<div className="character-sheet-bottom-right">
									<h3>Class</h3>
									{primaryClass ? (
										<>
											<h5>{primaryClass}:</h5>
											<p>
												- Description:{" "}
												{
													classDesc[primaryClass]
														.description
												}
											</p>
											<p>
												- Hit Die:{" "}
												{classDesc[primaryClass].hitDie}
											</p>
											<p>
												- Primary Ability:{" "}
												{
													classDesc[primaryClass]
														.primaryAbility
												}
											</p>
											<p>
												- Saving Throw Proficiencies:{" "}
												{
													classDesc[primaryClass]
														.savingThrowProficiencies
												}
											</p>
											<p>
												- Armor and Weapon
												Proficiencies:{" "}
												{
													classDesc[primaryClass]
														.armorAndWeaponProficiencies
												}
											</p>
										</>
									) : (
										<p>
											Select a class to populate more
											information here.
										</p>
									)}
									<h3>Subclass</h3>
									{subclass ? (
										<>
											<h5>{subclass}:</h5>
											<p>
												- Description:
												{
													subclassDesc[primaryClass][
														subclass.replaceAll(
															" ",
															"_"
														)
													].description
												}
											</p>
											<p>- Features:</p>
											{subclassDesc[primaryClass][
												subclass.replaceAll(" ", "_")
											].features.map((feature, index) => (
												<React.Fragment key={index}>
													<p
														style={{
															paddingLeft: "2rem",
														}}
													>
														- {feature.title}
													</p>
													<p
														style={{
															paddingLeft: "4rem",
														}}
													>
														- {feature.description}
													</p>
												</React.Fragment>
											))}
										</>
									) : (
										<p>
											Select a class and a subclass to
											populate more information here.
										</p>
									)}
									<h3>Skills</h3>
									{Array.from({ length: maxSkillCount }).map(
										(_, index) => (
											<React.Fragment key={index}>
												{skills[index] && (
													<>
														<h5>{skills[index]}</h5>
														<p>
															- Ability Check:{" "}
															{
																skillsDesc[
																	skills[
																		index
																	].replaceAll(
																		" ",
																		"_"
																	)
																].attribute
															}
														</p>
														<p>
															- Description:{" "}
															{
																skillsDesc[
																	skills[
																		index
																	].replaceAll(
																		" ",
																		"_"
																	)
																].description
															}
														</p>
														<p>
															- Examples of Usage:{" "}
															{
																skillsDesc[
																	skills[
																		index
																	].replaceAll(
																		" ",
																		"_"
																	)
																].examples
															}
														</p>
													</>
												)}
											</React.Fragment>
										)
									)}
									{!skills[0] &&
										!skills[1] &&
										!skills[2] &&
										!skills[3] && (
											<p>
												Select a class and a skill to
												populate more information here.
											</p>
										)}
									<h3>Race</h3>
									{race ? (
										<>
											<h5>{race}:</h5>
											<p>
												- Description:{" "}
												{
													raceDesc[
														race
															.replaceAll(
																"-",
																"0"
															)
															.replaceAll(
																" ",
																"_"
															)
													].description
												}
											</p>
											<p>
												- Expected Life Span:{" "}
												{
													raceDesc[
														race
															.replaceAll(
																"-",
																"0"
															)
															.replaceAll(
																" ",
																"_"
															)
													].expectedLifeSpan
												}
											</p>
											<p>
												- Expected Height:{" "}
												{
													raceDesc[
														race
															.replaceAll(
																"-",
																"0"
															)
															.replaceAll(
																" ",
																"_"
															)
													].expectedSize
												}
											</p>
											<p>
												- Speed:{" "}
												{
													raceDesc[
														race
															.replaceAll(
																"-",
																"0"
															)
															.replaceAll(
																" ",
																"_"
															)
													].speed
												}
											</p>
											<p>
												- Additional Ability Scores:{" "}
												{
													raceDesc[
														race
															.replaceAll(
																"-",
																"0"
															)
															.replaceAll(
																" ",
																"_"
															)
													].abilityScoreIncrease
												}
											</p>
											<p>
												- Spoken Languages:{" "}
												{
													raceDesc[
														race
															.replaceAll(
																"-",
																"0"
															)
															.replaceAll(
																" ",
																"_"
															)
													].standardLanguages
												}
											</p>
										</>
									) : (
										<p>
											Select a race to populate more
											information here.
										</p>
									)}
									<h3>Subrace</h3>
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
									<h3>Background</h3>
									{background ? (
										<>
											<h5>
												{background}:{" "}
												<span style={{ color: "red" }}>
													{backgroundDesc[
														background.replaceAll(
															" ",
															"_"
														)
													].isHomebrew
														? `(This is a homebrew background)`
														: ``}
												</span>
											</h5>
											<p>
												- Description:{" "}
												{
													backgroundDesc[
														background.replaceAll(
															" ",
															"_"
														)
													].description
												}
											</p>
											<p></p>
											{/* Add others here when done */}
										</>
									) : (
										<p>
											Select a background to populate more
											information here.
										</p>
									)}
									<h3>Alignment</h3>
									{alignment ? (
										<>
											<h5>{alignment}:</h5>
											<p>
												- Description:{" "}
												{
													alignmentDesc[
														alignment.replaceAll(
															" ",
															"_"
														)
													].description
												}
											</p>
											<p>
												- Expected Classes:{" "}
												{
													alignmentDesc[
														alignment.replaceAll(
															" ",
															"_"
														)
													].expectedClasses
												}
											</p>
										</>
									) : (
										<p>
											Select an alignment to populate more
											information here.
										</p>
									)}
								</div>
								<div className="character-sheet-image-container">
									<img src="" alt="" />
								</div>
							</div>
						</div>
						<button
							type="submit"
							className="character-sheet-submit-btn"
							disabled={isCreateLoading}
						>
							{isCreateLoading ? (
								<ClipLoader color="#fff" size={12} />
							) : (
								`Save Character`
							)}
						</button>
						<div className="character-sheet-footer">
							<p>
								1. Including homebrew will give you more options
								to choose from. However, your GM may not allow
								homebrew characters in their campaign. If you do
								not plan to choose homebrew options, do not turn
								homebrew on, as this will flag your character as
								a homebrew character.
							</p>
							<p>
								2. You have the choice to roll for your ability
								points if you please. Be aware
							</p>
							<p>
								3. Your ideals are the things that you believe
								in most strongly, the fundamental moral and
								ethical principles that com pel you to act as
								you do. Ideals encompass everything from your
								life goals to your core belief system. Ideals
								may answer the following questions: What are the
								principles that you will never betray? What
								would prompt you to make sacrifices? What drives
								you to act and guides your goals and ambitions?
								What is the single most important thing you
								strive for? (100 char limit)
							</p>
							<p>
								4. Bonds represent a character’s connections to
								people, places, and events in the world. Bonds
								may answer the following questions: Whom do you
								care most about? To what place do you feel a
								special connection? What is your most treasured
								possession? (100 char limit)
							</p>
							<p>
								5. Your character’s flaw represents some vice,
								compulsion, fear, or weakness; in particular,
								anything that someone else could exploit to
								bring you to ruin or cause you to act against
								your best interests. A flaw might answer any of
								these question: What enrages you? What’s the one
								person, concept, or event that you are terrified
								of? What are your vices? (100 char limit)
							</p>
							<p>
								6. Personality traits are small, simple ways to
								help you set your character apart from every
								other character. Your personality traits should
								tell you something interesting and fun about
								your character. They should be self descriptions
								that are specific about what makes your
								character stand out. “I’m smart” is not a good
								trait, because it describes a lot of characters.
								“I’ve read every book in Candlekeep” tells you
								something specific about your character’s
								interests and disposition. Personality traits
								might describe the things your character likes,
								his or her past accomplishments, things your
								character dislikes or fears, your character’s
								selfattitude or mannerisms, or the influence of
								his or her ability scores. (50 char limit each)
							</p>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CharacterSheet;
