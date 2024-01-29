const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  bio: String,

  username: {
    type: String,
    unique: true,
    default: function () {
      if (this.email) {
        return this.email;
      }
      return null;
    },
  },
  profilePicture: {
    type: String,
    default: null,
  },
  enrolledEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meetup",
    },
  ],
  organisedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meetup",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
