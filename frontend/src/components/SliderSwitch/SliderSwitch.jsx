const SliderSwitch = ({
	label,
	subLabel,
	subLabelAction,
	checked,
	onChange,
	id,
}) => {
	return (
		<>
			<label htmlFor={id} className="toggle-label">
				{label}{" "}
				{subLabel && (
					<sub
						style={{
							verticalAlign: "sub",
							fontSize: "0.8rem",
							cursor: "pointer",
							color: "#edf2f4",
						}}
						onClick={subLabelAction}
					>
						{subLabel}
					</sub>
				)}
			</label>
			<label className="switch">
				<input
					type="checkbox"
					id={id}
					checked={checked}
					onChange={onChange}
				/>
				<span className="slider"></span>
			</label>
		</>
	);
};

export default SliderSwitch;
