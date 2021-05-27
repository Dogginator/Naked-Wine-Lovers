const Homepage = () => {

    return (
    <>
        <div className="headerImage">
            <div className="row" id="headerText">
                <div className="col" id="paddingHeaderText">
                <h1>Naturvin, naturligtvis</h1>
                <p>Prenumerera på en vinlåda som passar dig, vi levererar en vinlåda<br/>
                    i månaden hem till dig, inga konstigheter. Inga bindningstider.</p>
            </div>
            </div>
            <img id="headerImg" src="/Images/HeaderImage.png"></img>
        </div>

        <div className="homepageInfo">
            <div className="row" id="setPadding">
                <div className="col-sm-6" id="setPadding">
                    <div className="infoBoxHomepage">
                        <div className="col" id="boxTextPos">
                            <h1 id="h1PosAbsolute">VI ÄR NAKED WINELOVERS</h1>
                            <img src="Images/BackgroundBoxInfo.png"></img>
                            <br/>
                            <br/>
                            <p>Din prenumeration på naturvin!
                            Lika enkelt som det är gott. 
                            Vin utan tillsatser, konstigheter eller annat krimskrams. Tillsammans med naturvinsodlare världen över ser vi till att du garanterat får tillgång till det vinet som passar dig bäst.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6" id="setPadding">
                    <div className="infoBoxHomepage">
                    <div className="col" id="boxTextPos">
                            <h1 id="h1PosAbsoluteRight">SÅ FUNKAR DET!</h1>
                            <img src="Images/BackgroundBoxInfo.png"></img>
                            <div className="row">
                            <div className="col-sm-1" id="imagePosGrape">
                                <img src="Images/PurpleGrape.png" id="grapePos"></img>
                                <img src="Images/PurpleGrape.png" id="grapePos"></img>
                                <img src="Images/PurpleGrape.png" id="grapePos"></img>
                                <img src="Images/PurpleGrape.png" id="grapePos"></img>

                            </div>
                            <div className="col-sm-11" id="textPos">
                            <p>Välj din vinlåda efter dina smaklökar, vi fixar resten!</p>
                            <p>Nya viner till din valda vinlåda varje månad!</p>
                            <p>Månadsvis prenumeration, utan bindningstid!</p>
                            <p>Sugen på ny smakupplevelse? Du har fria byten inför varje månad!</p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
    )
};

export default Homepage;