import React, {useState} from 'react'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form'



const Kassa_Final = props => {

    const {submitForm} = props
=======
import { useSelector, useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ADD_USER_INFO } from '../actions'
import Confirm from './Confirm';
const VinBox = "../Images/Vinbildconf.png";


const Kassa_Final = props => {

    const custInfo = useSelector(state => state.custInfo);

    console.log("Detta är mitt förnamn: " + custInfo.firstName);
    
>>>>>>> master
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
        <form onSubmit={submitForm}>
        <div className="container">
            <div className="row" id="ContainerWindow">
                <div className="col" id="KassaHeader"><h1>KASSA</h1></div>
            </div>

            <div className="row" id="ContainerWindow">
                <div className="col" id="InputForm">
<<<<<<< HEAD
                    
=======
                    {/* <form onSubmit={(event) => submitForm(event)}> */}
                    <form onSubmit={handleSubmit}>
>>>>>>> master
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
<<<<<<< HEAD
                                <div className="col" id="ColPaddingZero"><input type="text" id="Postnummer" name="postCode" placeholder="" size="10"  />
                                </div>
                                <div className="col" id="ColPaddingZero">
                                    <select component="select" id="pickUp" name="pickUp" >
                                        <option value="Sverige"></option>
                                        <option value="Ombud1">Ombud1</option>
                                        <option value="Ombud2">Ombud2</option>
                                        <option value="Ombud3">Ombud3</option>
                                        <option value="Ombud4">Ombud4</option>
                                        <option value="Ombud5">Ombud5</option>
                                        <option value="Ombud6">Ombud6</option>
                                    </select>  
=======
                                <div className="col" id="ColPaddingZero"><Field type="text" component="input" id="Postnummer" name="Postnummer" placeholder=""/>
                                </div>
                                <div className="col" id="ColPaddingZero">
                                    {/* <input type="select" component="input" id="land" name="land" >
                                        <option value="Sverige"></option>
                                        <option value="Sverige">Ombud1</option>
                                        <option value="Sverige">Ombud2</option>
                                        <option value="Sverige">Ombud3</option>
                                    </input>   */}
>>>>>>> master
                                </div>
                                
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Telefonnummer</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
<<<<<<< HEAD
                            <div className="col" id="ColPaddingZero"><input  type="tel" id="telefonnummer" name="phoneNumb" size="27" />
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="checkbox" id="Nyhetsbrev" name="newsletter" />
=======
                            <div className="col" id="ColPaddingZero"><Field type="tel" component="input" id="telefonnummer" name="telefonnummer"/>
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field type="checkbox" component="input" id="Nyhetsbrev" name="Nyhetsbrev" />
>>>>>>> master
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
<<<<<<< HEAD
                            <div className="col" id="ColPaddingZero">
                                <input type="email" 
                                id="email" 
                                name="email" 
                                size="27" 
                                /></div>
=======
                            <div className="col" id="ColPaddingZero"><Field type="email" component="input" id="email" name="email" placeholder=""/></div>
>>>>>>> master
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Lösenord</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
<<<<<<< HEAD
                            <div className="col" id="ColPaddingZero"><input id="pass" type="password" name="passCode" placeholder=""/></div>
=======
                            <div className="col" id="ColPaddingZero"><Field id="pass" component="input" type="password" placeholder=""/></div>
>>>>>>> master
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Bekräfta lösenord</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
<<<<<<< HEAD
                            <div className="col" id="ColPaddingZero"><input id="rePass" type="password" name="rePass" placeholder=""/></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="checkbox" id="Nyhetsbrev" name="newsLetter" />
=======
                            <div className="col" id="ColPaddingZero"><Field id="rePass" component="input" type="password" placeholder=""/></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><Field type="checkbox" component="input" id="Nyhetsbrev" name="Nyhetsbrev" />
>>>>>>> master
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
<<<<<<< HEAD
                                <div className="col" id="ColPaddingZero"><input type="radio" id="Kort" name="pick" value="Kort" onClick={cardClick}/>
                                    <label for="Kort" id="ColPaddingZero"> Kort</label><br/>
                                    <input type="radio" id="Faktura" name="pick" value="Faktura" onClick={fakturaClick} />
                                    <label htmlFor="a"> Betala med faktura</label>
=======
                                <div className="col" id="ColPaddingZero"><input type="radio" component="input" id="Kort" name="pick" onClick={cardClick}/>
                                    <label for="Kort" id="ColPaddingZero">Kort</label><br/>
                                    <input type="radio" component="input" id="Faktura" name="pick" onClick={fakturaClick}/>
                                    <label for="a"> Betala med faktura</label>
>>>>>>> master
                                </div>
                            </div>
                            <div className="row" id="Payment">
                                {showFaktura && Faktura()}
                                {showPaymentCard && PaymentCard()}
                            </div>
<<<<<<< HEAD
                    
=======
                         <button type="submit" id="Betala">Bekräfta betalning</button>
                    </form>
>>>>>>> master
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
<<<<<<< HEAD
                     <Link to="/Confirm">
                         <button id="Betala" type="submit">Bekrefta betalning</button>
                     </Link>
                    
                 </div>
             </div>
         </div>
         </form>
    )
}


export default reduxForm({
    form: 'inputFromCostumer'
=======
                     {/* <Link to="/Confirm">
                         <button type="submit" id="Betala">Bekräfta betalning</button>
                     </Link>              */}
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
>>>>>>> master
  })(Kassa_Final)