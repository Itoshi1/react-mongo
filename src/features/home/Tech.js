import React from 'react'
import { DiAtom, DiCodepen, DiCss3, DiPython, DiReact, DiSwift } from "react-icons/di";
const Tech = () => {

  return (
    <div className='my-6'>
      <h1 className='text-center text-2xl'>Technologies I use</h1>
      <div className='grid grid-cols-4 justify-items-center grid-cols-autoFit'>
        <DiReact size={200} className='hover:scale-110 hover:text-pink-700 transition-all ease-in' />
        <DiPython size={200} />
        <DiCss3 size={200} />
        <DiSwift size={200} />
        <DiAtom size={200} className='animate-spin' />
        <DiCodepen size={200} />

      </div>
    </div>
  )
}

export default Tech