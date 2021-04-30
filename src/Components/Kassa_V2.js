import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const swish = "https://www.logo.wine/a/logo/Swish_(payment)/Swish_(payment)-Logo.wine.svg";
const bankcard = "../Images/pngegg.png";
const VinBox ="../Images/Vinbildconf.png";



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
    

    const[showSwish,setShowSwish] = useState(false);
    const[showCard,setShowCard] = useState(false);
  
    const swishClick = () => {
        setShowSwish(true);
        setShowCard(false);
    }
  
    const cardClick = () => {
      setShowCard(true);
      setShowSwish(false);
    }
  
    const swishComp = () => {
        return (
          <>
          <label className="phoneNumber">Telefonnummer</label>
          <input id="numberInput" type="number" placeholder="+46"></input> 
          </>
        );
    }
  
    const cardComp = () => {
        return (
          <>
          <label className="cardNumber">Kortnummer</label>
          <input id="numberInput" type="number" placeholder="0000-0000-0000-0000"></input> 
          <label className="cvcCode">CVC</label>
          <input id="cvcNumber" type="number" placeholder="123"></input> 
          </>
        );
    }

    return (
        <div className="row" id="ContainerWindow">
            <form onSubmit={(event) => submitForm(event)}>
                <div className="row">
                    <div className="col"><h1><b>Kassa</b></h1></div>
                </div>
                <div className="row" >
                    <div className="col" id="CostumerInfoContainer">
                     <div className="row">
                         <div className="col"><h2>Kontaktuppgifter</h2></div>
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
                                <div className="col"><input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
                                <label for="Nyhetsbrev"> Jag tar gärna emot nyhetsbrev ifrån Naked Wine lovers</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><h2>Leveransadress</h2></div>
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
                    
                    </div>
                </div>

            </form>
        </div>
    );
}
export default Kassa_V2