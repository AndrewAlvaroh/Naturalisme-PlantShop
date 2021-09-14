import React from 'react'
import Button2 from '../button/Button2'

function Content4() {
    return (
        <div>
   
  
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-2 lg:p-10 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src="/Images/content1tmn.svg" alt="" />
                    <div class="border-4 border-white absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-2 md:mb-8">
                    <h1 class="font-bold uppercase text-2xl mb-5 text-center md:text-left">Perawatan Tanaman</h1>
                    <p class="text-sm"> Jasa Perawatan taman Indoor & Outdoor memberikan garansi pengerjaan sesuai waktu yang disepakati. Kami selalu memprioritaskan kepuasan pelanggan. </p>
                </div>
                <div>
                   
                    <div class="inline-block align-bottom">
                        <Button2 namaButton="Pesan Sekarang"/>
                    </div>
                </div>
            </div>
        </div>
    </div>


        </div>
    )
}

export default Content4