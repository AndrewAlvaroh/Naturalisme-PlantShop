import React from 'react'
import ItemCard from './itemCard/ItemCard'

function Cart() {
    return (
        <div className="mx-10">
            
        <div className="text-center my-10 text-2xl font-semibold">
            KERANJANG BELANJA
        </div>

        <div>
            <ItemCard namaProduct="Golden Barrel" harga="100.000"/>
            <ItemCard namaProduct="tess" harga="50.000"/>
        </div>
        
        <div className="border-t border-black mt-20 py-5 text-lg font-semibold px-4">
        Total :
        </div>

        <button type="button" className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline w-full" >
         Bayar
        </button>

        </div>
    )
}

export default Cart
