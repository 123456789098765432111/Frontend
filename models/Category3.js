import mongoose, {model, models, Schema} from "mongoose";

const CategorySchema = new Schema({
  name: {type:String,required:true},
  parent: {type:mongoose.Types.ObjectId, ref:'Category3'},
  properties: [{type:Object}]
});

export const Category3 = models?.Category3 || model('Category3', CategorySchema);