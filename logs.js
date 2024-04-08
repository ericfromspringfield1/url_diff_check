const fs = require('fs');
const path = require('path');

const inputFilePath = "/workspaces/url_diff_check/files_to_log/Dusty Slay_ Workin’ Man (2024) _ Transcript.pdf"
const outputFolder = "/workspaces/url_diff_check/file_logs"
const outputFileName = 'themLogs.pdf'
// Function to read and log the file content
function readAndLogFile(inputFilePath, outputFolder, outputFileName) {
    // Ensure the output directory exists
    fs.mkdir(outputFolder, { recursive: true }, (err) => {
        if (err) throw err;

        // Read the input file
        fs.readFile(inputFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading the file:", err);
                return;
            }

            // Define the output file path
            const outputFilePath = path.join(outputFolder, outputFileName);

            // Write the data to the output file
            fs.writeFile(outputFilePath, data, (err) => {
                if (err) {
                    console.error("Error writing the file:", err);
                    return;
                }
                console.log(`File has been written to ${outputFilePath}`);
            });
        });
    });
}

// Example usage
// Replace 'input.txt' with your input file path
// Replace 'output' with your desired output folder path
// Replace 'output.txt' with your desired output file name
readAndLogFile(inputFilePath, outputFolder, outputFileName);