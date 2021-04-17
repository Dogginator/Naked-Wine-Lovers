import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Confirm from './Confirm'
import { useSessionStorageString } from 'react-use-window-sessionstorage';
const swish = "https://www.logo.wine/a/logo/Swish_(payment)/Swish_(payment)-Logo.wine.svg";
const bankcard = "../pngegg.png";



const Kassa = () =>{
        const defaultValue = 'test@testmail.com'
        const[enteredValue, setEnteredValue] = React.useState('');
        const[value, setValue] = useSessionStorageString('stringValue', defaultValue);

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
        //<form>
        <>
        
        <div>
            <p hidden> <Confirm setValue ={setValue} />  </p>
        </div>
            
             <h1 class="Kassa">
        <b>Kassa</b>
        <br />
    </h1>
                <div class="InputForm">
        <h2 class="Kontaktuppgift">
            <b>Kontaktuppgifter</b>
            <br />
        </h2>
        <p>
            <input type="email" id="email" name="email" placeholder="E-post:" size="27" 
            value={enteredValue} 
            onChange={e => setEnteredValue(e.target.value)} 
            onKeyPress={e => e.key === 'Enter'  && setValue(enteredValue)} 
            />
        </p>
        <p>
            <input type="checkbox" id="Nyhetsbrev" name="Nyhetsbrev" />
            <label for="Nyhetsbrev"> Jag tar gärna emot nyhetsbrev ifrån Naked Wine lovers</label><br/>
        </p>
        <h2 class="leveransadress">
            <b>Leveransadress</b>
            <br />
        </h2>
        <p>
            <input type="text" id="firstName" name="firstName" placeholder="Förnamn:" size="10"  />
            <input type="text" id="lastName" name="lastName" placeholder="Efternamn:" size="10"  />
        </p>
        <p>
            <input type="text" id="Adress" name="Adress" placeholder="Gatuadress:" size="27" />
        </p>
        <p>
            <input type="text" id="Lgh" name="Lgh" placeholder="Lgh" size="27"  />
        </p>
        <p>
            <input type="text" id="Postnummer" name="Postnummer" placeholder="Postnummer:" size="10"  />
            <input type="text" id="Ort" name="Ort" placeholder="Stad/Ort:" size="10" />
        </p>
        <p>
            <select id="land" name="land" >
                <option value="Sverige">Sverige</option>
            </select>
        </p>
        <p>
            <input type="tel" id="telefonnummer" name="telefonnummer" placeholder="telefon" size="27" />
        </p>
        <hr color="Black"/>
        <p>

        <div className="payment-container">
                <p id="headerh2">BETALNING</p>
                <hr id="hrheader"/>
        
                <div className="icons-container">
                  <button className="swishButton" onClick={swishClick}>
                    <img src={swish} alt="Swish" id="swishImg"></img>
                  </button>
                  <button className="cardButton" onClick={cardClick}>
                  <img src={bankcard} alt="Card" id="cardImg"></img>
                  </button>
                </div>
                <hr id="hrbelowpay"/>

                <div className="payment">
                  {showSwish && swishComp()}
                  {showCard && cardComp()}
                </div>
              </div>
        </p>
    </div>
    <div class="Button">
        <p>
            <Link to='/Confirm'>
                <button type="button" id="Betala" onClick={() => setValue(value) }>Betalning</button>
            </Link>
            

        </p>
    </div>

    <div class="VarukorgLitle">
        <p id="text1">
            <b>1 Artikel</b> Redigera
        </p>

        <hr color="Black"/>
        <p id="bild">
        <img src="Vinbildconf.png" height="50px" /> <b>1395 SEK</b>
        </p>
        <p id="text2">
            VAD FAN ÄR NATURVINS-BOXEN
        </p>
        <p id="text3">
            <b>Premuration: </b> Månadsvis
        </p>
        <p id="text4">
            <b>Antal: 1</b>
        </p>
        <hr color="Black"/>
        <p id="text5">
            <b>Delsumma</b> 1395 SEK
        </p>
        <p id="text6">
            <b>Leverans</b> 0 SEK
        </p>
        <p id="text7">
            <b>Totalt att betala</b> 1395 SEK
        </p>
        <div>
            <a id="return" href="/" title="Åter till varukorgen">Åter till varukorgen</a> 
        </div>
        
    </div>
    </>

    //</form>

    );

    
}
export default Kassa