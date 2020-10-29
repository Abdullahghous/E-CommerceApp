import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

// wrap our app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// pull information from data Layer
export const useStateValue = () => useContext(StateContext); 