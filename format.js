const expense = {
  id: "3492rhfd",
  creatorUID: "649guorg9ng",
  name: "Lunch",
  images: [],
  notes: [],
  createdAt: 123456789,
  updatedAt: 123456789,
  amount: 1300,
  paidByUID: "649guorg9ng",
  participants: [
    "649guorg9ng",
    "rigubirg83f",
    "wwfifeyb47f",
    "if38y494fbwo",
    "fobyiify43ufb",
    "rifhih448uigf",
    "iu4ghuiho34o",
  ],
  adjustments: [
    {
      uid: "649guorg9ng",
      amount: 100,
    },
    {
      uid: "rigubirg83f",
      amount: 150,
    },
    {
      uid: "wwfifeyb47f",
      amount: 200,
    },
  ],
  isArchived: false,
  splitBy: "groups",
  //   groups, equally, percentages, shares etc
  groups: [
    {
      breakdown: "550+200+20+60",
      participants: [
        "649guorg9ng",
        "rigubirg83f",
        "wwfifeyb47f",
        "if38y494fbwo",
      ],
    },
    {
      breakdown: "200+100+40+100",
      participants: ["rifhih448uigf", "iu4ghuiho34o"],
    },
    {
      breakdown: "450+20",
      participants: [
        "649guorg9ng",
        "rigubirg83f",
        "wwfifeyb47f",
        "if38y494fbwo",
      ],
    },
  ],
  percentages: [
    {
      participant: "649guorg9ng",
      percentage: 20,
    },
    {
      participant: "rigubirg83f",
      percentage: 20,
    },
    {
      participant: "wwfifeyb47f",
      percentage: 20,
    },
    {
      participant: "if38y494",
      percentage: 20,
    },
    {
      participant: "fobyiify43ufb",
      percentage: 10,
    },
  ],
  splitRest: true,
};

const user = {
  uid: "649guorg9ng",
  name: "Mohanvenkat Patta",
  username: "mohan",
  email: "mohan@gmail.com",
  phone: "1234567890",
  createdAt: 123456789,
  updatedAt: 123456789,
  friends: ["rigubirg83f", "wwfifeyb47f", "if38y494fbwo"],
  isDeleted: false,
};

const summary = {
  sid: "f3w4ff3w344",
  tid: "649guorg9ng",
  amount: 1300,
  name: "Lunch",
  createdAt: 123456789,
  participants: [
    {
      uid: "649guorg9ng",
      lent: 100,
      owed: 400,
    },
    {
      uid: "649guorg9ng",
      lent: 100,
      owed: 400,
    },
    {
      uid: "649guorg9ng",
      lent: 100,
      owed: 400,
    },
    {
      uid: "649guorg9ng",
      lent: 100,
      owed: 400,
    },
    {
      uid: "649guorg9ng",
      lent: 100,
      owed: 400,
    },
    {
      uid: "649guorg9ng",
      lent: 100,
      owed: 400,
    },
  ],
};

const summaryDemo = {
  sid: "f3w4ff3w344",
  tid: "649guorg9ng",
  amount: 1300,
  name: "Lunch",
  createdAt: 123456789,
  participants: [
    {
      uid: "649guorg9ng",
      name: "Mohan",
      lent: 0,
      owed: 253,
    },
    {
      uid: "649guorg9ng",
      name: "Rachana",
      lent: 0,
      owed: 273,
    },
    {
      uid: "649guorg9ng",
      name: "Manisha",
      lent: 0,
      owed: 403,
    },
    {
      uid: "649guorg9ng",
      name: "Sika",
      lent: 0,
      owed: 253,
    },
    {
      uid: "649guorg9ng",
      name: "Bhargav",
      lent: 0,
      owed: 253,
    },
    {
      uid: "649guorg9ng",
      name: "Lakshit",
      lent: 0,
      owed: 229,
    },
    {
      uid: "649guorg9ng",
      name: "Satya",
      lent: 0,
      owed: 229,
    },
    {
      uid: "649guorg9ng",
      name: "Suprith",
      lent: 0,
      owed: 207,
    },
  ],
};
