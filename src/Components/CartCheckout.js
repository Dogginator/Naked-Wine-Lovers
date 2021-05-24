import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EMPTY_CART, RESET_TOTAL, DELETE_PRODUCT, CHANGE_QTY, INCREASE, DECREASE } from '../actions';

const CartCheckout = () => {
    const dispatch = useDispatch();

    const deleteProduct = (product) => {
        dispatch(DELETE_PRODUCT(product));
        dispatch(DECREASE(product.price * product.quantity));
    }


    const change_qty = (increase, product) => {
        dispatch(CHANGE_QTY(product,increase));
        (increase) ? dispatch(INCREASE(product.price))
        : dispatch(DECREASE(product.price));
    }

    const totalPrice = useSelector(state => state.totalPrice);
    const cart = useSelector(state => state.cart);

    const itemOutput = (prod) => {

        return(
            <div className="row" id="prodRow">
                <div className="col-sm-2" id="smallDevicePicturePos">
                <img id="prodImg" style={{
                    backgroundImage: `url(${prod.background.url})`,
                    backgroundRepeat: 'no-repeat'
                    }} src={prod.productimage.url}></img>
                </div>
                <div className="col-sm-1">
                    <a>{prod.name}</a>
                    <button className="deleteProd" onClick={() => deleteProduct(prod)}>Ta bort</button>
                </div>
                <div className="col-sm-3" id="prenumeration">
                    <a>Prenumeration: Månadsvis</a>
                </div>
                <div className="col-sm-2" id="checkoutPrice">
                    <a>{prod.price} SEK/månad</a>
                </div>
                <div className="col-sm-2" id="checkoutQty">
                <button className="changeProductAmount" onClick={() => change_qty(false, prod)}>-</button>{prod.quantity}<button className="changeProductAmount" onClick={() => change_qty(true, prod)}>+</button>
                </div>
                <div className="col-sm-2" id="checkoutTotPrice">
                    <a>{prod.price * prod.quantity} SEK/månad</a>
                </div>
            </div>
        );
    }

    return (
        <>
        <div className="row" id="topRowCart">
            <div className="cartBenefitBox">
                <div className="row" id="headerTextBenefits">
                    <h6 id="smallDeviceHead">Du är ett steg från att börja din vinresa med Naked Wine Lovers</h6>
                </div>
                <div className="row">
                <div className="col-sm-2" id="iconsCart">
                    <img id="paddingIcons" src="/Images/delivery.png"></img>
                    <br/>
                    <img id="paddingIcons" src="/Images/safety.png"></img>
                    <br/>
                    <img id="paddingBottle" src="/Images/bottle.png"></img>
                    <br/>
                    <img id="paddingIcons" src="/Images/credCard.png"></img>
                </div>
                <div className="col-sm-10" id="benefitText">
                    <p id="paddingBenefitText">Alltid fri frakt</p>
                    <p id="paddingBenefitText">Inga bindningstider. Avbryt prenumation när du vill</p>
                    <p id="paddingBenefitText">Byt vinlåda när du vill</p>
                    <p id="paddingBenefitText">Trygga betalningar med faktura, konto- eller kreditkort</p>
                </div>    
                </div>    
            </div>
        </div>
        <div className="row" id="middleRowCart">
            <div id="centerMidHeader">
            <h4>Din varukorg</h4>
            <br/>
            <a>Fortsätt handla</a>
            </div>
        </div>
        <div className="container">
        <div className="row" id="prodRow">
        <div className="col-sm-6" id="alignProductsMidHead">
            <h5>Produkter:</h5>
        </div>
        <div className="col-sm-2">
            <h5>Pris</h5>
        </div>
        <div className="col-sm-2">
            <h5>Kvantitet</h5>
        </div>
        <div className="col-sm-2" id="totalPositionCart">
            <h5>Totalt</h5>
        </div>
        <hr id="sepLine2" color="Black"/>  
        </div>

        {cart.map(prod => itemOutput(prod))}
        <hr id="sepLine2" color="Black"/>  
        </div>
        <div className="row" id="bottomRowCart">
            <div className="col-sm-7"></div>
            <div className="col-sm-4" id="smallDeviceCheckoutInfo">
                <h6 className="totalPaymentCarts">Total: {totalPrice} / SEK</h6>
                <a id="smallDeviceJustify"><input type="checkbox"></input>Jag godkänner Naked Wine Lovers Allmäna Villkor</a>
                <br/>
                <Link to="/Kassa">
                <button className="checkOutPayment">Kassa</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default CartCheckout;