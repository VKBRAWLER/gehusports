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
  forgot_password_token: String,
  forgot_password_token_expires: Date,
  verify_token: String,
  verify_token_expires: Date,
});

const User = models.User || model('User', UserSchema);

export default User;