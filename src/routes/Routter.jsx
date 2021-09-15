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


                    <Route exact path='/taman'>
                        <Navbar />
                        <Taman />
                    </Route>
  

                    <Route exact path='/inspirasi'>
                        <Navbar />
                        <Inspirasi />
                    </Route>

                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='*' component={Error} />
                </Switch>
            {/* </BrowserRouter> */}
        </div>
    )
}

export default Routter
