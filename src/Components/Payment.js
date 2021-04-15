import React, { useState } from 'react'
import SwishPayment from './SwishPayment'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

const swish = "https://www.logo.wine/a/logo/Swish_(payment)/Swish_(payment)-Logo.wine.svg";
const bankcard = "../pngegg.png";

const Payment = ({setPhoneNumber}) => {

  const[showSwish,setShowSwish] = useState(false);
  const[showCard,setShowCard] = useState(false);

  const swishClick = () => {
      setShowSwish(true);
      setShowCard(false);
  }

  const cardClick = () => {
    setShowCard(true);
    setShowSwish(false);
  }

  const swishComp = () => {
      return (
        <>
        <label className="phoneNumber">Telefonnummer</label>
        <input id="numberInput" type="number" placeholder="+46" onChange={(event) => setPhoneNumber(event.target.value)}></input> 
        <Link to="/SwishPayment">
        <button class="submitSwish">Betala</button>
        </Link>
        </>
      );
  }

  const cardComp = () => {
      return (
        <>
        <label className="cardNumber">Kortnummer</label>
        <input id="numberInput" type="number" placeholder="0000-0000-0000-0000"></input> 
        <label className="cvcCode">CVC</label>
        <input id="cvcNumber" type="number" placeholder="123"></input> 
        
        <Link to="/SwishPayment">
          <button class="submitSwish">Betala</button>
        </Link>
        </>
      );
  }

    return (
              <div className="payment-container">
                <p id="headerh2">BETALNING</p>
                <hr id="hrheader"/>
        
                <div className="icons-container">
                  <button className="swishButton" onClick={swishClick}>
                    <img src={swish} alt="Swish" id="swishImg"></img>
                  </button>
                  <button className="cardButton" onClick={cardClick}>
                  <img src={bankcard} alt="Card" id="cardImg"></img>
                  </button>
                </div>
                <hr id="hrbelowpay"/>

                <div className="payment">
                  {showSwish && swishComp()}
                  {showCard && cardComp()}
                </div>
              </div>
    );
}

export default Payment;