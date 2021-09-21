import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button2 from '../button/Button2'

export class Content8 extends Component {

    state = {
        order : 1
    }

    handlePlus = () => {
       this.setState({
           order : this.state.order + 1
       })
    }
    handleMinus = () => {
        if(this.state.order > 1 ) {
            this.setState({
                order : this.state.order - 1
            })
        }
       
    }

    render() {
        return (
            <div>
                 <div className="mt-5">
            
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-2 lg:p-10 mx-auto text-gray-800 relative md:text-left">
           <div className="md:flex items-center -mx-10">
             <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
               <div className="relative">
                 <img src="/Images/content1tmn.svg" alt="" />
                 <div className="border-4 border-white absolute top-10 bottom-10 left-10 right-10 z-0" />
               </div>
             </div>
             <div className="w-full md:w-1/2 px-10">
               <div className="mb-2 md:mb-8">
                 <Link to='/perawatan'>
                 <h1 className="font-bold uppercase text-2xl mb-5 text-center md:text-left">Perawatan Tanaman</h1>
                 </Link>
                
                 <p className="text-sm">1. Foto Taman mu Terlebih dahulu.   </p>
                 <p className="text-sm">2. Kirim Foto ke Whatsapp Diatas.  </p>
                 <p className="text-sm">3. Tentukan Hari  </p>
                 <p className="text-sm">4. Bayar & Kami Siap Merawat Taman Anda  </p>
                 
                 <div className=" mt-5">
                     <button onClick={this.handleMinus} className="px-3 py-1 text-lg text-white bg-green-600 rounded-md">-</button>
                     <input type="text" value={this.state.order} className="w-10 text-center" />
                     <button onClick={this.handlePlus} className="px-3 py-1 text-lg text-white bg-green-600 rounded-md">+</button>
                     <span className="ml-3 text-lg">Hari</span> 
         
                 </div>
         
               </div>
               <div>
                 <div className="inline-block align-bottom">
                       
                     <Button2 namaButton="Pesan Sekarang" to="/perawatan" />
                    
                   </div>
               </div>
             </div>
           </div>
         </div>
         
         
                 </div>
            </div>
        )
    }
}

export default Content8

