import mongoose, { Schema, trusted } from "mongoose";
import { authType } from "../interface/types";

const authSchema: Schema<authType> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    maxlength: 20,
  },
  username: {
    type: String,
    required: true,
    maxlength: 15,
  },
  password: {
    type: Number,
    maxlength: 15,
    required: true,
  },
});

const authModel = mongoose.model<authType>("auth", authSchema);
export default authModel;
