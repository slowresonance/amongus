import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "iubf39294uf",
  name: "Mohan",
  email: "mohanvpatta@gmail.com",
  contacts: [
    {
      _id: "iubf39294uf",
      name: "Mohan",
    },
    {
      _id: "2973yss922f2dsy",
      name: "Rachana",
    },
    {
      _id: "297s3y922f2dy",
      name: "Joshua",
    },
    {
      _id: "297s3ysd3ss922f2dy",
      name: "Kavya",
    },
    {
      _id: "2973ysss94322f2dy",
      name: "Sonika",
    },
    {
      _id: "ieyfb83s72323d",
      name: "Manisha",
    },
    {
      _id: "wrfoisun4nb",
      name: "Lakshit",
    },
  ],
  groups: [
    {
      _id: "non-group",
      name: "Non-Group Expenses",
    },
    {
      _id: "iubf39294uf",
      name: "A short trip to Kerala",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    setProperty: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setUser, setProperty } = userSlice.actions;

export default userSlice.reducer;
