import React from 'react'
import { Link } from 'react-router-dom'
import Button2 from '../button/Button2'

function Content1(props) {
    return (
        <div className="mx-7 my-16">
            <div className="container mx-auto my-5 ">
  <div className="relative bg-white rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
    <div className="z-0 order-1  md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg ">
    <img src={props.imgContent} alt="content1" className="absolute inset-0 w-full h-full object-fill object-center" />
      <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
      <Link to={props.toTitle}>  <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
        {props.title}
        </h3>  </Link>
        <h4 className="w-full text-xl text-gray-100 leading-tight">By Naturalisme</h4>
      </div>
      <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
    <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
      <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full  rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
       
      <Link to={props.toTitle}>    <h3 className="hidden md:block font-bold text-2xl text-gray-700 md:mb-5">
        {props.title}
        </h3> </Link>
      
        <p className="text-gray-600 text-justify text-xs md:text-xs lg:text-sm ">
        {props.isi}
        </p>
        <div className="flex items-baseline mt-4 text-blue-600 hover:text-blue-900 focus:text-blue-900" >
         
          <Button2 namaButton="Pesan Sekarang" to={props.toButton} />
           
            </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Content1
