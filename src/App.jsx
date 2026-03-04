import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  // 1. Бір тауардың объектісі (аты: product)
  const product = {
    id: 1,
    img: "https://www.mobileana.com/wp-content/uploads/2025/06/Apple-iPhone-17-Pro-Max-Cosmic-Orange.webp",
    item: "iPhone-17 Pro Max",
    brand: "Apple",
    price: 800000
  }

  // 2. Осы объектіні 12 рет қайталайтын массив (атын products деп өзгерттік)
  const products = Array(12).fill(product);

  return (
    <>
      <div className='py-8 px-16'>
        <h1 className='text-green-500 text-2xl font-bold'>Біз Туралы</h1>
    
        <p className='mt-4'>
          Tech Store — үкенімізде смартфондар, ноутбуктер, планшеттер, құлаққаптар және басқа да әртүрлі электронды құрылғылар сатылады. Барлық тауарлар оригинал, сапалы және ресми кепілдікпен ұсынылады.

          Дүкен клиенттерге тиімді баға, кең таңдау және сапалы қызмет көрсетуді ұсынады. Сондықтан техника сатып алуда қауіпсіз әрі пайдалы таңдау болып саналады.
        </p>

        {/* Бір қатарда 6 тауар тұратын тор */}
        <div className=' grid grid-cols-6 gap-4 justify-between mt-6 max-md:grid-cols-2 max-xl:grid-cols-4'>
           {
            // products массивін map арқылы шығарамыз
            products.map(product => <ProductCard product={product} />)
           }
        </div>
      </div>
    </>
  )
}

export default App