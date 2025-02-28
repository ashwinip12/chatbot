


const express = require('express');
const cors = require('cors');
const { handleQuestion } = require('./questionHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/ask', async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ answer: 'Please provide a question.' });
    }

    const answer = await handleQuestion(question);
    res.json({ answer });
});

app.listen(3000, () => console.log('✅ Backend running at http://localhost:3000'));
