import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "https://vendex-backend.onrender.com";

const  GetEmployees = async () => {
   const response = await axios.get(`${BASE_URL}/employee`)
   return response
};

const ValidateEmployee = async (body) => {
   try {
      const response = await axios.post(`${BASE_URL}/login`, body);
      return response.data;
   } catch (error) {
      const errorResponse = error.response.data.message;
      throw errorResponse; 
   }
}

export { GetEmployees, ValidateEmployee }