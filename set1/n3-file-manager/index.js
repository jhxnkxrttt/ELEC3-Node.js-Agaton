//Jhon Kurt V. Agaton
//IV-BSIT B
//November 256, 2026

const fs = require("fs");
const path = require("path");

// Folder where text files will be stored
const filesFolder = path.join(__dirname, "files");

// Create the files folder if it doesn't exist
if (!fs.existsSync(filesFolder)) {
    fs.mkdirSync(filesFolder);
}

// Get a safe file path inside the files folder
function getFilePath(filename) {
    if (!filename || path.basename(filename) !== filename) {
        throw new Error("Please enter a valid filename.");
    }

    return path.join(filesFolder, filename);
}

// CREATE a file
function createFile(filename, content) {
    const filePath = getFilePath(filename);

    if (fs.existsSync(filePath)) {
        throw new Error("File already exists.");
    }

    fs.writeFileSync(filePath, content);
    console.log("File created successfully.");
}

// READ a file
function readFile(filename) {
    const filePath = getFilePath(filename);

    if (!fs.existsSync(filePath)) {
        throw new Error("File does not exist.");
    }

    const content = fs.readFileSync(filePath, "utf8");
    console.log("\nFile content:\n" + content);
}

// UPDATE a file (append text)
function updateFile(filename, content) {
    const filePath = getFilePath(filename);

    if (!fs.existsSync(filePath)) {
        throw new Error("File does not exist.");
    }

    fs.appendFileSync(filePath, content);
    console.log("Text appended successfully.");
}

// DELETE a file
function deleteFile(filename) {
    const filePath = getFilePath(filename);

    if (!fs.existsSync(filePath)) {
        throw new Error("File does not exist.");
    }

    fs.unlinkSync(filePath);
    console.log("File deleted successfully.");
}


// Read commands and arguments from the terminal
const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv.slice(4).join(" ");

try {
    switch (command) {
        case "create":
            createFile(filename, content);
            break;

        case "read":
            readFile(filename);
            break;

        case "update":
            updateFile(filename, content);
            break;

        case "delete":
            deleteFile(filename);
            break;

        case "list":
            listFiles();
            break;

        default:
            console.log("Available commands:");
            console.log('node index.js create <filename> "content"');
            console.log("node index.js read <filename>");
            console.log('node index.js update <filename> "content"');
            console.log("node index.js delete <filename>");
            console.log("node index.js list");
    }
} catch (error) {
    console.log("Error:", error.message);
}
