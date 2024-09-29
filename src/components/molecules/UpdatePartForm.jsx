import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import FormValidation from "../../services/form-validation";
import { updatePart } from "../../store/parts";

const UpdatePartForm = ({ details, toggleUpdateDisplay, errorData }) => {
   const [formData, setFormData] = useState(details);
   const token = useSelector(state => state.auth.token);
   const dispatch = useDispatch();
   const ref = useRef(false);

   const returnWithUpdatedTime = (formData) => {
      const estDate = new Date().toLocaleString('en-US', {
         timeZone: 'America/New_York',
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
         hour12: false
      });

      const [date, time] = estDate.split(', ');
      const [month, day, year] = date.split('/');
      const formattedESTDate = `${year}-${month}-${day} ${time}`;
      const updatedObj = {
         ...formData,
         "updated_at": formattedESTDate 
      };

      return updatedObj;
   };

   const handleChange = (event) => {
      errorData("");
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
      });
   };

   const handleWheel = (event) => {
      event.target.blur();
   }

   const handleSubmit = (event) => {
      const validity = FormValidation.validate(formData);
      event.preventDefault();
      errorData("");

      if (!validity.status) {
         errorData(validity);
         return 
      }
      errorData("");
      const updated = returnWithUpdatedTime(formData);
      
      dispatch(updatePart(token, updated));
   };

   return (
      <form className={"update--part-case"} onSubmit={handleSubmit}>
         <div className="update--part-title">
            <h2>Update Part</h2>
         </div>
         
         <div className="update--form-body">
            <div className="update--form-field">
               <label>Part Number</label>
               <Input 
                  type={"number"}
                  className={"update--part-input"}
                  name={"part_number"}
                  title={"Enter a valid part number."}
                  placeholder={"Part Number"}
                  ref={ref}
                  onChange={(event) => handleChange(event)}
                  value={formData.part_number}
                  onWheel={handleWheel}
               />
            </div>

            <div className="update--form-field">
               <label>UPC</label>
               <Input  
                  type={"text"}
                  className={"update--part-input"}
                  name={"upc"}
                  title={"Enter the factory assigned number."}
                  placeholder={"UPC"}
                  onChange={(event) => handleChange(event)}
                  value={formData.upc}
               />
            </div>

            <div className="update--form-field">
               <label>Brand</label>
               <Input   
                  type={"text"}
                  className={"update--part-input"}
                  name={"brand"}
                  title={"Enter the provider's name."}
                  placeholder={"Brand"}
                  onChange={(event) => handleChange(event)}
                  value={formData.brand}
               />
            </div>

            <div className="update--form-field">
               <label>Name</label>
               <Input   
                  type={"text"}
                  className={"update--part-input"}
                  name={"name"}
                  title={"Assign a name."}
                  placeholder={"Name"}
                  onChange={(event) => handleChange(event)}
                  value={formData.name}
               />
            </div>

            <div className="update--form-field">
               <label htmlFor="update--part-categories">Category</label>
               <select 
                  id="update--part-categories"
                  value={formData.category} 
                  name="category" 
                  title={"Categorize the part by the type."}
                  onChange={(event) => handleChange(event)}
               >
                  <option value="" className="update--part-placeholder">Select a Category</option>
                  <option value="General">General</option>
                  <option value="Network Gear">Network Gear</option>
                  <option value="Power Accessories">Power Accessories</option>
                  <option value="Cables">Cables</option>
                  <option value="Sheet Metal">Sheet Metal</option>
                  <option value="Lables">Lables</option>
                  <option value="Bare Rack">Bare Rack</option>
                  <option value="Non-Serialize">Non-Serialize</option>
                  <option value="Optics">Optics</option>
                  <option value="Memory">Memory</option>
                  <option value="PCBA Board">PCBA Board</option>
               </select>
            </div>

            <div className="update--form-field">
               <label>Description</label>
               <textarea  
                  rows={"5"}
                  cols={"26"}
                  type={"text"}
                  className={"update--part-input"}
                  name={"description"}
                  title={""}
                  placeholder={"Please describe the part and functionality."}
                  onChange={(event) => handleChange(event)}
                  value={formData.description}
               />
            </div>

            <div className="update--form-field">
               <label>Price</label>
               <Input    
                  type={"number"}
                  className={"update--part-input"}
                  name={"price"}
                  title={"Purchase price from provider."}
                  placeholder={"Price"}
                  onChange={(event) => handleChange(event)}
                  value={formData.price}
                  onWheel={handleWheel}
               />
            </div>

            <div className="update--form-field">
               <label>On Hand</label>
               <Input    
                  type={"number"}
                  className={"update--part-input"}
                  name={"on_hand"}
                  title={"How much inventory do we actually have?"}
                  placeholder={"On Hand"}
                  onChange={(event) => handleChange(event)}
                  value={formData.on_hand} 
                  onWheel={handleWheel}
               />
            </div>

            <div className="update--form-field">
               <label>Package Quantity</label>
               <Input     
                  type={"number"}
                  className={"update--part-input"}
                  name={"package_quantity"}
                  title={"Number of articles that can fit in one package."}
                  placeholder={"Package Quantity"}
                  onChange={(event) => handleChange(event)}
                  value={formData.package_quantity} 
                  onWheel={handleWheel}
               />
            </div>

            <div className="update--form-field">
               <label>Reinventory Quantity</label>
               <Input      
                  type={"number"}
                  className={"update--part-input"}
                  name={"reinventory_quantity"}
                  title={"Number of articles that can fit in one package."}
                  placeholder={"Reinventory Quantity"}
                  onChange={(event) => handleChange(event)}
                  value={formData.reinventory_quantity} 
                  onWheel={handleWheel}
               />
            </div>

            <div className="update--form-field">
               <label>{"Weight (lbs/oz)"}</label>
               <Input       
                  type={"number"}
                  className={"update--part-input"}
                  name={"weight"}
                  title={"How much each unit weighs."}
                  placeholder={"Weight"}
                  onChange={(event) => handleChange(event)}
                  value={formData.weight}
                  onWheel={handleWheel} 
               />
            </div>

            <div className="update--form-field">
               <label>Reorder Amount</label>
               <Input        
                  type={"number"}
                  className={"update--part-input"}
                  name={"reorder_amount"}
                  title={"Once this amount reaches an order will be placed automatically."}
                  placeholder={"Reorder Amount"}
                  onChange={(event) => handleChange(event)}
                  value={formData.reorder_amount} 
                  onWheel={handleWheel}
               />
            </div>
         </div>

         <div className="update--button-container">
            <Button 
               className={"update--part-button"}
               type={"submit"}
               title={"Update new information to inventory"}
               text={"Submit"}
            />
         </div>
      </form>
   );
};

export default UpdatePartForm;
