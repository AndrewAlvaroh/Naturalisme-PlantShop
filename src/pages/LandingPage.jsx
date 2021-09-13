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
        <div className="bg-gray-100">
            <Carousel />
            
            <div className="text-center mt-9 mb-6 font-semibold text-lg md:text-2xl md:mt-12 ">
                Spesial di Naturalisme Bulan ini
            </div>

            <div className="mx-10">
                <div className="grid grid-cols-2 md:grid-cols-4">

                    <div>
                    <Card />
                    </div>

                    <div>
                    <Card />
                    </div>

                    
                    <div className="mt-4 md:mt-0">
                    <Card />
                    </div>

                    <div className="mt-4 md:mt-0">
                    <Card />
                    </div>
                </div>      
               
            </div>
           
           <div className="my-10 flex  justify-center ">
               <Button />
           </div>

                <Step />
                <Content1 />
           
            <div className="h-14 md:h-24" style={{background : '#F9F6F0'}}  > </div>

            <Content2 />
           
            <Footer />

        </div>
    )
}

export default LandingPage
