import axios from "axios";
import { apiCallBegan } from "../api";

const api = ({ dispatch }) => next => async action => {
   if (action.type !== apiCallBegan.type) return next(action);

   const {
      url, 
      method, 
      data, 
      onInit, 
      onFulfilled, 
      onRejected, 
      onShowError} = action.payload;
   
   if (onInit) dispatch({type: onInit, payload: {isLoading: true}});

   try {
      const response = await axios.request({
         baseURL: "http://localhost:8080/",
         url,
         method,
         data
      });

      dispatch({ type: onFulfilled, payload: response.data});
      
   } catch (error) {
      dispatch({type: onRejected, payload: {errorMessage: `${error.message}`}})
      dispatch({type: onShowError, payload: {errorMessage: `${error.response.data.message}`}})
   }
}

export default api;