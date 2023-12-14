import { mongooseConnect } from "@/lib/mongooseConnect";
import { Category3 } from "@/models/Category3";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();

  if (method === 'GET') {
    res.json(await Category3.find().populate('parent'));
  }
}