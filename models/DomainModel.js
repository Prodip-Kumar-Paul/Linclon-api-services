import mongoose from "mongoose";
const { Schema } = mongoose;

export const domainSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Domain", domainSchema);
