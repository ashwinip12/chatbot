

const CDP_DETAILS = {
    segment: {
        name: "Segment",
        description: "Segment is a Customer Data Platform (CDP) that helps businesses collect, unify, and route customer data into various tools for analytics, marketing, and data warehousing.",
        url: "https://segment.com/docs/"
    },
    mparticle: {
        name: "mParticle",
        description: "mParticle is a data infrastructure platform designed to collect, unify, and activate customer data across various tools and services.",
        url: "https://docs.mparticle.com/"
    },
    lytics: {
        name: "Lytics",
        description: "Lytics is a Customer Data Platform (CDP) that helps businesses personalize customer experiences using machine learning-based segmentation.",
        url: "https://docs.lytics.com/"
    },
    zeotap: {
        name: "Zeotap",
        description: "Zeotap is a Customer Data Platform (CDP) that helps brands unify and enrich customer data for more effective marketing — all with strict data privacy compliance.",
        url: "https://docs.zeotap.com/home/en-us/"
    }
};

function determineCDP(question) {
    const lowerQuestion = question.toLowerCase();

    for (const cdp in CDP_DETAILS) {
        if (lowerQuestion.includes(cdp)) {
            return cdp;
        }
    }

    return null;
}

async function handleQuestion(question) {
    const cdp = determineCDP(question);

    if (!cdp) {
        return "❌ I only handle questions related to Segment, mParticle, Lytics, and Zeotap.\n\n" +
            "📖 A Customer Data Platform (CDP) collects and unifies first-party customer data from multiple sources to build a single, coherent view of each customer.";
    }

    const { name, description, url } = CDP_DETAILS[cdp];

    // Only show friendly message + official documentation
    return `📌 **${name}**\n${description}\n\n📖 For additional information, please refer to the official documentation: ${url}`;
}

module.exports = { handleQuestion };
