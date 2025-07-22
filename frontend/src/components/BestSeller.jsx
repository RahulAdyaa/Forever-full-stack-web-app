import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';


const BestSeller = () => {
    // Accessing the 'products' array from global context
    const {products}=useContext(ShopContext);

    // Local state to store the top 5 best-selling products
    const [bestSeller,setBestSeller] = useState([]);

    // useEffect runs once when the component mounts (because of empty dependency array [])
    useEffect(()=>{
        // Filter products to include only those marked as bestsellers
        const bestProduct = products.filter((item)=>(item.bestseller))
        // Take the first 5 bestsellers and update the state
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title text1={"BEST"} text2={"SELLERS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quia est tempora sit delectus! Ad eveniet iste sint dolore eaque.
            </p>
        </div>
        {/* To display products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 gap-4 gap-y-6 '>   
            {
                bestSeller.map((item ,index)=>(
                    <ProductItem key={index} id={item._id } image={item.image} name={item.name} price={item.price}/>
                ))
            }

        </div>

      
    </div>
  )
}

export default BestSeller
