class FormValidation {
   static categories = [
      "General", 
      "Network Gear", 
      "Power Accessories",
      "Cables",
      "Sheet Metal",
      "Lables", 
      "Bare Rack",
      "Non-Serialize",
      "Optics",
      "Memory",
      "PCBA Board"];

   static validate(formObj) {
      const {
         part_number,
         brand,
         name,
         category,
         on_hand,
         reorder_amount,
         package_quantity
      } = formObj;
      
      // Part Number
      if (Object.values(formObj).length < 13) {
         return {status: false, message: "Form submission is invalid."}
      } else if (part_number.length < 6) {
         return {status: false, message: "Part number requires 6 characters more."}
      }
      
      // Brand 
      if (brand.length < 2) {
         return {status: false, message: "Brand name requires 2 characters or more."}
      } 

      // Name
      if (name.length < 3) {
         return {status: false, message: "Name of product requires 3 characters or more."}
      }

      // Category
      if (this.categories.indexOf(category) === -1) {
         return {
            status: false,
            message: `Category is case sensitive and 
            must be one of the following. General, Network Gear, 
            Power Accessories, Cables, Sheet Metal Lables, Bare Rack, 
            Non-Serialize, Optics, Memory, PCBA Board.`
         } 
      }


      return {status: true, message: ""}
   }
}

export default FormValidation;