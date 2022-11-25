import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  splits: [],
};

export const splitsSlice = createSlice({
  name: "splits",
  initialState,
  reducers: {
    addSplit: (state, action) => {
      state.splits.push(action.payload);
    },
  },
});

export const { addSplit } = splitsSlice.actions;

export default splitsSlice.reducer;
