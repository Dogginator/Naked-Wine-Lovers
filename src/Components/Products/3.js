import React, { useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, INCREASE, CHANGE_QTY } from '../../actions'



const Box3 = () => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });
    const items = useSelector(state => state.productsCMS);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const AddToCart = (prod) => {

        if(cart.some(item => item.prodid === prod.prodid)) {
            dispatch(CHANGE_QTY(prod,true));
            dispatch(INCREASE(prod.price));
        }
        else {
            dispatch(ADD_TO_CART(prod));
            dispatch(INCREASE(prod.price));
        }
    }

    const [open, setOpen] = useState(false);

    
    const onCloseModal = () => setOpen(false);


    return (
        <>
            <div className="Product-page">
                <div className="row" id="row-productInfo">
                    <div className="col" id="col-grid-info">
                    <h1 className="mobileh1">VITT</h1>
                                <p id="mobiletype">VITT</p>
                            
                        <div className="infoContainer" id="picturePos">
                            <p>
                                <img className="TopPicture" src="./Images/BildVitaLådan.png" alt="WineBox mixed"/>
                            </p>
                            <p id="ScrollDownInfo">Här kan du läsa om flaskorna!</p>
                            <button type="button" id="ReadInfo" onClick={executeScroll}><IoIosArrowDown  id="DownArrow" size="22px"/></button>
                        </div>
                    </div>
                    <div className="col" id="col-grid-info">
                        <div className="infoContainer">

                            <h1 className="desktoph1">VITT</h1>
                            <p id="type">Vitt</p>
                            <button type="button" id="MobilVidareKnapp" onClick={() => AddToCart(items[2])}>Lägg till i varukorg</button>
                            <h2 className="produkth2">Prenumerera 699 SEK /Månad</h2>
                            <p className="produktP">
                                Vinlådan för dig som vill prova på det bästa av alla världar. I den här lådan får du en av varje. 
                                Det vill säga, ett vitt, ett orange, ett rött och ett mousserande. De passar alla till olika tillfällen, 
                                men är alla lika goda! Månadens fyra gårdar är: Nonna Calbretta, Amigos, Three Season och Garden of Eden. 
                </p>
                            <h3 className="produktH3">Så här funkar det.</h3>
                            <p className="produktP">
                            <a className="MobilH3"><b>Så här funkar det.</b></a> <br id="produktBR"/>
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
                    <div className="col" id="ColPaddingZero"><button type="button" id="VidareKnapp" onClick={() => AddToCart(items[2])}>Lägg till i varukorg</button></div>   
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
            <h2 className="h21mobil">SNOW WHITE</h2>
                <div className="col" id="ColPaddingZero">
                    <img className="Vitt1" alt="Bottle of Snow White" src="./Images/Vit1-2.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2 className="h21">SNOW WHITE</h2><br/>
                    <p className="DesktopInfo">Vitt, USA  2020</p><br/>
                    <p className="DesktopInfo">
                    Detta vita vinet från Garden of Eden Vinyard i Kalifornien, USA. Inslag av päron, färska örter och honung. 
                    Ett bra första steg för dig som från början gillar vitt vin, men ännu inte prövat naturvin. 
                    Funkar perfekt till fisk eller vegetarisk. 
                    </p><br/>
                    <p className="DesktopInfo">
                    Flaska: 750 ml
                    Alkoholhalt 12%
                    Sockerhalt 10 g/l   
                    </p><br/>
                    <p id="InfoLink" className="DesktopInfo">
                    <b>Läs mer om vingården:</b> <Link to="/GardenOfEden" className="InfoLinkVinyard">Garden of Eden</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                    <img className="Taste1" alt="Taste scale" src="./Images/Plats1.png"></img>
                    <button className="ReadMoreButton" onClick={() => setOpen(true)}>Läs mer här!</button>
                </div>
            </div>
            <div className="row" id="ContainerWindow">
            <h2 className="h21mobil" id="White_is_blanc">AURORA BOREALIS</h2>
            <div className="col" id="ColPaddingZero">
                <img className="Vitt2" alt="Bottle of Aurora Borealis" src="./Images/Vit1-2.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2 className="h21">AURORA BOREALIS</h2><br/>
                    <p className="DesktopInfo"> Vitt, Frankrike  2020</p><br/>
                    <p className="DesktopInfo">
                    Ett fermenterat vitt vin från James and the Giant Grape. 
                    Från norra Italien kommer denna otämjda rebell. Med smak av torkad frukt, 
                    rostade nötter och job funkar det här vinet bäst till mustiga grytor och mycket kryddor.
                    </p><br/>
                    <p className="DesktopInfo"> 
                    Flaska: 750 ml
                    Alkoholhalt 11,5%
                    Sockerhalt 9 g/l   
                    </p><br/>
                    <p id="InfoLink" className="DesktopInfo">
                    <b>Läs mer om vingården:</b> <Link to="/JamesAndTheGiantGrape" className="InfoLinkVinyard">James and the Giant Grape</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                <img className="Taste2" alt="Taste scale" src="./Images/Plats2.png"></img>
                <button className="ReadMoreButton" onClick={() => setOpen(true)}>Läs mer här!</button>
                </div>
            </div>
            <div className="row" id="ContainerWindow">
            <h2 className="h21mobil">URSA MAJOR</h2>
            <div className="col" id="ColPaddingZero">
                <img className="Vitt3" alt="Bottle of Ursa Major" src="./Images/Vit3-4.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2 className="DesktopInfo" className="h21">h21"URSA MAJOR</h2><br/>
                    <p className="DesktopInfo">Vitt, Frankrike 2020</p><br/>
                    <p className="DesktopInfo">
                    Ett sött mousserande från Three Seasons Vinyard vid den franska 
                    riveran. Med sina toner av äppelcider, citrus och vita blommor 
                    funkar detta bäst som apertif eller till desserter. 
                    </p><br/>
                    <p className="DesktopInfo">
                    Flaska: 750 ml
                    Alkoholhalt 11,8%
                    Sockerhalt 11 g/l   
                    </p><br/>
                    <p id="InfoLink" className="DesktopInfo">
                    <b>Läs mer om vingården:</b> <Link to="/ThreeSeasonsVinyard" className="InfoLinkVinyard">Three Seasons Vinyard</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                    <img className="Taste3" alt="Taste scale" src="./Images/Plats3-4.png"></img>
                    <button className="ReadMoreButton" onClick={() => setOpen(true)}>Läs mer här!</button>
                </div>
            </div>
            <div className="row" id="ContainerWindow">
            <h2 className="h21mobil">66° 33ʹN</h2>
            <div className="col" id="ColPaddingZero">
                    <img className="Vitt4" alt="Bottle of 66° 33ʹN" src="./Images/Vit3-4.png"></img>
                </div>
                <div className="col" id="ColPaddingZero">
                    <h2 className="DesktopInfo" className="h21"> 66° 33ʹN</h2><br/>
                    <p className="DesktopInfo">Vitt, Spanien 2020</p><br/>
                    <p className="DesktopInfo">
                    Ett mustigt rött vin från Amigos Vinyard med inslag av mörka 
                    körsbär, blåbär och lakrits. Perfekt till kött och fågel. 
                    </p><br/>
                    <p className="DesktopInfo">
                    Flaska: 750 ml
                    Alkoholhalt 12%
                    Sockerhalt 8 g/l   
                    </p><br/>
                    <p id="InfoLink" className="DesktopInfo">
                    <b>Läs mer om vingården:</b> <Link to="/AmigosVinyard" className="InfoLinkVinyard">Amigos Vinyard</Link>
                    </p>
                </div>
                <div className="col" id="ColPaddingZero">
                    <img className="Taste4" alt="Taste scale" src="./Images/Plats3-4.png"></img>
                    <button className="ReadMoreButton" onClick={() => setOpen(true)}>Läs mer här!</button>
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
            <Link to="/Vinlådor" className="BacktoBoxes"> Tillbaka till vinlådor </Link>
        </>
    )
}

export default Box3