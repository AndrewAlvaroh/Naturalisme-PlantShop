import React from 'react'

function Ewallet() {
    return (
        <div>
            
            <div className="border border-gray-300 rounded-md p-5 mt-6">
                        <div className="flex items-center border-b border-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <div className="ml-4">
                        <span  className="text-lg font-semibold">Bank Transfer</span> 
                        <div className="text-xs font-light">Gunakan e-wallet untuk transaksi.</div>
                        </div>
                        </div>
                        <div className="flex justify-between my-3 items-center border-b">
                            <div>
                                <div className="font-semibold">OVO</div>    
                                <div className="text-gray-700">085718855498</div>    
                            </div>
                            <div>
                                <img src="/Images/ovo.png" alt="OVO" width="50px" />
                            </div>     
                        </div>

                        <div className="flex justify-between my-3 items-center border-b">
                            <div>
                                <div className="font-semibold">DANA</div>    
                                <div className="text-gray-700">085718855498</div>    
                            </div>
                            <div>
                                <img src="/Images/dana.png" alt="DANA" width="50px" />
                            </div>     
                        </div>

                          <div className="flex justify-between my-3 items-center border-b">
                            <div>
                                <div className="font-semibold">GOPAY</div>    
                                <div className="text-gray-700">085718855498</div>    
                            </div>
                            <div>
                                <img src="/Images/gopay.png" alt="GOPAY" width="50px" />
                            </div>     
                        </div>

                        </div>

                      
                     

                       

        </div>
    )
}

export default Ewallet
