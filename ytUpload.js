const ig = require("./instagram");
const yt = require("./youtubeGoogle");
const od = require("./odysee");

const getMostRecentFileName = require("./components/getMostRecentFileName");
const countOfFiles = require("./components/countOfFiles");
const removeFile = require("./components/removeFile");
const credentials = require("./loginCredentials");

async function ytUpload() {
  //Youtube
  await yt.initialize(false);
  await yt.login(credentials.ytId, credentials.ytPass);
  // const dir = "./videos";
  const dir = "./resizedVideo";
  console.log("directory for shorts :" + dir);
  let count = countOfFiles(dir);
  // let uploadFileNumber = 5;
  // while (count > 0 && uploadFileNumber != 0) {
  while (count > 0) {
    console.log("iteration:" + count);
    let filename = getMostRecentFileName(dir);
    console.log(filename);
    await yt.upload(
      "#shorts #igyt Regular Shorts Show Reels Tiktok",
      dir + "/" + filename
    );
    removeFile(dir + "/" + filename);
    console.log("deleted file: " + dir + "/" + filename);
    count--;
    // uploadFileNumber--;
  }
  await yt.closeBrowser();
}
ytUpload();
