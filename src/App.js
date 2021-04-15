
import React from 'react'
import {BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import Kassa from './Components/Kassa'
import Listing from './Components/Listing'
import Subscribe from './Components/Subscribe'
import Confirm from './Components/Confirm'
import Form from './Components/Form'
import Payment from './Components/Payment'
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
<Router>
    <Switch>
        <Route path='/' exact component={Subscribe}/>
        <Route path='/Kassa' exact><Kassa setCostumerInfo = {setCostumerInfo} /></Route>
        <Route path='/Confirm' exact><Confirm costumerInfo = {costumerInfo} /></Route>
    </Switch>
</Router>
    )
}

export default App;
