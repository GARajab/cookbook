const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: [3, "Name Must Be More Than 3 Characters"],
      maxlength: [10, "Name Must Be Less Than Oe Equal 10 Characters"],
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true, // createdAt and UpdatedAt will be automatically added to each records (username and password)
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
