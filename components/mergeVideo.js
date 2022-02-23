const fluent_ffmpeg = require("fluent-ffmpeg");
const ffmpeg = require("fluent-ffmpeg");

const mergeVideo = {
  mergeTwoVideo: async (videoNameArray) => {
    var mergedVideo = fluent_ffmpeg();

    var videoNames = videoNameArray;
    // var videoNames = [
    //   "../resizedVideo/videointroSub.mp4",
    //   "../resizedVideo/video5.mp4",
    // ];

    await videoNames.forEach(function (videoName) {
      mergedVideo = mergedVideo.mergeAdd(videoName);
    });
    // console.log("going to merge the resized videos");
    mergedVideo
      .on("error", function (err) {
        console.log("Error " + err.message);
      })
      .on("end", function () {
        console.log("Finished!");
      })
      .mergeToFile("../MergedVideos/output.mp4");
    // console.log("merged the resized videos");

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, 40000);
    });
  },

  resizeVideo: async (video1, index) => {
    // resizeVideo: async (video1, video2) => {
    var command = ffmpeg();
    // var command2 = ffmpeg();
    // var command3 = ffmpeg();
    // var command4 = ffmpeg();
    ffmpeg(video1)
      .videoCodec("libx264")
      .format("mp4")
      .clone()
      .size("1080x1920")
      .aspect("9:16")
      .autopad()
      .save("../resizedVideo/video" + index + ".mp4");

    // var command = ffmpeg(video2)
    //   .videoCodec("libx264")
    //   .format("mp4")
    //   .clone()
    //   .size("1080x1920")
    //   .aspect("9:16")
    //   .autopad()
    //   .save("../videos/newVideo2.mp4");

    // command
    //   .clone()
    //   .size("1080x1920")
    //   .aspect("9:16")
    //   .autopad()
    //   .save("../videos/newVideo1.mp4");

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve("resolved");
    //   }, 120000);
    // });
  },

  // const image = await Jimp.read(path);
  // image.resize(ResizeImageWidth, ResizeImageHeight).write(outputImagepath);

  // Ffmpeg({ source: video1 })
  //   .input(video2) //, video3, video4)
  //   //   .input(video3)
  //   //   .input(video4)
  //   .on("end", () => console.log("merge completed"))
  //   .on("error", (err) => console.log("error :", err))
  //   .mergeToFile("../videos/output.mp4");
};
module.exports = mergeVideo;

// mergeVideo.mergeTwoVideo();
// mergeVideo.resizeVideo("./introSubYT.webm", "introSub");
