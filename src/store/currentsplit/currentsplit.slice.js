import { createSlice } from "@reduxjs/toolkit";
import { createRandomId } from "../../utils/Rand";

const initialState = {
  id: createRandomId(),
  name: "Untitled Split",
  // createdAt: new Date(),
  // updatedAt: new Date(),
  createdBy: "",
  payer: "",
  amount: 0,
  participants: [],
  adjustments: [],
  isArchived: false,
  splitBy: "equal",
  groups: [],
  notes: [],
  images: [],
  percentages: [],
  shares: [],
  splitRest: false,
  isDraft: false,
};

export const currentSplitSlice = createSlice({
  name: "currentSplit",
  initialState,
  reducers: {
    setProperty: (state, action) => {
      console.log(action);
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setProperty } = currentSplitSlice.actions;

export default currentSplitSlice.reducer;
