



async function askQuestion() {
    const question = document.getElementById('questionInput').value.trim();
    if (!question) return;

    appendMessage('user', question);

    document.getElementById('questionInput').value = '';

    try {
        const response = await fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });

        const data = await response.json();
        appendMessage('bot', data.answer);
    } catch (error) {
        appendMessage('bot', '❌ Error contacting chatbot: ' + error.message);
    }
}

function appendMessage(sender, text) {
    const chatbotBody = document.getElementById('chatbotBody');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.innerText = text;

    chatbotBody.appendChild(messageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}
