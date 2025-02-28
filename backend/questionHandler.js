

const { fetchDocumentation } = require('./scraper');

const CDP_DOCS = {
    segment: 'https://segment.com/docs/',
    mparticle: 'https://docs.mparticle.com/',
    lytics: 'https://docs.lytics.com/',
    zeotap: 'https://docs.zeotap.com/home/en-us/'
};

function detectCDP(question) {
    const lower = question.toLowerCase();
    if (lower.includes('segment')) return 'segment';
    if (lower.includes('mparticle')) return 'mparticle';
    if (lower.includes('lytics')) return 'lytics';
    if (lower.includes('zeotap')) return 'zeotap';
    return null;
}

async function handleQuestion(question) {
    const cdp = detectCDP(question);

    if (cdp) {
        const url = CDP_DOCS[cdp];
        const content = await fetchDocumentation(url);
        
        if (!content) {
            return `⚠️ Unable to fetch content from ${cdp}'s official documentation. Please visit [${cdp} Documentation](${url}) directly.`;
        }

        const relevantInfo = extractRelevantSection(content, question);
        return formatResponse(cdp, relevantInfo, url);
    }

    if (question.includes('compare')) {
        return handleComparisonQuestion(question);
    }

    return "I specialize in questions about Segment, mParticle, Lytics, and Zeotap. Please ask me something about these platforms!";
}

function extractRelevantSection(content, question) {
    const lines = content.split('\n');
    const lowerQuestion = question.toLowerCase();

    const matchedLines = lines.filter(line =>
        lowerQuestion.split(' ').some(word => line.toLowerCase().includes(word))
    );

    return matchedLines.slice(0, 10).join('\n') || "No relevant content found. Please check the official documentation.";
}

function formatResponse(cdp, answer, url) {
    return `📖 **${cdp.toUpperCase()} Documentation:**\n\n${answer}\n\n🔗 [Official Documentation](${url})`;
}

function handleComparisonQuestion(question) {
    return `🔎 **Comparison Feature Coming Soon!** For now, please check:
- [Segment Docs](https://segment.com/docs/)
- [mParticle Docs](https://docs.mparticle.com/)
- [Lytics Docs](https://docs.lytics.com/)
- [Zeotap Docs](https://docs.zeotap.com/home/en-us/)`;
}

module.exports = { handleQuestion };
