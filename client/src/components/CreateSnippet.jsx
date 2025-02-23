
const CreateSnippet = () => {
    return (
        <div className='mt-10'>
            <form action="" className='flex flex-col gap-4'>
                <input 
                    type="text" 
                    name="snippet" 
                    placeholder='Title' 
                    className='border rounded px-2 py-1 w-fit'
                />
                <textarea 
                    placeholder='Write your code snippet here'
                    className='border rounded px-2 py-1'
                />
                <button className='w-fit bg-black text-white px-6 py-2 rounded cursor-pointer'>Add</button>
            </form>
        </div>
    )
}

export default CreateSnippet