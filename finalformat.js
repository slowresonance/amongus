// Summary shows the owed amounts

// /friends/summary -> Non-group Summary Page
// /groups/summary -> Groups Summary Page

// Split Summary

// /groups/:id/summary/:id -> Group Split Summary Page
// /friends/:id/summary/:id -> Non-group Split Summary Page

// Feed shows the splits themselves

// /friends/feed -> Non-group FeedPage
// /groups/:id/feed -> Group FeedPage

// New Split page is where you create a new split

// /friends/new -> Non-group New Split Page
// /groups/:id/new -> New Split Page

// Sets is where you edit the sets in a new split

// /friends/new/sets -> Non-group Sets Page
// /groups/:id/new/sets -> Sets Page

// API endpoints

// [/friends/summary] -> get_friends_summary -> an array of friend summaries

const f = [
  {
    friend: {
      _id: "",
      name: "Kavya",
    },
    owed: 287,
    owe: 0,
    statements: [
      {
        _id: "",
        owed: 387,
        owe: 0,
        from: "non_grouped_expenses",
      },
      {
        _id: "",
        owed: 0,
        owe: 100,
        from: "group_name -> (A short Kerala Trip)",
      },
    ],
  },
  {
    friend: {
      _id: "",
      name: "Rachana",
    },
    owed: 0,
    owe: 340,
    statements: [
      {
        _id: "",
        owed: 0,
        owe: 340,
        from: "non_grouped_expenses",
      },
    ],
  },
];

// [/groups/summary] -> get_groups_summary -> an array of group summaries

const g = [
  {
    group: {
      _id: "",
      name: "A short Kerala Trip",
    },
    owed: 0,
    owe: 287,
    statements: [
      {
        _id: "",
        name: "Kavya",
        owed: 0,
        owe: 287,
      },
      {
        _id: "",
        name: "Rachana",
        owed: 300,
        owe: 0,
      },
      {
        _id: "",
        name: "Joshua",
        owed: 0,
        owe: 13,
      },
    ],
  },
  {
    group: {
      _id: "",
      name: "Non-grouped Expenses",
    },
    owed: 340,
    owe: 0,
    statements: [
      {
        _id: "",
        name: "Kavya",
        owed: 387,
        owe: 0,
      },
      {
        _id: "",
        name: "Rachana",
        owed: 0,
        owe: 340,
      },
    ],
  },
];

// [/friends/:id/summary/] -> get_friend_summary -> a friend summary
// settling also happens here

const s = {
  friend: {
    _id: "",
    name: "Kavya",
  },
  owed: 287,
  owe: 0,
  statements: [
    {
      _id: "",
      owed: 387,
      owe: 0,
      from: "non_grouped_expenses",
    },
    {
      _id: "",
      owed: 0,
      owe: 100,
      from: "group_name -> (A short Kerala Trip)",
    },
  ],
};

// [/groups/:id/summary/:id] -> get_group_summary -> a group summary

const k = {
  _id: "",
  group: {
    _id: "",
    name: "A short Kerala Trip",
  },
  owed: 0,
  owe: 287,
  statements: [
    {
      _id: "",
      name: "Kavya",
      owed: 0,
      owe: 287,
    },
    {
      _id: "",
      name: "Rachana",
      owed: 300,
      owe: 0,
    },
    {
      _id: "",
      name: "Joshua",
      owed: 0,
      owe: 13,
    },
  ],
};

// [/friends/feed] -> get_friends_feed -> an array of friend feeds

const ff = {
  owed: 1243,
  owe: 512,
  statements: [
    {
      _id: "",
      name: "Breakfast",
      owed: 0,
      owe: 0,
      date: "2020-10-10",
    },
    {
      _id: "",
      name: "Lunch",
      owed: 0,
      owe: 512,
      date: "2020-10-10",
    },
    {
      _id: "",
      name: "Dinner",
      owed: 1243,
      owe: 0,
      date: "2020-10-10",
    },
  ],
};

// [/groups/:id/feed] -> get_group_feed -> a group feed

const gf = {
  _id: "",
  name: "A short Kerala Trip",
  owed: 1243,
  owe: 512,
  participants: [
    {
      _id: "",
      name: "Rachana",
    },
    {
      _id: "",
      name: "Kavya",
    },
    {
      _id: "",
      name: "Joshua",
    },
  ],
  statements: [
    {
      _id: "",
      name: "Breakfast",
      owed: 0,
      owe: 0,
      date: "2020-10-10",
    },
    {
      _id: "",
      name: "Lunch",
      owed: 0,
      owe: 512,
      date: "2020-10-10",
    },
    {
      _id: "",
      name: "Dinner",
      owed: 1243,
      owe: 0,
      date: "2020-10-10",
    },
  ],
};

// get_user -> get the user details

const u = {
  _id: "",
  name: "Mohan",
  email: "",
  contacts: [
    {
      _id: "",
      name: "Rachana",
    },
    {
      _id: "",
      name: "Kavya",
    },
  ],
  groups: [
    {
      _id: "",
      name: "A short Kerala Trip",
    },
    {
      _id: "",
      name: "Non-grouped Expenses",
    },
  ],
};

// for_my_reference

const r = {
  _id: "",
  name: "Breakfast",
  group_id: "either empty string or group_id",
  total_amount: 1000,
  created_on: "2020-10-10",
  created_by: {
    _id: "",
    name: "Mohan",
  },
  payer: {
    _id: "",
    name: "Rachana",
  },
  participants: [
    {
      _id: "",
      name: "Rachana",
      adjustment: 500,
    },
    {
      _id: "",
      name: "Kavya",
      adjustment: 0,
    },
    {
      _id: "",
      name: "Joshua",
      adjustment: 500,
    },
  ],
  split_method: "equal",
  sets: [
    {
      _id: "",
      expression: "450+324+432",
      amount: 1206,
      participants: [
        {
          _id: "",
          name: "Rachana",
          adjustment: 0,
        },
        {
          _id: "",
          name: "Kavya",
          adjustment: 0,
        },
        {
          _id: "",
          name: "Joshua",
          adjustment: 0,
        },
      ],
    },
    {
      _id: "",
      expression: "200+432+34",
      amount: 666,
      participants: [
        {
          _id: "",
          name: "Rachana",
          adjustment: 0,
        },
        {
          _id: "",
          name: "Kavya",
          adjustment: 0,
        },
      ],
    },
  ],
  percentages: [
    {
      _id: "",
      name: "Rachana",
      percentage: 50,
    },
    {
      _id: "",
      name: "Kavya",
      percentage: 25,
    },
    {
      _id: "",
      name: "Joshua",
      percentage: 25,
    },
  ],
  shares: [
    {
      _id: "",
      name: "Rachana",
      number_of_shares: 2,
    },
    {
      _id: "",
      name: "Kavya",
      number_of_shares: 1,
    },
    {
      _id: "",
      name: "Joshua",
      number_of_shares: 1,
    },
  ],
  split_rest: false,
  is_archived: false,
  summary: {
    _id: "split_id",
    name: "Breakfast",
    group: {
      _id: "",
      name: "A short Kerala Trip",
    },
    owed: 0,
    owe: 287,
    statements: [
      {
        _id: "",
        name: "Kavya",
        owed: 0,
        owe: 287,
      },
      {
        _id: "",
        name: "Rachana",
        owed: 300,
        owe: 0,
      },
      {
        _id: "",
        name: "Joshua",
        owed: 0,
        owe: 13,
      },
    ],
  },
};
