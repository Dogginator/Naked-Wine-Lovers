import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
return (

    <div className="navbarContainer">
        <ul className="TopNavbar">
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
                <a href="/ShoppingCart">Varukorg(0)</a>
            </div>
               
                  
        </ul>
         <hr id="UnderLine" color="Black"/>  
    </div>
);
}

export default Navbar