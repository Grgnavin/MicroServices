import { randomBytes } from 'crypto';

export const createComment = (req, res) =>{
    const id = randomBytes(4).toString('hex');
    const { snippetId } = req.params;
    const { content } = req.body;

    

}

export const getCommentBySnippetId = (req, res) =>{

}