import React from 'react'
import Card from '../../components/card/Card'

function Outdoor() {
    return (
        <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mt-10">

                    <div>
                    <Card imgProduct="/Images/outdoor1.jpeg" 
                    titleTanaman="Terang" titleTanaman2="Bulan" jenis="Tanaman Outdoor"
                    harga="400.000"
                    />
                    </div>

                    <div>
                    <Card imgProduct="/Images/outdoor2.jpeg" 
                    titleTanaman="Ekor" titleTanaman2="Tupai" jenis="Tanaman Indoor"
                    harga="65.000" />
                    </div>

                    
                  
                </div>      
               
        </div>
    )
}

export default Outdoor
