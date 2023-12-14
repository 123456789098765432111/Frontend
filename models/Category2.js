import mongoose, {model, models, Schema} from "mongoose";

const CategorySchema = new Schema({
  name: {type:String,required:true},
  parent: {type:mongoose.Types.ObjectId, ref:'Category2'},
  properties: [{type:Object}]
});

export const Category2 = models?.Category2 || model('Category2', CategorySchema);