import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const swish = "https://www.logo.wine/a/logo/Swish_(payment)/Swish_(payment)-Logo.wine.svg";
const bankcard = "../Images/pngegg.png";
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


    return (
        <div className="row" id="ContainerWindow">
            <div className="col" id="KassaMain">
            <form onSubmit={(event) => submitForm(event)}>
                <div className="row">
                    <div className="col"><h1><b>Kassa</b></h1></div>
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
                                <div className="col"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                    <label for="Nyhetsbrev"> jag vill betal med kort</label>
                                </div>
                            </div>
                            <div className="row" id="cardContainer">
                                <div className="row">
                                    <div className="col"><input type="text" placeholder="Kortnummer"></input></div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" placeholder="MM/ÅÅ"></input></div>
                                    <div className="col"><input type="text" placeholder="CVC"></input></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                    <label for="Nyhetsbrev"> Jag vill ha faktura</label>
                                </div>
                            </div>
                            

                    
                    </div>
                </div>

            </form>
            </div>
            <div className="col" id="VarukorgLittle">

            </div>
        </div>
    );
}
export default Kassa_V2