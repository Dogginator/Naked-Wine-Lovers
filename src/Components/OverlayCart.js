import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EMPTY_CART, RESET_TOTAL, INCREASE_QTY, INCREASE_AMOUNT, DECREASE_AMOUNT, INCREASE, DECREASE } from '../actions';

export const OverlayCart = () => {

    const cart = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.totalPrice);
    const numProducts = useSelector(state => state.products);
    const dispatch = useDispatch();

    const increase_qty = (id,price) => {
        dispatch(INCREASE_QTY(id));
        dispatch(INCREASE(price));
    }

    const increaseProduct = (id,price) => {
        dispatch(INCREASE_AMOUNT());
        dispatch(INCREASE(price));
    }

    const decreaseProduct = (price) => {
        dispatch(DECREASE_AMOUNT());
        dispatch(DECREASE(price));
    }

    const emptyCart = () => {
        dispatch(EMPTY_CART());
        dispatch(RESET_TOTAL());
    }

    const itemOutput = (prod) => {
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
                <a>Antal: <button className="changeProductAmount" onClick={() => decreaseProduct(prod.price)}>-</button>{numProducts}<button className="changeProductAmount" onClick={() => increaseProduct(prod.prodid,prod.price)}>+</button></a>
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
                {(cart.length === 0 ? <h5>Snustorrt.. kanske lite vin?</h5> : <h1></h1>)}
                            {cart.map((prod) => itemOutput(prod))
                            }

                </div>
                <div className="row" id="totAndGarbage">
                        <p className="col" id="totalPrice">Totalt:{totalPrice}</p>
                        <a className="col" id="garbage-icon">
                        <img src="/Images/Garbage.png" onClick={() => emptyCart()}></img></a>
                </div>
                <div className="shopping-cart-buttons">
                    <Link to="/CartCheckout">
                        <button type="button" className="shopping-button-checkout">Checka ut</button>
                        </Link>
                    <button type="button" className="shopping-button-shop">Forsätt shoppa</button>
                </div>
            </div>
        </div>
            
        </>
    )
}
 export default OverlayCart;