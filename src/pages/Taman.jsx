import React from 'react'
import Content1 from '../components/content/Content1'
import Content4 from '../components/content/Content4'
import Content5 from '../components/content/Content5'
import Footer from '../components/footer/Footer'

function taman() {
    return (
        <div className="bg-gray-50">
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

                <Content1 title="Jasa Pembuatan Taman Indoor" 
                isi="Taman seperti penolong manusia saat musim kemarau. Taman bisa menjadi teman hidup bagi pemilik rumah. Dengan adanya taman, sang pemilik akan terpancing jiwanya untuk menanam tanaman hijau yang bisa menyuplai oksigen. Terutama bagi Anda yang tinggal di perkotaan."
                imgContent="/Images/content1.png"
                />
                <Content1 title="Jasa Pembuatan Taman Outdoor" 
                isi="Taman seperti penolong manusia saat musim kemarau. Taman bisa menjadi teman hidup bagi pemilik rumah. Dengan adanya taman, sang pemilik akan terpancing jiwanya untuk menanam tanaman hijau yang bisa menyuplai oksigen. Terutama bagi Anda yang tinggal di perkotaan.   ."
                imgContent="/Images/content2tmn.jpeg"
                />
      
         

            <Footer />
      
        </div>
    )
}

export default taman
