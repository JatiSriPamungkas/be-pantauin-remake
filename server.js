import express from "express";
import { router as UserRouter } from "./src/routers/users.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Routes
app.use("/api/v1/users/", UserRouter);

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Pantauin API!</h1>");
});

app.use((req, res) => {
    res.send("<h1>Page not found!</h1>").status(404);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
