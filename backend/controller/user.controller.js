const User = require("../models/users.model");
const logger = require("../logger/logger");

module.exports.register = async (req, res) => {
  try {
    const payload = req.body;
    const existingUser = await User.findOne({ email: payload.email });
    console.log("Checking existing user ==>", existingUser);

    if (existingUser) {
      const userMessage = await existingUser.MessageSave(message);
      console.log(userMessage);

      return res.status(401).json({
        message: "User already exists",
        userMessage,
      });
    }
    const user = await User(payload).save();
    return res.status(200).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Somethings went wrong. Please try again later",
    });
  }
};
