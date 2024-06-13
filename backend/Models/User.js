import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    cnic: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    token: {
      type: String
    },
    tokenExpires: {
      type: Date
    },
    role:{
      type: String,
      enum:['user','vendor'],
      default: 'user'
    },
    wishList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);
export default User;
