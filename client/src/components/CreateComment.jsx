import axios from 'axios';
import { useState } from 'react'

const CreateComment = ({ snippet }) => {
    const[content, setContent] = useState('');
    const[comments, setComments] = useState([]);
    const AddComment = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8001/api/v1/snippet/${snippet?.id}/comment`, {content});
            console.log(res.data);
            setComments([...comments, res.data.comment]);
            setContent('');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex flex-col gap-4'>
    {/* Display all comments */}
    <ul> 
        {snippet?.comments.map((comment, index) => (
            <li key={index} className='p-2 rounded border'>
                {comment.content}
            </li>
        ))}
    </ul>

    {/* Form to add a new comment */}
    <form onSubmit={AddComment} className="flex flex-col gap-2">
        <input 
            type="text" 
            name="name" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="name" 
            placeholder="Comment" 
            className='border rounded px-2 py-1 w-full mb-2'
        />
        <button type='submit' className='w-fit bg-black text-white px-6 py-2 rounded cursor-pointer'>
            Add
        </button>
    </form>
</div>

)
}

export default CreateComment