import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import contactUsReducer from "./slices/contactUsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contactUs: contactUsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
