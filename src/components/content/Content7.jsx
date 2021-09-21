import React from 'react'

function Content7() {
    return (

        <div >
             <div className="text-center h-96  w-full bg-cover " style={{backgroundImage:"URL('/Images/paad.png')"}}>
          <div className="border">
        
        <div className="text-2xl md:text-3xl lg:text-5xl mt-28 md:mt-20 lg:mt-16 lg:mb-3  font-semibold ">
            Jasa Perawatan Taman
        </div>
      

        <div className="my-2 lg:my-4 lg:text-xl font-semibold underline">
          MELAYANI AREA JAKARTA
        </div>

        <div className="mb-5 text-sm">
          Jasa Perawatan Taman Konsultasi Lewat Whatsapp
        </div>

        <div className="mb-5 text-xl font-semibold ">
          Harga 340 Ribu / Hari
        </div>

        <a href="https://api.whatsapp.com/send/?phone=6285658687702" className="uppercase text-sm md:text-base  px-4 py-1 lg:px-8 lg:py-2 rounded-full bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
        telp/sms/wa 085658687702
        </a>
   
        
          </div>
        </div>
        </div>
    )
}

export default Content7
