import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Please add an email'],
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  is_verfied: {
    type: Boolean,
    default: false,
  },
  parameters: {
    type: Array,
    default: [],
  },
  verified_till: {
    type: Date,
  },
},
  { versionKey: false });

const User = models.User || model('User', UserSchema);

export default User;