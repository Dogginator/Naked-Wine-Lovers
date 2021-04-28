import React, { useState } from 'react';

export const WineBoxes = (props) => {

    const OnClick = value => {
        props.setCart([...props.cart,value])
    }

    return (
        <>
            <div class="col-sm-4" id="wineboxgrid">
                <header className="headerBoxItem"><h3>{props.product.name}</h3></header>
                <div className="imageContWinebox" style={{
                    backgroundImage: `url(${props.product.background.url})`,
                    backgroundRepeat: 'no-repeat'
                    }}>
                    <img className="wineboxImage" id="productImg" src={props.product.productimage.url}></img>
                </div>

                <div className="boxInfo">
                    <p className="descText">
                        {props.product.description}</p>
                    <p className="descText" id="price">
                        {props.product.price}</p>
                </div>

                <button onClick={() => OnClick(props.product)} className="wineboxButton">Lägg till i varukorg</button>
            </div>
        </>
    )
}

// const box = () => {

// return (
// <>
// <header className="wineboxHeader">
//     <h2>JOIN THE CLUB!</h2>
//     <p>Hitta det perfekta naturvinet för dig! 
//         Du väljer, vi levererar hem till dörren, inga konstigheter.
//         <br></br>Nånting om att natutligt är bra, ekologiskt, giftfritt, glada vinodlare</p>
// </header>

// <div class="wineboxContainer">
//   <div class="row" id="topRow">
//     <div class="col-sm-4" id="wineboxgrid">
//     {<BoxContainer boxId={1} winebox={'1'} frontPic={'Box1'}/>}
//     </div>
//     <div class="col-sm-4" id="wineboxgrid">
//         {<BoxContainer boxId={2} winebox={'2'} frontPic={'Box2'}/>}
//     </div>
//     <div class="col-sm-4" id="wineboxgrid">
//             {<BoxContainer boxId={3} winebox={'3'} frontPic={'Box3'}/>}
//         </div>
//   </div>

//   <div class="row" id="downRow">
//     <div class="col-sm-4" id="wineboxgrid">
//     {<BoxContainer boxId={4} winebox={'4'} frontPic={'Box4'}/>}
//     </div>
//     <div class="col-sm-4" id="wineboxgrid">
//         {<BoxContainer boxId={5} winebox={'5'} frontPic={'Box5'}/>}
//     </div>
//   </div>
// </div>
// </>
// )

// }

export default WineBoxes;