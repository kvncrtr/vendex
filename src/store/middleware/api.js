import axios from "axios";
import { apiCallBegan } from "../api";

const BASE_URL = process.env.REACT_APP_API_URL || "https://vendex-backend.onrender.com";

const api = ({ dispatch }) => next => async action => {
   if (action.type !== apiCallBegan.type) return next(action);

   const {
      url,
      method,
      data,
      headers,
      onInit,
      onFulfilled,
      onRejected,
      onShowError } = action.payload;
      
   console.log("Sending login request to backend with data:", data);

   if (onInit) dispatch({ type: onInit, payload: { isLoading: true } });

   try {
      const config = {
         baseURL: BASE_URL,
         url,
         method,
         data,
         headers,
         withCredentials: true, 
      };

      const response = await axios.request(config);
      dispatch({ type: onFulfilled, payload: response.data });

   } catch (error) {
      const msg = error?.response?.data?.message || "Something went wrong.";
      dispatch({ type: onRejected, payload: { errorMessage: msg } });
      dispatch({ type: onShowError, payload: { errorMessage: msg } });
   }
};

export default api;