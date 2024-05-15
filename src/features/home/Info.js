import React from 'react'

const Info = () => {

  return (
    <div className='h-[360px] w-[360px] bg-black text-white rounded-full border-2 border-green-300 flex justify-center items-center mx-auto'>

      <div className='round flex flex-col'>
        <p>Name: Some Person</p>
        <p>Email: someperson@gmail.com</p>
        <p>Tel: 981246664</p>
        <p>Age: 22</p>
        <p>Experience: python, java, dart</p>
      </div>

    </div>
  )
}

export default Info