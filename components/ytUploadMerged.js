const yt = require("../youtubeGoogle");

const getMostRecentFileName = require("./getMostRecentFileName");
const removeFile = require("./removeFile");
const credentials = require("../loginCredentials");
// const CreateMergedVideo = require("./mergeCall");

async function ytUploadVideo() {
  await yt.initialize(false);
  await yt.login(credentials.ytId, credentials.ytPass);
  let filename = getMostRecentFileName("../MergedVideos");
  console.log(filename);
  await yt.uploadMergedVideo("Title of Video", "../MergedVideos/" + filename);
  removeFile("../MergedVideos/" + filename);
  console.log("deleted file: " + "../MergedVideos/" + filename);
  await yt.closeBrowser();
}

(async () => {
  // await CreateMergedVideo();
  await ytUploadVideo();
})();
