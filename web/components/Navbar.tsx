import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center justify-center p-4'>
        <div className='flex justify-between fixed top-5 bg-white/20 text-white w-[80%] px-10 py-2 rounded-full mx-auto items-center gap-4'>
            {/* left */}
            <div className='flex items-center gap-4'>
                <h1 className='text-xl font-bold'>Earth</h1>
            </div>
            {/* right */}
            <div className='flex items-center gap-4'>
                <h1 className='text-xl font-bold'>Login</h1>
            </div>

        </div>
    </div>
  )
}

export default Navbar