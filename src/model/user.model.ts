import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: false, default: "" },
    description: { type: String, required: false, default: "" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    postList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

const User = mongoose.model('User', userSchema);

export default User;