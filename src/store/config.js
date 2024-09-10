import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./employee";
import { menuReducer } from "./menu";
import { partReducer } from "./part";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    part: partReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api,
    error
  ]
});

export default store;