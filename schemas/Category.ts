import { Schema, model } from "mongoose";

// this is schema for categories
const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "You need to include name"],
    maxLength: 30,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: [true, "Date must be included"],
  },
});

const Category = model("Category", categorySchema);

// import Category model in order to use it
export default Category;
