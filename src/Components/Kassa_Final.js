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
            <div>
                <div className="row">
                    <div className="col"><input id="kortNum"type="text" placeholder="Kortnummer"></input></div>
                </div>
            <div className="row">
                <div className="col"><input id="mm/åå" type="text" placeholder="MM/ÅÅ"></input></div>
                <div className="col"><input id="CVC" type="text" placeholder="CVC"></input></div>
                </div> 
            </div>

        );
    }
    const Faktura = () =>{
        return (
            <div>

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
                        <div className="col" id="ColPaddingZero"><h2>Leveransinformation</h2></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="text" id="firstName" name="firstName" placeholder="Förnamn:" size=""  />
                                </div>
                                <div className="col" id="ColPaddingZero"><input type="text" id="lastName" name="lastName" placeholder="Efternamn:" size=""  />
                                </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="text" id="Adress" name="Adress" placeholder="Gatuadress:" size="27" />
                                </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="text" id="Lgh" name="Lgh" placeholder="Lgh" size="27"  />
                                </div>
                        </div>  
                        <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="text" id="Postnummer" name="Postnummer" placeholder="Postnummer:" size="10"  />
                                </div>
                                <div className="col" id="ColPaddingZero"><input type="text" id="Ort" name="Ort" placeholder="Stad/Ort:" size="10" />
                                </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><select id="land" name="land" >
                                <option value="Sverige">Sverige</option>
                            </select></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="tel" id="telefonnummer" name="telefonnummer" placeholder="telefon" size="27" />
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                <label for="Nyhetsbrev"> Jag hämtar ut mina varor på Systembolaget</label>
                            </div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><h2>Inloggningsuppgifter</h2></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input type="email" id="email" name="email" placeholder="E-post:" size="27" 
                                                value={email}
                                                onSubmit={e => setEmail(e.target.value)} 
                                                onChange={e => setEmail(e.target.value)} 
                                                onKeyPress={e => e.key === 'Enter'  && setEmail(e.target.value)}
                                                required 
                                                /></div>
                        </div>
                        <div className="row" id="ContainerWindow">
                            <div className="col" id="ColPaddingZero"><input id="pass" type="password" placeholder=""></input></div>
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
                                <div className="col" id="ColPaddingZero"><h2>Betalningsätt</h2></div>
                            </div>
                            <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="checkbox" id="Kort" name="Kort" onClick={cardClick}/>
                                    <label for="Kort" id="ColPaddingZero"> Kort</label>
                                </div>
                            </div>
                            <div className="row" id="Payment">
                                {showFaktura && Faktura()}
                                {showPaymentCard && PaymentCard()}
                            </div>

                            <div className="row" id="ContainerWindow">
                                <div className="col" id="ColPaddingZero"><input type="checkbox" id="Faktura" name="Faktura" onClick={fakturaClick} />
                                    <label for="a"> Betala med faktura</label>
                                </div>
                            </div>
                    </form>
                </div>
                <div className="col" id="VarukorgLitle">
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><p>Översikt varukorg</p></div>
                    <div className="col" id="ColPaddingZero">
                        <Link>Redigera</Link>
                        </div>
                </div>
                <div className="row" id="ContainerWindow">
                    <img alt="WineBox" ></img>
                </div>
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><p>Delsumma</p></div>
                    <div className="col"id="ColPaddingZero"></div>
                </div>
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><p>Leverans</p></div>
                    <div className="col" id="ColPaddingZero"><p>0 SEK</p></div>
                </div>
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"><p> Totalt att betala</p></div>
                    <div className="col" id="ColPaddingZero"></div>
                </div>
                </div>
            </div>
            <div className="row" id="Buttons">
                <div className="col" id="ColPaddingZero">
                    <Link id="return">Återgå till varukorgen</Link>
                </div>
                <div className="col" id="ColPaddingZero">
                    <Link>
                        <button id="Betala">Bekrefta betalning</button>
                    </Link>
                    
                </div>
            </div>
        </div>

    );
}

export default Kassa_Final