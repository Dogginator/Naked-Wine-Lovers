
import React from 'react'
import {BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import Kassa from './Components/Kassa'
import Subscribe from './Components/Products/6'
import Confirm from './Components/Confirm'
import Form from './Components/Form'
import Payment from './Components/Payment'
import WineBoxes from './Components/WineBoxes'

import Navbar from './Components/Navbar'
import ShoppingCart from './Components/ShoppingCart'

import { useState } from 'react'

const home = () => {
    <div>
        <h1>
            <b>HOME PAGE</b> 
        </h1>
        <Link to='/kassa'>
            <button>Clickme</button>
        </Link>
        
    </div>
}

const App = () => {

    
const initialValues  = {
    email: '',
    Nyhetsbrev: '',
    firstName: '',
    lastName: '',
    Adress: '',
    Lgh: '',
    Postnummer: '',
    Ort: '',
    land: '',
    telefonnummer: '',
    creditcard: '',
};

    const [costumerInfo, setCostumerInfo]  = useState(initialValues);

    return (
        <>
        
<Router>
    <Navbar/>
        <Switch>
            <Route path='/' exact component={Subscribe}></Route>
            <Route path='/Kassa' exact><Kassa setCostumerInfo = {setCostumerInfo} /></Route>
            <Route path='/Confirm' exact><Confirm costumerInfo = {costumerInfo} /></Route>
            <Route path='/Vinlådor' exact><WineBoxes/></Route>
            <Route path='/ShoppingCart' exact><ShoppingCart /></Route>
        </Switch>
</Router>
</>
    )
}

export default App;
