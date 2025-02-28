

const puppeteer = require('puppeteer');

async function fetchDocumentation(url) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36');

        console.log(`🔎 Fetching documentation from: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        const content = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('h1, h2, h3, p, li, code, pre'));
            return elements.map(el => el.innerText.trim()).filter(text => text.length > 0).join('\n');
        });

        await browser.close();
        return content;
    } catch (error) {
        console.error(`❌ Failed to fetch documentation from ${url}:`, error.message);
        return null;
    }
}

module.exports = { fetchDocumentation };
