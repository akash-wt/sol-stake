import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { StakeContract } from "../target/types/stake_contract";

describe("stake-contract", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.stakeContract as Program<StakeContract>;

  it("Is initialized!", async () => {
    
  });
});
