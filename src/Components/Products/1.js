import React, { Component, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
const FlaskaPlatsTvå = "../Images/FlaskaPlatsTvå.png";
const FlaskaPlatsEtt = "../Images/FlaskaPlatsEtt.png";
const Nr3 = "../Images/Nr3.png";


const Box1 = () => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });


    return (
        <>
            <div className="Product-page">
                <div className="row" id="row-productInfo">
                    <div className="col" id="col-grid-info">
                        <div className="infoContainer" id="picturePos">
                            <p>
                                <img className="TopPicture" src="./Images/TopImage.png" />
                            </p>
                            <p id="ScrollDownInfo">Här kan du läsa om flaskorna!</p>
                            <button type="button" id="ReadInfo" onClick={executeScroll}><IoIosArrowDown /></button>
                        </div>
                    </div>
                    <div className="col" id="col-grid-info">
                        <div className="infoContainer">

                            <h1>Vad fan är naturvin-lådan</h1>
                            <p id="type">För nybörjaren</p>
                            <h2>Prenumerera 1046 SEK/MÅNAD</h2>
                            <p>
                                Detta är den perfekta vinlådan för dig som är nybörjare och skulle vilja utforska världen av naturvin.
                                Det finns många olika sorter och typer av naturvin, det kan vara svårt att som nybörjare veta vad du tycker om.
                                Därför väljer vi noga ut ett antal viner som ingår i lådan.
                                Du får nya viner varje månad så att du ska få en så mångsidig syn av alla goda naturviner som finns.
                </p>
                            <h3>Så här funkar det.</h3>
                            <p>
                                Detta är en prenumeration där du får 6 flaskor naturvin per månaden i 4 månader.
                                Vinerna är noga utvalda från de bästa vingårdarna. Denna produktsida är för vinerna du får i April månad.
                                Är du sugen på att se nästa månads utbud? Kika längst ner på denna sida.
                </p>
                            <p id="text-bold-14">
                                Välj att betala allt nu eller dela upp betalningen per månad.
                                Totalpris: 4185 SEK. eller delbetala 1046 SEK i månaden. Fraktfritt och skatt ingår.
                </p>
                        </div>
                    </div>
                </div>
                <div>
                        <button type="button" id="VidareKnapp">Lägg till i varukorg</button>
                </div>
            </div>
            <div className="row">
                <div className="col"/>
                <div className="col">
                     <h1 className="RubrikBlandat"><b>LÅDANS VINER I APRIL 2021</b></h1>
                </div>
                <div className="col"/>
            </div>
            <div className="row">
                <div className="col">
                    <img className="Blandat1" scr="./Images/Blandat1.png"></img>
                </div>
                <div className="col" ref={myRef}>
                    <h2>White is blanc</h2><br/>
                    <p>Vitt, USA 2020</p><br/>
                    <p id="infoText">
                    Detta vita vinet från Garden of Eden Vinyard i Kalifornien, USA. Inslag av päron, färska örter och honung. 
                    Ett bra första steg för dig som från början gillar vitt vin, men ännu inte prövat naturvin. 
                    Funkar perfekt till fisk eller vegetarisk. 
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 12%
                    Sockerhalt 10 g/l   
                    </p><br/>
                    <p>
                    <b>Läs mer om vingården:</b> <a href="#GardenOfEden">Garden of Eden</a>
                    </p>
                </div>
                <div className="col">
                    <img></img>
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <img className="Blandat2" scr="./Images/Blandat2.png"></img>
                </div>
                <div className="col">
                    <h2>orange you glad</h2><br/>
                    <p>Orange, Frankrike  2020</p><br/>
                    <p id="infoText">
                    Ett fermenterat vitt vin från James and the Giant Grape. 
                    Från norra Italien kommer denna otämjda rebell. Med smak av torkad frukt, 
                    rostade nötter och job funkar det här vinet bäst till mustiga grytor och mycket kryddor.
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 11,5%
                    Sockerhalt 9 g/l   
                    </p><br/>
                    <p>
                    <b>Läs mer om vingården:</b> <a href="#JamesAndTheGiantGrape">James and the Giant Grape</a>
                    </p>
                </div>
                <div className="col">
                    <img ></img>
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <img className="Blandat3" scr="./Images/Blandat3.png"></img>
                </div>
                <div className="col">
                    <h2>pink panther</h2><br/>
                    <p>Mousserande, Frankrike 2020</p><br/>
                    <p id="infoText">
                    Ett sött mousserande från Three Seasons Vinyard vid den franska 
                    riveran. Med sina toner av äppelcider, citrus och vita blommor 
                    funkar detta bäst som apertif eller till desserter. 
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 11,8%
                    Sockerhalt 11 g/l   
                    </p><br/>
                    <p>
                    <b>Läs mer om vingården:</b> <a href="#ThreeSeasonsVinyard">Three Seasons Vinyard</a>
                    </p>
                </div>
                <div className="col">
                    <img></img>
                </div>
            </div>
            <div className="row">
            <div className="col">
                    <img className="Blandat4" scr="./Images/Blandat4.png"></img>
                </div>
                <div className="col">
                    <h2>girl in red</h2><br/>
                    <p>Rött, Spanien 2020</p><br/>
                    <p id="infoText">
                    Ett mustigt rött vin från Amigos Vinyard med inslag av mörka 
                    körsbär, blåbär och lakrits. Perfekt till kött och fågel. 
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 12%
                    Sockerhalt 8 g/l   
                    </p><br/>
                    <p>
                    <b>Läs mer om vingården:</b> <a href="#AmigosVinyard">Amigos Vinyard</a>
                    </p>
                </div>
                <div className="col">
                    <img></img>
                </div>
            </div>
            <h1 id="KommandeLador"><b>KOMMANDE LÅDOR</b></h1>
            <h2 id="BoxMonth1">LÅDANS VINER I MAJ</h2>
            <h2 id="BoxMonth2">LÅDANS VINER I JUNI</h2>
            <h2 id="BoxMonth3">LÅDANS VINER I JULI</h2>
            <div>
                <img className="NextVine" scr="./Images/Maj.png" />
            </div>
            <a id="LinkTo1" href="/">Här kan du läsa om Maj lådan</a>
            <div>
                <img className="PlaceHolder1" scr="./Images/PlaceHolder.png" />
            </div>
            <a id="LinkTo2" href="/">Ej urvalt ännu</a>
            <div>
                <img className="PlaceHolder2" scr="./Images/PlaceHolder.png" />
            </div>
            <a id="LinkTo3" href="/">Ej urvalt ännu</a>
        </>
    )
}

export default Box1

