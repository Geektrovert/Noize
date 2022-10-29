import { useContract, useSigner } from "wagmi";

import { SELLER_VERIF_CONTRACT_ADDRESS, VERIFIER_CONTRACT_ADDRESS } from "../configs/constants";
import verifierABI from "../abis/verifier.json";
import sellerVerifierABI from "../abis/seller_verification.json";

export function useVerifierContract() {
  const { data: signer } = useSigner();
  const contract = useContract({
    address: VERIFIER_CONTRACT_ADDRESS,
    abi: verifierABI,
    signerOrProvider: signer,
  });

  return contract;
}

export function useSellerVerificationContract() {
  const { data: signer } = useSigner();
  const contract = useContract({
    address: SELLER_VERIF_CONTRACT_ADDRESS,
    abi: sellerVerifierABI,
    signerOrProvider: signer,
  });

  return contract;
}