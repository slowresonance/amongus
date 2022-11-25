import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputModal: {
    open: false,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openInputModal: (state, action) => {
      state.inputModal.open = true;
    },
    closeInputModal: (state, action) => {
      state.inputModal.open = false;
    },
  },
});

export const { openInputModal, closeInputModal } = uiSlice.actions;

export default uiSlice.reducer;
