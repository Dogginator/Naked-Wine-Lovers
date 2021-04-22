import React, { Component, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowDown} from 'react-icons/io'
const FlaskaPlatsTvå = "../Images/FlaskaPlatsTvå.png";
const FlaskaPlatsEtt = "../Images/FlaskaPlatsEtt.png";
const Nr3 = "../Images/Nr3.png";



export const Box3 = () => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();


    return (
        <div>        
            <div className="ProduktSida">
                <div>
                    <p>
                    <img className="TopPicture" src="./Images/TopImage.png"/>
                    </p>
                </div>
                <div>
                    <p id="ScrollDownInfo">Här kan du läsa om flaskorna!</p>
                </div>
                <p>
                  <h1 id="ProduktH1">Vinlåda #3</h1>
                </p>
                <p id="selj1">
                    För nybörjaren
                </p>
                <p>
                    <h2 id="ProduktH2">Prenumerera 1046 SEK/MÅNAD</h2>
                </p>
                <p id="selj2">
                    Detta är den perfekta vinlådan för dig som är nybörjare och skulle vilja utforska världen av naturvin. 
                    Det finns många olika sorter och typer av naturvin, det kan vara svårt att som nybörjare veta vad du tycker om. 
                    Därför väljer vi noga ut ett antal viner som ingår i lådan. 
                    Du får nya viner varje månad så att du ska få en så mångsidig syn av alla goda naturviner som finns. 
                </p>
                <p>
                    <h3 id="ProduktH3">Så här funkar det.</h3>
                </p>
                <p id="selj3">
                    Detta är en prenumeration där du får 6 flaskor naturvin per månaden i 4 månader.
                    Vinerna är noga utvalda från de bästa vingårdarna. Denna produktsida är för vinerna du får i April månad. 
                    Är du sugen på att se nästa månads utbud? Kika längst ner på denna sida.
                </p>
                <p id="selj4">
                Välj att betala allt nu eller dela upp betalningen per månad. 
                Totalpris: 4185 SEK. eller delbetala 1046 SEK i månaden. Fraktfritt och skatt ingår.           
                </p>
                <div>
                    <Link to="/Kassa">
                        <button type="button" id="VidareKnapp">Prenumerera</button>
                    </Link>   
                </div>
                <div>
                <button type="button" id="ReadInfo" onClick={executeScroll}><IoIosArrowDown/></button>
                </div>
                
            </div>
            <h1 id="LadansViner"><b>LÅDANS VINER I APRIL 2021</b></h1>
            <div ref={myRef} >

                <p>
                    <img  scr={FlaskaPlatsEtt} className="FlaskaPlatsEtt"/>
                </p>
                
            </div>
            <p id="TextPos1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus urna laoreet aliquet cras est sagittis semper. 
            Purus urna fames amet eu venenatis lobortis. Dictum libero, nullam mauris ut. 
            Tortor, consequat ac erat tristique luctus cras.
            </p>
            <div>
                <img className="FlaskaPlatsTvå" scr={FlaskaPlatsTvå}/>
            </div>
            <p id="TextPos2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus urna laoreet aliquet cras est sagittis semper. 
            Purus urna fames amet eu venenatis lobortis. Dictum libero, nullam mauris ut. 
            Tortor, consequat ac erat tristique luctus cras.
            </p>
            <div>
                <img className="Nr3" scr={Nr3}/>
            </div>
            <p id="TextPos3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus urna laoreet aliquet cras est sagittis semper. 
            Purus urna fames amet eu venenatis lobortis. Dictum libero, nullam mauris ut. 
            Tortor, consequat ac erat tristique luctus cras.
            </p>
            <div>
                <img className="Nr4" scr="./Images/Nr4.png"/>
            </div>
            <p id="TextPos4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus urna laoreet aliquet cras est sagittis semper. 
            Purus urna fames amet eu venenatis lobortis. Dictum libero, nullam mauris ut. 
            Tortor, consequat ac erat tristique luctus cras.
            </p>
            <div>
                <img className="Nr5" scr="./Images/Nr5.png"/>
            </div>
            <p id="TextPos5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus urna laoreet aliquet cras est sagittis semper. 
            Purus urna fames amet eu venenatis lobortis. Dictum libero, nullam mauris ut. 
            Tortor, consequat ac erat tristique luctus cras.
            </p>
            <div>
                <p>
                <img className="Nr6" scr="./Images/Nr6.png"/>
                </p>
            </div>
            <p id="TextPos6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus urna laoreet aliquet cras est sagittis semper. 
            Purus urna fames amet eu venenatis lobortis. Dictum libero, nullam mauris ut. 
            Tortor, consequat ac erat tristique luctus cras.
            </p>
            <h1 id="KommandeLador"><b>KOMMANDE LÅDOR</b></h1>
            <h2 id="BoxMonth1">LÅDANS VINER I MAJ</h2>
            <h2 id="BoxMonth2">LÅDANS VINER I JUNI</h2>
            <h2 id="BoxMonth3">LÅDANS VINER I JULI</h2>
            <div>
                <img className="NextVine" scr="./Images/Maj.png"/>
            </div>
            <a id="LinkTo1" href="/">Här kan du läsa om Maj lådan</a>
            <div>
                <img className="PlaceHolder1" scr="./Images/PlaceHolder.png"/>
            </div>
            <a id="LinkTo2" href="/">Ej urvalt ännu</a>
            <div>
                <img className="PlaceHolder2" scr="./Images/PlaceHolder.png"/>
            </div>
            <a id="LinkTo3" href="/">Ej urvalt ännu</a>
        </div>
    )

}
export default Box3;