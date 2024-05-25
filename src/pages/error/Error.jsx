import { useRouteError } from "react-router-dom";

const Error = () => {
   const error = useRouteError();

   return (
      <div>
         <h1>Opps!</h1>
         <h4>Error has occured</h4>
         <p>
            <em>{error.statusText || error.message}</em>
         </p>
      </div>
   );
};

export default Error;