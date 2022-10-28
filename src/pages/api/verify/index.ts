import keccak256 from "keccak256";
import { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { nid, name } = req.body;
    const hashName =
      "0x" + keccak256(name + process.env.DIGEST).toString("hex");
    const encryptNID = CryptoJS.AES.encrypt(
      nid,
      process.env.SECRET_KEY as string
    ).toString();
    return res.status(200).json({ hashName, encryptNID });
  }
}
