//Download video with Names(selected range)

const yt = require("./youtubeGoogle");

const getFileName = require("./components/filesInList");
// const countOfFiles = require("./components/countOfFiles");
const removeFile = require("./components/removeFile");
const credentials = require("./loginCredentials");
let mergeVideoArray = [];
(async () => {
  await yt.initialize(false);
  await yt.login(credentials.ytId, credentials.ytPass);
  const dir = "./videos";
  let uploadFileNumber = 5;
  let filename = getFileName(dir);
  let count = filename.length;
  console.log(filename);
  //get uploadFileNumber of filesname in an array
  while (count > 0 && uploadFileNumber >= 0) {
    mergeVideoArray.push(filename[uploadFileNumber]);
    count--;
    uploadFileNumber--;
  }

  //Merge Video
  console.log(mergeVideoArray);
  //Upload merged video

  //Upload shorts for those videos

  //remove video those videos

  await yt.closeBrowser();
})();

//Merged Video upload

//delete the videos
