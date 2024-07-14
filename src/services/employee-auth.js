import JWTService from "./jwt";

class EmployeeAuth {
   static authenticateToken(token) {
      const tokenObj = JWTService.employeeTokenObj(token);
      const response = JWTService.authenticateToken(tokenObj);
      return response
   }
}

export default EmployeeAuth;