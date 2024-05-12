import React from 'react'
import Image from './assets/images/undraw_video_games_x1tr.svg'

const Home = () => {
  return (
    <div>
      <div className="header bg-black text-white h-[50px] flex gap-10">
        <h1 className='m-3 ml-9 inline grow'>Demo </h1>
        <a href="" className='m-3'>About </a><a href="" className='m-3 mr-14'>Contact</a>
      </div>
      <div className="main grid grid-cols-2 pb-6">
        <div className="display">
          <img className='m-auto mt-[30%] h-[60%] w-[60%] animate-bounce' src={Image} alt="" />
        </div>
        <div className="info place-content-center mt-1">
          <h2 className='font-bold text-4xl pb-3'>Hi, I am John</h2>
          <h3 className='text-red-400 pb-2'>Some Dev, Freelancer, All Rounder</h3>
          <p className='w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
        </div>
      </div>
      <div className="section">
        <h1 className='font-bold text-4xl text-center pb-20'>Technologies I use </h1>
      </div>
      <div className="icons w-[90%] m-auto
       text-9xl justify-center flex flex-wrap gap-28 pb-16">
        <i class="fa-brands fa-react "></i>
        <i class="fa-brands fa-vuejs"></i>
        <i class="fa-brands fa-java"></i>
        <i class="fa-brands fa-python animate-spin"></i>
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-swift"></i>
      </div>
      <div>
        <h1 className='font-bold text-4xl text-center pb-20'>Who am i ? </h1>
      </div>
      <div className='bg-black text-white m-auto w-[300px] h-[300px] border-4 border-green-300 rounded-full content-center mb-20'>
        <div className='m-auto w-[60%] h-[50%] content-center'>
          <h1>Name : Some Person</h1>
          <h1>Email : someperson@gmail.com</h1>
          <h1>Tel : 978349800</h1>
          <h1>Age : 67</h1>
          <h1>Experience : Python, Java, Swift</h1>
        </div>

      </div>
      <div className='footer bg-black h-52 border-8 border-black bt-'>
      </div>

    </div >
  )
}

export default Home