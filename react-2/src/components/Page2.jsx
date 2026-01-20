import React, { useState } from 'react'

const Page2 = () => {

    let [data, setData] = useState();

    const btnClick = ()=>{
        setData("Clicked")
    }
  
  return (
    <div className='p-10'>
        <button className='border px-3 py-1' onClick={btnClick}>Click Me</button>
        {data}
    </div>
  )
}

export default Page2