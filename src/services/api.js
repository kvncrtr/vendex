import axios from "axios";

const GetEmployees = async () => {
   const response = await axios.get("http://localhost:8080/employee")
   console.log(response)
   return response
};

export default GetEmployees