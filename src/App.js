
import React from 'react'
import {Browserrouter as Router,Route, Link, Switch } from 'react-router';
import Kassa from './Components/Kassa'
import Listing from './Components/Listing'
import Form from './Components/Form'
import Payment from './Components/Payment'
import { useState } from 'react'

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
    return (
<Router>
<div>
    <Switch>
        <Route path='/' exact component={home}/>
        <Route path='/Kassa' exact><Kassa setCostumerInfo = {setCostumerInfo} /> Kassa</Route>
        <Route path='/Order' exact><Listing costumerInfo = {costumerInfo} />Order</Route>
    </Switch>
    </div>;
</Router>
    )
}

export default App;
