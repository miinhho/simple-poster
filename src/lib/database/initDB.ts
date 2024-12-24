import mongoose from "mongoose";
import dbConnect from "./connectDB";

/*
  Initialize the database
*/
export default async function initDB() {
  try {
    await dbConnect();

    const db = mongoose.connection.db!;
    
    await db.createCollection('posts');
    await db.createCollection('users');

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}