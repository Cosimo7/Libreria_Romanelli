import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getCartTotal } from './reducer';
import { Link } from "react-router-dom";



function Subtotal() {
    const [{ cart, user }] = useStateValue();

    return (
        <div className="subtotal">
            <h1>Totale</h1>
            <CurrencyFormat
                renderText={(value) => (
                    <p> Ordini: ({cart.length}) Importo: <strong> {value} </strong> </p>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <Link to=  {user ? '/purchase' :'/login'}  className="subtotal__button">
                <button> Procedi all'acquisto </button>
            </Link>
        </div>
    )
}

export default Subtotal
