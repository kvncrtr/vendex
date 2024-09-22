import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./employees";
import { menuReducer } from "./menu";
import { partsReducer } from "./parts";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    parts: partsReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api,
    error
  ]
});

export default store;