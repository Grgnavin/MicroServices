import express from 'express';
import commentRouter from './routes/comment.js';

const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/snippet', commentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

