import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./employee";
import { menuReducer } from "./sidebar";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api,
    error
  ]
});

export default store;