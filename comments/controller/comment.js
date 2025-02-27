import { randomBytes } from "crypto";
import { commentsDB } from "../database/index.js";

export const createComments = (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const { snippetId } = req.params;
    const { content } = req.body;
 
    const comments = commentsDB[snippetId] || [];

    //create comment
    comments.push({ commentId, content });

    commentsDB[snippetId] = comments;

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

}