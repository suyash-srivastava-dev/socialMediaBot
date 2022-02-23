const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
let count = 0;
puppeteer.use(StealthPlugin());
const Base_URL = "https://studio.youtube.com";
const Downloader = require("./downloadsrc");
const youtube = {
  browser: null,
  page: null,
  page2: null,
  initialize: async (headlessTag) => {
    youtube.browser = await puppeteer.launch({ headless: headlessTag });
    youtube.page = await youtube.browser.newPage();
  },

  login: async (username, password) => {
    await youtube.page.goto(Base_URL, { waitUntil: "networkidle2" });
    //enter username
    await youtube.page.type("#identifierId", username, {
      delay: 50,
    });
    await youtube.page.click("#identifierNext > div > button");
    await youtube.page.waitFor(10000);
    //enter password
    await youtube.page.type("#password > div > div > div > input", password, {
      delay: 50,
    });
    //click login
    await youtube.page.click("#passwordNext > div > button");
    //wait for homepage to load
    await youtube.page.waitFor(15000);
    // await youtube.page.waitFor("#upload-icon");
    await youtube.page.waitFor(15000);
    // await youtube.page.waitFor(15000);
    // await youtube.page.waitFor(15000);
  },

  upload: async (title, filename) => {
    await youtube.page.click("#upload-icon");
    await youtube.page.waitFor(2000);
    // await youtube.page.click("#select-files-button > div");
    const elementHandle = await youtube.page.$("input[type=file]");
    await elementHandle.uploadFile(filename);
    await youtube.page.waitFor(15000);
    //date
    count = count + 1;
    const d = new Date().toLocaleDateString();
    await youtube.page.type("#child-input", title + " : " + count + d, {
      delay: 50,
    });
    //desciption
    //"#textbox"
    await youtube.page.waitFor("#next-button > div");
    await youtube.page.click("#next-button > div");
    await youtube.page.waitFor(2000);
    await youtube.page.waitFor("#next-button");
    await youtube.page.click("#next-button");
    await youtube.page.waitFor(2000);

    await youtube.page.waitFor("#next-button > div");
    await youtube.page.click("#next-button > div");
    await youtube.page.waitFor(2000);

    await youtube.page.waitFor("#done-button > div");
    await youtube.page.click("#done-button > div");
    await youtube.page.waitFor(2000);

    await youtube.page.waitFor("#close-button > div");
    await youtube.page.click("#close-button > div");
    await youtube.page.waitFor(2000);
  },

  nextNext: async () => {
    await youtube.page.waitFor("#next-button > div");
    await youtube.page.click("#next-button > div");
    await youtube.page.waitFor(20000);
    await youtube.page.waitFor("#next-button");
    await youtube.page.click("#next-button");
    await youtube.page.waitFor(20000);

    await youtube.page.waitFor("#next-button > div");
    await youtube.page.click("#next-button > div");
    await youtube.page.waitFor(20000);

    await youtube.page.waitFor("#done-button > div");
    await youtube.page.click("#done-button > div");
    await youtube.page.waitFor(20000);

    await youtube.page.waitFor("#close-button > div");
    await youtube.page.click("#close-button > div");
    await youtube.page.waitFor(20000);
  },

  uploadMergedVideo: async (title, filename) => {
    await youtube.page.click("#upload-icon");
    await youtube.page.waitFor(2000);
    // await youtube.page.click("#select-files-button > div");
    const elementHandle = await youtube.page.$("input[type=file]");
    await elementHandle.uploadFile(filename);
    await youtube.page.waitFor(15000);
    await youtube.page.waitFor(20000);
    await youtube.page.waitFor(20000);
    await youtube.page.waitFor(20000);
    await youtube.page.waitFor(20000);
    //or wait for ocument.querySelector("#dialog > div > ytcp-animatable.button-area.metadata-fade-in-section.style-scope.ytcp-uploads-dialog > div > div.left-button-area.style-scope.ytcp-uploads-dialog > ytcp-video-upload-progress > span")
    //date
    count = count + 1;
    const d = new Date().toLocaleDateString();
    await youtube.page.type("#child-input", title + " : " + d, {
      delay: 50,
    });
    //desciption
    //"#textbox"
    await youtube.page.waitFor("#next-button > div");
    await youtube.page.click("#next-button > div");
    await youtube.page.waitFor(2000);
    await youtube.page.waitFor("#next-button");
    await youtube.page.click("#next-button");
    await youtube.page.waitFor(2000);

    await youtube.page.waitFor("#next-button > div");
    await youtube.page.click("#next-button > div");
    await youtube.page.waitFor(2000);

    await youtube.page.waitFor("#done-button > div");
    await youtube.page.click("#done-button > div");
    await youtube.page.waitFor(2000);
    await youtube.page.waitFor(10000);

    await youtube.page.waitFor("#close-button > div");
    await youtube.page.click("#close-button > div");
    await youtube.page.waitFor(2000);
    await youtube.page.waitFor(10000);
  },

  surfChannel: async (Surf_URL, timeInMin) => {
    await youtube.page.goto(Surf_URL, { waitUntil: "networkidle2" });
    // for (let q = 1; q <= index; q++) {
    //   await youtube.page.waitFor(10000);
    // }

    await youtube.page.click("#play-button");
    //await youtube.page.keyboard.pressCombination("Shift+>");
    console.log("started surfing");
    let ptr = 4;
    while (ptr >= 0) {
      youtube.page.keyboard.down("Shift");
      youtube.page.keyboard.press(">");
      youtube.page.keyboard.up("Shift");
      console.log("Speedup:" + ptr);
      await youtube.page.waitFor(1000);
      ptr--;
    }
    // // await youtube.page.waitFor();
    let i = 0;
    while (i < timeInMin) {
      console.log("started: " + i);
      await delay(60000);
      console.log("completed: " + i);
      i++;
    }
  },

  surfVideo: async (Surf_URL, timeInMin, index) => {
    await youtube.page.goto(Surf_URL, { waitUntil: "networkidle2" });
    for (let q = 1; q <= index; q++) {
      await youtube.page.waitFor(10000);
      await youtube.page.waitFor(10000);
      await youtube.page.waitFor(10000);
      await youtube.page.waitFor(10000);
      await youtube.page.waitFor(10000);
      await youtube.page.waitFor(10000);
    }

    // await youtube.page.click("#play-button");
    //await youtube.page.keyboard.pressCombination("Shift+>");

    let ptr = 4;
    while (ptr >= 0) {
      youtube.page.keyboard.down("Shift");
      youtube.page.keyboard.press(">");
      youtube.page.keyboard.up("Shift");
      await youtube.page.waitFor(5000);
      ptr--;
    }
    // // await youtube.page.waitFor();
    let i = 0;
    while (i < timeInMin) {
      console.log("started: " + i);
      await delay(30000);
      await delay(30000);
      console.log("completed: " + i);
      i++;
    }
  },

  keyboardTest: async (Surf_URL) => {
    await youtube.page.goto(Surf_URL, { waitUntil: "networkidle2" });
    await youtube.page.waitFor(10000);
    youtube.page.keyboard.down("Shift");
    youtube.page.keyboard.press(">");
    youtube.page.keyboard.up("Shift");
    await youtube.page.waitFor(10000);
    await youtube.page.waitFor(10000);
    await youtube.page.waitFor(10000);
  },

  closeBrowser: async () => {
    await youtube.browser.close();
  },
};
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
module.exports = youtube;
