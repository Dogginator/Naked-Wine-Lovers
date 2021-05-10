import React from 'react'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import OverlayCart from './OverlayCart'
import Ploygon from './Polygon'
import {useDetectOutsideClick} from './useDitectClickOutside'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = (props) => {

    const cart = useSelector(state => state.cart);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
return (

    <nav className="TopNavbar"> 
    
        <hr id="UnderLine" color="Black"/>  
            <div class="col-sm-4" id="gridNavBarLeft">
            <Link to="/1">Hem</Link>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
                <Link to="/Vinlådor">Vinlådor</Link>
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
                <button onClick={onClick} className="menu-trigger">Varukorg({cart.length})</button>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <Ploygon/>
                <OverlayCart cart={props.cart} setCart={props.setCart} />
                </nav>
                <CgMenu className="hamburgerMenu" size="2.5em"/>
                <button onClick={onClick} className="menu-trigger-mobile"><IoCartOutline size="2.5em"/></button>
            </div>
        </nav>      
);
}

export default Navbar