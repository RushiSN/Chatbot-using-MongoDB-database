const express = require("express");
const Chat = require("../models/Chat");
const router = express.Router();

// Simple AI responses
const replies = {
  hi: "Hello! How can I help you? 😊",
  hello: "Hey there! 👋",
  bye: "Goodbye! Have a nice day! 👋",
  help: "I can answer basic questions. Try saying hi or bye!",
  default: "I'm not sure how to respond. Can you rephrase?"
};

// Chatbot API
router.post("/ask", async (req, res) => {
  try {
    const userMessage = req.body.message.toLowerCase();
    const botReply = replies[userMessage] || replies.default;

    // Save conversation
    const chat = new Chat({ user: userMessage, bot: botReply });
    await chat.save();

    res.json({ reply: botReply });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
