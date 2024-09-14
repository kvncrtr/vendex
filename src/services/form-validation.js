class FormValidation {
   static validate(formObj) {
      if (Object.values(formObj).length < 13) {
         return {status: false, message: "Form submission is invalid."}
      } else if (formObj.part_number.length < 6) {
         return {status: false, message: "Part number must be longer that 6 Characters."}
      }
      return {status: true, message: ""}
   }
}

export default FormValidation;