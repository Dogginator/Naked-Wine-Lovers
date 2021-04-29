import React from 'react'
import { Link } from 'react-router-dom';

export const ShoppingCart = (props) => {

    const emptyCart = () => {
        props.setCart([]);
    }

    const itemOutput = (prod) => {
        console.log(prod);
        return(
            <div className="row" id="prodRow">
                <div className="col-sm-4">
                <img className="prodImg" style={{
                    backgroundImage: `url(${prod.background.url})`,
                    backgroundRepeat: 'no-repeat'
                    }} src={prod.productimage.url}></img>
                </div>

                <div className="col-sm-8" id="prodInfo">
                <h6>{prod.price}sek/månad</h6>
                <h6>{prod.name}</h6>
                </div>
            </div>
        );
    }

    console.log(props.cart);

    return (
        <>
        <div className="cartContainer" id="Cart">
            <div className="Shooping-cart-Ploygon"/>
            <div className="shopping-cart">
                <div className="shopping-cart-header">Min varukorg</div>
                <div className="shopping-cart-items">
                            {props.cart.map((prod) => itemOutput(prod))
                            }
                        </div>
                        <div className="shop-sub">
                <Link to="/Varukorg">
                <button type="button" className="shopping-visa-varukorg">Visa Varukorg</button>
                </Link>
                <button type="button" onClick={() => emptyCart()}>Töm</button>
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