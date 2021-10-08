import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ test: "name" });
});

app.post("/courses", (req, res) => {
    const { name } = req.body;
    return res.json({ name: name });
});

app.listen(3333, () => {
    console.log("server running on port 3333");
});
