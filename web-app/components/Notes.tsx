"use client"
import React from 'react'

const Notes = () => {
  return (
    <div className='flex w-full h-full'>
      {/* sidebar */}
      <div className='w-[30%] border-r-2 border-white h-full'>Hello Sidebar</div>
      <div className='w-[70%]'>Content</div>
    </div>
  )
}

export default Notes
