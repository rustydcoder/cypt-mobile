const UserImage = require("@/assets/images/demo/user.png");

export type History = {
  id: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
  name: string;
  imageUrl: string;
  currency: string;
};

export type Transaction = {
  id: string;
  date: string;
  history: History[];
};

export const user = {
  name: "Damilola",
  image: UserImage,
};

export const accountInfo = [
  {
    id: "1",
    title: "Savings",
    icon: "savings",
  },
  {
    id: "2",
    title: "Hide Balance",
    icon: "eye-off-sharp",
  },
  {
    id: "3",
    title: "Bank",
    icon: "bank",
  },
];

export const transactions: Transaction[] = [
  {
    id: "1",
    date: "14 Mar, 2025",
    history: [
      {
        id: "t1",
        date: "14 Mar, 2025",
        amount: 20000,
        type: "credit",
        currency: "$",
        name: "Abu Salihu",
        imageUrl:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      },
      {
        id: "t2",
        date: "14 Mar, 2025",
        amount: 400,
        type: "debit",
        currency: "$",
        name: "Netflix",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      },
      {
        id: "t3",
        date: "14 Mar, 2025",
        amount: 4000,
        type: "debit",
        currency: "$",
        name: "Coursera",
        imageUrl:
          "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      },
    ],
  },
  {
    id: "2",
    date: "13 Mar, 2025",
    history: [
      {
        id: "t4",
        date: "13 Mar, 2025",
        amount: 10000,
        type: "credit",
        currency: "$",
        name: "Taylor Brown",
        imageUrl:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      },
      {
        id: "t5",
        date: "13 Mar, 2025",
        amount: 5000,
        type: "credit",
        currency: "$",
        name: "Karibu Mbuntu",
        imageUrl:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
  },
  {
    id: "3",
    date: "12 Mar, 2025",
    history: [
      {
        id: "t6",
        date: "12 Mar, 2025",
        amount: 750,
        type: "debit",
        currency: "$",
        name: "Spotify",
        imageUrl:
          "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
      },
      {
        id: "t7",
        date: "12 Mar, 2025",
        amount: 15000,
        type: "credit",
        currency: "$",
        name: "Aisha Okonkwo",
        imageUrl:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      },
    ],
  },
];
