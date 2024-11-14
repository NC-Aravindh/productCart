// Context.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

export const MyProvider = ({ children }) => {
    const [cartState, setCart] = useState({
        cartList: [],
        isEmpty: true,
        items: 0,
        cartTotal: 0
      })

      const [orderConfirmed , setConfirmation] = useState(false);
      const [startNewOrder , setNewOrder] = useState(false);
      
    return (
        <AppContext.Provider value={{startNewOrder,setNewOrder ,cartState, setCart , orderConfirmed ,setConfirmation}}>
            {children}
        </AppContext.Provider>
    );
};
