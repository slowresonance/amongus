import { createSlice } from "@reduxjs/toolkit";
// import { createRandomId } from "../../utils/Rand";

const initialState = {
  _id: "",
  group_id: "",
  name: "",
  total_amount: 0,
  // created_on: "2021-11-13",
  // created_by: "iubf39294uf",
  payer: [],
  participants: [
    // {
    //   _id: "iubf3s9d294uf",
    //   name: "Rachana",
    //   amount: 150,
    // },
    // {
    //   _id: "iubsdf39294uf",
    //   name: "Kavya",
    //   amount: 0,
    // },
    // {
    //   _id: "ieubfs39294uf",
    //   name: "Joshua",
    //   amount: 50,
    // },
    // {
    //   _id: "iubrf39294suf",
    //   name: "Rachana",
    //   amount: 250,
    // },
  ],
  method: "equally",
  sets: [
    {
      _id: "iubf39294uf",
      expression: "",
      participants: [
        // {
        //   _id: "iubf39294uf",
        //   name: "Rachana",
        // },
        // {
        //   _id: "iubf39294uf",
        //   name: "Rachana",
        // },
        // {
        //   _id: "iubf39294uf",
        //   name: "Rachana",
        // },
      ],
    },
    {
      _id: "iubfd39294uf",
      expression: "",
      participants: [
        // {
        //   _id: "iubf39294uf",
        //   name: "Rachana",
        // },
        // {
        //   _id: "iubf39294uf",
        //   name: "Rachana",
        // },
        // {
        //   _id: "iubf39294uf",
        //   name: "Rachana",
        // },
      ],
    },
  ],
  percentages: [
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   percentage: 10,
    // },
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   percentage: 20,
    // },
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   percentage: 30,
    // },
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   percentage: 40,
    // },
  ],
  shares: [
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   shares: 2,
    // },
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   shares: 1,
    // },
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   shares: 1,
    // },
    // {
    //   _id: "iubf39294uf",
    //   name: "Rachana",
    //   shares: 3,
    // },
  ],
  split_rest: false,
  is_archived: false,
  is_deleted: false,
  summary: [
    {
      from: {
        _id: "iubf39294uf",
        name: "Rachana",
      },
      to: {
        _id: "iubf39294uf",
        name: "Mohan",
      },
      amount: 100,
    },
    {
      from: {
        _id: "iubf39294uf",
        name: "Rachana",
      },
      to: {
        _id: "iubf39294uf",
        name: "Mohan",
      },
      amount: 100,
    },
  ],
};

export const currentSplitSlice = createSlice({
  name: "currentSplit",
  initialState,
  reducers: {
    setProperty: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    setAdjustment: (state, action) => {
      state["participants"][action.payload.index][action.payload.key] =
        action.payload.value;
    },
    setSetProperty: (state, action) => {
      state["sets"][action.payload.index][action.payload.key] =
        action.payload.value;
    },
    deleteSet: (state, action) => {
      state["sets"].splice(action.payload.index, 1);
    },
    addSet: (state, action) => {
      state["sets"].push({
        _id: action.payload.id,
        expression: "",
        participants: [],
      });
    },
  },
});

export const { setProperty, setAdjustment, setSetProperty, deleteSet, addSet } =
  currentSplitSlice.actions;

export default currentSplitSlice.reducer;
