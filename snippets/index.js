import express from 'express';
import snippetRouter from "./routes/snippet.js"
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/snippets", snippetRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

