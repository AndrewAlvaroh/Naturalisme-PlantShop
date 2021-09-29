import React from 'react'

function Alerts() {
    return (
        <div>
            <div className="bg-blue-100 px-6 py-4 my-4 rounded-md text-lg lg:flex items-center mx-auto w-full lg:justify-between">
            <div className="flex items-center mb-3 lg:mb-0">
            <svg viewBox="0 0 24 24" className="text-blue-600 w-10 h-10 md:w-8 md:h-8 lg:w-8 lg:h-8 mr-3">
                <path fill="currentColor" d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z" />
            </svg>
            <span className="font-sans text-xs md:text-sm lg:text-base">
            Silahkan lakukan transfer sebelum Anda melakukan konfirmasi. WhatsApp kami jika Anda ragu!
            </span>
            </div>
             
            
            <div className="bg-blue-600 hover:bg-blue-700 text-white lg:px-6 py-2 rounded-md"> 
                <a  href="https://api.whatsapp.com/send/?phone=6285658687702">
                <div className="flex items-center justify-center text-sm lg:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                    Whatsapp
                </div>
                </a>  
                
            </div>
            </div>
            

        </div>
    )
}

export default Alerts
