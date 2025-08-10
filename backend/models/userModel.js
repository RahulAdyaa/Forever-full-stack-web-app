import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },

    // 🔒 For password reset
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
}, {
    timestamps: true,
    minimize: false
});

// This prevents model overwrite errors during development
const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
