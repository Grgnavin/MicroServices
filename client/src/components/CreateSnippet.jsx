import axios from 'axios';
import { useEffect, useState } from 'react';

const CreateSnippet = () => {
    const[title, setTitle] = useState('');
    const[snippet, setSnippet] = useState('');
    const[data, setData] = useState([]);
    const createComment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/snippets',{ title, snippet } );
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/v1/snippets');
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    console.log(data);
    
    return (
        <div className='mt-10'>
            <form onSubmit={createComment} className='flex flex-col gap-4'>
                <input 
                    type="text" 
                    name="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title' 
                    className='border rounded px-2 py-1 w-fit'
                />
                <textarea 
                    name="snippet"
                    value={snippet}
                    onChange={(e) => setSnippet(e.target.value)}
                    placeholder='Write your code snippet here'
                    className='border rounded px-2 py-1'
                />
                <button className='w-fit bg-black text-white px-6 py-2 rounded cursor-pointer'>Add</button>
            </form>
        </div>
    )
}

export default CreateSnippet