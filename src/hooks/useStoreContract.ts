import { useContract, useSigner } from "wagmi";

import { STORE_CONTRACT_ADDRESS } from "../configs/constants";
import storeABI from "../abis/store.json";

export default function useStoreContract() {
  const { data: signer } = useSigner();
  const contract = useContract({
    address: STORE_CONTRACT_ADDRESS,
    abi: storeABI,
    signerOrProvider: signer,
  });

  return contract;
}