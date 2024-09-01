import { useEffect, useState } from "react";

const useChatBoxContextMenu = () => {
	const initialContextMenu = {
		show: false,
		x: 0,
		y: 0,
		index: null,
	};

	const [contextMenu, setContextMenu] = useState(initialContextMenu);

	const showContextMenu = (e, index) => {
		e.preventDefault();
		const { scrollX, scrollY } = window;

		// Calculate the position of the username element
		const usernameRect = e.target.getBoundingClientRect();
		const usernameX = usernameRect.right + scrollX;
		const usernameY = usernameRect.top + scrollY + usernameRect.height / 2;

		setContextMenu({
			show: true,
			x: usernameX,
			y: usernameY, // Adjusted y-value to align username with last element
			index,
		});
	};

	const hideContextMenu = () => setContextMenu(initialContextMenu);

	useEffect(() => {
		const handleGlobalClick = () => {
			hideContextMenu();
		};

		// Add the event listener when the context menu is shown
		if (contextMenu.show) {
			document.addEventListener("click", handleGlobalClick);
		}

		// Remove the event listener when the component unmounts or the context menu is closed
		return () => {
			document.removeEventListener("click", handleGlobalClick);
		};
	}, [contextMenu.show]);

	return { contextMenu, showContextMenu };
};

export default useChatBoxContextMenu;
