const mv = require("./mergeVideo");
const fs = require("fs");

async function modifiedFileArray(dir, arrayDir) {
  fs.readdirSync(dir).forEach((file) => {
    arrayDir.push(dir + file);
    // modifiedVideos.push("./videosubscribe.mp4");
    // console.log(modifiedVideos);
  });
}
let modifiedVideos = [];
(async () => {
  // all the filenames from resizedVideo folder
  // modifiedVideos.push("./videosubscribe.mp4");

  await modifiedFileArray("../resizedVideo/", modifiedVideos);
  modifiedVideos.push("./videointroSub.mp4");

  console.log(modifiedFileArray);
  await mv.mergeTwoVideo(modifiedVideos);
})();
