import axios from 'axios';
import { useEffect, useState } from 'react';
import CreateComment from './CreateComment';

const CreateSnippet = () => {
    const [title, setTitle] = useState('');
    const [snippet, setSnippet] = useState('');
    const [data, setData] = useState({});
    
    const createComment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/snippets', { title, snippet });
            alert(res.data.message);
            setTitle('');
            setSnippet('');
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
        };
        fetchData();
    }, []);

    return (
        <div className='mt-10'>
            {/* Form to create new snippet */}
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

            {/* Display all snippets */}
            {
                data.snippets && Object.values(data.snippets).map((snippet) => (
                    <div key={snippet.id} className='mt-4 border p-3 rounded'>
                        <h3 className='text-lg font-bold'>{snippet.title}</h3>
                        <p>{snippet.code}</p>

                        {/* Comment section below the snippet */}
                        <CreateComment snippetId={snippet.id} />
                    </div>
                ))
            }
        </div>
    );
}

export default CreateSnippet;
