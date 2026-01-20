import React, { useRef } from 'react'

const Page3 = () => {

    const inputRef = useRef();

    return (
        <div className='p-5'>
            <input type="text" ref={inputRef} className='border'/>
            <button className='border ml-2 px-2' onClick={()=>{console.log(inputRef.current.value);}}>Click me</button>
        </div>
    )
}

export default Page3