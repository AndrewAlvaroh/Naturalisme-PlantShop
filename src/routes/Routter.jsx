import React from 'react'
import {Switch,Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

import LandingPage from '../pages/LandingPage'
import Shop from '../pages/Shop'
import Inspirasi from '../pages/Inspirasi'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Error from '../pages/errors/Error'
import Taman from '../pages/Taman';
import TmnIndoor from '../pages/subTaman/TmnIndoor'
import TmnOutdoor from '../pages/subTaman/TmnOutdoor'
import SubShop from '../pages/kategoriShop/subShop/SubShop'
import Cart from '../pages/cart/Cart'
import Register2 from '../pages/register/Register2'


function Routter() {
    return (
        <div>
            {/* <BrowserRouter> */}
                
                <Switch>
                    <Route exact path='/'>
                        <Navbar />
                        <LandingPage />
                    </Route>

                    <Route path='/shop'>
                        <Navbar />
                        <Shop />
                    </Route>
                    <Route path='/subShop'>
                        <Navbar />
                        <SubShop />
                    </Route>


                    <Route exact path='/taman'>
                        <Navbar />
                        <Taman />
                    </Route>
        
                    <Route exact path='/tmnindoor'>
                        <Navbar />
                        <TmnIndoor />
                    </Route>
                    <Route exact path='/tmnoutdoor'>
                        <Navbar />
                        <TmnOutdoor />
                    </Route>


                    <Route exact path='/inspirasi'>
                        <Navbar />
                        <Inspirasi />
                    </Route>

                    <Route exact path='/cart'>
                        <Navbar />
                        <Cart />
                    </Route>


                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/register2' component={Register2} />
                    <Route exact path='*' component={Error} />
                </Switch>
            {/* </BrowserRouter> */}
        </div>
    )
}

export default Routter
