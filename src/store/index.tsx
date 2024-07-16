import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contacts";
import searchReducer from "./reducers/search";

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    search: searchReducer,
  },
});

export default store;
export type RootReducer = ReturnType<typeof store.getState>;
