import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DiAptana } from "react-icons/di";
import { ClipLoader } from "react-spinners";
import { useSaveGeneralMessageMutation } from "../../slices/chat/general/generalChatApiSlice.js";
import { getGeneralMessages } from "../../slices/chat/general/generalChatSlice.js";
import { ChatBoxContextMenu, useChatBoxContextMenu } from "../";

const ChatBox = ({ user, party, globalWs }) => {
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState({
		general: [],
		party: [],
		private: [],
	});
	const [notifications, setNotifications] = useState({
		general: 0,
		party: 0,
		private: 0,
	});
	const [isAtBottom, setIsAtBottom] = useState(true);
	const [selectedTab, setSelectedTab] = useState("general");
	const selectedTabRef = useRef(selectedTab);
	const chatBoxRef = useRef(null);
	const chatEndRef = useRef(null);

	const { contextMenu, showContextMenu } = useChatBoxContextMenu();
	const [contextUsername, setContextUsername] = useState("");
	const inputRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [general, { isGeneral }] = useSaveGeneralMessageMutation();

	useEffect(() => {
		if (globalWs) {
			globalWs.addEventListener("message", handleMessage);

			return () => {
				globalWs.removeEventListener('message', handleMessage);
			};
		}				
	}, [globalWs]);

	const handleSend = async () => {
		if (inputValue.trim() !== "") {
			const now = new Date();
			// Get UTC time string in HH:mm:ss format
			const utcTimeString = now.toISOString().split("T")[1].slice(0, 8);

			let chatMessage = {
				badge: user.role,
				sender: user.username,
				content: inputValue,
				timestamp: utcTimeString,
			};

			// Checks for private chat command
			const privateMessageMatch = inputValue.match(/^\/\/(\w+):\s(.+)/);
			if (privateMessageMatch) {
				const recipientUsername = privateMessageMatch[1];
				const privateMessageContent = privateMessageMatch[2];

				const privateChat = {
					badge: user.role,
					sender: user.username,
					content: privateMessageContent,
					timestamp: utcTimeString,
					recipient: recipientUsername,
				};

				// Send the private message through WebSocket
				globalWs.send(
					JSON.stringify({
						type: "chat",
						recipient: recipientUsername,
						privateChat,
					})
				);
			} else if (selectedTab === "general") {
				globalWs.send(
					JSON.stringify({ type: "chat", generalChat: chatMessage })
				);

				try {
					await general({
						sender: user.username,
						badge: user.role,
						content: inputValue,
					}).unwrap();
				} catch (err) {
					console.error("Failed to save message:", err);
				}
			} else if (selectedTab === "party") {
				if (!party) {
					setMessages((prevMessages) => ({
						...prevMessages,
						party: [
							...prevMessages.party,
							{
								type: "error",
								content:
									"Join a party to start chatting with party members.",
								sender: "System",
								timestamp: utcTimeString,
							},
						],
					}));
				} else {
					globalWs.send(
						JSON.stringify({
							type: "chat",
							partyChat: chatMessage,
							party,
						})
					);
				}
			} else if (selectedTab === "private") {
				setMessages((prevMessages) => ({
					...prevMessages,
					private: [
						...prevMessages.private,
						{
							type: "error",
							content:
								"Use the private chat command to reply or to send a private message. Ex: //System: Hi",
							sender: "System",
							timestamp: utcTimeString,
						},
					],
				}));
			}

			setInputValue("");
			inputRef.current.focus();
		}
	};

	const handleMessage = (e) => {
		const messageData = JSON.parse(e.data);
		if (
			messageData.generalChat ||
			messageData.partyChat ||
			messageData.privateChat
		) {
			const tabType = messageData.generalChat
				? "general"
				: messageData.privateChat
				? "private"
				: "party";

			if ("generalChat" in messageData) {
				const parsedMessage = messageData.generalChat;
				setMessages((prevMessages) => ({
					...prevMessages,
					general: [...prevMessages.general, parsedMessage],
				}));
			} else if ("partyChat" in messageData) {
				const parsedMessage = messageData.partyChat;
				setMessages((prevMessages) => ({
					...prevMessages,
					party: [...prevMessages.party, parsedMessage],
				}));
			} else if ("privateChat" in messageData) {
				const parsedMessage = messageData.privateChat;
				setMessages((prevMessages) => ({
					...prevMessages,
					private: [...prevMessages.private, parsedMessage],
				}));
			}

			if (tabType !== selectedTabRef.current) {
				setNotifications((prev) => ({
					...prev,
					[tabType]: prev[tabType] + 1,
				}));
			}
		}
	};

	const handleTabClick = (tab) => {
		setSelectedTab(tab);

		// Reset notifications for the clicked tab
		setNotifications((prevNotifications) => ({
			...prevNotifications,
			[tab]: 0,
		}));
	};

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

	useEffect(() => {
		selectedTabRef.current = selectedTab;
	}, [selectedTab]);

	useEffect(() => {
		if (isAtBottom && chatEndRef.current) {
			chatEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, isAtBottom]);

	useEffect(() => {
		if (selectedTab === "general") {
			dispatch(getGeneralMessages()).then((action) => {
				if (action.payload) {
					const formattedMessages = action.payload.map((message) => {
						const date = new Date(message.timestamp);
						const hours = String(date.getUTCHours()).padStart(
							2,
							"0"
						);
						const minutes = String(date.getUTCMinutes()).padStart(
							2,
							"0"
						);
						const seconds = String(date.getUTCSeconds()).padStart(
							2,
							"0"
						);
						return {
							...message,
							timestamp: `${hours}:${minutes}:${seconds}`,
						};
					});
					setMessages({
						general: formattedMessages,
						party: messages.party,
						private: messages.private,
					});
				} else {
					console.error("Failed to fetch general messages");
				}
			});
		}
	}, [dispatch, selectedTab]);

	useEffect(() => {
		if (contextMenu.index || contextMenu.index === 0) {
			if (selectedTabRef.current === "general") {
				if (messages.general[contextMenu.index]?.sender) {
					setContextUsername(
						messages.general[contextMenu.index].sender
					);
				}
			} else if (selectedTabRef.current === "party") {
				if (messages.party[contextMenu.index]?.sender) {
					setContextUsername(
						messages.party[contextMenu.index].sender
					);
				}
			} else if (selectedTabRef.current === "private") {
				if (messages.private[contextMenu.index]?.sender) {
					setContextUsername(
						messages.private[contextMenu.index].sender
					);
					console.log(messages.private[contextMenu.index].sender);
				}
			}
		}
	}, [contextMenu]);

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
			<ChatBoxContextMenu
				contextMenu={contextMenu}
				contextUsername={contextUsername}
				username={user.username}
				inputValue={inputValue}
				setInputValue={setInputValue}
				inputRef={inputRef}
			/>
			<div className="chat-box">
				<div className="chat-box-tab-container">
					<div className="chat-box-tabs">
						{/* For Party Page */}
						<p
							onClick={() => handleTabClick("general")}
							className={
								selectedTab === "general" ? `selected-tab` : ``
							}
						>
							General{" "}
							{notifications.general > 0
								? `(${
										notifications.general > 9
											? "9+"
											: notifications.general
								  })`
								: ""}
						</p>
						<p
							onClick={() => handleTabClick("party")}
							className={
								selectedTab === "party" ? `selected-tab` : ``
							}
						>
							Party{" "}
							{notifications.party > 0
								? `(${
										notifications.party > 9
											? "9+"
											: notifications.party
								  })`
								: ""}
						</p>
						<p
							onClick={() => handleTabClick("private")}
							className={
								selectedTab === "private" ? `selected-tab` : ``
							}
						>
							Private{" "}
							{notifications.private > 0
								? `(${
										notifications.private > 9
											? "9+"
											: notifications.private
								  })`
								: ""}
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
					{!isGeneral ? (
						<>
							{selectedTab === "general"
								? messages.general.map((m, index) => (
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
												({m.timestamp}){" "}
												{m.badge === "superAdmin" ? (
													<span
														style={{
															color: "gold",
														}}
														title="Super Admin"
													>
														SA
													</span>
												) : m.badge === "admin" ? (
													<span
														style={{
															color: "green",
														}}
														title="Admin"
													>
														A
													</span>
												) : (
													``
												)}{" "}
												<span
													className="sender-span"
													onContextMenu={(e) =>
														showContextMenu(
															e,
															index
														)
													}
												>
													{m.sender}
												</span>
												: {m.content}
											</p>
										</div>
								  ))
								: ``}
						</>
					) : (
						<p>Loading General Chat...</p>
					)}
					<>
						{selectedTab === "party"
							? messages.party.map((m, index) => (
									<div
										key={index}
										style={{
											backgroundColor:
												index % 2 === 0
													? "var(--border-color)"
													: "transparent",
										}}
									>
										{m?.type === "error" ? (
											<p>
												({m.timestamp}){" "}
												<span style={{ color: "red" }}>
													{m.sender}
												</span>
												: {m.content}
											</p>
										) : (
											<p style={{ padding: "2px" }}>
												({m.timestamp}){" "}
												{m.badge === "superAdmin" ? (
													<span
														style={{
															color: "gold",
														}}
														title="Super Admin"
													>
														SA
													</span>
												) : m.badge === "admin" ? (
													<span
														style={{
															color: "green",
														}}
														title="Admin"
													>
														A
													</span>
												) : (
													``
												)}{" "}
												<span
													className="sender-span"
													onContextMenu={(e) =>
														showContextMenu(
															e,
															index
														)
													}
												>
													{m.sender}
												</span>
												: {m.content}
											</p>
										)}
									</div>
							  ))
							: ``}
						{selectedTab === "private"
							? messages.private.map((m, index) => (
									<div
										key={index}
										style={{
											backgroundColor:
												index % 2 === 0
													? "var(--border-color)"
													: "transparent",
										}}
									>
										{m?.type === "error" ? (
											<p>
												({m.timestamp}){" "}
												<span style={{ color: "red" }}>
													{m.sender}
												</span>
												: {m.content}
											</p>
										) : (
											<p style={{ padding: "2px" }}>
												({m.timestamp}){" "}
												{m.badge === "superAdmin" ? (
													<span
														style={{
															color: "gold",
														}}
														title="Super Admin"
													>
														SA
													</span>
												) : m.badge === "admin" ? (
													<span
														style={{
															color: "green",
														}}
														title="Admin"
													>
														A
													</span>
												) : (
													``
												)}{" "}
												<span
													className="sender-span"
													onContextMenu={(e) =>
														showContextMenu(
															e,
															index
														)
													}
												>
													{m.sender}
												</span>{" "}
												{`=>`} {m.recipient}:{" "}
												{m.content}
											</p>
										)}
									</div>
							  ))
							: ``}
					</>

					{/* Reference element for auto-scroll */}
					<div ref={chatEndRef} />
				</div>
				<div className="chat-box-input-container">
					<div className="input-wrapper">
						<input
							name="chat-input"
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") handleSend();
							}}
							maxLength={100}
							ref={inputRef}
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
