import React, { useState, useRef } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const initState = {
   part_number: "",
};

const NewPartForm = ({ handleDisplay }) => {
   const [formData, setFormData] = useState(initState);
   const ref = useRef(false);

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData)
      // handleDisplay();
   };

   const handleChange = (event) => {
      console.log(event.target.value);
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
            {/* 
               {
                  id: 1,
                  created_at: "2024-02-20T09:15:00Z",
                  updated_at: "2024-02-20T09:15:00Z",
                  audited_at: "2024-03-01T08:50:00Z",
                  part_number: 1234567890,
                  upc: 987654321098,
                  brand: "Acme Corp",
                  name: "UltraWidget 3000",
                  category: "Electronics",
                  description: "The UltraWidget 3000 is a state-of-the-art gadget designed for efficiency and performance. Ideal for tech enthusiasts and professionals.",
                  price: 199.99,
                  on_hand: 10048,
                  package_quantity: 5,
                  reinventory_quantity: 100,
                  weight: 1.2,
                  reorder_amount: 50,
                  order_id: 102,
                  delivery_id: 202,
                  warehouse_id: 302,
                  inventory_id: 402,
                  transfer_id: 502,
                  rack_id: 602
               }
            */}
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
               <Input />
            </div>

            <div className="new--form-field">
               <label>Brand</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>Name</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>Category</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>Description</label>
               <textarea />
            </div>

            <div className="new--form-field">
               <label>Price</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>On Hand</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>Package Quantity</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>Reinventory Quantity</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>Weight</label>
               <Input />
            </div>

            <div className="new--form-field">
               <label>Reorder Amount</label>
               <Input />
            </div>
         </div>

         <div className="new--form-button">
            <Button 
               className={"new--part-button"}
               type={"submit"}
               title={"Add new part to inventory"}
               text={"Create"}
            />
         </div>
      </form>
   )
};

export default NewPartForm;
