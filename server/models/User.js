import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        location: {
            type: String,
            required: true,
            min: 3,
        },
        age: {
            type: Number,
            required: true,
        },
        bloodGroup: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;