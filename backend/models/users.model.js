const mongooes = require("mongoose");
const validator = require("validator");

const UserSchema = new mongooes.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  messages: [],
});

//save Message
UserSchema.methods.MessageSave = async function (message) {
  try {
    this.messages = this.messages.concat({ message });
    await this.save();
    return message;
  } catch (error) {
    res.status(500).json({
      message: "Invalid Message",
      error,
    });
  }
};

module.exports = mongooes.model("user", UserSchema);
