import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  clerkUserId: { type: String, unique: true, required: true },
  emailAddress: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
