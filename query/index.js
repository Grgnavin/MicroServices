import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8002;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const snippets = {};

app.get("/snippets", (_,res) => {
    return res.send(snippets);
})

app.post("/events", (req,res) => {
    console.log("Received event:", req.body);
    const { type, data } = req.body;
    console.log(data);
    
    if (type === "SnippetCreated") {
        const { id, title, content } = data;
        snippets[id] = { id, title, content, comments: [] };
    };
    if (type === "CommentCreated") {
        const { id, content, snippetId } = data;
        console.log("SnippetId", snippetId);
        
        if (!snippets[snippetId]) {
            console.error(`Snippet with ID ${snippetId} not found.`);
            return res.status(400).json({ error: "Snippet not found" });
        }
    
        snippets[snippetId].comments.push({ id, content });
    }
    console.log(snippets);
    return res.send({status: "OK"});    
})

app.listen(PORT, () => {
    console.log(`Query service is running on port ${PORT}`);
});