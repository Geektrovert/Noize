import { useSellerVerificationContract } from "./useVerificationContracts";

type Data = {
  encryptNID: string;
  hashName: string;
}

export default function useSendVerificationReq() {
  const contract = useSellerVerificationContract();

  const sendVerificationReq = async (data: Data) => {
    if (!contract) return;

    const { encryptNID, hashName } = data;
    const tx = await contract.functions.submitData(encryptNID, hashName);
    await tx.wait();
  }
  return sendVerificationReq;
}
