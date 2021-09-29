import React from 'react'
import {Helmet} from "react-helmet";

import Alerts from '../../components/alerts/Alerts'
import Banktf from '../../components/transfer/Banktf';
import Ewallet from '../../components/transfer/Ewallet';
import UploadImage from '../../components/uploadImage/UploadImage';
import Footer from '../../components/footer/Footer'


function Invoice() {
    return (
        <div>
        <Helmet>
            <title>Naturalisme | Invoice</title>
            <meta name='description' content='Kategori Tanaman, Tanaman Indoor,Tanaman Outdoor,Perlengkapan Tanaman' />
        </Helmet>

        <div className="mx-10 my-16">
            <div className="mb-8">
                <Alerts />
            </div>

            <div className="lg:grid lg:grid-cols-4 lg:gap-10">
                <div className="lg:col-span-2">
                    <div className="bg-green-600 bg-gradient-to-tl from-gray-600  p-4 rounded-lg text-gray-200">
                        <h1 className="text-2xl font-semibold mb-5">Rp. 200.000</h1>
                        <p className="text-sm font-semibold">SEMUA ATAS NAMA </p>
                        <h1 className="font-bold text-xl">RIFAAT IMAPPAGANTI AWALUDDIN & NATURALISME </h1>
                    </div>

                <Banktf />
                <Ewallet />

              
                   
            </div>


                <div className="lg:col-span-2">
                    <UploadImage />
                </div>
            </div>   


           
        </div>
        <Footer />
        </div>
    )
}

export default Invoice
