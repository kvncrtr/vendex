import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
   part: {
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
   }
};

const partSlice = createSlice({
   name: "part",
   initialState: initialState.part,
   reducers: {
      
   }
});