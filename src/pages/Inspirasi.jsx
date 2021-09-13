import React from 'react'
import { Link } from 'react-router-dom'
import Button2 from '../components/button/Button2'
import Footer from '../components/footer/Footer'
function Inspirasi() {
    return (
        <div >
            <div className="text-center text-2xl my-10  font-semibold">
                GALERI
            </div>
            <div className="mx-14">
            <div className="h-auto md:h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:grid-rows-5 md:grid-rows-4  gap-3 lg:gap-8 ">
                
                <div className="row-span-2 md:row-span-4">
                   <img src="/Images/grd1.png" alt="garden" />
                   <br />
                   <img src="/Images/grd.png" alt="garden" />
                </div>
                <div className="sm:col-span-2 md:col-span-3 relative">
                    <img src="/Images/grd2.png" alt="garden" />
                    </div>
                <div>
                    <img src="/Images/grd3.png" alt="garden" />
                    </div>
                <div >
                    <img src="/Images/grd4.png" alt="garden" />
                    </div>
                <div className="  md:row-span-2">
                    <img src="/Images/grd5.png" alt="garden" />
                    </div>
                <div className=" ">
                    <img src="/Images/grd6.png" alt="garden" />
                    </div>
                <div className=" ">
                    <img src="/Images/grd7.png" alt="garden" />
                    </div>
             
                
              
                <div className="  col-span-2 sm:col-span-3">
                <img src="/Images/grd8.png" alt="garden" />
                </div>
            </div>

            <div className="text-center mt-10 md:mt-60">
               <Link   to='/perawatan'> <Button2 /> </Link>
            </div>
             
            
            </div>

            <div className="mt-10 md:mt-28">
            <Footer />
            </div>
        
        
       
        </div>
    )
}

export default Inspirasi
