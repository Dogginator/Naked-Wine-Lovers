import React from 'react'
import { useRef } from 'react';
import ShoppingCart from './ShoppingCart'
import Ploygon from './Polygon'
import {useDetectOutsideClick} from './useDitectClickOutside'


const Navbar = (props) => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
return (

    <nav className="TopNavbar"> 
        <hr id="UnderLine" color="Black"/>  
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="/1">Hem</a>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="/Vinlådor">Vinlådor</a>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="#SaFunkarDet">Så funkar det</a>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="/Vingardarna">Vingårdarna</a>
            </div>
            <div className="IconNavbar">
                <p>
                <img className="winelogo" src="Images/TopIcon.png" alt="NakedWineLover's Icon"/>  
                </p>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <a href="#OmOss">Om oss</a>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <a href="#Villkor">Villkor</a>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <button onClick={onClick} className="menu-trigger">Varukorg({props.cart.length})</button>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <Ploygon/>
                <ShoppingCart cart={props.cart} setCart={props.setCart} />
                </nav>
            </div>
        </nav>      
);
}

export default Navbar