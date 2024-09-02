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

export default enforceMinMax;
