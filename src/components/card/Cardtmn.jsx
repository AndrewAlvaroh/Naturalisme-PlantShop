import React from 'react'
import { Link } from 'react-router-dom'

function Cardtmn() {
    return (
        <div>
           
  
    <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-56 p-4" style={{backgroundImage: 'url(https://via.placeholder.com/450x450)'}}>
        
        </div>
        <div className="p-4">
          <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Indoor Minimalis A</p>
          <p className="text-3xl text-gray-900">300.000</p>
         
        </div>
        <div className="flex p-4 border-t border-gray-300 text-gray-700">
          <div className="flex-1 inline-flex items-center">
                <ul>
                    <li>4 Tanaman </li>
                    <li>Pot</li>
                    <li>Peralatan Tanam </li>
                    <li>Dll</li>
                        <br />
                    <Link href="" className="uppercase  px-8 py-2  bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
                        Pesan
                    </Link>
                </ul>
  
  </div></div></div></div></div>

      
    )
}

export default Cardtmn
