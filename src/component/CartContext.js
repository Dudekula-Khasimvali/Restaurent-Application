import React, { createContext, useReducer, useContext } from 'react';

// Create context
const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.product];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
};

// Provider component
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook to use cart context
export const useCart = () => {
    return useContext(CartContext);
};
