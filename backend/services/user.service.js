const userData = require("../models/users.model");
const logger = require("../logger/logger");

module.exports.singUp = async (data) => {
  try {
    // const data = req.body;
    const existingUser = await userData.findOne({ email: data.email });
    console.log("Checking existing user ==>", existingUser.messages);

    if (existingUser) {
      const userMessage = await existingUser.messages(message);
      console.log(userMessage);

      return {
        message: "User already exists",
        userMessage,
      };
    }
    const user = await User(data).save();
    return {
      message: "User created successfully",
      user,
    };
  } catch (error) {
    return {
      message: "Somethings went wrong. Please try again later",
    };
  }
};
