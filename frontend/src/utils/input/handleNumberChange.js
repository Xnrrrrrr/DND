const handleNumberChange = (e, setValue) => {
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

export default handleNumberChange;
