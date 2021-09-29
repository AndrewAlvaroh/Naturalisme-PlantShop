import React, { useState } from 'react'

function ItemCard(props) {

    const [beli,setBeli]  = useState(1);
    
    const handlePlus = () => {
        setBeli(beli + 1)
    }
    const handleMinus = () => {
        if(beli > 1) {
            setBeli(beli - 1)
        }
    }

    return (
        <div>
            
            <div>
                <div className="border border-black md:py-5 lg:py-5 lg:my-3">

                <div className="grid grid-cols-5 items-center gap-7">
                    <div className="px-4">
                        <img src={props.foto} className="w-16 md:w-36 lg:w-64" alt="product" />
                    </div>

                    <div>
                        <h3 className="font-semibold text-xs lg:text-lg ">{props.namaProduct}</h3>
                    </div>

                    <div className="text-red-500 hover:text-red-400 text-xs md:text-base">
                      <button>  Hapus Produk </button>
                    </div>




                    <div>
                        
                            <div className="flex flex-row h-9 w-full rounded-md relative bg-transparent mt-1" >
                            <button onClick={handleMinus} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none">
                               <span className="m-auto text-base lg:text-2xl font-thin">-</span>
                            </button>  
                                <input value={beli}  className=" focus:outline-none text-center w-10 bg-gray-300 font-semibold text-xs md:text-md lg:text-base hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" />        
                            <button onClick={handlePlus} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">
                               <span className="m-auto text-base  lg:text-2xl font-thin">+</span> </button>  
                            </div>
                    </div>

                    <div>
                       <h3 className="text-sm md:text-lg font-semibold">{props.harga}</h3>
                    </div>

                </div>
           
            </div>
            </div>

        </div>
    )
}

export default ItemCard
