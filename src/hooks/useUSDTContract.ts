import { CURRENT_CHAIN_ID } from "./bullrun";
import { useContract } from "@thirdweb-dev/react";
import { USDT_CONTRACT } from "constant/address";
import usdt from "pass-bullrun/artifacts/contracts/Usdt.sol/USDT.json";

const contractAddress = USDT_CONTRACT[CURRENT_CHAIN_ID as "0x38"];

export const useUSDTContract = () => {
  return useContract(contractAddress, usdt.abi);
};
