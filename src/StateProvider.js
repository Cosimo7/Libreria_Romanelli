//Fornire un data layer per gestire le informazioni con Context senza causare props drilling
//Primo obiettivo: utilizzare informazioni per tracciare il carrello e richiedere i dati del carrello di uno user specifico

import React from 'react'
import { createContext, useContext, useReducer } from "react";  //nei param era presente useReduce mai usato

//creazione "data layer"
export const StateContext = createContext();   

//creazione Provider che servirà all'intera applicazione per accedere al data layer
export const StateProvider = ({reducer, initialState, children}) => (
    
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//utilizzo StateContext all'interno di una componente
export const useStateValue = () => useContext(StateContext);
