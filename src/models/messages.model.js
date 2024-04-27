import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const messagesSchema = new mongoose.Schema({
  user: String,
  message: String,
});

const collectionName = "messages";
const messagesModel = mongoose.model(collectionName, messagesSchema);

export default messagesModel;