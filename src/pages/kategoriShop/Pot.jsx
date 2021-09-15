import React from 'react'
import Card from '../../components/card/Card'

function Pot() {
    return (
        <div>
            
           <div className="grid grid-cols-2 md:grid-cols-4 mt-10">

                    <div>
                    <Card imgProduct="/Images/pot1.jpeg" 
                    titleTanaman="Pot" titleTanaman2="Tanah Liat" jenis="Perlengkapan"
                    harga="45.000"
                    />
                    </div>

                    <div>
                    <Card imgProduct="/Images/pot2.jpeg" 
                    titleTanaman="Pot" titleTanaman2="Tanah Liat" jenis="Perlengkapan Tanam"
                    harga="35.000" />
                    </div>

                    <div>
                    <Card imgProduct="/Images/pot3.jpeg" 
                    titleTanaman="Pot" titleTanaman2="Plastik" jenis="Perlengkapan Tanam"
                    harga="10.000" />
                    </div>

                    <div>
                    <Card imgProduct="/Images/pot4.jpeg" 
                    titleTanaman="Batu" titleTanaman2="Pancawarna" jenis="Perlengkapan Tanam"
                    harga="10.000" />
                    </div>

                    <div>
                    <Card imgProduct="/Images/pot5.jpeg" 
                    titleTanaman="Media" titleTanaman2="Tanam" jenis="Perlengkapan Tanam"
                    harga="15.000" />
                    </div>

                    
                  
                </div>      

        </div>
    )
}

export default Pot
