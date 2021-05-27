import React from 'react'
import { Link } from 'react-router-dom';


const Button = ()  => {
    return (
        <>
        <button type="submit" id="Betala">Bekräfta betalning</button>

            <Link to="/Confirm">
            </Link>   
        </>
    );
}

export default Button