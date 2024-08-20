import { useState, useEffect, useRef } from "react";
import { DiAptana } from "react-icons/di";
import { ClipLoader } from "react-spinners";

const ChatBox = ({ user }) => {
	if (!user) {
		return (
			<div
				className="chat-box"
				style={{
					backgroundColor: "transparent",
					boxShadow: "none",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ClipLoader color="var(--base-text-color)" size={82} />
			</div>
		);
	}

	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState([]);
	const [isAtBottom, setIsAtBottom] = useState(true); // Track whether the user is at the bottom
	const chatBoxRef = useRef(null);
	const chatEndRef = useRef(null);

	const handleSend = () => {
		if (inputValue.trim() !== "") {
			// Get UTC time string in HH:mm:ss format
			// const utcTimeString = now
			// .toISOString()
			// .split('T')[1]
			// .slice(0, 8);

			// const globalMessage = {
			// 	badge: user.role,
			// 	sender: user.username,
			// 	content: inputValue,
			// 	timestamp: utcTimeString,
			// };

			// ws.send(JSON.stringify({ globalMessage }))

			// temp
			setMessages((prevMessages) => [...prevMessages, inputValue]);

			setInputValue("");
		}
	};

	useEffect(() => {
		if (isAtBottom && chatEndRef.current) {
			chatEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, isAtBottom]);

	const handleScroll = () => {
		if (chatBoxRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = chatBoxRef.current;
			// Check if the user is at the bottom (or near the bottom)
			if (scrollHeight - scrollTop === clientHeight) {
				setIsAtBottom(true); // User is at the bottom
			} else {
				setIsAtBottom(false); // User scrolled away from the bottom
			}
		}
	};

	return (
		<>
			<div className="chat-box">
				<div className="chat-box-tab-container">
					<div className="chat-box-tabs">
						{/* For Party Page */}
						<p>General</p>
						<p>Party</p>
						<p>Private</p>
						<p>General</p>
						<p>Party</p>
						<p>Private</p>
					</div>
					<div style={{ display: "flex", backgroundColor: "var(--secondary-background-color)", borderRadius: "5px", padding: "0.5rem", cursor: "pointer", marginLeft: "10px" }}>
						<DiAptana size={16} />
					</div>
				</div>
				<div className="chat-box-content-container" ref={chatBoxRef} onScroll={handleScroll}>
					{messages.map((m, index) => (
						<div
							key={index}
							style={{
								backgroundColor:
									index % 2 === 0
										? "var(--border-color)"
										: "transparent",
							}}
						>
							<p style={{padding: "2px"}}>{user.username}: {m}</p>
						</div>
					))}
					{/* Reference element for auto-scroll */}
					<div ref={chatEndRef} />
				</div>
				<div className="chat-box-input-container">
					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSend();
						}}
						maxLength={100}
					/>
				</div>
			</div>
		</>
	);
};

export default ChatBox;
