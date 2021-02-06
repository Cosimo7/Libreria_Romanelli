import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

//la funzione Product(props) inizializza le "properties" dichiarate in Home.js
function Product({ id, title, price, year, genre, image, author }) {
     // eslint-disable-next-line
    const [{cart},dispatch] = useStateValue();

    //funzione che effettua l'action indicata in "type" per aggiungere il prodotto al carrello
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',                //richiamo azione dal reducer e aggiunge il mio prodotto componente per componente
            item: {
                id,
                title,
                price,
                image,
            },
        })
    };

    return (

        <div className="product">
            <div className="product__title">
                <p>{title}</p>
                <p className="product__info">Autore: {author}</p>
                <p className="product__info">Anno edizione: {year}</p>
                <p className="product__info">Genere: {genre}</p>
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img src={image} alt="" />
            <button onClick={addToCart}> Aggiungi al carrello </button>

        </div>
    );
}

export default Product
