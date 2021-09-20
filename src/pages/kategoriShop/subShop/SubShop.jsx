import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../../components/footer/Footer';

function SubShop(props) {
    return (
        <div>
           <div className="mx-14">
                
                <div className="text-3xl font-semibold text-center my-10">
                Enjoy Shopping
                </div>
    
                <div className="flex justify-center border-t border-b border-black p-1 md:p-4">
                   <div className="mx-3 text-sm md:text-base md:mx-12"> <Link  to='/shop/indoor' > INDOOR</Link></div> 
                    <div className="mx-3 text-sm md:text-base md:mx-12"> <Link to='/shop/outdoor'> OUTDOOR</Link> </div>
                    <div className="mx-3 text-sm md:text-base md:mx-12"> <Link to='/shop/pot'>PERLENGKAPAN</Link> </div>
                    <div className="mx-3 text-sm md:text-base md:mx-12"> <Link to='/shop/pupuk'>PUPUK</Link> </div>
                </div>


              <div className="md:grid md:grid-cols-2 md:gap-16 my-28">
                  <div>
                    <img src="/Images/indoor1.png" alt="produk" className="" style={{width:"674px"}}    />
                  </div>
                  <div>
                   
                    <div className="text-center md:text-left py-2 text-3xl border-b border-black">
                        Golden Barrel
                    </div>

                    <div className="text-xl my-3 md:my-7">
                      Rp. 100.000
                    </div>
                    <div>
                      Nama : Golder Barrel <br />
                      Jenis : Indoor    <br />
                      Air  : Mingguan <br />
                      Perawatan : Sangat Mudah 
                    </div>

           
                  <div className="mt-5 md:mt-9">
                    <Link to={props.to}  className="border border-gray-700 text-gray-700 rounded-md px-2 py-2 md:px-4 md:py-2  transition duration-500  select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline">
                      Masukan Keranjang
                    </Link>
                  </div>
                  </div>
              </div>
        </div>    

          <Footer />

        </div>
    )
}

export default SubShop
