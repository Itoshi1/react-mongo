import React from 'react'

const Display = () => {

  return (
    <div className='grid grid-cols-2 items-center bg-black text-white'>
      <div>
        <dotlottie-player src="https://lottie.host/43dca544-4f0e-4387-b7fd-fb201d97460e/75poM9bPCH.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className="dis-info">
        <h1 className='text-2xl'>Hi, I am John</h1>
        <p className='text-yellow-200 my-2'>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus maxime modi sint tempora dicta architecto, magnam minima illo quia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, qui!</p>
      </div>
    </div>
  )
}

export default Display