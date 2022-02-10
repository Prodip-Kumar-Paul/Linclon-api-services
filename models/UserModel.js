import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
   {
      email: {
         type: String,
         required: true,
      },
      imageUrl:{
         type:String
      },
      userType: {
         type: String,
         required: true,
         enum: {
            values: ["User", "Admin"],
         },
      },
      githubId: {
         type: String,
      },
      githubUserName: {
         type: String,
      },
      githubNodeId: {
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

export default mongoose.model("User", userSchema);
