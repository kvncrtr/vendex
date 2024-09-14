import React, { useState, useRef } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import FormValidation from "../../services/form-validation";
import { insertNewPart } from "../../store/part";

const initialState = {
   audited_at: Date.now(),
   part_number: "",
   upc: "",
   brand: "",
   name: "",
   category: "",
   description: "",
   price: "",
   on_hand: "",
   package_quantity: "",
   reinventory_quantity: "",
   weight: "",
   reorder_amount: "",
};

const NewPartForm = ({ handleDisplay }) => {
   const [formData, setFormData] = useState(initialState);
   const [errors, setErrors] = useState({});
   const token = useSelector(state => state.auth.token) 
   const dispatch = useDispatch();
   const ref = useRef(false);

   const handleSubmit = (event) => {
      event.preventDefault();
      setErrors({});
      const validity = FormValidation.validate(formData);

      if (!validity.status) {
         setErrors(validity);
         return 
      }
      console.log("submission successful!");
      
      /*
         let data = {
            ...formData,
            token
         }
         dispatch(insertNewPart(data));
         handleDisplay();
      */ 
   };

   const handleChange = (event) => {
      setErrors({});
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
      });
   };

   return (
      <form className={"new--part-case"} onSubmit={handleSubmit}>
         <div className="new--part-title">
            <h2>New Part</h2>
         </div>
         
         <div className="new--form-body">
            {errors && <p>{errors.message}</p>}
            <div className="new--form-field">
               <label>Part Number</label>
               <Input 
                  type={"number"}
                  className={"new--part-input"}
                  name={"part_number"}
                  title={"Enter a valid part number."}
                  placeholder={"Part Number"}
                  ref={ref}
                  onChange={(event) => handleChange(event)}
                  value={formData.part_number}
               />
            </div>

            <div className="new--form-field">
               <label>UPC</label>
               <Input  
                  type={"text"}
                  className={"new--part-input"}
                  name={"upc"}
                  title={"Enter the factory assigned number."}
                  placeholder={"UPC"}
                  onChange={(event) => handleChange(event)}
                  value={formData.upc}
               />
            </div>

            <div className="new--form-field">
               <label>Brand</label>
               <Input   
                  type={"text"}
                  className={"new--part-input"}
                  name={"brand"}
                  title={"Enter the provider's name."}
                  placeholder={"Brand"}
                  onChange={(event) => handleChange(event)}
                  value={formData.brand}
               />
            </div>

            <div className="new--form-field">
               <label>Name</label>
               <Input   
                  type={"text"}
                  className={"new--part-input"}
                  name={"name"}
                  title={"Assign a name."}
                  placeholder={"Name"}
                  onChange={(event) => handleChange(event)}
                  value={formData.name}
               />
            </div>

            <div className="new--form-field">
               <label>Category</label>
               <Input    
                  type={"text"}
                  className={"new--part-input"}
                  name={"category"}
                  title={"Categorize the part by the type."}
                  placeholder={"Category"}
                  onChange={(event) => handleChange(event)}
                  value={formData.category}
               />
            </div>

            <div className="new--form-field">
               <label>Description</label>
               <textarea  
                  rows={"5"}
                  cols={"26"}
                  type={"text"}
                  className={"new--part-input"}
                  name={"description"}
                  title={""}
                  placeholder={"Please describe the part and functionality."}
                  onChange={(event) => handleChange(event)}
                  value={formData.description}
               />
            </div>

            <div className="new--form-field">
               <label>Price</label>
               <Input    
                  type={"number"}
                  className={"new--part-input"}
                  name={"price"}
                  title={"Purchase price from provider."}
                  placeholder={"Price"}
                  onChange={(event) => handleChange(event)}
                  value={formData.price}
               />
            </div>

            <div className="new--form-field">
               <label>On Hand</label>
               <Input    
                  type={"number"}
                  className={"new--part-input"}
                  name={"on_hand"}
                  title={"How much inventory do we actually have?"}
                  placeholder={"On Hand"}
                  onChange={(event) => handleChange(event)}
                  value={formData.on_hand} 
               />
            </div>

            <div className="new--form-field">
               <label>Package Quantity</label>
               <Input     
                  type={"number"}
                  className={"new--part-input"}
                  name={"package_quantity"}
                  title={"Number of articles that can fit in one package."}
                  placeholder={"Package Quantity"}
                  onChange={(event) => handleChange(event)}
                  value={formData.package_quantity} 
               />
            </div>

            <div className="new--form-field">
               <label>Reinventory Quantity</label>
               <Input      
                  type={"number"}
                  className={"new--part-input"}
                  name={"reinventory_quantity"}
                  title={"Number of articles that can fit in one package."}
                  placeholder={"Reinventory Quantity"}
                  onChange={(event) => handleChange(event)}
                  value={formData.reinventory_quantity} 
               />
            </div>

            <div className="new--form-field">
               <label>Weight</label>
               <Input       
                  type={"number"}
                  className={"new--part-input"}
                  name={"weight"}
                  title={"How much each unit weighs."}
                  placeholder={"Weight"}
                  onChange={(event) => handleChange(event)}
                  value={formData.weight} 
               />
            </div>

            <div className="new--form-field">
               <label>Reorder Amount</label>
               <Input        
                  type={"number"}
                  className={"new--part-input"}
                  name={"reorder_amount"}
                  title={"Once this amount reaches an order will be placed automatically."}
                  placeholder={"Reorder Amount"}
                  onChange={(event) => handleChange(event)}
                  value={formData.reorder_amount} 
               />
            </div>
         </div>

         <div className="new--button-container">
            <Button 
               className={"new--part-button"}
               type={"submit"}
               title={"Add new part to inventory"}
               text={"Create"}
            />
         </div>
      </form>
   );
};

export default NewPartForm;
