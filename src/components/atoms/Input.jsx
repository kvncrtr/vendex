import React, { useState } from "react";

const Input = ({ type = 'text', label, name, title, value, onChange, className, labelClass, error }) => {
   const [inputValue, setInputValue] = useState(value || "");

   const handleChange = (event) => {
      setInputValue(event.target.value);
      if (onChange) {
         onChange(name, event.target.value);
      };
   };

   return (
      <div clqssName="input--container">
         <label className={labelClass}>{label}</label>
         <input 
            type={type}
            className={className}
            name={name}
            title={title}
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