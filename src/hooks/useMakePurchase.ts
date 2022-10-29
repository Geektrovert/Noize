import { erc20ABI, useContract, useSigner } from "wagmi";

import useStoreContract from "./useStoreContract";
import { USDC_ADDRESS, USDC_MULTIPLIER, STORE_CONTRACT_ADDRESS } from "../configs/constants";

export default function useMakePurchase() {
  const storeContract = useStoreContract();
  const { data: signer } = useSigner();
  const usdcContract = useContract({
    address: USDC_ADDRESS,
    abi: erc20ABI,
    signerOrProvider: signer,
  });

  const purchase = async (id: number, price: number) => {
    // @ts-ignore
    await usdcContract?.approve(STORE_CONTRACT_ADDRESS!, price * USDC_MULTIPLIER);
    const tx = await storeContract?.functions.buyproduct(id);
    await tx.wait();
  };

  return purchase;
}
