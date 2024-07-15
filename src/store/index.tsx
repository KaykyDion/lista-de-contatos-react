import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contacts";

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
  },
});

export default store;
export type RootReducer = ReturnType<typeof store.getState>;
