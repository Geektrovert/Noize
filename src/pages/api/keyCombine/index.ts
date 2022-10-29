import { NextApiRequest, NextApiResponse } from "next";
import { combine } from "shamirs-secret-sharing-ts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body.keys.length < 3) {
      res.status(400).send({ error: "Not enough agreements" });
    }
    const secret = combine(req.body.keys).toString();
    res.status(201).send({ secret });
  }
}
