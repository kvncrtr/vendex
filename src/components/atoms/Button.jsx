const Button = ({type, title, text, disabled, event}) => {
   return (
      <div>
         <button
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