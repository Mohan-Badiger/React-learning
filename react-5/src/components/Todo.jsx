
const Todo = () => {
  return (
    <div className='h-screen w-full flex bg-gray-200 items-center justify-center'>
        <div className='h-130 w-110 bg-gray-500 text-center p-7'>
          <div className='mt-2 text-2xl font-semibold font-sans text-white'>
            Todo App
          </div>
          <div className='mt-8 flex gap-3 justify-center'>
            <input type="text" placeholder='Enter Text' className='border outline-0 px-5 py-2 text-md bg-gray-300 w-full'/>
            <button className='border px-6 bg-gray-300 '>ADD</button>
          </div>
        </div>
    </div>
  )
}

export default Todo