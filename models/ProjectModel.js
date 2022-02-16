import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      video: {
         type: String,
      },
      ownerId: {
         type: String,
         required: true,
      },
      status: {
         type: String,
      },
      teamSize: {
         type: Number,
         required: true,
      },
      // tag: {
      //   skills: [{ skillId: { type: Schema.Types.ObjectId,ref:'Skill', required: true } }],
      // },

      domains: [{ type: Schema.Types.ObjectId, ref: "Domain", required: true }],

      urgency: {
         type: String,
      },
      githubDetails: {
         type: Object,
      },
      githubId: {
         type: Number,
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

export default mongoose.model("Project", projectSchema);
