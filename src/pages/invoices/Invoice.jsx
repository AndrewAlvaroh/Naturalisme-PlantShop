import React from 'react'
import Alerts from '../../components/alerts/Alerts'
import Button4 from '../../components/button/Button4';
import Banktf from '../../components/transfer/Banktf';
import Ewallet from '../../components/transfer/Ewallet';
import UploadImage from '../../components/uploadImage/UploadImage';

function Invoice() {
    return (
        <div className="mx-10">
            <div>
                <Alerts />
            </div>

            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-2">
                    <div className="bg-blue-600 bg-gradient-to-tl from-gray-600  p-4 rounded-lg text-gray-200">
                        <h1 className="text-2xl font-semibold mb-5">Rp. 200.000</h1>
                        <p className="text-sm font-semibold">SEMUA ATAS NAMA </p>
                        <h1 className="font-bold text-xl">RIFAAT IMAPPAGANTI AWALUDDIN </h1>
                    </div>

                <Banktf />
                <Ewallet />

                <Button4 />
                   
            </div>


                <div className="col-span-2">
                    <UploadImage />
                </div>
            </div>   
        </div>
    )
}

export default Invoice
