import React, { forwardRef } from "react";

const Input = forwardRef(({type, className, name, title, placeholder, onChange, value, onWheel}, ref) => {
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
            onWheel={onWheel}
         />
      </div>
   );
});

export default Input