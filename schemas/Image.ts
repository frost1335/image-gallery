import { Schema, model } from "mongoose";

const imageSchema = new Schema({
  title: {
    type: String,
    required: [true, "You need to include title"],
    maxLength: 50,
  },
  description: {
    type: String,
    required: [true, "You need to include description"],
    maxLength: 230,
  },
  file: {
    type: String,
  },
  tags: {
    type: Array,
    required: [true, "You need to include tags"],
    maxLength: 30,
  },
  rate: {
    type: Number,
    required: [true, "You need to include rate"],
    max: [5, "Max rate is 5"],
    min: [1, "Min rate is 1"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: [true, "Date must be included"],
  },
});

const Image = model("Image", imageSchema);

export default Image;
