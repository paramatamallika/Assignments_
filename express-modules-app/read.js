const fs = require("fs");
const path = require("path");

function readFileData() {
  const filePath = path.join(__dirname, "Data.txt");
  return fs.readFileSync(filePath, "utf-8");
}

module.exports = readFileData;
