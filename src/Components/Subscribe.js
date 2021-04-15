import React from 'react'
import { Link } from 'react-router-dom'

export const Subscribe = () => {
    return (
        <div>
        <h1 id="ConfirmH1">Naked Wine Lovers</h1>

        <Link to="/Kassa">
        <button type="button" id="Subscribeknapp">Prenumerera</button>
        </Link>
        </div>
    )
}
export default Subscribe;