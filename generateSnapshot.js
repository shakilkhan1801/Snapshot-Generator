const fs = require('fs');
const path = require('path');

// Define the files to be included in the snapshot
const files = ['app.js', 'bot.js', 'index.js'];

// Define the output markdown file
const outputFile = 'snapshot.md';

// Function to read file content and return as a string
function readFileContent(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

// Function to get the current timestamp
function getTimestamp() {
    return new Date().toLocaleString(); // Formats the date and time based on the system's locale
}

// Function to generate markdown content
function generateMarkdown(files) {
    let markdownContent = `# Code Snapshot\n\n**Snapshot Taken:** ${getTimestamp()}\n\n`;

    files.forEach(file => {
        const filePath = path.join(__dirname, file);
        const content = readFileContent(filePath);

        markdownContent += `## ${file}\n\`\`\`javascript\n${content}\n\`\`\`\n\n`;
    });

    return markdownContent;
}

// Generate the markdown content
const markdownContent = generateMarkdown(files);

// Write the markdown content to the output file
fs.writeFileSync(outputFile, markdownContent);

console.log(`Snapshot saved to ${outputFile} at ${getTimestamp()}`);
