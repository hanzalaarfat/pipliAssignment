const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    AgentName: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },

    Dob: {
      type: Date,
    },
    addressh: {
      type: String,
    },
    phone: {
      type: Number,
    },

    sate: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    email: {
      type: String,
    },
    userType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
