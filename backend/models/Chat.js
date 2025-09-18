const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  user: String,
  bot: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chat", chatSchema);
