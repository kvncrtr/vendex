import React, { useRef, useState, useEffect } from "react";
import Form from "../molecules/Form";

import useAuth from "../../hooks/useAuth";

const Login = () => {

   return (
      <div className="login--container">
            <Form />
      </div>
   );
};

export default Login;