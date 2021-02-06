import React from 'react'
import "./Purchase.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Purchase() {

// eslint-disable-next-line   
    const [{cart},dispatch] = useStateValue();

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }

   return (
        <div className = "purchase">
            <div>
                <img
                    className="login__logo"
                    src="/romanelli.png"
                    alt="romanelli.png"
                />
            </div>    
        
            <div className = "purchase__message">
                <h1>Grazie per il tuo acquisto, buona lettura! 📚</h1>
            
                <Link to="/">            
                    <button className = "purchase__button" onClick={clearCart}> torna alla home </button>
                </Link>
            </div>
        
        
        </div>
    )
}

export default Purchase;
