import React from 'react'
import {Helmet} from "react-helmet";

import ItemCard from './itemCard/ItemCard'
import Footer from '../../components/footer/Footer';

function Cart() {
    return (
        <div>
        
        <Helmet>
            <title>Naturalisme | Cart Product</title>
            <meta name='description' content='Kategori Tanaman, Tanaman Indoor,Tanaman Outdoor,Perlengkapan Tanaman' />
        </Helmet>
      
        <div className="mx-5 md:mx-10 mb-20 lg:mb-32">
            
        <div className="text-center my-10 text-lg md:text-2xl font-semibold">
            KERANJANG BELANJA
        </div>

        <div>
            
            <ItemCard foto="/Images/indoor1.png" namaProduct="Golden Barrel" harga="100.000"/>

            <ItemCard foto="/Images/indoor2.png" namaProduct="coba" harga="20.000"/>
          
        </div>
        
        <div className="border-t border-black mt-20 py-5 text-lg font-semibold px-4">
        Total :
        </div>

        <button type="button" className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline w-full" >
         Lanjutkan Checkout
        </button>
        
        </div>

        <Footer />
        </div>
    )
}

export default Cart
