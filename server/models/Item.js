import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
}, { timestamps: true });

export default mongoose.model("Item", ItemSchema);

// const Ind=ex