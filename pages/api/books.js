import {Book} from "@/models/Book";
import { mongooseConnect } from "@/lib/mongooseConnect";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Book.findOne({_id:req.query.id}));
    } else {
      res.json(await Book.find());
    }
  }

 
}