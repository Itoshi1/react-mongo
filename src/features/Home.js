import React from 'react'
import { products } from '../dummy/data';
import { useNavigate } from 'react-router';


const Home = () => {

  const nav = useNavigate();

  const person = {
    address: {
      city: 'BTK'
    }
  };
  console.log(person.address?.city);


  return (
    <div className='p-4'>

      <div>
        {products.map((product) => {
          return <div onClick={() => nav(`/product/${product.id}`)} key={product.id} className='space-y-2 cursor-pointer mb-4'>
            <h1 className='text-2xl'>{product.title}</h1>
            <img src={product.thumbnail} alt="" />

          </div>
        })}

      </div>

    </div>
  )
}

export default Home