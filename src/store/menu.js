import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   menu: {
      active: "",
      items: []
   }
};

const menuSlice = createSlice({
   name: "menu",
   initialState: initialState.menu,
   reducers: {
      setActiveStatus(state, action) {
         state.active = action.payload;
      }
   }
});

export const { setActiveStatus } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;