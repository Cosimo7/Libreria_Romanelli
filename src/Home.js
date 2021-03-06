import React, {useState, useEffect} from 'react';
import "./Home.css";
import Product from './Product';
import firebase from './firebase';



function Home() {
 
    const [FirstRowBooks, setFirstRowBooks] = useState([]);
    const [SecondRowBooks, setSecondRowBooks] = useState([]);
    const [ThirdRowBooks, setThirdRowBooks] = useState([]);
    
    const firstRowRef = firebase.firestore().collection("FirstRowBooks");
    const secondRowRef = firebase.firestore().collection("SecondRowBooks");
    const thirdRowRef = firebase.firestore().collection("ThirdRowBooks");

    
    function getFirstRowBooks() {     //funzione che estrapola dati dalla collection di Firestore in realtime

        
        firstRowRef                                 //Lavoro sui dati della prima riga da renderizzare
            .limit(4)
            .onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {      
                items.push(doc.data());  
            });
            setFirstRowBooks(items);
        });
    }

    
    function getSecondRowBooks() {     

       
        secondRowRef                                //Lavoro sui dati della seconda riga da renderizzare
            .limit(3)
            .onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {      
                items.push(doc.data());  
            });
            setSecondRowBooks(items);
        });
    }

    
    function getThirdRowBooks() {     

       
        thirdRowRef                                 //Lavoro sui dati della terza riga da renderizzare
            .limit(4)
            .onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {      
                items.push(doc.data());  
            });
            setThirdRowBooks(items);
        });
    }
    
    
/*eslint-disable*/
    useEffect(() => {
        getFirstRowBooks();
    },[]);          
   
  
    useEffect(() => {
        getSecondRowBooks();
    },[]);
    
    useEffect(() => {
        getThirdRowBooks();
    },[]);          
/*eslint-disable*/
    
    return (
        
        <div className="home">
       
            <h1> Alcuni titoli per te 📖</h1>
        
        <div className="home__row">     
        
        {FirstRowBooks.map((book) =>  
        <Product              
             
            title={book.title}
            author={book.author}
            price={book.price}
            year={book.year}
            genre={book.genre}
            image={book.image}
        />            
        )};                      
        
        </div>
        
        <div className="home__row">     
        {SecondRowBooks.map((book) =>  
        <Product              
             
            title={book.title}
            author={book.author}
            price={book.price}
            year={book.year}
            genre={book.genre}
            image={book.image}
        />            
        )};
        </div>

        <div className="home__row">     
        {ThirdRowBooks.map((book) =>  
        <Product              
            title={book.title}
            author={book.author}
            price={book.price}
            year={book.year}
            genre={book.genre}
            image={book.image}
        />            
        )};                                            
        </div>
    </div>
    ); 
}

export default Home
