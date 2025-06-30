// download_script.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const HTML_SOURCE_FILE = "download_all_images.html";
const OUTPUT_DIR = "images";

/**
 * Downloads an image from a URL and saves it to a specified path.
 * @param {string} url - The URL of the image to download.
 * @param {string} filepath - The full path where the image will be saved.
 * @returns {Promise<void>}
 */
async function downloadImage(url, filepath) {
    const writer = fs.createWriteStream(filepath);
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

/**
 * Main function to read the local HTML, parse it, and download all images.
 */
async function downloadTarotImages() {
    console.log("Starting the LOCAL Tarot card image downloader...");

    try {
        // --- 1. Check if the local HTML source file exists ---
        if (!fs.existsSync(HTML_SOURCE_FILE)) {
            console.error(`Error: The source file '${HTML_SOURCE_FILE}' was not found.`);
            console.error("Please make sure you have created this file in the same directory.");
            return;
        }

        // --- 2. Create the output directory if it doesn't exist ---
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
            console.log(`Created directory: '${OUTPUT_DIR}'`);
        }

        // --- 3. Read and parse the local HTML file ---
        console.log(`Reading card data from '${HTML_SOURCE_FILE}'...`);
        const html = fs.readFileSync(HTML_SOURCE_FILE, 'utf-8');
        const $ = cheerio.load(html);
        const cardDivs = $('.card');
        const totalCards = cardDivs.length;

        if (totalCards === 0) {
            console.error("Error: Could not find any card elements in the HTML file.");
            return;
        }
        console.log(`Found ${totalCards} cards to download.`);

        // --- 4. Loop through each card, download, and save the image ---
        for (let i = 0; i < totalCards; i++) {
            const element = $(cardDivs[i]);
            const imageUrl = element.find('img').attr('src');
            const filename = element.find('.filename').text().trim();
            
            if (imageUrl && filename) {
                const savePath = path.join(OUTPUT_DIR, filename);
                console.log(`[${i + 1}/${totalCards}] Downloading '${filename}'...`);
                await downloadImage(imageUrl, savePath);
            } else {
                console.warn(`[${i + 1}/${totalCards}] -> Could not find image URL or filename. Skipping.`);
            }
        }

        console.log(`\nDownload complete! All ${totalCards} images have been saved in the 'images' folder.`);

    } catch (error) {
        console.error("\nAn error occurred during the process:");
        console.error(error.message);
    }
}

downloadTarotImages();