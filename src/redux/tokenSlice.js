import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: ""
}
const tokenSlice = createSlice({
          name: "token",
          initialState,
          reducers:{
            addToken: (state, action) =>{
               state.value = action.payload;
            },
            removeToken: (state) =>{
              state.value = '';

            }
          }
})

export const {addToken, removeToken} = tokenSlice.actions;
export default tokenSlice.reducer
