import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
   return (
      <div className="input--container">
         <input 
            type={props.type}
            className={props.className}
            name={props.name}
            title={props.title}
            placeholder={props.placeholder}
            ref={ref}
            onChange={props.onChange}
            value={props.value}
         />
      </div>
   );
});

export default Input