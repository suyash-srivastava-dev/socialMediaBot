var fs = require("fs"),
  path = require("path"),
  _ = require("underscore");

let arrayOfFiles = [];

// Return only base file name without dir
function getFileName(dir) {
  var files = fs.readdirSync(dir);
  // use underscore for max()
  // console.log(arrayOfFiles);

  return _.max(files, function (f) {
    var fullpath = path.join(dir, f);
    arrayOfFiles.push(fullpath);
    // console.log(arrayOfFiles + " from _max");

    // ctime = creation time is used
    // replace with mtime for modification time
    // return fs.statSync(fullpath).ctime;
    return arrayOfFiles;
  });
}

module.exports = getFileName;

// function check() {
//   getMostRecentFileName("../videos");
//   console.log(arrayOfFiles);
// }
// check();
