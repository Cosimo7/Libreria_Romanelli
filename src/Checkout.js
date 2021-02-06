import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';


function Checkout() {
   

    const [{ cart }] = useStateValue();

    return (
       
            <div className="checkout">

                <div className="checkout__left">

                    {cart.length === 0 ? (
                        <div className="checkout__firstTitle">
                            <h1>Il carrello è vuoto, clicca sul logo!</h1>
                        </div>
                    ) : (
                            <div>
                                <h1 className="checkout__secondTitle">Il tuo ordine</h1>
                                {cart.map((item) => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        )}
                </div>
                {cart.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
                )}
            </div>
        
    )
}

export default Checkout
