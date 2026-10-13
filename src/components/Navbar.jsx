import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-900 text-white p-4'>
        <div className="logo">
            <span className="font-bold text-xl mx-8 py-2 ">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-200'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-200'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default navbar
