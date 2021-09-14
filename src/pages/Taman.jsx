import React from 'react'
import Content1 from '../components/content/Content1'
import Content4 from '../components/content/Content4'
import Content5 from '../components/content/Content5'
import Footer from '../components/footer/Footer'

function taman() {
    return (
        <div>
            <div>
                <img src="/Images/banner4.svg" alt="banner" />
            </div>

            <div className="text-center my-10 text-3xl font-semibold">
                Perawatan Tanaman
            </div>

                <Content4 />

            <div>
                <Content5 />
            </div>

                <Content1 title="Jasa Pembuatan Taman Indoor" isi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" />
                <Content1 title="Jasa Pembuatan Taman Outdoor" isi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" />
      
            <div>
                <Content5 />
            </div>


            <Footer />
      
        </div>
    )
}

export default taman
