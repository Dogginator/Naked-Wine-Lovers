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
                <div></div>

            </form>
        </div>
    );
}
export default Kassa_V2