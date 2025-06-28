import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-center space-y-6'>
        <h1 className='text-6xl font-bold text-white drop-shadow-lg'>
          Welcome to <span className='text-violet-300'>Earth</span>
        </h1>
        <p className='text-xl  text-violet-200 font-medium'>
          Second Brain for Developer
        </p>
        <Link href="/home" className='bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-xl mt-10 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25'>
          Explore
        </Link>
      </div>
    </div>
  )
}

export default page
