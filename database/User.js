const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    referredBy: {
      type: String,
      ref: "User",
    },
    referralCode: {
      type: String,
      unique: true,
    },
    balance: {
      type: Number,
    },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true },
  }
);

User.virtual("referredByUser", {
  ref: "User",
  localField: "referredBy",
  foreignField: "referralCode",
  justOne: true,
});

module.exports = model("User", User);
