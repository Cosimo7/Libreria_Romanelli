import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";




function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const login = event => {
        event.preventDefault(); //funzione che impedisce alla pagina di ricaricare
        
        auth.signInWithEmailAndPassword(email, password) //funzione di firebase per accesso 
        .then((auth) => {
            history.push('/');
        })
        
        .catch((e) => alert(e.message));
    }
    
    const register = event => {
        event.preventDefault();   //funzione che impedisce alla pagina di ricaricare

        auth.createUserWithEmailAndPassword(email, password) //funzione firebase per registrazione utente
        .then((auth) => {

        })
        
        .catch((e) => alert(e.message));
    }
    
    return (
        

            <div className="login">
            <Link to="/">  
                <img
                    className="login__logo"
                    src="/romanelli.png"
                    alt="romanelli.png"
                />
            </Link>
                <div className="login__form">
                    <h1> Entra nel tuo account </h1>
                    <form>
                        <h5> Email </h5>
                        <input value={email} onChange={ event => setEmail(event.target.value)} type="email" />
                        <h5> Password </h5>
                        <input value={password} onChange={ event => setPassword(event.target.value)} type="password" />
                        <button onClick={login} type="submit"
                            className="login__signInButton"> Accedi </button>
                    </form>
                    <button onClick={register} type="submit"
                        className="login__registerButton"> Clicca qui per creare un account!</button>
                </div>

            </div>

        
    )
}

export default Login
