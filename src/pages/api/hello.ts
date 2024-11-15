// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchAssest } from "@/lib/contentful";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const id = req.query.id
  const data = await fetchAssest(id as string);
  res.status(200).json(data);
}
