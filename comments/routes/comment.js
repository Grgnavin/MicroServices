import express from 'express';
import { createComments, getCommentBySnippetId } from '../controller/comment.js';

const router = express.Router();

router.route("/:id/comment").post(createComments).get(getCommentBySnippetId);


export default router;