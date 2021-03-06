import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART, INCREASE, CHANGE_QTY } from '../../actions';

export const Box = (props) => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const OnClick = value => {
        if(cart.some(item => item.prodid === value.prodid)) {
            dispatch(CHANGE_QTY(value,true));
            dispatch(INCREASE(value.price));
        }
        else {
            dispatch(ADD_TO_CART(value));
            dispatch(INCREASE(value.price));
        }
    }

    return (
        <>
            <div class="col-sm-4" id="wineboxgrid">
                <header className="headerBoxItem"><h3>{props.product.name}</h3></header>
                <div className="imageContWinebox" style={{
                    backgroundImage: `url(${props.product.background.url})`,
                    backgroundRepeat: 'no-repeat'
                    }}>
                        
                        <Link to={`/${props.product.prodid}`}><img className="wineboxImage" id="productImg" src={props.product.productimage.url}></img></Link>
                </div>

                <div className="boxInfo">
                    <p className="descText" id="descInfo">
                        {props.product.description}</p>
                    <p className="descText" id="price">
                        {props.product.price} SEK/Månad</p>
                        <Link to={`/${props.product.prodid}`}><button className="wineboxButtonMobil">LÄS MER</button> </Link>
                </div>
                    
                <button onClick={() => OnClick(props.product)} className="wineboxButton">Lägg till i varukorg</button>
                
            </div>
        </>
    )
}

export default Box;