// StateProvider.js
import React, { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from './reducer'; // Assurez-vous d'importer le bon fichier

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
