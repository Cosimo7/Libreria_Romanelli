import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id,title, price, image }) {
    
// eslint-disable-next-line
    const [{cart},dispatch] = useStateValue();           

    //funzione che effettua l'action indicata in "type" per rimuovere il prodotto dal carrello
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
          
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
              
                <button onClick={removeFromCart}> Rimuovi dal carrello </button>
            </div>

        </div>
    );
}


export default CheckoutProduct
