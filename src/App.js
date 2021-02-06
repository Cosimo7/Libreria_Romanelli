import React, { useEffect } from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Purchase from './Purchase';
import Horror from './Horror';
import Fantasy from './Fantasy';
import Thriller from './Thriller';
import New from './New';
import { auth } from './firebase';



function App() {
  
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => { //implemento il listener per gestione accesso
      if (authUser){
          //login

          dispatch({
            type: "SET_USER",
            user: authUser
          })
      } else {
          //logout

          dispatch({
            type: "SET_USER",
            user: null
          });
      }
    });
  
    return () => {
      unsubscribe();
    }
   // eslint-disable-next-line
  }, []);
  
  console.log("L'utente è --->",user);
  
  return (

    <Router>    {/* utilizzo react router */}
      <div className="app">
        <Switch>

          <Route path="/horror">
          <div className = "background__image">  
          <Header/>
          <Horror/>
          <Footer/>
          </div>
          </Route>

          <Route path="/fantasy">
          <div className = "background__image">  
          <Header/>
          <Fantasy/>
          <Footer/>  
          </div>
          </Route>

          <Route path="/thriller">
          <div className = "background__image">  
          <Header/>
          <Thriller/>
          <Footer/>
          </div>
          </Route>

          <Route path="/new">
          <div className = "background__image">  
          <Header/>
          <New/>
          <Footer/>
          </div>
          </Route>
          
          <Route path="/login">
          <div className = "background__image">  
            <Login/>
            <Footer/>
          </div>
          </Route>

          <Route path="/purchase"> 
          <div className = "background__image">
            <Purchase/>
            <Footer/>
          </div> 
          </Route>
          
          <Route path="/checkout" > 
          <div className = "background__image">
            <Header/>
            <Checkout/>
          </div> 
          </Route>
         
          {/* route di default --> homepage */}
         <Route path="/">
         <div className = "background__image">
            <Header/>
            <Home/>
            <Footer/>
          </div>
         </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
