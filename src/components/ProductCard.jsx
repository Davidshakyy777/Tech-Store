import { Category } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className='flex flex-col gap-2 p-4 shadow'>
      <img className='self-center' src={product.img} alt="" />
      <Link to={`/products/${product.name}`}><h3 className='font-bold hover:underline'>{product.item}</h3></Link>
        
      <p className='text-md font-bold text-green-600 text-gray-600'>{product.brand}</p>
      <p className='text-blue-500 font-bold'>{product.price} ₸</p>
      <button className='bg-blue-400 text-white p-2 rounded cursor-pointer'>Add to cart</button>
    </div>
  )
}

export default ProductCard;