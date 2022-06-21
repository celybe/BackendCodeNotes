import spaceSchema from "./space.js";
import boardSchema from "./board.js";
import eventSchema from "./event.js";
import preferenceSchema from "./preference.js";

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  User_Type: { type: String, required: true, default: "USER" },
  Username: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  Email: {
    type: String,
    lowercase: true,
    required: true,
    match: [/\S+@\S+\.\S+/],
    min: 6,
    max: 1024,
    index: true,
    unique: true,
  },
  First_Name: {
    type: String,
    default: null,
    required: true,
    min: 1,
    max: 100,
  },
  Last_Name: {
    type: String,
    default: null,
    required: true,
    min: 1,
    max: 100,
  },
  Password: { type: String, required: true, min: 8 },
  Token: { type: String },
  Refresh_Token: { type: String },
  Created_At: { type: Date, default: Date.now },
  Updated_At: { type: Date, default: Date.now },
  Document: { type: [], default: undefined },
  Board: { type: [boardSchema], default: undefined },
  Events: { type: [eventSchema], default: undefined },
  Preferences: { type: preferenceSchema, default: undefined },
});

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};
export default mongoose.model("User", userSchema);
