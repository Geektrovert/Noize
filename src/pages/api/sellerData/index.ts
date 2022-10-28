import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import sellerVerfication from "../../../abis/seller_verification.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com/"
    );
    const contractAddress = process.env.SELLER_VERIFICATION as string;
    const contract = new ethers.Contract(
      contractAddress,
      sellerVerfication,
      provider
    );
    const sellerData = await contract.viewPending();
    return res.status(200).json(sellerData);
  }
}
