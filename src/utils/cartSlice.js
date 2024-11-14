import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
    cartList: [],
    isEmpty: true,
    itemCount: 0,
    cartTotal: 0,
    orderConfirmed: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {

            const newItem = action.payload;
            //For the first item in the cart
            if (state.itemCount == 0) {

                state.isEmpty = false;
                state.cartList.push(newItem);

            }
            else {
                const existingItem = state.cartList.find(item => item.id == newItem.id)

                if (existingItem) {
                    existingItem.productCount += 1;
                }
                else {
                    state.cartList.push(newItem);
                }
            }
            state.itemCount++;
        },

        calculateCartTotal: (state) => {
            console.log("cartTotal")
            let totalAmount = 0;
            state.cartList?.map((item) => totalAmount += item.price * item.productCount)
            state.cartTotal = totalAmount;
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            console.log(typeof (itemId))
            //If there is only one item in the cart.
            if (state.itemCount == 1) {
                state.isEmpty = true;
                state.cartList.pop();
            }
            else {
                const existingItem = state.cartList.find(item => item.id == itemId)
                if (existingItem?.productCount > 1) {
                    existingItem.productCount--;
                }

                else {
                    state.cartList.map((item, index) => {
                        if (item.id == itemId)
                            state.cartList.splice(index, 1);
                    })
                }
            }
            state.itemCount--;
        },
        confirmOrder: (state) => {
            state.orderConfirmed = true;
        },
        startNewOrder: (state) => {
            return initialState;
        },
        getQuantity: (state, action) => {
            const quantity = state.cartList?.find(item => item.id === action.payload)?.productCount || 0;
            return quantity;
        },
        removeCartItem: (state, action) => {
            let itemExists;
            itemExists = state.cartList.find(item => item.id == action.payload)
            if (itemExists)
                state.cartList.map((item, index) => {

                    if (item.id == action.payload) {
                        state.itemCount -= item.productCount
                        state.cartList.splice(index, 1);
                    }
                })
        }

    }
})

export const { addItem, removeItem, calculateCartTotal, confirmOrder, startNewOrder, getQuantity, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;