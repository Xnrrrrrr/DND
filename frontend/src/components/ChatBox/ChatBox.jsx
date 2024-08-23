import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { DiAptana } from "react-icons/di";
import { ClipLoader } from "react-spinners";
import { useSaveGeneralMessageMutation } from "../../slices/chat/general/generalChatApiSlice.js";
import { getGeneralMessages } from "../../slices/chat/general/generalChatSlice.js";

const ChatBox = ({ user }) => {
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState([]);
	const [isAtBottom, setIsAtBottom] = useState(true); // Track whether the user is at the bottom
	const [selectedTab, setSelectedTab] = useState("general");
	const chatBoxRef = useRef(null);
	const chatEndRef = useRef(null);

	const [ws, setWs] = useState(null);

	const dispatch = useDispatch();

	const [general] = useSaveGeneralMessageMutation();

	const handleSend = async () => {
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

			try {
				await general({
					sender: user.username,
					role: user.role,
					content: inputValue,
				}).unwrap();
			} catch (error) {
				console.error("Failed to save message:", error);
			}

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

	useEffect(() => {
		if (selectedTab === "general") {
			dispatch(getGeneralMessages()).then((action) => {
				if (action.payload) {
					const formattedMessages = action.payload.map(message => {
						const date = new Date(message.timestamp);
						const hours = String(date.getUTCHours()).padStart(2, '0');
						const minutes = String(date.getUTCMinutes()).padStart(2, '0');
						const seconds = String(date.getUTCSeconds()).padStart(2, '0');
						return {
							...message,
							timestamp: `${hours}:${minutes}:${seconds}`
						};
					});
					setMessages(formattedMessages);
				} else {
					console.error("Failed to fetch general messages");
				}
			});
		}
	}, [dispatch, selectedTab]);

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
						<p
							onClick={() => {
								setSelectedTab("general");
							}}
							className={
								selectedTab === "general" ? `selected-tab` : ``
							}
						>
							General
						</p>
						<p
							onClick={() => {
								setSelectedTab("party");
							}}
							className={
								selectedTab === "party" ? `selected-tab` : ``
							}
						>
							Party
						</p>
						<p
							onClick={() => {
								setSelectedTab("private");
							}}
							className={
								selectedTab === "private" ? `selected-tab` : ``
							}
						>
							Private
						</p>
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
					{selectedTab === "general"
						? messages.map((m, index) => (
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
										({m.timestamp}) {m.badge ? `` : ``}{" "}
										<span className="sender-span">
											{m.sender}
										</span>
										: {m.content}
									</p>
								</div>
						  ))
						: ``}
					{/* Reference element for auto-scroll */}
					<div ref={chatEndRef} />
				</div>
				<div className="chat-box-input-container">
					<div className="input-wrapper">
						<input
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") handleSend();
							}}
							maxLength={100}
						/>
						<button type="button" onClick={handleSend}>
							&#10148;
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatBox;
