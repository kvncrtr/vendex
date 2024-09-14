import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

/* Initial State */
const initialState = {
   part: {
      details: {},
      isLoading: false,
      message: "",
      errorMessage: ""
   }
}

/* Part Slice */
const partSlice = createSlice({
   name: "part",
   initialState: initialState.part,
   reducers: {
      apiRequested(state, action) {
         state.isLoading = true;
         state.errorMessage = "";
         state.message = "";
      },
      addNewPart(state, action) {
         state.message = "Success: A new part has been added."
         console.log(action.payload);
      },
      apiRequestFailed(state, action) {
         state.isLoading = false;
         state.errorMessage = action.payload.errorMessage;
      },
      showError(state, action) {
         state.isLoading = false;
         console.log(action.payload.errorMessage)
      }
   }
})

/* Actions and Reducer */
export const {
   apiRequested,
   addNewPart,
   apiRequestFailed,
   showError } = partSlice.actions;
export const partReducer = partSlice.reducer;

/* Action Creator */
const partUrl = "/part";
export const insertNewPart = (partData) => {

   return apiCallBegan({
      url: partUrl,
      method: "POST",
      data: partData,
      onInit: apiRequested.type,
      onFulfilled: addNewPart.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   })
}; 