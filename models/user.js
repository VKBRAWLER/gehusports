import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Please add an email'],
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
    match: [/^[a-zA-Z]+$/, 'Name can only consist of letters'],
  },
  image: {
    type: String,
  },
  role: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  verfied: {
    type: Boolean,
    default: false,
  },
  parameters: {
    type: Array,
    default: [],
  },
});

const User = models.User || model('User', UserSchema);

export default User;