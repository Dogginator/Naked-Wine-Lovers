import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EMPTY_CART, RESET_TOTAL, CHANGE_QTY, INCREASE, DECREASE } from '../actions';

export const OverlayCart = () => {

    const cart = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.totalPrice);
    const numProducts = useSelector(state => state.products);
    // const increase = false;
    const dispatch = useDispatch();

    const change_qty = (increase, product) => {
        dispatch(CHANGE_QTY(product,increase));
        (increase) ? dispatch(INCREASE(product.price))
        : dispatch(DECREASE(product.price));
    }

    // const decrease_qty = (id,price,quantity) => {
    //     dispatch(DECREASE_QTY(id,quantity));
    //     dispatch(DECREASE(price));
    // }

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
                <a>Antal: <button className="changeProductAmount" onClick={() => change_qty(false, prod)}>-</button>{prod.quantity}<button className="changeProductAmount" onClick={() => change_qty(true, prod)}>+</button></a>
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