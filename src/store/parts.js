import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

/* Initial State */
const initialState = {
   parts: {
      details: {},
      list: [],
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
      fetchAllParts(state, action) {
         state.list = action.payload;
         state.details = "";
         state.isLoading = false;
      },
      fetchPartById(state, action) {
         state.details = action.payload;
         state.isLoading = false;
      },
      selectPart(state, action) {
         state.checked = action.payload;
      },
      appendParts(state, action) {
         console.log(action.payload, "append parts");
      },
      savePartDetails(state, action) {
         state.details = action.payload;
         state.isLoading = false;
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
   fetchAllParts,
   fetchPartById,
   savePartDetails,
   selectPart,
   appendParts,
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

export const getAllParts = (token) => {
   const headers = { "Authorization": token };

   return apiCallBegan({
      url: partUrl,
      method: "GET",
      headers: headers,
      onInit: apiRequested.type,
      onFulfilled: fetchAllParts.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   })
};

export const getPartById = (token, id) => {
   const headers = { "Authorization": token };

   return apiCallBegan({
      url: `${partUrl}/${id}`,
      method: "GET",
      headers: headers,
      onInit: apiRequested.type,
      onFulfilled: fetchPartById.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   })
};

export const updatePart = (token, data) => {
   const headers = { "Authorization": token };

   return apiCallBegan({
      url: `${partUrl}/${data.id}`,
      method: "PUT",
      headers: headers,
      data: data,
      onInit: apiRequested.type,
      onFulfilled: changePartInfo.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   })
};