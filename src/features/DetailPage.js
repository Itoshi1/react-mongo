import React from 'react'
import { useParams } from 'react-router'
import { products } from '../dummy/data';

const DetailPage = () => {
  const { id } = useParams();
  const prod = products.find((product) => product.id === Number(id));
  console.log(prod);
  return (
    <div>

      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error tenetur natus explicabo omnis, sed aut, aliquam sapiente quod quidem corporis dolore dolor non, eum quasi. Earum ipsam voluptatum fuga!</p>

    </div>
  )
}

export default DetailPage