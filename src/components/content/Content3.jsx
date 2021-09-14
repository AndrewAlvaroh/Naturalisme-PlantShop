import React from 'react'
import { Link } from 'react-router-dom'

function Content3() {
    return (
        <div>

<div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
  <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
    <div className="lg:w-1/2">
      <div />
      <img src="/Images/content1tmn.svg" alt="" className="h-64 bg-cover lg:rounded-lg lg:h-full"/>
    </div>
    <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
      <h2 className="text-3xl text-gray-800 font-bold"><span className="text-red-800">Jasa </span>Perawatan Taman</h2>
      <p className="mt-4 text-gray-600">
      Jasa Perawatan taman Indoor & Outdoor memberikan garansi pengerjaan sesuai waktu yang disepakati. Kami selalu memprioritaskan kepuasan pelanggan. 
      </p>
      <div className="mt-8">
        <Link to="/" className="bg-gray-900 text-gray-100 hover:bg-gray-800 px-5 py-3 font-semibold rounded">Start Now</Link>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Content3
