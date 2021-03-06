import React from 'react'
import { Link } from 'react-router-dom';
import './Carousel.css';

function Carousel() {
    return (
        <div>
            <div className="carousel relative shadow-2xl bg-white">
  <div className="carousel-inner relative overflow-hidden w-full">
    {/*Slide 1*/}
    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
    <div className="carousel-item absolute opacity-0 h-auto" >
     <Link to='/shop'> <img src="/Images/banner1.svg" alt="banner" /> </Link>
    </div>
    <label htmlFor="carousel-3" className="prev opacity-5 control-1 w-5 h-5 md:w-10 md:h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-black leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label htmlFor="carousel-2" className="next opacity-5 control-1 w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-black leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
    {/*Slide 2*/}
    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
    <div className="carousel-item absolute opacity-0 h-auto" >
     <img src="/Images/banner2.svg" alt="banner" />
    </div>
    <label htmlFor="carousel-1" className="prev opacity-5 control-2 w-5 h-5 md:w-10 md:h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-black leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label htmlFor="carousel-3" className="next opacity-5 control-2 w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-black leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
    {/*Slide 3*/}
    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
    <div className="carousel-item absolute opacity-0 h-auto" >
      <img src="/Images/banner3.svg" alt="banner" />
    </div>
    <label htmlFor="carousel-2" className="prev opacity-5 control-3 w-5 h-5 md:w-10 md:h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-base md:text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-black leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label htmlFor="carousel-1" className="next opacity-5 control-3 w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-base md:text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-black leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
    {/* Add additional indicators for each slide*/}
    <ol className="carousel-indicators">
      <li className="inline-block mr-3">
        <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-black">•</label>
      </li>
      <li className="inline-block mr-3">
        <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-black">•</label>
      </li>
      <li className="inline-block mr-3">
        <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-black">•</label>
      </li>
    </ol>
  </div>
</div>

        </div>
    )
}

export default Carousel
