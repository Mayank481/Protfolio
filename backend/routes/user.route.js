const router = require("express").Router();
const user = require("../controller/user.controller");
// const nodemailer = require("nodemailer");

// //Email config
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });


router.post("/register", user.register);

module.exports = router;
