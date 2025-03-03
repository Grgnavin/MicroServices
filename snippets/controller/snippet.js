import { snippets } from "../database/index.js";
import {randomBytes} from "crypto";
import axios from "axios";

export const createSnippet =async (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title, code } = req.body;

    //ceate a snippet
    snippets[id] = {
        id,
        title,
        code
    };

    //Best place to publish an event
    await axios.post("http://localhost:8003/events", {
        type: "SnippetCreated",
        data: {
            id,
            title,
            content: code
        }
    });

    return res.status(201).json({
        success: true,
        snippet: snippets[id],
        message: "Snippet has been created successfully"
    });
};

export const getSnippet = (_, res) => {
    return res.status(200).json({
        success: true,
        snippets
    });
};

