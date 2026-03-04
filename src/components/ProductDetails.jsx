import { Description } from '@mui/icons-material';
import React from 'react'

function ProductDetails() {
  const product = {
    id: 1,
    img: "https://www.mobileana.com/wp-content/uploads/2025/06/Apple-iPhone-17-Pro-Max-Cosmic-Orange.webp",
    item: "iPhone-17 Pro Max",
    brand: "Apple",
    price: 800000,
    year: 2025,
    description: `📺 Экран

6.9″ Super Retina XDR OLED

120 Hz ProMotion

Always-On Display, Dynamic Island

⚙️ Өнімділік

A19 Pro чипі

iOS 26

Өте жоғары жылдамдық (ойын, видео монтажға лайық)

📸 Камера

48 МП негізгі камера

48 МП Ultra Wide

48 МП Telephoto (оптикалық зум)

4K видео, ProRes қолдауы

💾 Жад

256GB / 512GB / 1TB / 2TB

🔋 Батарея

Ұзақ жұмыс уақыты

Жылдам зарядтау

🌊 Қорғаныс

IP68 (су мен шаңға төзімді)`,
  }

  return (
    <div className='flex py-8 px-16 max-md:flex-col'>
      <img className='w-1/2 max-md:1/2 h-1/2 font-bold' src={product.img} alt="" />
        <div className='space-y-1.5'>
          <h1 className='text-2xl font-bold'>{product.item}</h1>
          <p className='text-xl font-bold text-green-600'>{product.brand}</p>
          <p>{product.year} year.</p>
          <p>{product.description}</p>
          <button className='bg-blue-400 text-white py-3 px-6 rounded cursor-pointer'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductDetails;