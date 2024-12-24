import mongoose from "mongoose";
import { env } from "@/lib/util/env";

const MONGODB_URI = env.MONGODB_URI;

// Cache the mongoose connection for global use
let cached = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise.catch((error: Error) => {
    cached.promise = null;
    throw error;
  });

  return cached.conn;
}
