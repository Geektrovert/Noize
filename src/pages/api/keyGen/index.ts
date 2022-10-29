import { NextApiRequest, NextApiResponse } from "next";
import { split, combine } from "shamirs-secret-sharing-ts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secret = Buffer.from((Math.random() + 1).toString(36).substring(2));
  let shares = split(secret, { shares: 10, threshold: 4 });
  shares = shares.map((share) => share.toString("hex"));
  res.status(201).send(shares);
}
