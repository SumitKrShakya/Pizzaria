import React from 'react'

const D1 = () => {
    const circles = Array(16).fill(<Circle/>)
  return (
    <div className='w-4 h-4 grid grid-cols-4 grid-flow-row bg-red-600'>
        {circles.map((e,i)=>{
            return <Circle key = {i} />;
        })}

    </div>
  )
}
const Circle = () =>{
    return(
        <div className='w-1 h-1 flex-row bg-white rounded-full'>
        </div>
    )
}

export default D1
 
