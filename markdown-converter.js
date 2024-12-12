import fs from 'fs/promises';
import { marked } from 'marked';

async function convertMarkdownToHtml() {
    try {
        // Read the markdown file
        const markdown = await fs.readFile('task-3.md', 'utf-8');
        
        // Convert markdown to HTML
        const html = marked(markdown);
        
        // Create a complete HTML document
        const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 3</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
    </style>
</head>
<body>
    ${html}
</body>
</html>`;

        // Write the HTML file
        await fs.writeFile('task-3.html', fullHtml);
        console.log('Successfully converted Markdown to HTML');
    } catch (error) {
        console.error('Error converting Markdown to HTML:', error);
    }
}

convertMarkdownToHtml();