import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    _id: "non-group",
    name: "Non-Group Expenses",
    participants: [],
    owed: 400,
    owe: 0,
    summary: [
      {
        _id: "2973yss922f2dsy",
        name: "Rachana",
        owed: 2324,
        owe: 0,
      },
      { _id: "297s3y922f2dy", name: "Joshua", owed: 2334, owe: 0 },
      { _id: "297s3ysd3ss922f2dy", name: "Kavya", owed: 0, owe: 3412 },
    ],
    splits: [
      {
        _id: "wefef2342fef32",
        name: "Breakfast",
        is_group: false,
        created_on: 6833374463,
        group: {
          _id: "",
          name: "",
        },
        payer: {
          _id: "2973yss922f2dsy",
          name: "Rachana",
        },
        amount: 1230,
        owed: 400,
        owe: 0,
        statements: [
          {
            _id: "2973yss922f2dsy",
            name: "Kavya",
            owed: 0,
            owe: 287,
          },
          {
            _id: "297s3y922f2dy",
            name: "Rachana",
            owed: 300,
            owe: 0,
          },
          {
            _id: "297s3ysd3ss922f2dy",
            name: "Joshua",
            owed: 0,
            owe: 13,
          },
        ],
      },
    ],
  },
  {
    _id: "iubf39294uf",
    name: "Kerala Trip",
    participants: [
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
    ],
    owed: 234,
    owe: 0,
    summary: [
      {
        _id: "2973yss922f2dsy",
        name: "Rachana",
        owed: 1234,
        owe: 0,
      },
      { _id: "297s3y922f2dy", name: "Joshua", owed: 2834, owe: 0 },
      { _id: "297s3ysd3ss922f2dy", name: "Kavya", owed: 0, owe: 3492 },
    ],
    splits: [
      {
        _id: "wefef2342fef32",
        name: "Breakfast",
        is_group: true,
        created_on: 6833374463,
        group: {
          _id: "",
          name: "A short Kerala Trip",
        },
        payer: {
          _id: "2973yss922f2dsy",
          name: "Rachana",
        },
        amount: 1230,
        owed: 234,
        owe: 0,
        statements: [
          {
            _id: "2973yss922f2dsy",
            name: "Kavya",
            owed: 0,
            owe: 287,
          },
          {
            _id: "297s3y922f2dy",
            name: "Rachana",
            owed: 300,
            owe: 0,
          },
          {
            _id: "297s3ysd3ss922f2dy",
            name: "Joshua",
            owed: 0,
            owe: 13,
          },
        ],
      },
    ],
  },
];

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroup: (state, action) => {
      state.push(action.payload);
    },
    updateGroup: (state, action) => {
      const index = state.findIndex(
        (group) => group._id === action.payload._id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    addSplit: (state, action) => {
      state[1].splits.push(action.payload);
    },
  },
});

export const { addGroup, addSplit } = groupsSlice.actions;

export default groupsSlice.reducer;
