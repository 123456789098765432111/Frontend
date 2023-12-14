import {Category} from "@/models/Category";
import { mongooseConnect } from "@/lib/mongooseConnect";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();

  if (method === 'GET') {
    res.json(await Category.find().populate('parent'));
  }
}