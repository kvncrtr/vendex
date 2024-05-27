const Button = ({type, title, text, event}) => {
   return (
      <div>
         <button
            type={type}
            title={title}
         >
            {text}
         </button>
      </div>
   );
};

export default Button;