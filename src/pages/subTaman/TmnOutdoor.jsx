import React from 'react'
import {Helmet} from "react-helmet";
import Cardtmn from '../../components/card/Cardtmn'
import Content3 from '../../components/content/Content3'
import Footer from '../../components/footer/Footer'

function TmnOutdoor() {
    return (
        <div>
           <Helmet>
            <title>Naturalisme | Pembuatan Taman Outdoor</title>
            <meta name='description' content='Naturalisme, Pembuatan Taman Jakarta, Pembuatan Taman Indoor & Outdoor' />
            </Helmet>

        <Content3 title="Jasa Pembuatan Taman Outdoor"  />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center mx-10 my-24">
        <div>
        <Cardtmn />
        </div>
        <div>
        <Cardtmn />
        </div>
        <div>
        <Cardtmn />
        </div>
        <div>
        <Cardtmn />
        </div>
        <div>
        <Cardtmn />
        </div>
        <div>
        <Cardtmn />
        </div>
 
      </div>
       
      <Footer />

      </div>
    )
}

export default TmnOutdoor
