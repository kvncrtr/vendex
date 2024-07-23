const error = store => next => action => {
    if (action.type !== "SHOW_ERROR" && action.payload && action.payload.error) {
      console.error("Error:", action.payload.error); 
      next(action);
    } else if (action.payload && action.payload.error) {
      console.error("Error:", action.payload.error); 
    }
    
    return next(action);
 };
 
 export default error;