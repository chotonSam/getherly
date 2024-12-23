import mongoose from "mongoose";

let cached = global.mongoose;

// Use a global variable to cache the connection
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) {
    // Return the cached connection if it exists
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust to 5000ms for faster error handling
    };

    // Create a new connection promise and cache it
    cached.promise = mongoose
      .connect(process.env.MONGO_URI, options)
      .then((mongoose) => {
        console.log("Connected to MongoDB");
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err; // Ensure the error is propagated to be handled by the caller
  }
}
