var fs = require("fs"),
  path = require("path");

function removeFile(path) {
  try {
    fs.unlinkSync(path);
    console.log("File removed:", path);
  } catch (err) {
    console.error(err);
  }
}

module.exports = removeFile;
