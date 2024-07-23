import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

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
         password: "",
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
      gatherEmployeeInfo(state, action) {
         const employee = state.current_employee;
         const { employee_id, password } = action.payload;
         employee.employee_id = employee_id;
         employee.password = password;
      },
      apiRequested(state, action) {
         state.isLoading = action.payload.isLoading;
      },
      validateEmployee(state, action) {
         console.log(action.payload);
         const data = action.payload;

         state.token = data.token;
         state.message = data.message; 
         state.isAuthenticated = false;
         state.isValid = true;
      },
      getAllEmployees(state, action) {
         state.all_employees = action.payload.data;
         state.isLoading = action.payload.isLoading;
      },
      apiRequestFailed(state, action) {
         state.isLoading = false;
         state.errorMessage = action.payload.errorMessage;
      },
      showError(state, action) {
         state.isAuthenticated = false;
         state.isValid = false;
         state.isLoading = false;
         state.token = ""
         console.log(action.payload.errorMessage)
      }
   }
});

/* Reducers */
export const {
   gatherEmployeeInfo,
   apiRequested,
   validateEmployee,
   getAllEmployees,
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
   return apiCallBegan({
      url: loginUrl,
      method: "POST",
      data: {
         ...loginData,
         employee_id: loginData.employee_id.toString()
      },
      onFulfilled: validateEmployee.type,
      onRejected: apiRequestFailed.type,
      onShowError: showError.type
   });
}
