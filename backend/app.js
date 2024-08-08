require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// Cybersecurity imports
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

// Custom middleware import
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

// Connection to database import
const connectDB = require("./config/connect.js");

// Route Imports
const userRouter = require("./routes/userRoutes.js");

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};

// Cybersecurity
app.use(cors(corsOptions));
app.use(mongoSanitize());
app.use(cookieParser(process.env.JWT_SECRET));

// Required for Postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/user", userRouter);

// Error handlers (Has to be last)
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 6000;

const startServer = async () => {
	try {
		await connectDB();
		app.listen(port, () => {
			console.log(`Server is listening on port ${port} ...`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
