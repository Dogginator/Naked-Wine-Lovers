import React from 'react'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import ShoppingCart from './ShoppingCart'
import Ploygon from './Polygon'
import {useDetectOutsideClick} from './useDitectClickOutside'


const Navbar = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
return (

    <nav className="TopNavbar"> 
        <hr id="UnderLine" color="Black"/>  
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="/">Hem</a>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="/Vinlådor">Vinlådor</a>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="#SaFunkarDet">Så funkar det</a>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="#Vingårdarna">Vingårdarna</a>
            </div>
            <div className="IconNavbar">
                <p>
                <img className="winelogo" src="Images/TopIcon.png" />  
                </p>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <a href="#OmOss">Om oss</a>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <a href="#Villkor">Villkor</a>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <button onClick={onClick} className="menu-trigger">Varukorg(0)</button>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <Ploygon/>
                <ShoppingCart/>
                </nav>
            </div>
        </nav>      
);
}

export default Navbar