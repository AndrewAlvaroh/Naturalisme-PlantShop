import React from 'react'

function Step() {
    return (
        <div style={{backgroundColor : "#F9F6F0"}} className="md:h-60 ">
        
     <div className="w-full py-6 md:pt-14">
      <div className="text-center text-sm font-bold md:text-lg lg:text-xl py-5">  Hanya 4 Langkah Untuk Mendapatkan Tanaman yang Berkualitas</div>
  <div className="flex">
    <div className="w-1/4">
      <div className="relative mb-2">
        <div className="w-10 h-10 mx-auto bg-gray-800 rounded-full text-lg text-white flex items-center">
          <span className="text-center text-white w-full">
                    1   
          </span>
        </div>
      </div>
      <div className="text-xs text-center md:text-lg font-semibold">Login</div>
    </div>
    <div className="w-1/4">
      <div className="relative mb-2">
        <div className="absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className="w-0 bg-gray-800 py-1 rounded" style={{width: '100%'}} />
          </div>
        </div>
        <div className="w-10 h-10 mx-auto bg-gray-800 rounded-full text-lg text-white flex items-center">
          <span className="text-center text-white w-full">
            2
          </span>
        </div>
      </div>
      <div className="text-xs text-center md:text-lg font-semibold">Lihat Produk</div>
    </div>
    <div className="w-1/4">
      <div className="relative mb-2">
        <div className="absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className="w-0 bg-gray-800 py-1 rounded" style={{width: '33%'}} />
          </div>
        </div>
        <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
          <span className="text-center text-gray-600 w-full">
            3
          </span>
        </div>
      </div>
      <div className="text-xs text-center md:text-lg font-semibold">Pesan / Bayar</div>
    </div>
    <div className="w-1/4">
      <div className="relative mb-2">
        <div className="absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className="w-0 bg-gray-800 py-1 rounded" style={{width: '0%'}} />
          </div>
        </div>
        <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
          <span className="text-center text-gray-600 w-full">
           4
          </span>
        </div>
      </div>
      <div className="text-xs text-center md:text-lg font-semibold">Pengiriman</div>
    </div>
  </div>
</div>



        </div>
    )
}

export default Step
