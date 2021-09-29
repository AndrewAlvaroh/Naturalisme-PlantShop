import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css';

function Card(props) {
    return (
        <div>
            
          
            <div className="bg-white flex">
            <div className="w-44 md:w-60 p-2 md:p-4 lg:p-3  bg-gray-100 rounded-xl  shadow-xl hover:shadow-3xl  transform duration-500 ">
               
               <div className="box">
               <Link to={props.to}> 
                <img className="w-48 h-40  md:w-60 md:h-44 lg:w-72  lg:h-44  object-cover rounded-t-md  " src={props.imgProduct} alt="produk" /> 
                <img className="w-48 h-40  md:w-60 md:h-44 lg:w-72  lg:h-44  object-cover rounded-t-md hover-img " src={props.imgProduct2} alt="produk" />     
               </Link>
               </div>

               <div className="mt-4">
               <h1 className="text-base font-bold md:text-lg lg:text-xl text-gray-700"><span className="text-red-800">{props.titleTanaman}</span>  {props.titleTanaman2}</h1>
            
               <p className="text-xs md:text-sm italic mt-1 text-gray-700">{props.jenis}</p>
               
               <div className="mt-3 md:mt-5 mb-2 flex justify-between  pr-2">
                   <button className="block text-sm md:text-base font-semibold text-gray-700 cursor-auto">{props.harga}</button>
                  
                  
                  
                  
                   <button className="text-sm block">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                   </svg>
                   </button>
               </div>
               </div>
           </div>
            </div>

        </div>
    )
}

export default Card
