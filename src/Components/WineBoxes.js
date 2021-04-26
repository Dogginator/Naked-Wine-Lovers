import React from 'react';
import { BoxData } from './Boxes'

export const BoxContainer = ({boxId, colorId, winebox}) => {
    return (
    <div>
            {BoxData.filter(data => data.id === boxId).map((data) =>  { return (
                <>
                <header className="headerBoxItem"  style={{backgroundColor:'#' + colorId}}><h3>{data.name}</h3></header>
                <div className="imageContWinebox"  style={{backgroundColor:'#' + colorId}}>
                    <img className="wineboxImage" src="Images/Vinbildconf.png" width="60%"></img>
                </div>
                <img className="grapeImage" src="Images/grape.png"></img>
                <div className="boxInfo">
                    <p className="priceText">
                    {data.price}
                    <br/>
                    <br/>
                    <br/>
                    {data.description}</p>
                </div>

                <a href={"/" + winebox}><div className="wineboxButton">VÄLJ & LÄS MER</div></a> 

                </>
            )})
        }
        </div>
    )
}

const WineBoxes = () => {

return (
<>
<header className="wineboxHeader">
    <h2>JOIN THE CLUB!</h2>
    <p>Hitta det perfekta naturvinet för dig! 
        Du väljer, vi levererar hem till dörren, inga konstigheter.
        <br></br>Nånting om att natutligt är bra, ekologiskt, giftfritt, glada vinodlare</p>
</header>

<div class="wineboxContainer">
  <div class="row" id="topRow">
    <div class="col-sm-4" id="wineboxgrid">
    {<BoxContainer boxId={1} colorId={'C9D5C7'} winebox={'1'}/>}
    </div>
    <div class="col-sm-4" id="wineboxgrid">
        {<BoxContainer boxId={2} colorId={'D4C7D7'} winebox={'2'}/>}
    </div>
    <div class="col-sm-4" id="wineboxgrid">
            {<BoxContainer boxId={3} colorId={'CAB19C'} winebox={'3'}/>}
        </div>
  </div>

  <div class="row" id="downRow">
    <div class="col-sm-4" id="wineboxgrid">
    {<BoxContainer boxId={4} colorId={'F3F1EE'} winebox={'4'}/>}
    </div>
    <div class="col-sm-4" id="wineboxgrid">
        {<BoxContainer boxId={5} colorId={'C7D6D7'} winebox={'5'}/>}
    </div>
    <div class="col-sm-4" id="wineboxgrid">
            {<BoxContainer boxId={6} colorId={'D7C7C7'} winebox={'6'}/>}
    </div>
  </div>
</div>
</>
)

}

export default WineBoxes;