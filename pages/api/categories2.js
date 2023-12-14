import {Category2} from "@/models/Category2";
import { mongooseConnect } from "@/lib/mongooseConnect";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();

  if (method === 'GET') {
    res.json(await Category2.find().populate('parent'));
  }
}