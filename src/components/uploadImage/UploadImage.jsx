import React from 'react'

function UploadImage() {
    return (
        <div className="border border-gray-300 rounded-md p-6 mt-5 lg:mt-0">
        <h1 className="text-lg font-bold text-center">Konfirmasi Pembayaran</h1>
    <form className="mt-8 space-y-3" action="#" method="POST">
  <div className="grid grid-cols-1 space-y-2">
    <label className="text-sm font-bold text-gray-500 tracking-wide">Atas Nama :</label>
    <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type placeholder="name" />
  </div>
  <div className="grid grid-cols-1 space-y-2">
    <label className="text-sm font-bold text-gray-500 tracking-wide">Kirim Foto Pembayaran</label>
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
        <div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
        
          <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
        
          </div>
          <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href id className="text-blue-600 hover:underline">select a file</a> from your computer</p>
        </div>
        <input type="file" className="hidden" />
      </label>
    </div>
  </div>
  <p className="text-sm text-gray-300">
    <span>File type: jpg,jpeg,png</span>
  </p>
  <div>
    <button type="submit" className="my-5 w-full flex justify-center bg-green-600 text-gray-100 p-4  rounded-full tracking-wide
    font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-700 shadow-lg cursor-pointer transition ease-in duration-300">
      Upload
    </button>
  </div>
</form>

        </div>
    )
}

export default UploadImage
