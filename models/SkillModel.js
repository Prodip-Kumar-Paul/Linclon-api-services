import mongoose from "mongoose";
const { Schema } = mongoose;

export const skillSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
     
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Skill = mongoose.model("Skill", skillSchema);
