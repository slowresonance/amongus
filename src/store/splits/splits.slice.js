import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    _id: "",
    group_id: "",
    name: "",
    total_amount: 0,
    // created_on: "2021-11-13",
    // created_by: "iubf39294uf",
    payer: [],
    participants: [
      {
        _id: "iubf3s9d294uf",
        name: "Rachana",
        amount: 150,
      },
      {
        _id: "iubsdf39294uf",
        name: "Kavya",
        amount: 0,
      },
      {
        _id: "ieubfs39294uf",
        name: "Joshua",
        amount: 50,
      },
      {
        _id: "iubrf39294suf",
        name: "Rachana",
        amount: 250,
      },
    ],
  },
];

export const splitsSlice = createSlice({
  name: "splits",
  initialState,
  reducers: {
    addSplit: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addSplit } = splitsSlice.actions;

export default splitsSlice.reducer;
