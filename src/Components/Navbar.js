import React from 'react'
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import OverlayCart from './OverlayCart'
import Ploygon from './Polygon'
import {useDetectOutsideClick} from './useDitectClickOutside'
import { useSelector, useDispatch } from 'react-redux';
import { CgMenu } from 'react-icons/cg';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {

    const [path,setPath] = useState("/Homepage");
    const cart = useSelector(state => state.cart);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
return (

    <nav className="TopNavbar"> 
        <hr id="UnderLineLeft" color="Black"/><hr id="UnderLineRight" color="Black"/>  

            <div class="col-sm-4" id="gridNavBarLeft">
            <Link to="/Homepage" onClick={() => setPath(window.location.pathname)}>Hem</Link>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
                <Link to="/Vinlådor" onClick={() => setPath("")}>Vinlådor</Link>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="#SaFunkarDet">Så funkar det</a>
            </div>
            <div class="col-sm-4" id="gridNavBarLeft">
            <a href="/Vingardarna">Vingårdarna</a>
            </div>
            <div className="IconNavbar">
                <p>
                <img className={`winelogo ${path == "/Homepage" ? "home" : ""}`} src="Images/TopIcon.png" alt="NakedWineLover's Icon"/>  
                </p>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <a href="#OmOss">Om oss</a>
            </div>
            <div class="col-sm-4" id="gridNavBarRight">
                <a href="#Villkor">Villkor</a>
            </div>
            <div class="col-sm-4" id="gridNavBarCart">
                <button onClick={onClick} className={`menu-trigger ${path == "/Homepage" ? "hideBackground" : ""}`}>Varukorg({cart.length})</button>
                <CgMenu className="hamburgerMenu" size="2.5em"/>
                <button onClick={onClick} className="menu-trigger-mobile"><IoCartOutline size="2.5em"/></button>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <Ploygon/>
                <OverlayCart/>
                
                </nav>


                {/* <CgMenu className="hamburgerMenu" size="2.5em"/>
                <button onClick={onClick} className="menu-trigger-mobile"><IoCartOutline size="2.5em"/></button> */}

                {/* <CgMenu className="hamburgerMenu" size="2.5em"/> */}
                {/* <button onClick={onClick} className="menu-trigger-mobile"><IoCartOutline size="2.5em"/></button> */}
            </div>
    </nav>      
);
}

export default Navbar