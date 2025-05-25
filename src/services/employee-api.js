import axios from "axios";

const  GetEmployees = async () => {
   const response = await axios.get("https://vendex-backend.onrender.com/employees")
   return response
};

const ValidateEmployee = async (body) => {
   try {
      const response = await axios.post("https://vendex-backend.onrender.com/login", body);
      return response.data;
   } catch (error) {
      const errorResponse = error.response.data.message;
      throw errorResponse; 
   }
}

export { GetEmployees, ValidateEmployee }