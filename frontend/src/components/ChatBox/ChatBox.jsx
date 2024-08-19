import { useState, useEffect, useRef } from "react";
import { DiAptana } from "react-icons/di";

const ChatBox = () => {
	//console.log(user);
	
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState([]);

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
			messages.push(inputValue)

			setInputValue('');
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
					</div>
					<div style={{ display: "flex" }}>
						<DiAptana size={16} />
					</div>
				</div>
				<div className="chat-box-content-container">
					{messages.map((m, index) => {
						<div key={index} style={{ backgroundColor: index % 2 === 0 ? "var(--secondary-background-color)" : "transparent"}}>
							<p>{m}</p>
						</div>
					})}
				</div>
				<div className="chat-box-input-container">
					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === "Button1")
								handleSend();
						}}
						maxLength={100}
					/>
				</div>
			</div>
		</>
	);
};

export default ChatBox;
