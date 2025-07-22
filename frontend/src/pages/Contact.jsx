import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-200">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>209 , Wales street <br /> Suite 103, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br />Email: admin@forever.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers At Forever</p>
          <p className=' text-gray-600'>Learn more about our Teams and Job Openings.</p>
          <button className='border  border-black  px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Expore Jobs</button>
          
        </div>

      </div>
        <NewsLetterBox/>  
      
    </div>
  )
}

export default Contact
