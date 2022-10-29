import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import sellerVerfication from "../../../abis/seller_verification.json";
import CryptoJS from "crypto-js";

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
    let decryptedData: any[] = [];
    sellerData.forEach((seller: any[]) => {
      const index = seller[0];
      const nid = seller[1];
      const decryptedNID = CryptoJS.AES.decrypt(
        nid,
        process.env.SECRET_KEY as string
      ).toString(CryptoJS.enc.Utf8);
      console.log(decryptedNID);
      const verifyRequest = {
        index: index.toNumber(),
        nid: decryptedNID,
      };
      decryptedData.push(verifyRequest);
    });
    return res.status(200).json(decryptedData);
  }
}
