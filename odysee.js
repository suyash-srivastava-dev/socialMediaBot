const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
let count = 0;
puppeteer.use(StealthPlugin());
const Base_URL = "https://odysee.com/$/signin";
const Upload_URL = "https://odysee.com/$/upload";
const Surf_URL = "https://odysee.com/userName";
const tag = "multiple tags, can , be placed";
const Downloader = require("./downloadsrc");
const odysee = {
  browser: null,
  page: null,
  page2: null,
  initialize: async () => {
    odysee.browser = await puppeteer.launch({ headless: false });
    odysee.page = await odysee.browser.newPage();
  },

  login: async (username, password) => {
    await odysee.page.goto(Base_URL, { waitUntil: "networkidle2" });
    await odysee.page.waitFor(20000);

    //enter username
    await odysee.page.type("#username", username, {
      delay: 50,
    });
    await odysee.page.click(
      "#main-content > section > div > div > section > div.card__first-pane > div> div > form > div > button"
    );
    await odysee.page.waitFor(5000);
    //enter password
    await odysee.page.type("#password", password, {
      delay: 50,
    });
    await odysee.page.waitFor(1000);

    //click login
    await odysee.page.click(
      //"#main-content > section > div > div > section > div > div> form > div > button"
      "#main-content > section > div > div > section > div > div.card__main-actions > form > div.section__actions > button.button.button--primary"
    );
    //wait for homepage to load
    await odysee.page.waitFor(15000);
    // await odysee.page.waitFor("#upload-icon");
    // await odysee.page.waitFor(15000);
    // await odysee.page.waitFor(15000);
    // await odysee.page.waitFor(15000);
  },

  upload: async (title, filename) => {
    await odysee.page.goto(Upload_URL, { waitUntil: "networkidle2" });
    await odysee.page.waitFor(10000);
    count = count + 1;
    const d = new Date().toLocaleDateString();
    // title
    await odysee.page.type(
      "#content_title",
      title + " : " + count + " | " + d ,
      {
        delay: 50,
      }
    );
    await odysee.page.waitFor(2000);

    //upload file
    const elementHandle = await odysee.page.$("input[type=file]");
    await elementHandle.uploadFile(filename);
    await odysee.page.waitFor(15000);

    //thumbnail

    /**
     * From url
     */
    await odysee.page.waitFor(2000);
    await odysee.page.type(
      "#content_thumbnail",
      "jpg path",
      {
        delay: 50,
      }
    );
    await odysee.page.waitFor(2000);

    /** Manual from video
    await odysee.page.waitFor(20000);

    await odysee.page.click(
      "#main-content > div > div > section> div > div > div > div > div > button"
    );
    await odysee.page.waitFor(20000);

    await odysee.page.waitFor(500);

    await odysee.page.click(
      "#main-content > div > div:nth-child(3) > section:nth-child(2) > div > div > div > div:nth-child(2) > div > button:nth-child(2)"
    );
    await odysee.page.waitFor(2000);
*/
    // //tags
    // await odysee.page.type(
    //   "#main-content > div > div:nth-child(3) > section:nth-child(3) > div > div > form > fieldset-section > fieldset-section > input",
    //   tag,
    //   {
    //     delay: 50,
    //   }
    // );

    //description
    let description =
      "Hello! If you like the video, and want some more. Then Follow us and support our channel. This will help us to upload video on the daily basis.";
    await odysee.page.type(
      "#main-content > div > div > section > div > div > fieldset-section > div > div > div > textarea",
      description,
      {
        delay: 10,
      }
    );
    await odysee.page.waitFor(2000);

    //Deposit
    let searchInput = await odysee.page.$("#content_bid");

    await searchInput.click({ clickCount: 3 });
    await searchInput.press("Backspace");

    await odysee.page.type("#content_bid", "0.0001", {
      delay: 100,
    });
    await odysee.page.waitFor(2000);

    //upload button
    await odysee.page.waitFor(
      "#main-content > div > section:nth-child(4) > div > button"
    );
    await odysee.page.waitFor(10000);

    await odysee.page.click(
      "#main-content > div > section:nth-child(4) > div > button"
    );
    await odysee.page.waitFor(10000); //complete the upload

    //confirm upload
    await odysee.page.click(
      "body > div.ReactModalPortal > div > div > form > section > div > div.card__main-actions > div.section__actions > button.button.button--primary "
    );
    await odysee.page.waitFor(120000); //complete the upload

    // await odysee.page.click("body > div > div > div > div > button");
    // const d = new Date().toLocaleDateString();
    // await odysee.page.type("#child-input", title + " " + d + " " + count, {
    //   delay: 50,
    // });
    //desciption
    //"#textbox"
    // await odysee.page.waitFor("#next-button > div");
    // await odysee.page.click("#next-button > div");
    // await odysee.page.waitFor(20000);
    // await odysee.page.waitFor("#next-button");
    // await odysee.page.click("#next-button");
    // await odysee.page.waitFor(2000);

    // await odysee.page.waitFor("#next-button > div");
    // await odysee.page.click("#next-button > div");
    // await odysee.page.waitFor(2000);

    // await odysee.page.waitFor("#done-button > div");
    // await odysee.page.click("#done-button > div");
    // await odysee.page.waitFor(2000);

    // await odysee.page.waitFor("#close-button > div");
    // await odysee.page.click("#close-button > div");
    // await odysee.page.waitFor(2000);
  },

  surf: async () => {
    await odysee.page.goto(Surf_URL, { waitUntil: "networkidle2" });
    await odysee.page.waitFor(10000);
    let i = 0;
    while (i < 10) {
      console.log("started: " + i);
      await delay(60000);
      console.log("completed: " + i);
      i++;
    }
  },
  closeBrowser: async () => {
    await odysee.browser.close();
  },
};
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
module.exports = odysee;
