import axios from "axios";

const  GetEmployees = async () => {
   const response = await axios.get("http://localhost:8080/employee")
   console.log(response)
   return response
};

const LoginEmployee = async (body) => {
   try {
      const response = await axios.post("http://localhost:8080/login", body);
      return response.data; 
   } catch (error) {
      throw error; 
   }
}

export { GetEmployees, LoginEmployee }