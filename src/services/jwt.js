import { jwtDecode as jwt } from 'jwt-decode';

class JWTService {
   static decodeToken(token) {
      return jwt(token);
   }

   static showHeadersFromToken(token) {
      return jwt(token, { header: true });
   }

   static employeeTokenObj(token) {
      let tokenObj = {};
      
      tokenObj = {
         ...this.decodeToken(token),
         ...this.showHeadersFromToken(token)
      }

      console.log(tokenObj);
      return tokenObj;
   }
}

export default JWTService;