import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const VinBox ="../Images/Vinbildconf.png";


const Kassa_Final = () => {
    const url = "https://my-json-server.typicode.com/Dogginator/Naked-Wine-Lovers/posts";
    const[email, setEmail] = useState('');
    const submitForm = (event) => {
        event.preventDefault();

        const requestBody = {
            email : email,
            
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then(responseFromAPI => {
            if(responseFromAPI.status === 404) {
                alert("Det gick fel, sidan finns inte");
            }
            else {
                alert("Det gick bra!");
                setEmail('');
                
            }
            console.log(responseFromAPI)
        });
    }
    const [showPaymentCard, setShowPaymentCard] = useState(false);
    const [showFaktura, setShowFaktura] = useState(false);

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

    const PaymentCard = () =>{
        return (
            <div className="container">
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><label id="labelKassa">Kortnummer</label></div>
                </div>
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><input id="kortNum"type="text" placeholder=""></input></div>
                </div>
                <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa">MM/ÅÅ</label></div>
                            <div className="col" id="ColPaddingZero"><label id="labelKassa">CVC</label></div>
                </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero" ><input id="mmåå" type="text" placeholder=""></input></div>
                <div className="col" id="ColPaddingZero" ><input id="CVC" type="text" placeholder=""></input></div>
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
                    <form onSubmit={(event) => submitForm(event)}>
                    <div className="row" id="ContainerWindow">
                        <div className="col" id="ColPaddingZero"><lable id="labelKassa1">Leveransinformation</lable></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Förnamn</label></div>
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Efternamn</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="text" id="firstName" name="firstName" size="10"  />
                                </div>
                                <div className="col" id="ColPaddingZero"><input type="text" id="lastName" name="lastName" size="10"  />
                                </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Postnummer</label></div>
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Ombud</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="text" id="Postnummer" name="Postnummer" placeholder="" size="10"  />
                                </div>
                                <div className="col" id="ColPaddingZero">
                                    <select id="land" name="land" >
                                        <option value="Sverige"></option>
                                        <option value="Sverige">Ombud1</option>
                                        <option value="Sverige">Ombud2</option>
                                        <option value="Sverige">Ombud3</option>
                                    </select>  
                                </div>
                                
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Telefonnummer</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="tel" id="telefonnummer" name="telefonnummer" size="27" />
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                <label for="Nyhetsbrev"> Jag hämtar ut mina varor på Systembolaget</label>
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
                            <div className="col" id="ColPaddingZero"><input type="email" id="email" name="email" placeholder="" size="27" 
                                                value={email}
                                                onSubmit={e => setEmail(e.target.value)} 
                                                onChange={e => setEmail(e.target.value)} 
                                                onKeyPress={e => e.key === 'Enter'  && setEmail(e.target.value)}
                                                required 
                                                /></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Lösenord</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input id="pass" type="password" placeholder=""></input></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><label id="labelKassa2">Bekräfta lösenord</label></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input id="rePass" type="password" placeholder=""></input></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                <label for="Nyhetsbrev"> Jag vill gärna bli meddelad via epost om nya viner och annan viktig information som Naked Wine Lovers vill dela med mig</label>
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
                                <div className="col" id="ColPaddingZero"><input type="radio" id="Kort" name="pick" onClick={cardClick}/>
                                    <label for="Kort" id="ColPaddingZero"> Kort</label><br/>
                                    <input type="radio" id="Faktura" name="pick" onClick={fakturaClick} />
                                    <label for="a"> Betala med faktura</label>
                                </div>
                            </div>
                            <div className="row" id="Payment">
                                {showFaktura && Faktura()}
                                {showPaymentCard && PaymentCard()}
                            </div>
                    </form>
                </div>
                 <div className="col" id="VarukorgLitle">
                 <div className="row" id="ContainerWindow">
                     <div className="col" id="ColPaddingZero"><label>Översikt varukorg</label></div>
                     <div className="col" id="ColPaddingZero">
                         <Link to="/CartCheckout" id="Redigera">Redigera</Link>
                         </div>
                 </div>
                 <div className="row" id="ContainerWindow">
                     <img alt="WineBox" ></img>
                 </div>
                 <div className="row" id="ContainerWindow">
                     <div className="col" id="ColPaddingZero"><label>Delsumma</label></div>
                     <div className="col"id="ColPaddingZero"></div>
                 </div>
                 <div className="row" id="ContainerWindow">
                     <div className="col" id="ColPaddingZero"><label>Leverans</label></div>
                     <div className="col" id="ColPaddingZero"><label>0 SEK</label></div>
                 </div>
                 <div className="row" id="ContainerWindow">
                     <div className="col" id="ColPaddingZero"><label> Totalt att betala</label></div>
                     <div className="col" id="ColPaddingZero"></div>
                 </div>
                 </div>
             </div>
             <div className="row" id="Buttons">
                 <div className="col" id="ColPaddingZero">
                     <Link  to="/CartCheckout" id="return">Återgå till varukorgen</Link>
                 </div>
                 <div className="col" id="ColPaddingZero">
                     <Link to="/Confirm">
                         <button id="Betala">Bekrefta betalning</button>
                     </Link>
                    
                 </div>
             </div>
         </div>

    );
}

export default Kassa_Final