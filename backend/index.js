


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { handleQuestion } = require('./questionHandler');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
    const { question } = req.body;
    if (!question) {
        return res.status(400).json({ error: 'Question is required' });
    }

    const answer = await handleQuestion(question);
    res.json({ answer });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Backend running at http://localhost:${PORT}`);
});
