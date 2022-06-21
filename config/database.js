import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connecting to Mongo Atlas Codenotes Database
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));
