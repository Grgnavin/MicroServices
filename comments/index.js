import express from 'express';
import commentRouter from './routes/comment.js';
import cors from 'cors';

const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.post("/events", (req,res) => {
    console.log("Received Event", req.body.type);
    return res.status(200).send("OK");
})

app.use('/api/v1/snippet', commentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

