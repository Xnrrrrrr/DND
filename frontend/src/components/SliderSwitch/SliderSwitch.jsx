import { Tooltip } from "../../components";

const SliderSwitch = ({
	label,
	tooltipLabel,
	tooltipContent,
	toolTipSpanClassName,
	checked,
	onChange,
	id,
}) => {
	return (
		<>
			<label htmlFor={id} className="toggle-label">
				{label}{" "}
				{tooltipLabel && (
					<Tooltip content={tooltipContent}>
						<span className={toolTipSpanClassName}>
							{tooltipLabel}
						</span>
					</Tooltip>
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
