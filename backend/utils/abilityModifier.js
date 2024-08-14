const abilityModifier = (ability) => {
	return Math.floor((ability - 10) / 2);
};

module.exports = abilityModifier;
