MongoDB Chatbot 💬
A lightweight chatbot built with HTML, CSS, JavaScript, and MongoDB for storing and managing Q&A data. Unlike the local dataset version, this chatbot connects to a database for dynamic responses, making it more scalable and easier to update.
🚀 Features
Toggle chatbot with open/close button
User-friendly chat interface
Stores and retrieves Q&A pairs from MongoDB
Dynamic dataset – update responses without editing code
Works with backend API to connect frontend and MongoDB
Fully customizable with your own CSS
📂 Project Structure
index.html       # Chatbot UI
style.css        # Chatbot styles
script.js        # Frontend chatbot logic
server.js        # Backend server (Node.js + Express)
db.js            # MongoDB connection setup
README.docx      # Project documentation
⚡ How It Works
1.User types a message in the input box.
2.The chatbot sends the query to the backend (Node.js server).
3.The backend searches MongoDB for a matching question/keyword.
4.If found, it replies with the matching response. Otherwise, it replies: 'Sorry, I don’t understand that yet.'
5.Chatbot window can be opened/closed with the icon and close button.
🛠️ Setup
1. Clone the repository
git clone (https://github.com/RushiSN/Chatbot-using-MongoDB-database/new/main?filename=README.md)
cd chatbot-mongodb
2. Install dependencies
npm install
3. Setup MongoDB
• Install MongoDB locally or use MongoDB Atlas.
• Create a database called chatbotDB.
• Create a collection called botData.
• Insert some Q&A pairs, e.g.:
{
  "question": "hi",
  "answer": "Hello! How can I help you?"
}
4. Start the server
node server.js
5. Open in browser
Open index.html in your browser.
Chatbot will now fetch responses from MongoDB.
✨ Customization
Add more Q&A pairs directly to MongoDB collection (botData).
Update style.css to change the chatbot look and feel.
Modify server.js for advanced NLP logic or AI integration.
📸 Demo Screenshot
(Add a screenshot of your chatbot UI here)
📜 License
This project is licensed under the MIT License – feel free to use and modify it.
