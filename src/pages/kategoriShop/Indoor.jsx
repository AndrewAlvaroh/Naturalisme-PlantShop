import React from 'react'
import Card from '../../components/card/Card'

function Indoor() {
    return (
        <div>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
            <Card imgProduct="/Images/indoor1.jpeg" titleTanaman="Golden"
                    titleTanaman2="Barrel" 
                    jenis = "Tanaman Indoor"
                    harga ="99.000"
            />

            <Card imgProduct="/Images/indoor2.jpeg" titleTanaman="Begonia"
                    titleTanaman2="Silver" 
                    jenis = "Tanaman Indoor"
                    harga ="65.000"
            />
               <Card imgProduct="/Images/indoor3.jpeg" titleTanaman="Golden"
                    titleTanaman2="Hanny" 
                    jenis = "Tanaman Indoor"
                    harga ="95.000"
            />
           
           


        </div>
        </div>
    )
}

export default Indoor
