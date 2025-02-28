


async function askQuestion() {
    const input = document.getElementById('questionInput').value.trim();
    if (!input) return;

    addMessage('user-message', input);
    document.getElementById('questionInput').value = '';


    const loadingMessage = addLoadingMessage();

    try {
        const response = await fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: input })
        });

        const { answer } = await response.json();

        removeLoadingMessage(loadingMessage);


        addMessage('bot-message', answer);

    } catch (error) {
        console.error('Error fetching answer:', error);
        removeLoadingMessage(loadingMessage);
        addMessage('bot-message', '❌ Failed to fetch data. Please try again.');
    }
}

function addMessage(className, text) {
    const body = document.getElementById('chatbotBody');
    const message = document.createElement('div');
    message.className = className;
    message.innerText = text;
    body.appendChild(message);
    body.scrollTop = body.scrollHeight; 
}


function addLoadingMessage() {
    const body = document.getElementById('chatbotBody');
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'bot-message loading-message';
    loadingMessage.innerHTML = `
        Fetching data<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
    `;
    body.appendChild(loadingMessage);
    body.scrollTop = body.scrollHeight;

    return loadingMessage;
}


function removeLoadingMessage(messageElement) {
    if (messageElement && messageElement.parentNode) {
        messageElement.parentNode.removeChild(messageElement);
    }
}
