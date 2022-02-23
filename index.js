const ig = require("./instagram");
const yt = require("./youtubeGoogle");
const od = require("./odysee");

const getMostRecentFileName = require("./components/getMostRecentFileName");
const countOfFiles = require("./components/countOfFiles");
const removeFile = require("./components/removeFile");
const credentials = require("./loginCredentials");

(async () => {
  //Instagram
  /*
  await ig.initialize();
  await ig.login(credentials.instaId, credentials.instaPass);
  // credentials.user.forEach(async (element) => {
  //   await ig.gotoUser(element);
  // });
  /*
  for (let i = 0; i < credentials.user.length; i++) {
    if (i == 1) await ig.gotoUser(credentials.user[i], 3);
    else await ig.gotoUser(credentials.user[i], 1);
  }
*/
  ///*Download from saved IG

  await ig.initialize();
  await ig.login(credentials.instaId, credentials.instaPass);
  await ig.fromSaved(1, 21);
  // await ig.gotoUser(credentials.user);
  await ig.closeBrowser();
  //*/
  //Instagram upload
  /**
  const dir = "./videos";
  let count = countOfFiles(dir);

  while (count > 0) {
    console.log("iteration:" + count);
    let filename = getMostRecentFileName(dir);
    console.log(filename);
    await ig.publish(dir + "/" + filename);
    removeFile(dir + "/" + filename);
    console.log("deleted file: " + dir + "/" + filename);
    count--;
  }
 */
  //Youtube
  /**
  await yt.initialize();
  await yt.login(credentials.ytId, credentials.ytPass);
  const dir = "./videos";
  let count = countOfFiles(dir);

  while (count > 0) {
    console.log("iteration:" + count);
    let filename = getMostRecentFileName(dir);
    console.log(filename);
    await yt.upload("#shorts #igyt best Reels,Tiktok", dir + "/" + filename);
    removeFile(dir + "/" + filename);
    console.log("deleted file: " + dir + "/" + filename);
    count--;
  }
  await yt.closeBrowser();

  //*/
  //youtube checkout the channel
  /*
  await yt.initialize();
  await yt.surfChannel();
  await yt.closeBrowser();
  //*/

  //Odysee
  /*
  await od.initialize();
  await od.login(credentials.odId, credentials.odPass);
  const dir = "./videos";
  let count = countOfFiles(dir);

  console.log("iteration:" + count);
  let filename = getMostRecentFileName(dir);
  console.log(filename);
  await od.upload(
    "#tiktok #reel Top reels dump everyday",
    dir + "/" + filename
  );

  while (count > 1) {
    removeFile(dir + "/" + filename);
    console.log("deleted file: " + dir + "/" + filename);
    count--;
  }

  await ig.closeBrowser();
  //*/
  // await yt.upload("dhanashree9");
  // debugger;
  //odysee surf
  /*
  await od.initialize();
  await od.login(credentials.odId, credentials.odPass);
  await od.surf();
  await od.closeBrowser();
  */
})();

// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   await browser.close();
// })();
