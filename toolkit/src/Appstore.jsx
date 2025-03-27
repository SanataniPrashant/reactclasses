import {configureStore} from "@reduxjs/toolkit"
import CartReducer from './CardSlice'
const Appstore = configureStore({
  reducer:{
    cart:CartReducer
  }
});


export  default Appstore;
