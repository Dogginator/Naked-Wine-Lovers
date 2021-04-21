import { GrDeliver } from 'react-icons/gr';
import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'

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
const [info, setInfo] = useState('');
const loadCostumerInfo = async () => {
const response = await fetch("http://localhost:3000/Kassa");
const data = await response.json();
setInfo(data)
}
useEffect(() => {
  if(info.length === 0){
      loadCostumerInfo()
  }  
})

return (
    <>
     <div className="container">
            <h2 id="ConfirmH1">Tack för ditt köp!</h2>
            <div className="row">
                <div className="col-cm "></div>
                <div className="col-sm-5">
                    <h2 id="ConfirmH2">Tack för ditt köp!</h2>
                    <h3 id="ConfirmH3"> Ordernummer: 13589138813</h3>
                    <Line color="black" />
                    <p id="p0">
                    <img id="PicP0" src="Vinbildconf.png" height="50px" />    <b>1395 SEK</b> <br />
                    <i> Vad fan är naturvin-boxen </i><br />
                        Prenumeration: en månad <br />
                        <b> Antal: 1 </b>
                         </p>
                    <Line color="black" />
                <div className="bekräftelseInfo">
                <p id="p1">Håll utkik efter ditt bekräftelsemail som har skickats till din e-post {info.email}
                           </p>
                <p id="p2">Vi meddlar dig via e-post när dina varor har skickats.  <br />
                Vi hoppas att du ska bli nöjd!</p>
                 <p id="p3">
                    <GrDeliver size="1.2em" />    Beräknad leveranstid är 1-2 veckor.
                </p>
                <p id="p4">
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
                    <div>
                    <Link to="/">
                        <a href="/" id="Confirmknappen">Tillbaka till start</a>
                    </Link>
                </div>
        </div>
    </>
    )
}
export default Confirm;
