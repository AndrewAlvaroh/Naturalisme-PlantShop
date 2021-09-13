import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function LandingPage() {
    return (
        <div id="slider">
            <figure>
               <Link to='/shop'> <img src="/Images/banner1.png" alt="Banner1" /></Link>
               <Link to='/perawatan'> <img src="/Images/banner2.png" alt="Banner2" /></Link>
               <Link to='/shop'> <img src="/Images/banner3.png" alt="Banner3" /> </Link> 
               <Link to='/perawatan'> <img src="/Images/banner2.png" alt="Banner2" /></Link>
               <Link to='/shop'> <img src="/Images/banner1.png" alt="Banner1" /></Link>
            </figure>
        </div>
    )
}

export default LandingPage
