import React, { useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'



const Box3 = () => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });


    return (
        <>
            <div className="Product-page">
                <div className="row" id="row-productInfo">
                    <div className="col" id="col-grid-info">
                        <div className="infoContainer" id="picturePos">
                            <p>
                                <img className="TopPicture" src="./Images/BildVitaLådan.png" alt="WineBox mixed"/>
                            </p>
                            <p id="ScrollDownInfo">Här kan du läsa om flaskorna!</p>
                            <button type="button" id="ReadInfo" onClick={executeScroll}><IoIosArrowDown /></button>
                        </div>
                    </div>
                    <div className="col" id="col-grid-info">
                        <div className="infoContainer">

                            <h1>VITT</h1>
                            <p id="type">Vitt</p>
                            <h2>Prenumerera 699 SEK /Månad</h2>
                            <p>
                                Vinlådan för dig som vill prova på det bästa av alla världar. I den här lådan får du en av varje. 
                                Det vill säga, ett vitt, ett orange, ett rött och ett mousserande. De passar alla till olika tillfällen, 
                                men är alla lika goda! Månadens fyra gårdar är: Nonna Calbretta, Amigos, Three Season och Garden of Eden. 
                </p>
                            <h3>Så här funkar det.</h3>
                            <p>
                                Detta är en prenumeration. Prenumererar du på denna låda så får du fyra flaskor blandade viner varje månad. 
                                Vinerna är noga utvalda från de bästa vingårdarna och byts varje månad ut. 
                                Denna produktsida är för vinerna du får i april månad. 
                                Nedan ser du varje flaska som kommer med i den här lådan. 
                                Det är ingen bindningstid och du kan välja att avsluta prenumerationen när du vill. 
                </p>
                        </div>
                    </div>
                </div>
                <div className="row" id="ContainerWindow">
                    <div className="col" id="ColPaddingZero"/>
                    <div className="col" id="ColPaddingZero"><button type="button" id="VidareKnapp">Lägg till i varukorg</button></div>   
                </div>
            </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero"/>
                <div className="col" id="ColPaddingZero">
                     <h1 className="RubrikBlandat" ref={myRef} ><b>LÅDANS VINER I APRIL 2021</b></h1>
                </div>
                <div className="col" id="ColPaddingZero"/>
            </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero">
                    <img className="Vitt1" alt="Bottle of Snow White" src="./Images/Vit1-2.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2>SNOW WHITE</h2><br/>
                    <p>Vitt, USA  2020</p><br/>
                    <p>
                    Detta vita vinet från Garden of Eden Vinyard i Kalifornien, USA. Inslag av päron, färska örter och honung. 
                    Ett bra första steg för dig som från början gillar vitt vin, men ännu inte prövat naturvin. 
                    Funkar perfekt till fisk eller vegetarisk. 
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 12%
                    Sockerhalt 10 g/l   
                    </p><br/>
                    <p id="InfoLink">
                    <b>Läs mer om vingården:</b> <Link to="/GardenOfEden">Garden of Eden</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                    <img className="Taste1" alt="Taste scale" src="./Images/Plats1.png"></img>
                </div>
            </div>
            <div className="row" id="ContainerWindow">
            <div className="col" id="ColPaddingZero">
                <img className="Vitt2" alt="Bottle of Aurora Borealis" src="./Images/Vit-2.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2>AURORA BOREALIS</h2><br/>
                    <p>Vitt, Frankrike  2020</p><br/>
                    <p>
                    Ett fermenterat vitt vin från James and the Giant Grape. 
                    Från norra Italien kommer denna otämjda rebell. Med smak av torkad frukt, 
                    rostade nötter och job funkar det här vinet bäst till mustiga grytor och mycket kryddor.
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 11,5%
                    Sockerhalt 9 g/l   
                    </p><br/>
                    <p id="InfoLink">
                    <b>Läs mer om vingården:</b> <Link to="/JamesAndTheGiantGrape">James and the Giant Grape</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                <img className="Taste2" alt="Taste scale" src="./Images/Plats2.png"></img>
                </div>
            </div>
            <div className="row" id="ContainerWindow">
            <div className="col" id="ColPaddingZero">
                <img className="Vitt3" alt="Bottle of Ursa Major" src="./Images/Vit3-4.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2>URSA MAJOR</h2><br/>
                    <p>Vitt, Frankrike 2020</p><br/>
                    <p>
                    Ett sött mousserande från Three Seasons Vinyard vid den franska 
                    riveran. Med sina toner av äppelcider, citrus och vita blommor 
                    funkar detta bäst som apertif eller till desserter. 
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 11,8%
                    Sockerhalt 11 g/l   
                    </p><br/>
                    <p id="InfoLink">
                    <b>Läs mer om vingården:</b> <Link to="/ThreeSeasonsVinyard">Three Seasons Vinyard</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                    <img className="Taste3" alt="Taste scale" src="./Images/Plats3-4.png"></img>
                </div>
            </div>
            <div className="row" id="ContainerWindow">
            <div className="col" id="ColPaddingZero">
                    <img className="Vitt4" alt="Bottle of 66° 33ʹN" src="./Images/Vit3-4.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2>66° 33ʹN</h2><br/>
                    <p>Vitt, Spanien 2020</p><br/>
                    <p>
                    Ett mustigt rött vin från Amigos Vinyard med inslag av mörka 
                    körsbär, blåbär och lakrits. Perfekt till kött och fågel. 
                    </p><br/>
                    <p>
                    Flaska: 750 ml
                    Alkoholhalt 12%
                    Sockerhalt 8 g/l   
                    </p><br/>
                    <p id="InfoLink">
                    <b>Läs mer om vingården:</b> <Link to="/AmigosVinyard">Amigos Vinyard</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                    <img className="Taste4" alt="Taste scale" src="./Images/Plats3-4.png"></img>
                </div>
            </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero"><h1 id="KommandeLador"><b>KOMMANDE LÅDOR</b></h1></div>
            </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero"/>
                <div className="col" id="ColPaddingZero"><h2 id="BoxMonth1">LÅDANS VINER I MAJ</h2></div>
                <div className="col" id="ColPaddingZero"><h2 id="BoxMonth1">LÅDANS VINER I JUNI</h2></div>
                <div className="col" id="ColPaddingZero"><h2 id="BoxMonth3">LÅDANS VINER I JULI</h2></div>
                <div className="col" id="ColPaddingZero"/>
            </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero"/>
                <div className="col" id="ColPaddingZero"><img className="NextWhite" alt="Box of May" src="./Images/VittMaj.png"/></div>
                <div className="col" id="ColPaddingZero"><img className="PlaceHolder1"  alt="Box not selected" src="./Images/PlaceHolder2end.png"/></div>
                <div className="col" id="ColPaddingZero"><img className="PlaceHolder2"  alt="Box not selected" src="./Images/PlaceHolder2end.png"/></div>
                <div className="col" id="ColPaddingZero"/>
            </div>
            <div className="row" id="ContainerWindow">
                <div className="col" id="ColPaddingZero"/>
                <div className="col" id="ColPaddingZero"><Link id="LinkTo1" to="/">Här kan du läsa om Maj lådan!</Link></div>
                <div className="col" id="ColPaddingZero"><Link id="LinkTo2" to="/">Ej urvalt ännu</Link></div>
                <div className="col" id="ColPaddingZero"><Link id="LinkTo3" to="/">Ej urvalt ännu</Link></div>
                <div className="col" id="ColPaddingZero"/>
            </div>
        </>
    )
}

export default Box3