<u>REGEX DATA EXTRACTION& VALIDATION<u>

Introduction about the Project

This is a small frontend project I built to practice extracting structured data from raw text using regular expressions (Regex)**.  

The idea is that sometimes we get messy data, like logs, API responses, or reports, and we need to pull out things like emails, phone numbers, payments, or URLs — all in a safe and structured way.  

I wanted to make it not only functional but also secure, meaning it can handle bad or unsafe input, like people trying to inject scripts or typing fake emails.


This system will do the following:

- It will Extract Emails, URLs, Phone Numbers, Credit Card Numbers, Time, and Currency Amounts.  
- It will also sanitize unsafe input, such as: <script> tags.  
- It will help in masking sensitive information, like credit card numbers and email usernames.  
- Ignore invalid or malformed entries.  
- Output everything in a readable and understandable format.

Basically, it’s a simple tool that works like a data filter and validator for raw text.

HOW TO USE

1. Open index.html in your web browser.  
2. Paste your raw text (logs, emails, reports, API responses, etc.) into the textarea.  
3. Click Extract Data  
4. The results will appear in a structured JSON format. Sensitive info like emails and credit cards will be masked, and unsafe input will be ignored.

This makes it easy to see what data is valid without exposing private information.
