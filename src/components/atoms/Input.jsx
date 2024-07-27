import React, { forwardRef } from "react";

const Input = forwardRef(({type, className, name, title, placeholder, onChange, value}, ref) => {
   return (
      <div className="input--container">
         <input 
            type={type}
            className={className}
            name={name}
            title={title}
            placeholder={placeholder}
            ref={ref}
            onChange={onChange}
            value={value}
         />
      </div>
   );
});

export default Input