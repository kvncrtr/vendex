import axios from "axios";

const  GetEmployees = async () => {
   const response = await axios.get("http://localhost:8080/employee")
   return response
};

const ValidateEmployee = async (body) => {
   try {
      const response = await axios.post("http://localhost:8080/login", body);
      return response.data;
   } catch (error) {
      const errorResponse = error.response.data.message;
      throw errorResponse; 
   }
}

export { GetEmployees, ValidateEmployee }