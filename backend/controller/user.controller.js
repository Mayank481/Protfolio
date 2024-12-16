const user = require("../services/user.service");

module.exports.register = async (req, res) => {
  const data = await user.singUp(req.body);
  if (data.status == "success") {
    res.status(200).json({
      message: "User created successfully",
      data: data,
    });
  } else {
    res.status(500).json({
      message: data.error,
    });
  }
};
