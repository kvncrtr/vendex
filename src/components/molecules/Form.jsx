import React, { useState } from 'react';
import Input from "../atoms/Input";
import Button from "../atoms/Button";


const Form = () => {
   const [formData, setFormData] = useState({})
   
   const handleOnChange = (name, value) => {
      console.log(formData);
      setFormData({ ...formData, [name]: value });
   };

   return (
       <form> 
          <Input 
             name={"employeeId"} 
             label={"Employee Id"}
             title={"The numeric value that was assigned for identification"}
             onChange={handleOnChange}
          />
          <Input 
             name={"password"} 
             label={"Password"}
             title={"This is the password that was set for security purposes"}
             onChange={handleOnChange}
          /> 

         <Button 
            type={"submit"}
            title={"loging into the application"}
            text={"Login"}
         />
       </form>
   );
};

export default Form;