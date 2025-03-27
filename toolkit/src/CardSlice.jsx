import { createSlice } from "@reduxjs/toolkit";

let CardSlice =  createSlice({
  name: 'cart',
  initialState: {
    cartitem: [],

},
reducers: {
  additem: (state, action) => {
    state.cartitem.push(action.payload);
  },
  removeitem: (state) => {
    state.cartitem.length = 0;
  }


}
}
)

export  default CardSlice.reducer;
export const {additem,removeitem} = CardSlice.actions;