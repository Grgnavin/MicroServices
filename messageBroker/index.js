import axios from 'axios';
import express from 'express';

const app = express();
const PORT = 8003;

app.use(express.json());

app.post("/events", (req,res) => {
    const event = req.body;
    axios.post("http://localhost:8000/events", event); //snippets
    axios.post("http://localhost:8001/events", event); //comments
    axios.post("http://localhost:8002/events", event); //query
    return res.send({status: "OK"});
})

app.listen(PORT, () => {
    console.log(`Message broker is running on port ${PORT}`);
});


