// Time Complexity: O(1)
// Space Complexity: O(1)

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    // Wrapper div with spacing for margin top and bottom, and small text
    <div className="my-10 mt-40  text-sm ">

      {/* Grid layout: 3 columns on small screens and above, stacked on mobile */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">

        {/* --- Column 1: Logo and short description --- */}
        <div>
          {/* Company Logo */}
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          
          {/* Description Text */}
          <p className="text-gray-600 sm:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, sed!
          </p>
        </div>

        {/* --- Column 2: Company Information Links --- */}
        <div>
          {/* Heading */}
          <p className="text-xl font-medium mb-5">COMPANY</p>

          {/* Navigation links */}
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* --- Column 3: Contact Information --- */}
        <div>
          {/* Heading */}
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

          {/* Contact details */}
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-000-000-0000</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>

      </div>
        <div className="py-9">
            <hr className="border-t border-gray-300" />
            <p className='py-5 text-sm text-center'>Copyright 2025@forever.com All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
