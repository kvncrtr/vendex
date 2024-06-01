import React, { useState } from "react";

const Input = ({ type = 'text', name, title, value, onChange, className, placeholder, error }) => {
   const [inputValue, setInputValue] = useState(value || "");

   const handleChange = (event) => {
      setInputValue(event.target.value);
      if (onChange) {
         onChange(name, event.target.value);
      };
   };

   return (
      <div className="input--container">
         {/* <label className={labelClass}>{label}</label> */}
         <input 
            type={type}
            className={className}
            name={name}
            title={title}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
         /> 
         {error && (
            <p>{error}</p>
         )}
      </div>
   );
};

export default Input;