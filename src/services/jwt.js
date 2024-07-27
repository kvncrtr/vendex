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
         console.log("ran class rank", tokenObj);
         return false;
      } else if (typeof employee_id !== "number" || employee_id < 0) {
         console.log("ran employee_id");
         return false;
      } else if (Date.now() >= expired * 1000) {
         console.log("ran expiration");
         return false;
      } else if (alg !== "HS256") {
         console.log("ran invalid algorithim");
         return false;
      } else if (typ !== "JWT") {
         console.log("ran invalid token type");
         return false;
      }
   
      return true;
   }
}

export default JWTService;