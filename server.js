import express from "express";
import { router as UserRouter } from "./src/routers/users.route.js";
import { router as AuthRouter } from "./src/routers/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { authenticate } from "./src/middlewares/auth.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Global Config
app.use(express.json());
app.use(cookieParser());

// Authentication
app.use("/api/v1/auth", AuthRouter);

// Routes
app.use("/api/v1/users", authenticate, UserRouter);

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Pantauin API!</h1>");
});

app.use((req, res) => {
    res.send("<h1>Page not found!</h1>").status(404);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
