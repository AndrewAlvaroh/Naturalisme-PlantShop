import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Indoor from './kategoriShop/Indoor'
import Outdoor from './kategoriShop/Outdoor'
import Pot from './kategoriShop/Pot'
import Pupuk from './kategoriShop/Pupuk'

import Footer from '../components/footer/Footer';



function Shop() {

 
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
        
     <div>

       
         
         <Switch>
            <Route exact path="/shop/indoor" component={Indoor}/>
            <Route exact path="/shop/outdoor" component={Outdoor}/>
            <Route exact path="/shop/pot" component={Pot}/>
            <Route exact path="/shop/pupuk" component={Pupuk}/>
         </Switch>
     </div>

        </div>


        <div className="mt-36">
        <Footer />
        </div>
       
        </div>
    )
}

export default Shop
