



const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeDocumentation(url, query) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Extract first paragraph or main content block
        const firstParagraph = $('p').first().text().trim();

        if (firstParagraph) {
            return `📄 ${firstParagraph}`;
        }

        return null;
    } catch (error) {
        console.error(`❌ Failed to scrape ${url}:`, error.message);
        return null;  // If scraping fails, don't crash
    }
}

module.exports = { scrapeDocumentation };
