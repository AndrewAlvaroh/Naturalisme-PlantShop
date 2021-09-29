import React from 'react'
import {Helmet} from "react-helmet";

import Card from '../../components/card/Card'

function Pupuk() {
    return (
        <div>
        <Helmet>
            <title>Naturalisme | Kategori Shop Pupuk</title>
            <meta name='description' content='Kategori Tanaman, Tanaman Indoor,Tanaman Outdoor,Perlengkapan Tanaman' />
        </Helmet>

              <div className="grid grid-cols-2 md:grid-cols-4 mt-10">

              <Card imgProduct="/Images/produk1.jpeg" titleTanaman="Golden"
                    titleTanaman2="Barrel" 
                    jenis = "Indoor"
                    harga ="30.000"
            />
        
              </div>
        </div>
    )
}

export default Pupuk
