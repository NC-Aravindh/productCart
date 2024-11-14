import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import {thunk} from 'redux-thunk';

const appStore = configureStore({
    reducer:{
        cart:cartReducer,
    },
    middleware:()=>[thunk],
});

export default appStore;