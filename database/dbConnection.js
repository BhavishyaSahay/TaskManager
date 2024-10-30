import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  const uri = process.env.MONGO_URI;

  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,  // Set connection timeout to 10 seconds
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));
};
