import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const collection = "Users";

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  password: String,
  role: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

schema.plugin(mongoosePaginate);
const userModel = mongoose.model(collection, schema);
export default userModel;
