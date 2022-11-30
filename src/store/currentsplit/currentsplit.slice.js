import { createSlice } from "@reduxjs/toolkit";
// import { createRandomId } from "../../utils/Rand";

const initialState = {
  _id: "thisone",
  name: "",
  is_group: true,
  group: {
    _id: "",
    name: "",
  },
  total_amount: 0,
  created_on: 0,
  created_by: {
    _id: "",
    name: "",
  },
  payer: [],
  participants: [],
  method: "equally",
  sets: [
    {
      _id: "",
      expression: "",
      amount: 0,
      participants: [],
    },
    {
      _id: "",
      expression: "",
      amount: 0,
      participants: [],
    },
  ],
  percentages: [],
  shares: [],
  split_rest: false,
  is_archived: false,
  summary: [
    {
      _id: "",
      name: "",
      is_group: true,
      group: {
        _id: "",
        name: "",
      },
      payer: {
        _id: "",
        name: "",
      },
      owed: 0,
      owe: 0,
      statements: [],
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
    updateAmount: (state, action) => {
      state["sets"][action.payload.index]["amount"] = action.payload.amount;
    },
  },
});

export const { setProperty, setAdjustment, setSetProperty, deleteSet, addSet } =
  currentSplitSlice.actions;

export default currentSplitSlice.reducer;
