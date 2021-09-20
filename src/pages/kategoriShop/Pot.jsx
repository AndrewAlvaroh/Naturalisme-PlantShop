import React from 'react'
import Card from '../../components/card/Card'

function Pot() {
    return (
        <div>
            
           <div className="grid grid-cols-2 md:grid-cols-4 mt-10">

                    <div>
                    <Card imgProduct="/Images/pot1.png" 
                    titleTanaman="Pot" titleTanaman2="Tanah Liat" jenis="Perlengkapan"
                    harga="45.000"
                    />
                    </div>

                    <div>
                    <Card imgProduct="/Images/pot2.png" 
                    titleTanaman="Pot" titleTanaman2="Tanah Liat" jenis="Perlengkapan Tanam"
                    harga="35.000" />
                    </div>

                   
                    
                  
                </div>      

        </div>
    )
}

export default Pot
