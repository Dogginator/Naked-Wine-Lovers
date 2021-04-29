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
                <a>{prod.price} SEK/månad</a>
                <br/>
                <a>{prod.name}</a>
                <br/>
                <a>Antal:</a>
                </div>
            </div>
        );
    }

    return (
        <>
        <div className="cartContainer" id="Cart">
            <div className="Shooping-cart-Ploygon"/>
            <div className="shopping-cart">
                <div className="shopping-cart-header">Min varukorg</div>
                <div className="shopping-cart-items">
                {(props.cart.length === 0 ? <h5>Snustorrt.. kanske lite vin?</h5> : <h1></h1>)}
                            {props.cart.map((prod) => itemOutput(prod))
                            }
                </div>
                <div className="row" id="totAndGarbage">
                        <p className="col" id="totalPrice">Totalt:</p>
                        <a className="col" id="garbage-icon">
                        <img src="/Images/Garbage.png" onClick={() => emptyCart()}></img></a>
                </div>
                <div className="shopping-cart-buttons">
                    <Link to="/Varukorg">
                        <button type="button" className="shopping-button-checkout">Checka ut</button>
                        </Link>
                    <button type="button" className="shopping-button-shop">Forsätt shoppa</button>
                </div>
            </div>
        </div>
            
        </>
    )
}
 export default ShoppingCart;