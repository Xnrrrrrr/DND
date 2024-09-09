const ws = require("ws");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User, Party } = require("../models");

const initWebSocket = (server) => {
	const wss = new ws.Server({ server });

	let userStatuses = {};

	wss.on(
		"connection",
		asyncHandler(async (connection, req) => {
			const cookies = req.headers.cookie;
			if (cookies) {
				const tokenCookieString = cookies
					.split(";")
					.find((string) => string.startsWith("jwt="));
				if (tokenCookieString) {
					const token = tokenCookieString.split("=")[1];
					if (token) {
						try {
							const decoded = jwt.verify(
								token,
								process.env.JWT_SECRET
							);
							req.user = await User.findById(
								decoded.userId
							).select("-password -__v");
							if (req.user) {
								connection.users = req.user;
							}
						} catch (error) {
							throw new Error("Not authorized. Invalid token.");
						}
					}
				}
			}
			connection.on("message", (message) => {
				try {
					const parsedMessage = JSON.parse(message);
					if (parsedMessage.type === "chat") {
						handleChatMessage(parsedMessage, connection);
					} else if (parsedMessage.type === "updateParty") {
						[...wss.clients].forEach((client) => {
							client.send(
								JSON.stringify({
									type: "updateParty",
									id: parsedMessage?.playerId || "",
								})
							);
						});
					} else if (parsedMessage.type === "deleteParty") {
						[...wss.clients].forEach((client) => {
							client.send(
								JSON.stringify({
									type: "partyDeleted",
									partyId: parsedMessage.partyId,
								})
							);
						});
					} else if (parsedMessage.type === "userPartyState") {
						userStatuses[connection.users.username] = {
							state: parsedMessage.state,
							status: parsedMessage.status,
						};
						broadcastUserStatuses();
					}
				} catch (err) {
					console.error(
						"Error parsing or handling incoming message:",
						err
					);
				}
			});

			connection.on("error", (err) => {
				console.error(
					"WebSocket error for user:",
					connection.users.username,
					err
				);
			});

			connection.on("close", () => {
				if (req.user) {
					userStatuses[connection.users.username] = "closed";
					broadcastUserStatuses();
				}
			});
		})
	);

	const handleChatMessage = (message, senderConnection) => {
		if (message && message.generalChat) {
			// Broadcast to general chat
			[...wss.clients].forEach((client) => {
				client.send(
					JSON.stringify({ generalChat: message.generalChat })
				);
			});
		} else if (message && message.partyChat && message.party) {
			[...wss.clients].forEach((client) => {
				if (
					message.party.characters.some(
						(partyMember) =>
							partyMember.user._id.toString() ===
							client.users._id.toString()
					)
				) {
					client.send(
						JSON.stringify({
							partyChat: message.partyChat,
						})
					);
				}
			});
		} else if (message && message.privateChat) {
			const recipientConnection = [...wss.clients].find((client) => {
				return (
					client.users && client.users.username === message.recipient
				);
			});

			if (recipientConnection) {
				message.privateChat.type = "message";
				// Send private message to the recipient
				recipientConnection.send(
					JSON.stringify({ privateChat: message.privateChat })
				);
				// Send a copy of the message to the sender
				senderConnection.send(
					JSON.stringify({ privateChat: message.privateChat })
				);
			} else if (
				message.privateChat.content === "Hi" &&
				message.privateChat?.recipient === "System"
			) {
				const systemMessage = {
					type: "error",
					content: `Hello`,
					sender: "System",
					timestamp: new Date()
						.toISOString()
						.split("T")[1]
						.slice(0, 8),
				};

				senderConnection.send(
					JSON.stringify({ privateChat: systemMessage })
				);
			} else {
				const errorMessage = {
					type: "error",
					content: `User ${message.recipient} is not online.`,
					sender: "System",
					timestamp: new Date()
						.toISOString()
						.split("T")[1]
						.slice(0, 8),
				};

				senderConnection.send(
					JSON.stringify({ privateChat: errorMessage })
				);
			}
		}
	};

	const broadcastUserStatuses = () => {
		//console.log(userStatuses);
		[...wss.clients].forEach((client) => {
			client.send(
				JSON.stringify({
					type: "userPartyState",
					statuses: userStatuses, // Send entire status object to all clients
				})
			);
		});
	};
};

module.exports = initWebSocket;
