import React from 'react'
import {Helmet} from "react-helmet";

import Card from '../../components/card/Card'

function Pot() {
    return (
        <div>
        <Helmet>
            <title>Naturalisme | Kategori Shop Pot</title>
            <meta name='description' content='Kategori Tanaman, Tanaman Indoor,Tanaman Outdoor,Perlengkapan Tanaman' />
        </Helmet>
           <div className="grid grid-cols-2 md:grid-cols-4 mt-10">

                    <div>
                    <Card imgProduct="/Images/pot1.png" 
                           imgProduct2="/Images/pot1.png" 
                    titleTanaman="Pot" titleTanaman2="Tanah Liat" jenis="Perlengkapan"
                    harga="45.000"
                    to=""
                        />
                    </div>

                    <div>
                    <Card imgProduct="/Images/pot2.png" 
                          imgProduct2="/Images/pot2.png" 
                    titleTanaman="Pot" titleTanaman2="Tanah Liat" jenis="Perlengkapan Tanam"
                    harga="35.000" 
                    to=""
                        />
                    </div>

                   
                    
                  
                </div>      

        </div>
    )
}

export default Pot
