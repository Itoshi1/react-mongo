import React from 'react'

const Header = () => {

  return (
    <div className='bg-black text-white flex justify-between px-4 py-2'>

      <h1 className='text-2xl'>Tailwind</h1>

      <nav className='space-x-4'>
        <button>About</button>
        <button>Contact</button>

      </nav>




    </div>
  )
}

export default Header