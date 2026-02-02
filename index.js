const fs = require("fs");

function readFile() {
    try {
        return fs.readFileSync("input.txt", "utf8");
    } catch (err) {
        console.log("Input file not found!");
        return "";
    }
}

function extractData(text) {
    const results = {
        emails: [],
        urls: [],
        phones: [],
        currency: [],
        creditCards: [],
        hashtags: []
    };

    const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,}\b/g;
    const emails = text.match(emailRegex) || [];
    results.emails = emails.filter(e => !e.includes(".."));


    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = text.match(urlRegex) || [];
    results.urls = urls.filter(u => !u.toLowerCase().includes("javascript"));


    const phoneRegex = /(\+?\d{1,3}[-\s]?)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{3,4}/g;
    results.phones = text.match(phoneRegex) || [];

    const moneyRegex = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;
    results.currency = text.match(moneyRegex) || [];

    const cardRegex = /\b(\d{4}[-\s]?){3}\d{4}\b/g;
    const cards = text.match(cardRegex) || [];

    results.creditCards = cards.map(card => {
        return "****-****-****-" + card.slice(-4);
    });

    const hashtagRegex = /#\w+/g;
    results.hashtags = text.match(hashtagRegex) || [];

    return results;
}

const input = readFile();
if (input) {
    const data = extractData(input);
    console.log(JSON.stringify(data, null, 2));
}