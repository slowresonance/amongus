const splits = [
  {
    _id: "fwf4r352",
    group_id: "iubf39294uf",
    name: "dinner",
    total_amount: 1340,
    created_on: "2021-11-13",
    created_by: "iubf39294uf",
    payer: {
      _id: "iubf39294uf",
      name: "Rachana",
    },
    participants: [
      {
        _id: "iubf39294uf",
        name: "Rachana",
      },
      {
        _id: "iubf39294uf",
        name: "Kavya",
      },
      {
        _id: "iubf39294uf",
        name: "Joshua",
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
      },
    ],
    isAdjusted: false,
    adjustments: [
      {
        _id: "iubf39294uf",
        name: "Rachana",
        adjustment: 150,
      },
      {
        _id: "iubf39294uf",
        name: "Kavya",
        adjustment: 0,
      },
      {
        _id: "iubf39294uf",
        name: "Joshua",
        adjustment: 50,
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
        adjustment: 250,
      },
    ],
    method: "equally",
    waves: [
      {
        _id: "iubf39294uf",
        amount: 600,
        participants: [
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
        ],
      },
      {
        _id: "iubf39294uf",
        amount: 300,
        participants: [
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
        ],
      },
      {
        _id: "iubf39294uf",
        amount: 250,
        participants: [
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
          {
            _id: "iubf39294uf",
            name: "Rachana",
          },
        ],
      },
    ],
    percentages: [
      {
        _id: "iubf39294uf",
        name: "Rachana",
        percentage: 10,
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
        percentage: 20,
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
        percentage: 30,
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
        percentage: 40,
      },
    ],
    shares: [
      {
        _id: "iubf39294uf",
        name: "Rachana",
        shares: 2,
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
        shares: 1,
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
        shares: 1,
      },
      {
        _id: "iubf39294uf",
        name: "Rachana",
        shares: 3,
      },
    ],
    split_rest: true,
    is_archived: false,
    is_deleted: false,
  },
];

const group = {
  _id: "iubf39294uf",
  name: "A short trip to Goa",
  participants: [
    {
      _id: "iubf39294uf",
      name: "Rachana",
    },
    {
      _id: "iubf39294uf",
      name: "Kavya",
    },
    {
      _id: "iubf39294uf",
      name: "Joshua",
    },
    {
      _id: "iubf39294uf",
      name: "Mohan",
    },
  ],
  created_on: "2021-11-13",
  created_by: "iubf39294uf",
  summary: [
    {
      from: "iubf39294uf-Rachana",
      to: "iubf39294uf-Kavya",
      amount: 100,
    },
    {
      from: "iubf39294uf-Rachana",
      to: "iubf39294uf-Kavya",
      amount: 100,
    },
    {
      from: "iubf39294uf-Rachana",
      to: "iubf39294uf-Kavya",
      amount: 100,
    },
    {
      from: "iubf39294uf-Rachana",
      to: "iubf39294uf-Kavya",
      amount: 100,
    },
  ],
};

const user = {
  _id: "iuboefnijrn",
  name: "Rachana",
  email: "rach@gmail.com",
  phone: "1234567890",
  groups: [
    {
      _id: "iubf39294uf",
      name: "A short trip to Goa",
    },
    {
      _id: "iubf39294uf",
      name: "Dominos",
    },
  ],
  created_on: "2021-11-13",
  updated_on: "2021-11-13",
  contacts: [
    {
      _id: "iubf39294uf",
      name: "Kavya",
    },
    {
      _id: "iubf39294uf",
      name: "Joshua",
    },
    {
      _id: "iubf39294uf",
      name: "Mohan",
    },
  ],
  is_deleted: false,
};
