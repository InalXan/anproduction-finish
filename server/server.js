import express from "express";
import connect from "./database/connect.js";
import authRouter from "./router/auth_router.js";
import userRouter from "./router/user_router.js"

import { randomBytes } from 'crypto';

const app = express();
const PORT = 3000;

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use('/auth', authRouter);

// Define user routes
app.use('/user', userRouter);

const tokenLength = 32;
const token = randomBytes(tokenLength).toString('hex');
console.log('Oluşturulan token:', token);

// Start the server
app.listen(PORT, () => {
	//database connect
	connect();
	// host
  console.log(`Server started on port ${PORT}`);
});