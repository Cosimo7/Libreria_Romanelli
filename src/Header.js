import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';





function Header() {
    
    const [{ cart, user }] = useStateValue();
    
    
    const login = () => {
        if(user){
            auth.signOut();
        }
    }


    return (
        <nav className="header">
            <Link to="/">  {/* inserisco il logo nella barra di navigazione */}
                <img
                    className="header__logo"
                    src="/romanelli.png"
                    alt="romanelli.png"
                />
            </Link>
           

            
             <div className="header__dropdown">
                <span> Genere </span>
                    <div className="header__dropdownContent">
                        <Link to="/horror"><p className="header__dropdownItem">Horror</p></Link>
                        <Link to="/fantasy"><p className="header__dropdownItem">Fantasy</p></Link>
                        <Link to="/thriller"><p className="header__dropdownItem">Thriller</p></Link>
                    </div>
            </div>
                

                
            <Link to="/new" className="header__link">
                <div>
                    <span>Novità</span>
                </div>
            </Link>
                
                
                
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span> Benvenuto, {user?.email} {user ? '-> esci dal tuo account':' accedi'} </span>
                </div>
            </Link>

               

            <Link to="/checkout" className="header__link">
                <div className=" header__optionCart">   {/* inserisco icona carrello con contatore del numero di acquisti */}
                    <ShoppingCart />
                    <span> {cart.length} </span>       {/* richiamo il carrello da reducer */}
                </div>
            </Link>
       
            
        </nav>
    )
}

export default Header


