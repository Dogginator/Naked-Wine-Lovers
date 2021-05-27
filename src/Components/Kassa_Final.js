import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ADD_USER_INFO } from '../actions'
import Confirm from './Confirm';
import Button from './KassaFunq/Button'
const VinBox = "../Images/Vinbildconf.png";


const Kassa_Final = props => {
    const OnConfirm = () => {
        this.props.history.push('./Confirm')
    }

    const custInfo = useSelector(state => state.custInfo);

    console.log("Detta är mitt förnamn: " + custInfo.firstName);
    
    const [showPaymentCard, setShowPaymentCard] = useState(false);
    const [showFaktura, setShowFaktura] = useState(false);
    const cart = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.totalPrice);

    console.log(custInfo);

    const { handleSubmit } = props;

    const cardClick = () =>{
        if(setShowPaymentCard === true ){
            setShowPaymentCard(false);
        }else{
        setShowPaymentCard(true);
        setShowFaktura(false);   
        }

    }
    const fakturaClick = () =>{
        setShowFaktura(true);
        setShowPaymentCard(false);
    }

    const itemOutput = (prod) => {
        return(
            <div className="row" id="prodRow">
                <div className="col-sm-4">
                <img className="miniCartProdImg" style={{
                    backgroundImage: `url(${prod.background.url})`,
                    backgroundRepeat: 'no-repeat'
                    }} src={prod.productimage.url}></img>
                </div>

                <div className="col-sm-8" id="prodInfo">
                <a>{prod.price} SEK/månad</a>
                <br/>
                <a>{prod.name}</a>
                <br/>
                <a>Antal: {prod.quantity}</a>
                </div>
            </div>
        );
    }

    const PaymentCard = () =>{
        return (
            <div className="container">
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><label id="labelKassa">Kortnummer</label></div>
                </div>
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><input id="kortNum" type="text" name="cardNumb" placeholder=""/></div>
                </div>
                <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa">MM/ÅÅ</label></div>
                            <div className="col" id="ColPaddingZero"><label id="labelKassa">CVC</label></div>
                </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero" ><input id="mmåå" type="text" name="monthYear" placeholder=""/></div>
                <div className="col" id="ColPaddingZero" ><input   id="CVC" type="text" name="CVC" placeholder=""/></div>
                </div> 
            </div>

        );
    }
    const Faktura = () =>{
        return (
            <div className="container">

            </div>

        );
    }

    return(
        
        <div className="container">
            <div className="row" id="ContainerWindow">
                <div className="col" id="KassaHeader"><h1>KASSA</h1></div>
            </div>

            <div className="row" id="ContainerWindow">
                <div className="col" id="InputForm">
                    {/* <form onSubmit={(event) => submitForm(event)}> */}
                    <form onSubmit={handleSubmit}>
                    <div className="row" id="ContainerWindow">
                        <div className="col" id="ColPaddingZero"><label id="labelKassa1">Leveransinformation</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Förnamn</label></div>
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Efternamn</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><Field type="text" component="input" id="firstName" name="firstName"/>
                                </div>
                                <div className="col" id="ColPaddingZero"><Field type="text" component="input" id="lastName" name="lastName"/>
                                </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Postnummer</label></div>
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Ombud</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="text" id="Postnummer" name="postCode" placeholder="" size="10"  />
                                </div>
                                <div className="col" id="ColPaddingZero">
                                    <Field component="select" id="pickUp" name="pickUp" >
                                        <option value="Sverige"></option>
                                        <option value="Ombud1">Ombud1</option>
                                        <option value="Ombud2">Ombud2</option>
                                        <option value="Ombud3">Ombud3</option>
                                        <option value="Ombud4">Ombud4</option>
                                        <option value="Ombud5">Ombud5</option>
                                        <option value="Ombud6">Ombud6</option>
                                    </Field>  
                                </div>
                                
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Telefonnummer</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field type="tel" component="input" id="telefonnummer" name="telefonnummer"/>
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field type="checkbox" component="input" id="Nyhetsbrev" name="Nyhetsbrev" />
                                <label id="labelKassa3" for="Nyhetsbrev"> Jag hämtar ut mina varor på Systembolaget</label>
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><hr color="Black"/>
                            </div> 
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa1">Skapa Konto</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">E-post</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field type="email" component="input" id="email" name="email" placeholder=""/></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Lösenord</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field id="pass" component="input" type="password" placeholder=""/></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Bekräfta lösenord</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field id="rePass" component="input" type="password" placeholder=""/></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field type="checkbox" component="input" id="Nyhetsbrev" name="Nyhetsbrev" />
                                <label id="labelKassa3"for="Nyhetsbrev"> Jag vill gärna bli meddelad via epost om nya viner och annan viktig information som Naked Wine Lovers vill dela med mig</label>
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><hr color="Black"/>
                            </div> 
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><label id="labelKassa1">Betalningsätt</label></div>
                            </div>
                            <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="radio" component="input" id="Kort" name="pick" onClick={cardClick}/>
                                    <label for="Kort" id="ColPaddingZero">Kort</label><br/>
                                    <input type="radio" component="input" id="Faktura" name="pick" onClick={fakturaClick}/>
                                    <label for="a"> Betala med faktura</label>
                                </div>
                            </div>
                            <div className="row" id="Payment">
                                {showFaktura && Faktura()}
                                {showPaymentCard && PaymentCard()}
                            </div>
                         {/* <button type="submit" id="Betala">Bekräfta betalning</button> */}
                    </form>
                </div>

                 <div className="col" id="VarukorgLitle">
                    <div className="row" id="miniCartHeader">
                        <div className="col-sm-6">Översikt Varukorg</div>
                        <div className="col-sm-6">
                            <button type="button" id="editButton">Redigera</button>
                        </div>
                    </div>
                    {cart.map((prod) => itemOutput(prod))}
                    <div className="row">
                        <div className="col"><h4 id="miniCartTotal">Totalt att betala: </h4></div>
                    </div>

                 </div>
             </div>
             <div className="row" id="Buttons">
                 <div className="col" id="ColPaddingZero">
                     <Link  to="/CartCheckout" id="return">Återgå till varukorgen</Link>
                 </div>
                 <div className="col" id="ColPaddingZero">
                                <Button/>
                              {/*   <button type="submit" id="Betala" onClick={OnConfirm}>Bekräfta betalning</button> */}
                 </div>
             </div>
         </div>
    );
}

const onSubmit = (values, dispatch) => {
    console.log("hej");
    dispatch(ADD_USER_INFO(values));
}

export default reduxForm({
    form: 'simple',
    onSubmit,  // a unique identifier for this form
  })(Kassa_Final)