import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

/* Initial State */
const initialState = {
   parts: {
      details: null,
      list: null,
      isLoading: false,
      message: "",
      errorMessage: ""
   }
}

/* Part Slice */
const partSlice = createSlice({
   name: "parts",
   initialState: initialState.parts,
   reducers: {
      apiRequested(state, action) {
         state.isLoading = true;
         state.errorMessage = "";
         state.message = "";
      },
      addNewPart(state, action) {
         state.message = action.payload.message
         console.log(state.message);
      }, 
      getAllParts(state, action) {
         state.list = action.payload
      },
      savePartDetails(state, action) {
         state.details = action.payload;
      },
      changePartInfo(state, action) {
         state.message = action.payload.message;
         console.log(state.message);
      },
      apiRequestFailed(state, action) {
         state.isLoading = false;
         state.errorMessage = action.payload.errorMessage;
      },
      showError(state, action) {
         console.log(action.payload.errorMessage)
      }
   }
})

/* Actions and Reducer */
export const {
   apiRequested,
   addNewPart,
   getAllParts,
   savePartDetails,
   changePartInfo,
   apiRequestFailed,
   showError } = partSlice.actions;
export const partsReducer = partSlice.reducer;

/* Action Creator */
const partUrl = "/parts";
export const insertNewPart = (partData, token) => {
   const headers = { "Authorization": token };
   
   return apiCallBegan({
      url: partUrl,
      method: "POST",
      data: partData,
      headers: headers,
      onInit: apiRequested.type,
      onFulfilled: addNewPart.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   })
}; 

export const fetchAllParts = (token) => {
   const headers = { "Authorization": token };

   return apiCallBegan({
      url: partUrl,
      method: "GET",
      headers: headers,
      onInit: apiRequested.type,
      onFulfilled: getAllParts.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   })
}; 

export const updatePart = (token, data) => {
   const headers = {"Authorization": token};
   const partNumber = data[0];

   return apiCallBegan({
      url: partUrl,
      method: "PUT",
      headers: headers,
      data: partNumber,
      onInit: apiRequested.type,
      onFulfilled: changePartInfo.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   })
};