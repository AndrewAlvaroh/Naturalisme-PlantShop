import React from 'react'
import Button from '../components/button/Button'
import Card from '../components/card/Card'
import Carousel from '../components/carousel/Carousel'
import Content1 from '../components/content/Content1'
import Content2 from '../components/content/Content2'
import Footer from '../components/footer/Footer'
import Step from '../components/step/Step'

function LandingPage() {
    return (
        <div className="bg-gray-50">
            <Carousel />
            
            <div className="text-center mt-9 mb-6 font-semibold text-lg md:text-2xl md:mt-12 ">
                Spesial di Naturalisme Bulan ini
            </div>

            <div className="mx-10">
                <div className="grid grid-cols-2 md:grid-cols-4">

                    <div>
                    <Card imgProduct="/Images/indoor1.jpeg" 
                    titleTanaman="Golden" titleTanaman2="Barrel" jenis="Tanaman Indoor"
                    harga="99.000"
                    />
                    </div>

                    <div>
                    <Card imgProduct="/Images/indoor2.jpeg" 
                    titleTanaman="Begonia" titleTanaman2="Silver" jenis="Tanaman Indoor"
                    harga="65.000" />
                    </div>

                    
                    <div className="mt-4 md:mt-0">
                    <Card imgProduct="/Images/outdoor1.jpeg" 
                    titleTanaman="Terang" titleTanaman2="Bulan (bonsai)" jenis="Tanaman Outdoor"
                    harga="400.000"/>
                    </div>

                    <div className="mt-4  md:mt-0">
                    <Card imgProduct="/Images/indoor3.jpeg" 
                    titleTanaman="Golden" titleTanaman2="Hanny" jenis="Tanaman Indoor"
                    harga="95.000"/>
                    </div>
                </div>      
               
            </div>
           
           <div className="my-10 flex  justify-center ">
               <Button />
           </div>

                <Step />
                <Content1 title="Jasa  Pembuatan  Taman 
        Indoor & Outdoor" isi=" Kami mengerjakan jasa pembutan taman minimalis, mengerjakan jasa pembutan taman kering, mengerjakan pembutan taman bernuansa bali, mengerjakan jasa pembutan taman bernuansa jepang, serta bisa juga membuat taman yang di sesuikan dengan konsep atau desain yang sudah anda buat sendiri keingan anda."
                imgContent="/Images/content1.png"
        />
           
            <div className="h-14 md:h-24" style={{background : '#F9F6F0'}}  > </div>

            <Content2 />
           
            <Footer />

        </div>
    )
}

export default LandingPage
