const createJWT = require('./createJWT.js');
const abilityModifier = require('./abilityModifier.js');
const {
	backgrounds,
	alignment,
	sex,
	skin,
	hair,
	eyes,
	skills,
	maxSkills,
	races,
	subclasses,
	subraces,
	classDefault,
	raceDefault,
} = require('./options.js');

module.exports = {
	createJWT,
	abilityModifier,
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
}