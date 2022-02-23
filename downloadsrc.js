const fs = require("fs");
const path = require("path");
const axios = require("axios").default;
let number = 0;
// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
const downloadFile = async (fileUrl, downloadFolder, user) => {
  // Get the file name
  number = number + 1;
  const fileName = path.basename(user + " " + number + ".mp4");

  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: "GET",
      url: fileUrl,
      responseType: "stream",
    });

    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    w.on("finish", () => {
      console.log("Successfully downloaded file!");
    });
  } catch (err) {
    throw new Error(err);
  }
};

// Testing(works for video and images)

// const VIDEO_URL =
//   "https://scontent.cdninstagram.com/v/t50.2886-16/10000000_311945164148708_5993826861299625093_n.mp4?_nc_ht=instagram.fccu1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=sBQWG3QrPlUAX_5aozc&tn=ke7FUn2k4_rxjBr0&edm=AP_V10EBAAAA&ccb=7-4&oe=61CD3115&oh=00_AT-jtdVxRC7mmvFIKTBZIy-X7mfZ2Yo9j0qpjHsww9JZeA&_nc_sid=4f375e";
// downloadFile(VIDEO_URL, "./videos");

module.exports.downloadFile = downloadFile;
