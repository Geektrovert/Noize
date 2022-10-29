import { NextApiRequest, NextApiResponse } from "next";
import { split } from "shamirs-secret-sharing-ts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secret = Buffer.from((Math.random() + 1).toString(36).substring(2));
  console.log(secret.toString());
  let shares = split(secret, { shares: 4, threshold: 3 });
  shares = shares.map((share) => share.toString("hex"));
  res.status(201).send(shares);
}
