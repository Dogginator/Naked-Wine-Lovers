import React, { useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, INCREASE, CHANGE_QTY } from '../../actions'



const Box1 = () => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });
    const items = useSelector(state => state.productsCMS);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

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
                        <h1 className="mobileh1">Blandat</h1>
                                <p id="mobiletype">Vitt, orange, rött och mousserande</p>
                            <div className="infoContainer" id="picturePos">
                                <p>
                                    <img className="TopPicture" src="./Images/BildBlandatLådan.png" alt="WineBox mixed"/>
                                </p>
                                <p id="ScrollDownInfo">Här kan du läsa om flaskorna!</p>
                                <button type="button" id="ReadInfo" onClick={executeScroll}><IoIosArrowDown /></button>
                            </div>
                        </div>
                        <div className="col" id="col-grid-info">
                            <div className="infoContainer">

                                <h1 className="desktoph1">Blandat</h1>
                                <p id="type">Vitt,  orange, rött och mousserande</p>
                                <button type="button" id="MobilVidareKnapp" onClick={() => AddToCart(items[0])}>Lägg till i varukorg</button>
                                <h2 className="produkth2" >Prenumerera 899 SEK /Månad</h2>
                                <p className="produktP">
                                    Vinlådan för dig som vill prova på det bästa av alla världar. I den här lådan får du en av varje. 
                                    Det vill säga, ett vitt, ett orange, ett rött och ett mousserande. De passar alla till olika tillfällen,
                                    
                                    men är alla lika goda! Månadens fyra gårdar är: Nonna Calbretta, Amigos, Three Season och Garden of Eden. 
                                    <br className="For_desktop"/>
                                    <br />
                                <h3 className="produktH3">Så här funkar det.</h3>
                                <br id="produktBR"/>
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

                        {/* //<div className="col" id="ColPaddingZero" >
                        //<button type="button" id="VidareKnapp">Lägg till i varukorg</button></div>    */}

                        <div className="col" id="ColPaddingZero" ><button type="button" id="VidareKnapp" onClick={() => AddToCart(items[0])}>Lägg till i varukorg</button></div>   

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
                <h2 className="h21mobil" id="White_is_blanc">WHITE IS BLANC</h2>
                    <div className="col" id="ColPaddingZero">
                    
                        <img className="Blandat1" alt="Bottle of White is Blanc" src="./Images/Blandat1.png"></img>
                    </div>
                    <div className="col" id="ColPaddingZero">
                        <h2 className="h21">WHITE IS BLANC</h2><br/>
                        <p className="DesktopInfo">Vitt, USA 2020</p><br/>
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
                        <p className="DesktopInfo" id="InfoLink">
                        <b>Läs mer om vingården:</b> <Link to="/GardenOfEden">Garden of Eden</Link>
                        </p>
                    </div>
                    <div className="col" id="ColPaddingZero">
                        <img className="Taste1" alt="Taste scale" src="./Images/Plats1.png"></img>
                        <button className="ReadMoreButton" onClick={() => setOpen(true)}>Läs mer här!</button>
                    </div>
                </div>
                <div className="row" id="ContainerWindow">
                <h2 className="h21mobil" id="Orange_you_glad">ORANGE YOU GLAD</h2>
                <div className="col" id="ColPaddingZero">
                        <img className="Blandat2" alt="Bottle of Orange you Glad" src="./Images/Blandat2.png"></img>
                    </div>
                    <div className="col" id="ColPaddingZero">
                        <h2 className="h21" >ORANGE YOU GLAD</h2><br/>
                        <p className="DesktopInfo" >Orange, Frankrike  2020</p><br/>
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
                        <p className="DesktopInfo" id="InfoLink">
                        <b>Läs mer om vingården:</b> <Link to="/JamesAndTheGiantGrape">James and the Giant Grape</Link>
                        </p>
                    </div>
                    <div className="col" id="ColPaddingZero">
                    <img className="Taste2" alt="Taste scale" src="./Images/Plats2.png"></img>
                    <button className="ReadMoreButton" onClick={() => setOpen(true)}>Läs mer här!</button>
                    </div>
                </div>
                <div className="row" id="ContainerWindow">
                <h2 className="h21mobil">PINK PANTHER</h2>
                <div className="col" id="ColPaddingZero">
                        <img className="Blandat3"  alt="Bottle of Pink Panther" src="./Images/Blandat3.png"></img>
                    </div>
                    <div className="col" id="ColPaddingZero">
                        <h2 className="h21">PINK PANTHER</h2><br/>
                        <p className="DesktopInfo">Mousserande, Frankrike 2020</p><br/>
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
                        <p className="DesktopInfo" id="InfoLink">
                        <b>Läs mer om vingården:</b> <Link to="/ThreeSeasonsVinyard">Three Seasons Vinyard</Link>
                        </p>
                    </div>
                    <div className="col" id="ColPaddingZero">
                        <img className="Taste3" alt="Taste scale" src="./Images/Plats3-4.png"></img>
                        <button className="ReadMoreButton" onClick={() => setOpen(true)}>Läs mer här!</button>
                    </div>
                </div>
                <div className="row" id="ContainerWindow">
                <h2 className="h21mobil">GIRL IN RED</h2>
                <div className="col" id="ColPaddingZero">
                        <img className="Blandat4" alt="Bottle of Girl in red" src="./Images/Blandat4.png"></img>
                    </div>
                    <div className="col" id="ColPaddingZero">
                        <h2 className="h21">GIRL IN RED</h2><br/>
                        <p className="DesktopInfo">Rött, Spanien 2020</p><br/>
                        <p className="DesktopInfo">
                        Ett mustigt rött vin från Amigos Vinyard med inslag av mörka 
                        körsbär, blåbär och lakrits. Perfekt till kött och fågel. 
                        </p><br/>
                        <p className="DesktopInfo">
                        Flaska: 750 ml
                        Alkoholhalt 12%
                        Sockerhalt 8 g/l   
                        </p><br/>
                        <p className="DesktopInfo" id="InfoLink">
                        <b>Läs mer om vingården:</b> <Link to="/AmigosVinyard">Amigos Vinyard</Link>
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
                    <div className="col" id="ColPaddingZero"><img className="NextBlandat" alt="Box of May" src="./Images/BlandatMaj.png"/></div>
                    <div className="col" id="ColPaddingZero"><img className="PlaceHolder1" alt="Box not Selected" src="./Images/PlaceHolder2end.png"/></div>
                    <div className="col" id="ColPaddingZero"><img className="PlaceHolder2" alt="Box not Selected" src="./Images/PlaceHolder2end.png"/></div>
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

export default Box1

