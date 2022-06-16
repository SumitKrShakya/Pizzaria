import React from 'react'

const D1 = () => {
  return (
    <div className='w-16 h-16 grid grid-rows-4  bg-red-600'>{Array(16).fill(<Circle/>)}</div>
  )
}
const Circle = () =>{
    return(
        <div className='w-4 h-4 bg-white rounded-full'>

        </div>
    )
}

export default D1
 
