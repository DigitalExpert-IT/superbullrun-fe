export interface IRankSystem {
  share: string;
  percent: string;
}

export const NFTCARD = [
  {
    id: "0",
    title: "BullRun 1",
    price: "15 USDT",
  },
  {
    id: "1",
    title: "BullRun 2",
    price: "15 USDT",
  },
  {
    id: "2",
    title: "BullRun 3",
    price: "15 USDT",
  },
  {
    id: "3",
    title: "BullRun 4",
    price: "15 USDT",
  },
  {
    id: "4",
    title: "BullRun 5",
    price: "15 USDT",
  },
  {
    id: "5",
    title: "BullRun 6",
    price: "15 USDT",
  },
];

export const RANKSYSTEM: Array<IRankSystem> = [
  {
    share: "Referral",
    percent: "10%",
  },
  {
    share: "Marketing",
    percent: "30%",
  },
  {
    share: "Address Bridge",
    percent: "30%",
  },
  {
    share: "Swap to Shiba Liquidity",
    percent: "15%",
  },
  {
    share: "Swap to XRP Liquidity",
    percent: "15%",
  },
];
