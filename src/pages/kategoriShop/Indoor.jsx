import React from 'react'
import Card from '../../components/card/Card'

function Indoor() {
    return (
        <div>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
            <Card imgProduct="/Images/indoor1.png" 
                 imgProduct2="/Images/indoor1h.png" 
                    titleTanaman="Golden"
                    titleTanaman2="Barrel" 
                    jenis = "Tanaman Indoor"
                    harga ="99.000"
                    to='/subShop'
            />

            <Card imgProduct="/Images/indoor2.png"
                 imgProduct2="/Images/indoor2h.png" 
                    titleTanaman="Begonia"
                    titleTanaman2="Silver" 
                    jenis = "Tanaman Indoor"
                    harga ="65.000"
                    to='/subShop'
            />
               <Card imgProduct="/Images/indoor3.png" 
                     imgProduct2="/Images/indoor3h.png" 
               
                    titleTanaman="Golden"
                    titleTanaman2="Hanny" 
                    jenis = "Tanaman Indoor"
                    harga ="95.000"
                    to='/subShop'
            />
           
           


        </div>
        </div>
    )
}

export default Indoor
