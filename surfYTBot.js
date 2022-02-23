const yt = require("./youtubeGoogle");

(async () => {
  await yt.initialize(true);
  //   process.argv.forEach(function (val, index, array) {
  //     console.log(index + ": " + val);
  //   });
  console.log(process.argv[2]);
  await yt.surfChannel(process.argv[2], process.argv[3]);

  await yt.closeBrowser();
  //   await yt.keyboardTest("https://en.key-test.ru/");
})();
