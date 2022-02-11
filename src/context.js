import React, { useContext, useEffect, useReducer, useState } from "react";

import { api } from './api';
import { reducer } from "./reducer";

const AppContext = React.createContext();

const defaultState = {

    cart: [],
    notification: ''
};

export const AppProvider = ({ children }) => {

    const [ state, dispatch ]       = useReducer( reducer, defaultState );
    const [ loading, setLoading ]   = useState(true);
    const [ products, setProducts ] = useState([]); 

    console.log("AppLoader");

    const loadProducts = async () => {

        const productData   = await fetch( api )
        const results       = await productData.json();

        setProducts( results );

        setLoading( false );

        console.log(products);
    }

    useEffect(() => {

        loadProducts()
    }, [])

    const handleAddToCart = (id, title, price) => {

        dispatch( {
            type: 'ADD_TO_CART',
            payload: {
                id: id,
                title: title,
                price: price
            }
        } );
    }


    const handleCartItemDelete = (id) => {

        dispatch( {
            type: 'REMOVE_FROM_CART',
            payload: {
                id: id
            }
        } );
    }

    return (
        <AppContext.Provider value={
            {
                loading,
                products,
                state,
                handleAddToCart,
                handleCartItemDelete
            }
        }>
            { children }
        </AppContext.Provider>
    );
}


// Custom hook
export const useGlobalContext = () => useContext(AppContext);