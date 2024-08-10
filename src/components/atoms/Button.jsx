const Button = ({ type, title, text, setting, className, ...props }) => {
   return (
      <div className="button--container">
         <button
            className={className}
            type={type}
            title={title}
            disabled={setting}
         >
            {props.icon && props.icon} {text}
         </button>
      </div>
   );
};

export default Button;