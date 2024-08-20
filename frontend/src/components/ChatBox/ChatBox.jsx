import { useState, useEffect, useRef } from "react";
import { DiAptana } from "react-icons/di";
import { ClipLoader } from "react-spinners";

const ChatBox = ({ user }) => {
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState([]);
	const [isAtBottom, setIsAtBottom] = useState(true); // Track whether the user is at the bottom
	const chatBoxRef = useRef(null);
	const chatEndRef = useRef(null);

	const [ws, setWs] = useState(null);

	const handleSend = () => {
		if (inputValue.trim() !== "") {
			const now = new Date();
			// Get UTC time string in HH:mm:ss format
			const utcTimeString = now.toISOString().split("T")[1].slice(0, 8);

			const generalChat = {
				badge: user.role,
				sender: user.username,
				content: inputValue,
				timestamp: utcTimeString,
			};

			ws.send(JSON.stringify({ type: "chat", generalChat }));

			setInputValue("");
		}
	};

	const handleMessage = (e) => {
		const messageData = JSON.parse(e.data);

		if ("generalChat" in messageData) {
			const parsedMessage = messageData.generalChat;
			setMessages((prevMessages) => [...prevMessages, parsedMessage]);
		}
	};

	useEffect(() => {
		const ws = new WebSocket(`${import.meta.env.VITE_WS_BASE_URL}`);
		setWs(ws);

		ws.addEventListener("open", () => {
			console.log("WebSocket connection opened");
		});

		ws.addEventListener("message", handleMessage);

		return () => {
			ws.close();
		};
	}, []);

	useEffect(() => {
		if (isAtBottom && chatEndRef.current) {
			chatEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, isAtBottom]);

	const handleScroll = () => {
		if (chatBoxRef.current) {
			const { scrollTop, scrollHeight, clientHeight } =
				chatBoxRef.current;
			// Check if the user is at the bottom (or near the bottom)
			if (scrollHeight - scrollTop === clientHeight) {
				setIsAtBottom(true);
			} else {
				setIsAtBottom(false);
			}
		}
	};

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

	return (
		<>
			<div className="chat-box">
				<div className="chat-box-tab-container">
					<div className="chat-box-tabs">
						{/* For Party Page */}
						<p>General</p>
						<p>Party</p>
						<p>Private</p>
					</div>
					<div
						style={{
							display: "flex",
							backgroundColor:
								"var(--secondary-background-color)",
							borderRadius: "5px",
							padding: "0.5rem",
							cursor: "pointer",
							marginLeft: "10px",
						}}
					>
						<DiAptana size={16} />
					</div>
				</div>
				<div
					className="chat-box-content-container"
					ref={chatBoxRef}
					onScroll={handleScroll}
				>
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
							<p style={{ padding: "2px" }}>
								({m.timestamp}) {m.badge ? `` : ``} <span className="sender-span">{m.sender}</span>: {m.content}	
							</p>
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

// add db to display previous chat messages (delete within 30 mins), badges, and different chat rooms