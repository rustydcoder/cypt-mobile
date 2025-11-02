export type Card = {
  cardNumber: string;
  cardHolderName: string;
  valid: string;
};

export type Meta = {
  usage: string;
  spent: number;
  dailyLimit: number;
  currency: string;
};

export const cardDetails: Card = {
  cardNumber: "5456   4556   7865  7846",
  cardHolderName: "Chukuemeka Ade Musa",
  valid: "10 / 26",
};

export const cardMeta: Meta = {
  usage: "40%",
  spent: 1200,
  dailyLimit: 6000,
  currency: "$",
};
