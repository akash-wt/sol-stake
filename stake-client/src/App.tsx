import { Program, AnchorProvider, setProvider } from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { StakeContract } from "./contract/type/stake_contract";
import idl from "./contract/idl/stake_contract.json";

const { connection } = useConnection();
const wallet = useAnchorWallet();



const provider = new AnchorProvider(connection, wallet, {});
setProvider(provider);



export const program = new Program(idl as StakeContract, {
  connection,
});