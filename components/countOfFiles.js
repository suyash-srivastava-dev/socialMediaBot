var fs = require("fs"),
  path = require("path");

function countOfFiles(dir) {
  // fs.readdir(dir, (err, files) => {
  //   return files.length;
  // });
  const length = fs.readdirSync(dir).length;
  return length;
}

module.exports = countOfFiles;
// console.log(countOfFiles("../videos"));
