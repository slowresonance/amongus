import { configureStore } from "@reduxjs/toolkit";
import splitsReducer from "./splits/splits.slice";
import currentSplitReducer from "./currentsplit/currentsplit.slice";
import uiReducer from "./ui/ui.slice";
import userReducer from "./user/user.slice";
import contactsReducer from "./contacts/contacts.slice";

export const store = configureStore({
  reducer: {
    currentSplit: currentSplitReducer,
    splits: splitsReducer,
    ui: uiReducer,
    user: userReducer,
    contacts: contactsReducer,
  },
});
