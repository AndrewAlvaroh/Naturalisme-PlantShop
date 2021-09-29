import React from 'react'
import CheckoutHarga from '../../components/form-checkout/CheckoutHarga'
import FormCheckout from '../../components/form-checkout/FormCheckout'
import Footer from '../../components/footer/Footer'
function Checkout() {
    return (
        <div>
            <div className="md:mx-12 mx-8 md:my-16 my-16">    
               <div className="lg:grid lg:grid-cols-3 gap-8">
                 <div className="col-span-2">   
                    <FormCheckout />
                </div> 


                <div className="col-span-1 bg-gray-100 rounded-md">      
                    <CheckoutHarga />
                </div>
               </div>
            </div>


        <Footer />
        </div>
    )
}

export default Checkout
