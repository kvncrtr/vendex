import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
   part: {
      details: {
         audited_at: Date.now(),
         part_number: "",
         upc: "",
         brand: "",
         name: "",
         category: "",
         description: "",
         price: "",
         on_hand: "",
         package_quantity: "",
         reinventory_quantity: "",
         weight: "",
         reorder_amount: "",         
      },
      isCreating: false,
      message: "",
      errorMessage: ""
   }
};

const partSlice = createSlice({
   name: "part",
   initialState: initialState.part,
   reducers: {
      apiRequested(state, action) {
         state.isCreating = true;
         state.message = "";
         state.errorMessage = "";
      }
   }
});

/* Reducers */ 
export const {
   apiRequested } = partSlice.actions;
export const partReducers = partSlice.reducer;

/* Action Creators */ 
const root = "/parts"