import express from 'express';
import snippetRouter from "./routes/snippet.js"

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/snippets", snippetRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

