import React from 'react'
import Button3 from '../button/Button3'

function CheckoutHarga() {
    return (
        <div>
             <div className="bg-gray-100 rounded-md">
                    <h1 className="text-center text-xl my-8 pt-8 md:pt-10 lg:pt-0 font-semibold">Pesanan Anda</h1>    
                    <div className="mx-8">
                    <div>
                        <div className="flex justify-between my-2">
                        <div> Nama Produk </div>
                        <div className="font-semibold"> Harga</div>   
                        </div>  

                        <div className="flex justify-between my-2">
                        <div> Nama Produk </div>
                        <div className="font-semibold"> Harga</div>   
                        </div>  

                        <div className="mt-5 border-b-2 border-gray-300 pb-5">Sub Total :   <span className="font-semibold">400. 000  </span></div>
                    </div>

                    <div className="py-5 border-b-2 border-gray-300">
                       <div className="font-semibold text-xl text-center my-5">Pilih Pengiriman</div>  
                       <label className="block my-2"><input type="radio" name="JNE" id="JNE" /><span className="font-semibold ml-1">JNE - REG :</span>  10.000 (1 - 2 hari )</label>
                       <label className="block my-2"><input type="radio" name="JNE" id="JNE" /><span className="font-semibold ml-1">JNE - YES :</span>  34.000 (1  hari )</label>
                       <label className="block my-2"><input type="radio" name="JNE" id="JNE" /><span className="font-semibold ml-1">TIKI - SDS :</span>  270.000 </label>
                       </div>

                       <div className="my-5">Total  : <span className="font-semibold"> 200.000 </span></div>
                    </div>
                    
                    <div className="text-center mt-10 lg:mt-20">
                    <Button3 />
                    </div>
                  
                </div>
        </div>
    )
}

export default CheckoutHarga
