import { configureStore } from "@reduxjs/toolkit";
import splitsReducer from "./splits/splits.slice";
import currentSplitReducer from "./currentsplit/currentsplit.slice";
import uiReducer from "./ui/ui.slice";

export const store = configureStore({
  reducer: {
    currentSplit: currentSplitReducer,
    splits: splitsReducer,
    ui: uiReducer,
  },
});
