import mongoose from "mongoose";

export const dbConnect = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    console.log("Retrying connection in 5 seconds...");
  }
};

// Use dbConnect function in the entry point
dbConnect();
