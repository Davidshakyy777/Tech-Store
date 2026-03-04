import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Cart({close}) {
    const product = {
    id: 1,
    img: "https://www.mobileana.com/wp-content/uploads/2025/06/Apple-iPhone-17-Pro-Max-Cosmic-Orange.webp",
    item: "iPhone-17 Pro Max",
    brand: "Apple",
    price: 800000
  }

  // 2. Осы объектіні 12 рет қайталайтын массив (атын products деп өзгерттік)
  const products = Array(5).fill(product);

  return (
    <div className='bg-white h-screen w-auto flex flex-col absolute right-0 top-0 p-4 gap-4'>
        <div className='text-black flex justify-between'>
            <h1 className='text-xl font-bold'>Cart</h1>
            <CloseIcon onClick={close} className='cursor-pointer' />
        </div>
        <div className='flex flex-col gap-8 overflow-auto'>
            {
                products.map(p => (
                    <div className='min-w-[150px] flex'>
                        <img className='w-[150px]' src={product.img} alt="" />
                        <div>
                            <h3>{p.item}</h3>
                            <p>{p.brand}</p>
                            <p>{p.price} tg</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <button className='bg-blue-400 text-white rounded-xl py-2 cursor-pointer'>Buy</button>
    </div>
  )
}

export default Cart