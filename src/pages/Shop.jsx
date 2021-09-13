import React from 'react'
import {Link} from 'react-router-dom'

function Shop() {
    return (
        <div className="mx-14">
                
            <div className="text-3xl font-semibold text-center my-10">
            Enjoy Shopping
            </div>

            <div className="flex justify-center border-t border-b border-black p-1 md:p-4">
               <div className="mx-3 text-sm md:text-base md:mx-12"> <Link to='/' >  INDOOR </Link></div> 
                <div className="mx-3 text-sm md:text-base md:mx-12"><Link to='/' >  OUTDOOR </Link></div>
                <div className="mx-3 text-sm md:text-base md:mx-12"><Link to='/' > POT & VITAMIN  </Link></div>
                <div className="mx-3 text-sm md:text-base md:mx-12"><Link to='/' >  PUPUK </Link></div>
            </div>

        </div>
    )
}

export default Shop
