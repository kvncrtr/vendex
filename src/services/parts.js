class Parts {
   static returnWithStrings = (data) => {
    const keys = Object.keys(data);
    let newObj = { ...data };  
  
    keys.forEach(key => {
      if (typeof data[key] === "number") {
        newObj = {
          ...newObj,
          [key]: data[key].toString()  
        };
      }
    });    
    return newObj;  
 };
};

export default Parts;