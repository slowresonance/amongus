import { configureStore } from "@reduxjs/toolkit";
import currentSplitReducer from "./currentsplit/currentsplit.slice";
import groupsReducer from "./groups/groups.slice";
import userReducer from "./user/user.slice";
import uiReducer from "./ui/ui.slice";

export const store = configureStore({
  reducer: {
    currentSplit: currentSplitReducer,
    groups: groupsReducer,
    user: userReducer,
    ui: uiReducer,
  },
});
