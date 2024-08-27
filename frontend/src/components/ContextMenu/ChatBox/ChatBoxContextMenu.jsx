import { useMemo } from "react";

const ChatBoxContextMenu = ({
	contextMenu,
	contextUsername,
	username,
	inputValue,
	setInputValue,
	inputRef,
}) => {
	const { x, y } = contextMenu;

	const elements = [
		{ content: "Hi", onClick: () => console.log("hi") },
		{
			content: "Bye",
			style: { color: "red" },
			onClick: () => window.alert("Bye"),
		},
		{
			content: "Message",
			onClick: () => {
				setInputValue(`//${contextUsername}: ${inputValue}`);
				inputRef.current.focus();
			},
		},
		{
			content: `‹ ${contextUsername}`,
			className: "user-context-menu-username",
		},
	];

	const filteredElements = useMemo(() => {
		return elements.filter((element) => {
			if (contextUsername === username && element.content === "Message") {
				return false;
			}
			return true;
		});
	}, [contextMenu, contextUsername, elements]);

	const yOffset = useMemo(() => {
		const elementHeight = 28;
		let totalHeight = elementHeight / 2; // 14 pixels to center in on the last element

		totalHeight += elementHeight * filteredElements.length - elementHeight;

		return totalHeight;
	}, [contextMenu, contextUsername, elements]);

	return (
		<>
			{contextMenu.show && contextUsername && (
				<div
					className="context-menu-chat-box-main"
					style={{
						top: `${y - yOffset}px`,
						left: `${x}px`, // Ensures the menu always appears to the right of the username
					}}
				>
					{filteredElements.map((element, index) => (
						<p
							key={index}
							onClick={element.onClick}
							style={element.style}
							className={element.className}
						>
							{element.content}
						</p>
					))}
				</div>
			)}
		</>
	);
};

export default ChatBoxContextMenu;
