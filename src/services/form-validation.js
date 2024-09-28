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
         upc,
         brand,
         name,
         category,
         on_hand,
         reorder_amount,
         package_quantity
      } = formObj;

      // Part Number
      if (Object.values(formObj).length < 13) {
         return { status: false, message: "Form submission is invalid." }
      } else if (part_number.length < 6) {
         return { status: false, message: "Part number requires six characters more." }
      }

      // Brand 
      if (brand.length < 2) {
         return { status: false, message: "Brand name requires two characters or more." }
      }

      if (isNaN(parseInt(upc))) {
         return { status: false, message: "UPC value must be an integer." }
      } else if (on_hand < 0) {
         return { status: false, message: "UPC value must be a positive number." }
      }

      // Name
      if (name.length < 3) {
         return { status: false, message: "Name of product requires three characters or more." }
      }

      // Category
      if (this.categories.indexOf(category) === -1) {
         return {
            status: false,
            message: `Category is case sensitive and 
            must be one of the following. General, Network Gear, 
            Power Accessories, Cables, Sheet Metal Lables, Bare Rack, 
            Non-Serialize, Optics, Memory, or PCBA Board.`
         }
      }

      // On Hand
      if (isNaN(parseInt(on_hand))) {
         return { status: false, message: "On hand value must be an integer." }
      } else if (on_hand < 0) {
         return { status: false, message: "On hand value must be a positive number." }
      }

      // Package Quantity
      if (isNaN(parseInt(package_quantity))) {
         console.log(parseInt(package_quantity));
         return { status: false, message: "Packaging quaintity has to be an integer." }
      } else if (parseInt(package_quantity) < 0) {
         return { status: false, message: "Packaging quaintity must be a posetive integer." }
      } else if (parseInt(package_quantity) === 0) {
         return { status: false, message: "Packaging quaintity must be greater than zero." }
      }

      // Reorder Amount
      if (isNaN(parseInt(reorder_amount))) {
         return { status: false, message: "Reorder amount quaintity has to be an integer." }
      } else if (parseInt(reorder_amount) < 0) {
         return { status: false, message: "Reorder amount must be a posetive integer." }
      } else if (parseInt(reorder_amount) === 0) {
         return { status: false, message: "Reorder amount must be a posetive integer." }
      }

      return { status: true, message: "" }
   }
}

export default FormValidation;