import React from 'react'
import {Helmet} from "react-helmet";

function Register() {
    return (
        <div>
        <Helmet>
            <title>Naturalisme | Register</title>
            <meta name='description' content='Kategori Tanaman, Tanaman Indoor,Tanaman Outdoor,Perlengkapan Tanaman' />
        </Helmet>
            
<div>
  <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
    <div className=" text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth: '1000px'}}>
      <div className="md:flex w-full">
        <div className="hidden md:block w-1/2 py-10 px-10">
          <img src="/Images/login.png" alt="login" />
        </div>
        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">Register </h1>
         
          </div>
          <div>
           
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
               
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                  <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Username" />
                </div>
              </div>
            </div>

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
               
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                  <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="email" />
                </div>
              </div>
            </div>

            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
               
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                  <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Password" />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
               
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                  <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Confirm Password" />
                </div>
              </div>
            </div>


            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
              
                <button className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Selanjutnya</button>
             

              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </div>
  
 
</div>




        </div>
    )
}

export default Register
