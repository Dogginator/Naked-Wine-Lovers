
import React from 'react'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Kassa from './Components/Kassa'
import Box1 from './Components/Products/1'
import Box2 from './Components/Products/2'
import Box3 from './Components/Products/3'
import Box4 from './Components/Products/4'
import Box5 from './Components/Products/5'
import Box6 from './Components/Products/6'
import Confirm from './Components/Confirm'
import WineBoxes from './Components/WineBoxes'
import Navbar from './Components/Navbar'
import ShoppingCart from './Components/ShoppingCart'
import Varukorg from './Components/Varukorg'
import Vingardarna from './WineYards/Vingardarna'
import AmigosVinyard from './WineYards/AmigosVinyard'
import GardenOfEden from './WineYards/GardenOfEden'
import JamesAndTheGiantGrape from './WineYards/JamesAndTheGiantGrape'
import ThreeSeasonsVinyard from './WineYards/ThreeSeasonsVinyard'
import { useState } from 'react'


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
            <Route path='/1' exact component={Box1}></Route>
            <Route path='/2' exact component={Box2}></Route>
            <Route path='/3' exact component={Box3}></Route>
            <Route path='/4' exact component={Box4}></Route>
            <Route path='/5' exact component={Box5}></Route>
            <Route path='/6' exact component={Box6}></Route>
            <Route path='/Kassa' exact><Kassa setCostumerInfo = {setCostumerInfo} /></Route>
            <Route path='/Confirm' exact><Confirm costumerInfo = {costumerInfo} /></Route>
            <Route path='/Vinlådor' exact><WineBoxes/></Route>
            <Route path='/ShoppingCart' exact><ShoppingCart /></Route>
            <Route path='/Varukorg' exact><Varukorg/></Route>
            <Route path='/Vingardarna' exact><Vingardarna/></Route>
            <Route path='/AmigosVinyard' exact><AmigosVinyard/></Route>
            <Route path='/GardenOfEden' exact><GardenOfEden/></Route>
            <Route path='/JamesAndTheGiantGrape' exact><JamesAndTheGiantGrape/></Route>
            <Route path='/ThreeSeasonsVinyard' exact><ThreeSeasonsVinyard/></Route>
        </Switch>
</Router>
</>
    )
}

export default App;
