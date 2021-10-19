const mongoose = require("mongoose");
const PolicySchema = new mongoose.Schema(
  {
    pNo: {
      type: String,
      required: true,
    },
    satart: {
      type: Date,
    },

    end: {
      type: Date,
    },
    category: {
      type: String,
    },
    collectionId: {
      type: String,
    },

    CompanyCollectionId: {
      type: String,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
