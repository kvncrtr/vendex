import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import JWTService from "../services/jwt";
import LocalStorageService from "../services/local-storage";

/* Initial State */
/* set todays date = new Date().toISOString().split("T")[0], */
const initialState = {
   auth: {
      all_employees: [],
      current_employee: {
         id: null,
         class: "C",
         first_name: "",
         middle_name: "",
         last_name: "",
         sex: "",
         date_hired: "", 
         status: "Employed",
         termination_date: null,
         employee_id: null,
         phone_number: null,
         email: "",
         address: ""
      },
      isLoading: false,
      isAuthenticated: false,
      isValid: false,
      isLoggedIn: false,
      token: "",
      message: "",
      errorMessage: ""
   },
};

/* Slices */
const authSlice = createSlice({
   name: "auth",
   initialState: initialState.auth,
   reducers: {
      apiRequested(state, action) {
         state.isAuthenticated = false;
         state.isValid = false;
         state.isLoading = true;
         state.token = "";
         state.errorMessage = "";
      },
      validateEmployee(state, action) {
         const data = action.payload;

         state.token = data.token;
         state.message = data.message; 
         state.isAuthenticated = false;
         state.isValid = true;
      },
      authenticateEmployee(state, action) {
         const token = action.payload;
         const authObj = JWTService.employeeTokenObj(token);
         const isAuth = JWTService.authenticateToken(authObj);
         
         if (isAuth) {
            state.isAuthenticated = true;
            state.isLoggedIn = true;
            state.errorMessage = "";
            LocalStorageService.setItem("token", token);
            LocalStorageService.setItem("isLoggedIn", true);
         } else {
            state.isAuthenticated = false;
            state.isValid = false;
            state.token = "";
            state.isLoggedIn = true;
            state.errorMessage = "Could not authenticate employee";
         };
         state.isLoading = false;
      },
      unAuthenticateEmployee(state, action) {
         state.isAuthenticated = false;
      },
      validateToken(state, action) {
         const token = action.payload;
         const tokenObj = JWTService.employeeTokenObj(token);
         const authStatus = JWTService.authenticateToken(tokenObj);
         
         if (authStatus) {
            state.isAuthenticated = true;
            state.isLoggedIn = true;
            state.errorMessage = "";
         } else {
            state.isAuthenticated = false;
            state.isValid = false;
            state.token = "";
            state.isLoggedIn = true;
            LocalStorageService.clearItems();
         }
      },
      getAllEmployees(state, action) {
         state.all_employees = action.payload;
         state.isLoading = false;
      },
      clearAuth(state, action) {
         state.isAuthenticated = false;
         state.errorMessage = "";
         state.isLoading = false;
         state.isLoggedIn = false;
         state.isValid = false;
         state.message = "";
         state.token = "";
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
});

/* Reducers */
export const {
   apiRequested,
   validateEmployee,
   authenticateEmployee,
   unAuthenticateEmployee,
   validateToken,
   getAllEmployees,
   clearAuth,
   apiRequestFailed,
   showError } = authSlice.actions;
export const authReducer = authSlice.reducer;

/* Action Creators */
const url = "/employee";
const loginUrl = "/login";
export const loadEmployees = () => apiCallBegan({
   url,
   onInit: apiRequested.type,
   onFulfilled: getAllEmployees.type,
   onRejected: apiRequestFailed.type,
   onShowError: showError.type
});

export const validateCredentials = (loginData) => {
   const toIntObj = {
      ...loginData,
      employee_id: loginData.employee_id.toString()
   }
   
   return apiCallBegan({
      url: loginUrl,
      method: "POST",
      data: toIntObj,
      onFulfilled: validateEmployee.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   });
};