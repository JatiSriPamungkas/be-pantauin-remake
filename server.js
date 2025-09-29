import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.use((req, res) => {
    res.send("<h1>Page not found!</h1>").status(404);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
