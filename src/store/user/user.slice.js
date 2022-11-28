import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  contacts: [],
  groups: [],
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
