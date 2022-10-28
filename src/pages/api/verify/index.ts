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
      keccak256(name).toString("hex") + process.env.REACT_APP_DIGEST;
    const encryptNID = CryptoJS.AES.encrypt(
      nid,
      process.env.REACT_APP_SECRET_KEY
    ).toString();
    console.log(hashName, encryptNID);
  }
}
