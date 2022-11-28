import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    _id: "iubf39294uf",
    name: "You",
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
];

const userSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state = action.payload;
    },
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      state = state.filter((contact) => contact._id !== action.payload);
    },
    updateContact: (state, action) => {
      const index = state.findIndex(
        (contact) => contact._id === action.payload._id
      );
      state[index] = action.payload;
    },
  },
});

export const { setContacts, addContact, removeContact, updateContact } =
  userSlice.actions;

export default userSlice.reducer;
