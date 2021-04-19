import React from 'react';
import { BoxData } from './Boxes'

export const BoxContainer = ({boxId, colorId}) => {
    return (
    <div class="wineboxItem">
            {BoxData.filter(data => data.id === boxId).map((data) =>  { return (
                <>
                <div className="headerBoxItem"  style={{backgroundColor:'#' + colorId}}><h3>{data.name}</h3></div>
                <div className="imageContWinebox"  style={{backgroundColor:'#' + colorId}}>
                    <img className="wineboxImage" src="Images/Vinbildconf.png" width="60%"></img>
                </div>
                <img className="grapeImage" src="Images/grape.png"></img>
                <div className="boxInfo">
                    <p className="priceText">{data.price}</p>
                    <br/>
                    <p className="descText">{data.description}</p>
                </div>

                <button className="wineboxButton"><h5>VÄLJ & LÄS MER</h5></button> 
                </>
            )})
        }
        </div>
    )
}

const WineBoxes = () => {

return (
<>
<div className="wineboxHeader">
    <h2 id="headertexth2">JOIN THE CLUB!</h2>
</div>

<div class="wineboxContainer">
  <div class="row">
    <div class="col-sm-4">
    <div class="wineboxItem">
    {<BoxContainer boxId={1} colorId={'C9D5C7'}/>}
        </div>
    </div>
    <div class="col-sm-4">
        <div class="wineboxItem">
        {<BoxContainer boxId={2} colorId={'D4C7D7'}/>}
        </div>
    </div>
    <div class="col-sm-4"  id="boxRight">
        <div class="wineboxItem">
            {<BoxContainer boxId={3} colorId={'CAB19C'}/>}
        </div>
    </div>
  </div>

  <div class="row" id="downRow">
    <div class="col-sm-4">
    <div class="wineboxItem">
    {<BoxContainer boxId={4} colorId={'F3F1EE'}/>}
        </div>
    </div>
    <div class="col-sm-4">
        <div class="wineboxItem">
        {<BoxContainer boxId={5} colorId={'C7D6D7'}/>}
        </div>
    </div>
    <div class="col-sm-4" id="boxRight">
        <div class="wineboxItem">
            {<BoxContainer boxId={6} colorId={'D7C7C7'}/>}
        </div>
    </div>
  </div>
</div>
</>
)

}

export default WineBoxes;