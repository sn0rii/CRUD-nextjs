import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    const mongodbUrl = process.env.MONGODB_URL;
    if (!mongodbUrl) {
      throw new Error(
        "MongoDB URL is not defined in the environment variables."
      );
    }

    console.log("Connected to MongoDB");
    await mongoose.connect(mongodbUrl);
  } catch (error: any) {
    console.log(error);
  }
};

export default connectMongoDb;
