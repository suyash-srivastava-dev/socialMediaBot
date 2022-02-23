const mv = require("./mergeVideo");
const removeFile = require("./removeFile");
const removeAllFile = require("./removeAllFiles");

const fs = require("fs");
// const getMostRecentFileName = require("./components/getMostRecentFileName");

let modifiedVideos = [];
let allVideoFiles = [];

async function modifiedFileArray(dir, arrayDir) {
  fs.readdirSync(dir).forEach((file) => {
    arrayDir.push(dir + file);
  });
}

async function resizeVideoByItem(item, index) {
  await mv.resizeVideo(item, index);
}
async function removeVideo() {
  modifiedVideos.forEach((element) => {
    // resizeVideoByItem(element, i);
    removeFile("../videos/" + element);
    // modifiedVideos.push("../resizedVideo/video" + i + ".mp4");
  });
}
// (async () => {
//   // let filename = getMostRecentFileName("../videos");
//   //all the filename from video folder stored in array
//   await modifiedFileArray("../videos/", allVideoFiles);
//   console.log(allVideoFiles);
//   //Resize all the video files to new folder resizedVideo
//   let i = 1;
//   allVideoFiles.forEach((element) => {
//     resizeVideoByItem(element, i);
//     i++;
//   });
//   // all the filenames from resizedVideo folder
//   await modifiedFileArray("../resizedVideo/", modifiedVideos);
//   console.log(modifiedVideos);

//   //Merging all the files as name stored in modifiedVideos array => output in MergedVideos
//   await mv.mergeTwoVideo(modifiedVideos);
//   // await modifiedFileArray();
//   // await mv.mergeTwoVideo(
//   //   "../videos/newVideo1.mp4",
//   //   "../videos/newVideo2.mp4",
//   //   "../videos/newVideo3.mp4",
//   //   "../videos/newVideo4.mp4"

//   //   // "../videos/amara_girll 3.mp4",
//   //   // "../videos/amara_girll 4.mp4"
//   // );
//   //   await mergeVideo.mergeTwoVideo(
//   //     "../videos/video3.mp4",
//   //     "../videos/amara_girll 1.mp4"
//   //   );
// })();

async function CreateMergedVideo() {
  // clear modified folder
  removeAllFile("../MergedVideos");
  console.log("cleaned mergedFile folder");
  /**all the filename from video folder stored in array */
  await modifiedFileArray("../videos/", allVideoFiles);
  console.log(allVideoFiles);
  for (let ptr = 1; ptr <= 5; ptr++) {
    modifiedVideos.push(allVideoFiles[ptr]);
    console.log(modifiedVideos);
  }
  //Resize all the video files to new folder resizedVideo
  let i = 1;
  modifiedVideos.forEach((element) => {
    resizeVideoByItem(element, i);
    // modifiedVideos.push("../resizedVideo/video" + i + ".mp4");
    i++;
  });
  return true;

  // all the filenames from resizedVideo folder
  // await modifiedFileArray("../resizedVideo/", modifiedVideos);
  // console.log(modifiedVideos);
  // setTimeout(() => {
  //   mv.mergeTwoVideo(modifiedVideos);
  // }, 300000);
}
function resizeVideo() {
  resizeVideoByItem("Subscribe.mp4", "subscribe");
}
async function resizeAndRemove() {
  if (await CreateMergedVideo()) {
    await removeVideo();
  }
}
module.exports = CreateMergedVideo;
resizeAndRemove();
// removeVideo();
// resizeVideo();
