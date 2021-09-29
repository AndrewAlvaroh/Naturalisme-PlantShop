import React from 'react'
import {Helmet} from "react-helmet";

import Content7 from '../../components/content/Content7'
import Content8 from '../../components/content/Content8'
import Footer from '../../components/footer/Footer'

function Perawatan() {
    return (
        <div className="bg-gray-50">
             <Helmet>
            <title>Naturalisme | Perawatan Taman</title>
            <meta name='description' content='Naturalisme, Pembuatan Taman Jakarta, Pembuatan Taman Indoor & Outdoor' />
            </Helmet>

            <Content7 />

            <div className="mb-20 mt-10">
            <Content8 />
            </div>
          

            <Footer />
        </div>
    )
}

export default Perawatan
