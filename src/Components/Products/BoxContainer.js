import React, { useState } from 'react';
import { Link } from 'react-router-dom'
export const Box = (props) => {

    const [grid,setGrid] = useState('');

    const OnClick = value => {

        props.cart.some(item => item.name === value.name) 
        ? console.log('dubblettttt')
        : props.setCart([...props.cart,value])
    }

    return (
        <>
            <div class="col-sm-4" id="wineboxgrid">
                <header className="headerBoxItem"><h3>{props.product.name}</h3></header>
                <div className="imageContWinebox" style={{
                    backgroundImage: `url(${props.product.background.url})`,
                    backgroundRepeat: 'no-repeat'
                    }}>
                        
                        <Link to={`/${props.product.prodid}`}><img className="wineboxImage" id="productImg" src={props.product.productimage.url}></img></Link>
                </div>

                <div className="boxInfo">
                    <p className="descText">
                        {props.product.description}</p>
                    <p className="descText" id="price">
                        {props.product.price} SEK/Månad</p>
                </div>

                <button onClick={() => OnClick(props.product)} className="wineboxButton">Lägg till i varukorg</button>
            </div>
        </>
    )
}

// const box = () => {

// return (
// <>

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

export default Box;