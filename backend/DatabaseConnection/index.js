import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoURI = 'mongodb://localhost:27017/Ecommerence';
// const mongoURI = process.env.MONGODB_URI;
// console.log(`${process.env.MONGODB_URI}`)
const connectToMongo = () => {
  mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 500000, // Increase timeout
    connectTimeoutMS: 300000,
    socketTimeoutMS: 450000,
  })
  .then(() => {
    console.log("Connected to mongodb successfully");
  })
  .catch((error) => {
    console.log("Error connecting to mongo db:", error);
  });
};

export default connectToMongo;
