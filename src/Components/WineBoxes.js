import React from 'react';
import { BoxData } from './Boxes'

export const BoxContainer = ({boxId}) => {
    return (
    <div class="wineboxItem">
            {BoxData.filter(data => data.id === boxId).map((data) =>  { return (
                <>
                <div className="headerBoxItem"><h3>{data.name}</h3></div>
                <div className="imageContWinebox">
                    <img className="wineboxImage" src="Images/Vinbildconf.png" width="60%"></img>
                </div>
                <img className="grapeImage" src="Images/grape.png"></img>
                <div className="boxInfo">
                    <p className="priceText">{data.price}</p>
                    <br/>
                    <p className="descText">{data.description}</p>
                </div> 
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
    {<BoxContainer boxId={1}/>}
        </div>
    </div>
    <div class="col-sm-4">
        <div class="wineboxItem">
        {<BoxContainer boxId={2}/>}
        </div>
    </div>
    <div class="col-sm-4">
        <div class="wineboxItem">
            {<BoxContainer/>}
        </div>
    </div>
  </div>
</div>
</>
)

}

export default WineBoxes;