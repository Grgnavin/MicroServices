import { randomBytes } from "crypto";
import { commentsDB } from "../database/index.js";
import axios from "axios";

export const createComment = async(req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const snippetId = req.params.id;
    const { content } = req.body;
    
    const comments = commentsDB[snippetId] || [];

    // Create comment
    comments.push({ commentId, content });

    commentsDB[snippetId] = comments;

    //best place to emit an event
    await axios.post("http://localhost:8003/events", {
        type: "CommentCreated",
        data: {
            id: commentId,
            content,
            snippetId,
        },
    });

    return res.status(201).json({
        success: true,
        comment: { commentId, content },
        message: "Comment created successfully",
    });
};

export const getCommentBySnippetId = (req, res) => {
    const { snippetId } = req.params;
    return res.status(200).json({
        success: true,
        comments: commentsDB[snippetId] || [],
    });
};
