import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      name: "New Split",
      path: "/new-split",
    },
    {
      name: "Groups",
      path: "/groups",
    },
    {
      name: "Friends",
      path: "/friends",
    },
  ],
  history: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenu } = uiSlice.actions;

export default uiSlice.reducer;
