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

    <div className="navbarContainer">
        <nav className="TopNavbar"> 
        <hr id="UnderLine" color="Black"/>  
            <div className="PosLeftNavbar1">
            <a href="/">Hem</a>
            </div>
            <div className="PosLeftNavbar2">
            <a href="/Vinlådor">Vinlådor</a>
            </div>
            <div className="PosLeftNavbar3">
            <a href="#SaFunkarDet">Så funkar det</a>
            </div>
            <div className="PosLeftNavbar4">
            <a href="#Vingårdarna">Vingårdarna</a>
            </div>
            <div className="IconNavbar">
                <p>
                        <img className="winelogo" src="Images/TopIcon.png" />  
                </p>
            </div>
            <div className="PosRightNavbar1">
                <a href="#OmOss">Om oss</a>
            </div>
            <div className="PosRightNavbar2">
                <a href="#Villkor">Villkor</a>
            </div>
            <div className="PosRightNavbar3">
                <button cbutton onClick={onClick} className="menu-trigger">Varukorg(0)</button>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <Ploygon/>
                <ShoppingCart/>
                </nav>
            </div>
               
                 
        </nav>
         
    </div>
);
}

export default Navbar