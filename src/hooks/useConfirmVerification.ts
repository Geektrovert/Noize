import { useQueryClient } from "@tanstack/react-query";
import { useSellerVerificationContract } from "./useVerificationContracts";

export default function useConfirmVerification() {
  const sellerVerificationContract = useSellerVerificationContract();
  const queryClient = useQueryClient();

  return async (id: number, status: 1 | 2, name: string) => {
    const tx = await sellerVerificationContract?.functions.verifySeller(
      id, status, name
    );
    await tx.wait();
    queryClient.invalidateQueries(["pendingVerifications"]);
  };
}