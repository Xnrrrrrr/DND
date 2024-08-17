const AdvRollBtn = ({ label, onRoll, notation, disabled }) => {
	const roll = () => {
		onRoll(notation);
	};

	return (
		<button type="button" disabled={disabled} onClick={roll}>
			{label}
		</button>
	);
};

export default AdvRollBtn;
