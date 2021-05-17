import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const VinBox ="../Images/Vinbildconf.png";
/* FUNKA FFS */



const Kassa_V2 = () => {
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
        setShowPaymentCard(true);
        setShowFaktura(false);
    }
    const fakturaClick = () =>{
        setShowFaktura(true);
        setShowPaymentCard(false);
    }

    const PaymentCard = () =>{
        return (
            <div>
                <div className="row">
                    <div className="col"><input type="text" placeholder="Kortnummer"></input></div>
                </div>
            <div className="row">
                <div className="col"><input type="text" placeholder="MM/ÅÅ"></input></div>
                <div className="col"><input type="text" placeholder="CVC"></input></div>
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

    return (
        <div className="row" id="ContainerWindow">
            <div className="col" id="KassaMain">
            <form onSubmit={(event) => submitForm(event)}>
                <div className="row">
                    <div className="col"/>
                    <div className="col" id="KassaHeader"><h1><b>Kassa</b></h1></div>
                    <div className="col"/>
                </div>
                <div className="row" >
                    <div className="col" id="CostumerInfoContainer">
                            <div className="row">
                                <div className="col"><h2>Leveransinformation</h2></div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="text" id="firstName" name="firstName" placeholder="Förnamn:" size="10"  />
                                </div>
                                <div className="col"><input type="text" id="lastName" name="lastName" placeholder="Efternamn:" size="10"  />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="text" id="Adress" name="Adress" placeholder="Gatuadress:" size="27" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="text" id="Lgh" name="Lgh" placeholder="Lgh" size="27"  />
                                </div>
                            </div>  
                            <div className="row">
                                <div className="col"><input type="text" id="Postnummer" name="Postnummer" placeholder="Postnummer:" size="10"  />
                                </div>
                                <div className="col"><input type="text" id="Ort" name="Ort" placeholder="Stad/Ort:" size="10" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><select id="land" name="land" >
                                    <option value="Sverige">Sverige</option>
                                </select></div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="tel" id="telefonnummer" name="telefonnummer" placeholder="telefon" size="27" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                    <label for="Nyhetsbrev"> Jag hämtar ut mina varor på Systembolaget</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><h2>Inloggningsuppgifter</h2></div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="email" id="email" name="email" placeholder="E-post:" size="27" 
                                                    value={email}
                                                    onSubmit={e => setEmail(e.target.value)} 
                                                    onChange={e => setEmail(e.target.value)} 
                                                    onKeyPress={e => e.key === 'Enter'  && setEmail(e.target.value)}
                                                    required 
                                                /></div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="password"></input></div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="password"></input></div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                    <label for="Nyhetsbrev"> Jag vill gärna bli meddelad via epost om nya viner och annan viktig information som Naked Wine Lovers vill dela med mig</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><hr color="Black"/>
                                </div> 
                            </div>
                            <div className="row">
                                <div className="col"><h2>Betalningsätt</h2></div>
                            </div>
                            <div className="row">
                                <div className="col"><input type="checkbox" id="Kort" name="Kort" onClick={cardClick}/>
                                    <label for="Kort"> Kort</label>
                                </div>
                            </div>
                            <div className="row" id="Payment">
                                {showFaktura && Faktura()}
                                {showPaymentCard && PaymentCard()}
                            </div>

                            <div className="row">
                                <div className="col"><input type="checkbox" id="Faktura" name="Faktura" onClick={fakturaClick} />
                                    <label for="Faktura"> Betala med faktura</label>
                                </div>
                            </div>
                            

                    
                    </div>
                </div>

            </form>
            <div className="row">
                <div className="col">
                    <Link>Återgå till varukorgen</Link>
                </div>
                <div className="col">
                    <Link>
                        <button>Bekrefta betalning</button>
                    </Link>
                    
                </div>

            </div>
            </div>
            <div className="col" id="VarukorgLittle">
                <div className="row">
                    <div className="col"><p>Översikt varukorg</p></div>
                    <div className="col">
                        <Link>Redigera</Link>
                        </div>
                </div>
                <div className="row">
                    <img alt="WineBox" src={VinBox} ></img>
                </div>
                <div className="row">
                    <div className="col"><p>Delsumma</p></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"><p>Leverans</p></div>
                    <div className="col"><p>0 SEK</p></div>
                </div>
                <div className="row">
                    <div className="col"><p> Totalt att betala</p></div>
                    <div className="col"></div>
                </div>

            </div>
        </div>
    );
}
export default Kassa_V2