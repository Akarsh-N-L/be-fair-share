import mongoose from "mongoose";
import config from "./config";

const connectToMongo = async () => {
  try {
    const connectionURI = config?.MONGO?.URI;
    await mongoose.connect(connectionURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
export default connectToMongo;
