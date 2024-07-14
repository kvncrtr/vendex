import { jwtDecode } from 'jwt-decode';

class JWTService {
   static decodeToken(token) {
      return jwtDecode(token);
   }

   static showHeadersFromToken(token) {
      return jwtDecode(token, { header: true });
   }

   static employeeTokenObj(token) {
      let tokenObj = {};
      
      tokenObj = {
         ...this.decodeToken(token),
         ...this.showHeadersFromToken(token)
      }

      return tokenObj;
   }

   static authenticateToken(tokenObj) {
      let rank = tokenObj.class
      const { employee_id, expired, alg, typ } = tokenObj;

      if (!(rank === "A" || rank === "B" || rank === "C")) {
         return false;
      } else if (typeof employee_id !== "number" || employee_id < 0) {
         return false;
      } else if (Date.now() >= expired * 1000) {
         return false;
      } else if (alg !== "HS256") {
         return false;
      } else if (typ !== "JWT") {
         return false;
      }
   
      return true;
   }
}

export default JWTService;