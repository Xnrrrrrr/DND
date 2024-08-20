const ws = require("ws");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User } = require("../models");

const initWebSocket = (server) => {
	const wss = new ws.Server({ server });

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
					}
				} catch (err) {
					console.error(
						"Error parsing or handling incoming message:",
						err
					);
				}
			});

			connection.on("close", () => {});
		})
	);

	const handleChatMessage = (message, senderConnection) => {
		if (message && message.generalChat) {

			// Broadcast to general chat
			[...wss.clients].forEach((client) => {
				client.send(JSON.stringify({ generalChat: message.generalChat }));
			});
		}
	};
};

module.exports = initWebSocket;
