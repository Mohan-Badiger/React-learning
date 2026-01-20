import React from 'react'

const Page1 = () => {

  const array = ["mohan", "chetan", "sachin","hindi"]

  return (
    <div className="flex gap-5">
      {array.map((user)=>{
         return <h1 className="text-2xl text-red-800">{user}</h1>
      })}
    </div>
  )
}

export default Page1