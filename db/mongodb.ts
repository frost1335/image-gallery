import mongoose from "mongoose";

module.exports = async (uri: string) => {
  try {
    await mongoose.connect(uri).then(() => console.log("MongoDB connected"));
  } catch (err: any) {
    console.log(err.message);
  }
};
