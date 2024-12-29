import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    platform: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    notes: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Account", accountSchema);
