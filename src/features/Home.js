import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur dignissimos! Minima itaque commodi eveniet magni ullam blanditiis architecto, sequi cum fuga labore adipisci iure reprehenderit delectus corrupti repudiandae consectetur. Eum, necessitatibus. Placeat, vero modi quidem ut, laudantium sed illo natus odio blanditiis unde quae error delectus est! Asperiores, magni.</h1>

      <NavLink to='/' className='bg-red-300'>Go to Child 1</NavLink>
      <NavLink to='/child2' className='bg-green-300'>Go to Child 2</NavLink>

      <Outlet />
    </div>
  )
}

export default Home