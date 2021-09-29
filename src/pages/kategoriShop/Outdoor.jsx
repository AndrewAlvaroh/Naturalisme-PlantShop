import React from 'react'
import {Helmet} from "react-helmet";

import Card from '../../components/card/Card'

function Outdoor() {
    return (
        <div>
         <Helmet>
            <title>Naturalisme | Kategori Shop Outdoor</title>
            <meta name='description' content='Kategori Tanaman, Tanaman Indoor,Tanaman Outdoor,Perlengkapan Tanaman' />
        </Helmet>

                <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
                    <div>
                    <Card imgProduct="/Images/outdoor1.png" 
                         imgProduct2="/Images/outdoor1h.png" 
                    titleTanaman="Terang" titleTanaman2="Bulan" jenis="Tanaman Outdoor"
                    harga="400.000"
                    to=""
                    />
                    </div>

                    <div>
                    <Card imgProduct="/Images/outdoor2.png" 
                          imgProduct2="/Images/outdoor2h.png" 
                    titleTanaman="Ekor" titleTanaman2="Tupai" jenis="Tanaman Indoor"
                    harga="65.000" 
                    to=""
                    />
                    </div>

                    
                  
                </div>      
               
        </div>
    )
}

export default Outdoor
