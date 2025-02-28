# CDP Support Chatbot

The **CDP Support Chatbot** helps users ask **"how-to" questions** about the following Customer Data Platforms (CDPs):
- Segment
- mParticle
- Lytics
- Zeotap

The chatbot **fetches real-time data directly from official documentation websites** using **Puppeteer** (headless browser automation) to provide the most accurate and up-to-date information.

---

## 🚀 Installation

1. Open a terminal or command prompt in the project folder.
2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

---

## 💻 Running the Project

### Start Backend Server
```bash
cd backend
npm start
Backend will run at: http://localhost:3000
Open Frontend
Open frontend/index.html directly in your browser.
Or, use Live Server extension in VS Code to open the file with automatic reload.



🌐 How to Use
Open the chatbot interface in your browser.
Ask questions like:
"How do I set up a new source in Segment?"
"How can I create a user profile in mParticle?"
"How do I build an audience segment in Lytics?"
"How can I integrate my data with Zeotap?"



The chatbot will:
Fetch live data from official documentation.
Extract relevant sections related to your question.
Display both the extracted answer and the official documentation link.
✨ Features
✅ Real-time scraping from official documentation websites using Puppeteer.
✅ Handles:
"How-to" questions (setup, configurations).


Advanced use cases.
Cross-CDP comparison questions.
✅ Gracefully responds with official links when exact content isn’t found.
✅ User and bot messages appear with different colors for clarity.
✅ Chatbot UI is centered on the page.



📚 Technologies Used
Backend
Node.js
Express.js
Puppeteer (for real-time scraping)
CORS
Body-parser


Frontend
HTML
CSS (chat UI with different colors for bot and user messages, fully centered)
JavaScript (fetch API for communication)
