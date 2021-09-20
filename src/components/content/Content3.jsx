import React from 'react'

function Content3(props) {
    return (
        <div className="text-center h-72 w-full bg-cover " style={{backgroundImage:"URL('/Images/indoor.jpeg')"}}>
          <div className="border">
        
        <div className="text-xl md:text-3xl lg:text-4xl mt-8 lg:mt-5 lg:mb-3  font-semibold ">
        {props.title}
        </div>
        <div className="text-xs  md:text-sm lg:text-base">
        Kami melayani Pembuatan, Perawatan hingga Perbaikan Taman Rumah Anda
        </div>

        <div className="my-2 lg:my-4 text-base font-semibold underline">
          MELAYANI AREA JAKARTA
        </div>

        <div className="mb-5 text-sm">
          Request Desain Taman Konsultasi Lewat Whatsapp
        </div>

        <a href="https://api.whatsapp.com/send/?phone=6285658687702" className="uppercase text-sm md:text-base  px-4 py-1 lg:px-8 lg:py-2 rounded-full bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
        telp/sms/wa 085658687702
        </a>
   
        
          </div>
        </div>
    )
}

export default Content3
