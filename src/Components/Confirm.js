import { GrDeliver } from 'react-icons/gr';
import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

export const Confirm = () => {
    const Line = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0.5
            }}
        />
    );



const cart = useSelector(state => state.cart);
const totalPrice = useSelector(state => state.totalPrice);
const custInfo = useSelector(state => state.custInfo);

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
            <a id="prodPrice">{prod.price} SEK/månad</a>
            <br/>
            <a id="prodName">{prod.name}</a>
            <br/>
            <a id="prodQuantity"> Antal: {prod.quantity}</a>
            </div>
        </div>
    );
}

return (
    <>
        {console.log(custInfo)};
     <div className="container" id="confrimContainer">
            <h2 id="ConfirmH1">Tack för ditt köp!</h2>
            <div className="row" id="confirmRow">
                <div className="col-cm "></div>
                <div className="col-sm-8" id="confirmText">

                    <h3 id="ConfirmH3"> Ordernummer: 13589138813</h3>
                    <Line color="black" />
                    <p id="p0">
                    {cart.map((prod) => itemOutput(prod))}
                    <div className="ConfirmTotalPrice" >Totalt: {totalPrice} SEK/månad</div>
                         </p>
                    <Line color="black" />
                <div className="bekräftelseInfo">
                    
                        <p className="confirmInfo" id="p1">Håll utkik efter ditt bekräftelsemail som har skickats till din e-post ({custInfo.email}) </p>
                        
                   
                    
                <p id="p2" className="confirmInfo">Vi meddlar dig via e-post när dina varor har skickats.  <br />
                Vi hoppas att du ska bli nöjd!</p>
                 <p id="p3" className="confirmInfo">
                    <GrDeliver size="1.2em" />    Beräknad leveranstid är 1-2 veckor.
                </p>
                <p id="p4" className="confirmInfo">
                  Undrar du över något?
                <br></br>
                <br></br>
                 Kontakta oss på nakedwinelovers@gmail.com
                 <br />
                 <br />
                Telefon: 08 02000 00
                 </p>
            </div>

                </div>
                <div className="col-sm"></div>
            </div>
                    <div className="ConfirmKnappContainer">
                    <Link to="/Vinlådor">
                        <a href="/" id="Confirmknappen"><b>Tillbaka till start</b></a>
                    </Link>
                </div>
        </div>
    </>
    )
}
export default Confirm;
