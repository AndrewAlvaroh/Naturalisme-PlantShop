import React from 'react'
import { Link } from 'react-router-dom'

function Button() {
    return (
        <div>
           <Link to='/shop'> <button className="w-full sm:w-auto  px-4  py-2 md:px-7  mb-4  text-sm md:text-base   font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white focus:outline-none transition-colors duration-200 rounded-full block  bg-white border-black border text-black hover:text-gray-500 ">Lihat Semua</button>
           </Link>
        </div>
    )
}

export default Button
