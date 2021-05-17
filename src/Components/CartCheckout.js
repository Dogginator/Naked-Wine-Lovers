import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EMPTY_CART, RESET_TOTAL, INCREASE, DECREASE } from '../actions';

const CartCheckout = () => {

    const totalPrice = useSelector(state => state.totalPrice);
    const cart = useSelector(state => state.cart);

    const itemOutput = (prod) => {

        return(
            <div className="row" id="prodRow">
                <div className="col-sm-2">
                <img id="prodImg" style={{
                    backgroundImage: `url(${prod.background.url})`,
                    backgroundRepeat: 'no-repeat'
                    }} src={prod.productimage.url}></img>
                </div>
                <div className="col-sm-1">
                    <a>{prod.name}</a>
                </div>
                <div className="col-sm-3" id="prenumeration">
                    <a>Prenumeration:</a>
                </div>
                <div className="col-sm-2" id="cartCat">
                    <a>{prod.price} SEK/månad</a>
                </div>
                <div className="col-sm-2" id="cartCat">
                    <a>{prod.quantity}</a>
                </div>
                <div className="col-sm-2" id="cartCat">
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
                    <h6>Du är ett steg från att börja din vinresa med Naked Wine Lovers</h6>
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
                <div className="col-sm-10">
                    <p id="paddingBenefitText">Alltid fri frakt</p>
                    <p id="paddingBenefitText">Inga bindningstider. Avbryt prenumation när du vill</p>
                    <p id="paddingBenefitText">Byt vinlåda när du vill</p>
                    <p id="paddingBenefitText">Trygga betalningar med faktura, konto- eller kreditkort</p>
                </div>    
                </div>    
            </div>
        </div>
        <div className="row" id="middleRowCart">
            <div>
            <h4>Din varukorg</h4>
            <br/>
            <a>Fortsätt handla</a>
            </div>
        </div>
        <div className="container">
        <div className="row" id="prodRow">
        <div className="col-sm-6">
            <h5>Produkter:</h5>
        </div>
        <div className="col-sm-2" id="cartCat">
            <h5>Pris</h5>
        </div>
        <div className="col-sm-2" id="cartCat">
            <h5>Kvantitet</h5>
        </div>
        <div className="col-sm-2" id="cartCat">
            <h5>Totalt</h5>
        </div>
        <hr id="sepLine2" color="Black"/>  
        </div>

        {cart.map(prod => itemOutput(prod))}
        <hr id="sepLine2" color="Black"/>  
        </div>
        <div className="row" id="bottomRowCart">
            <div className="col-sm-7"></div>
            <div className="col-sm-4">
                <h6 className="totalPaymentCarts">Total: {totalPrice} / SEK</h6>
                <a><input type="checkbox"></input>Jag godkänner Naked Wine Lovers Allmäna Villkor</a>
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