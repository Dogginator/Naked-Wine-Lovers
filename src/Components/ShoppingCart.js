import React from 'react'
import { Link } from 'react-router-dom';



export const ShoppingCart = () => {
    return (
        <>
        <div className="cartContainer" id="Cart">
            <div className="shopping-cart">
                <div className="shopping-cart-header">
                    Min varukorg
                </div>
                <div className="shopping-cart-items">
                        <div className="Shoppingcartbild" />
                        <a className="shopping-cart-pris"><b>1046 SEK/Månad </b></a>
                        <a className="shopping-cart-varu-namn">Vindlåda #1 </a>
                        <a className="shopping-cart-antal"><b>Antal: 1</b></a>
                        </div>
                        <div className="shop-sub">
                <Link to="/Subscribe">
                <button type="button" className="shopping-visa-varukorg">Visa Varukorg</button>
                </Link>
                </div>
                <div className="shop-pay">
                <Link to="/Kassa">
                <button type="button" className="shopping-kassa">Kassa</button>
                </Link>
                </div>
            </div>
        </div>
            
        </>
    )
}
 export default ShoppingCart;