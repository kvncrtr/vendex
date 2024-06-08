const Button = ({ type, title, text, disabled, className }) => {
   return (
      <div className="button--container">
         <button
            className={className}
            type={type}
            title={title}
            disabled={disabled}
            >
            {text}
         </button>
      </div>
   );
};

export default Button;