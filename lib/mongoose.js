import mongoose from "mongoose";

export async function mongooseConnect() {
  try {
    if (mongoose.connection.readyState === 1) {
      // Connection already open, return the existing connection as a promise
      return mongoose.connection.asPromise();
    } else {
      const uri = process.env.MONGODB_URI;
      if (!uri) {
        throw new Error("MongoDB URI is not defined");
      }

  
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Propagate the error to the caller
  }
}
