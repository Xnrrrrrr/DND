import { useState, useRef, useEffect } from "react";

const Tooltip = ({ content, children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [tooltipPosition, setTooltipPosition] = useState("below");
	const tooltipRef = useRef(null);

	useEffect(() => {
		if (isVisible && tooltipRef.current) {
			const tooltipRect = tooltipRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Check if the tooltip is going beyond the window height
			if (tooltipRect.bottom > windowHeight) {
				setTooltipPosition("above");
			} else {
				setTooltipPosition("below");
			}
		} else {
			setTooltipPosition("below");
		}
	}, [isVisible]);

	const formatContent = (text) => {
		// Bold: *text*
		let formattedText = text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
		// Underline: _text_
		formattedText = formattedText.replace(/_(.*?)_/g, "<u>$1</u>");
		// Red Text: RtextR
		formattedText = formattedText.replace(
			/R(.*?)R/g,
			'<span style="color: red;">$1</span>'
		);
		// Green Text: GtextG
		formattedText = formattedText.replace(
			/G(.*?)G/g,
			'<span style="color: green;">$1</span>'
		);
		return { __html: formattedText };
	};

	return (
		<div
			className="tooltip-container"
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			{children}
			{isVisible && (
				<div
				className={`tooltip-content ${
					tooltipPosition === "above" ? "above" : ""
				}`}
				ref={tooltipRef}
					dangerouslySetInnerHTML={formatContent(content)}
				></div>
			)}
		</div>
	);
};

export default Tooltip;
