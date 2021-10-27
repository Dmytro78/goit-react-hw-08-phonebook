import { configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filter/filter-reducer";
import authSlice from "./auth/authSlice";
import contactsSlice from "./contacts/contactsReducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
    filter: filterReducer,
    contacts: contactsSlice,
  } 
});

export const persistor = persistStore(store);

