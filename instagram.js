const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const Base_URL = "https://instagram.com";
const Saved_URL =""
const Downloader = require("./downloadsrc");
const instagram = {
  browser: null,
  page: null,
  page2: null,
  initialize: async () => {
    instagram.browser = await puppeteer.launch({ headless: true });
    instagram.page = await instagram.browser.newPage();
    // await instagram.page.emulate(iPhone);
  },

  login: async (username, password) => {
    await instagram.page.goto(Base_URL, { waitUntil: "networkidle2" });
    await instagram.page.waitFor(5000);

    //enter username
    await instagram.page.type(
      "#loginForm > div > div:nth-child(1) > div > label > input",
      username,
      {
        delay: 50,
      }
    );
    //enter password
    await instagram.page.type(
      "#loginForm > div > div:nth-child(2) > div > label > input",
      password,
      {
        delay: 50,
      }
    );
    //click login
    await instagram.page.click(
      "#loginForm > div > div:nth-child(3) > button > div"
    );
    //wait for homepage to load
    await instagram.page.waitFor(10000);
    await instagram.page.waitFor(10000);

    await instagram.page.waitFor(
      "#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg.KtFt3 > div > div:nth-child(1) > div > a > svg"
    );
  },

  gotoUser: async (user, index) => {
    await instagram.page.goto(Base_URL + "/" + user, {
      waitUntil: "networkidle2",
    });
    await instagram.page.waitFor(5000);
    //select reels
    await instagram.page.click(
      "#react-root > section > main > div > div> a > div > span"
    );
    await instagram.page.waitFor(5000);

    //selects 1st row only: nth-child(1) update 1 to other number for different row
    let posts = await instagram.page.$$(
      "#react-root > section > main > div > div > div > div > div > div:nth-child(" +
        index +
        ")>div>div>a"
    );

    for (let i = 0; i < 4; i++) {
      let post = posts[i];
      // console.log(posts);
      await post.click();
      await instagram.page.waitFor(5000);
      const imgs = await instagram.page.$eval(
        "body > div> div > div > article > div > div > div > div > div:nth-child(1) > div > div > video[src]",
        (img) => img.getAttribute("src")
      );

      console.log(imgs);
      await instagram.page.waitFor(1000);

      //download video/image file
      Downloader.downloadFile(imgs, "./videos", user);

      await instagram.page.waitFor(5000);

      //close the insta post
      await instagram.page.click("body > div > div > button > div");

      await instagram.page.waitFor(5000);
      //
    }
  },

  publish: async (filename) => {
    await instagram.page.click(
      "#react-root > section > nav > div > div > div > div > div > div:nth-child(3) > div > button > div > svg"
    );
    await instagram.page.waitFor(5000);
    const elementHandle = await instagram.page.$(
      "body > div > div > div > div > div > div > div> form > input"
    );
    // await instagram.page.click(
    //   "body > div > div> div > div > div > div > div > div > div > div > div > button"
    // );
    await instagram.page.waitFor(2000);

    await elementHandle.uploadFile("./videos/vid.mp4");
    await instagram.page.waitFor(50000);

    await instagram.page.waitFor(
      "body > div> div > div > div > div > div> div > div > div:nth-child(3) > div > button"
    );
    await instagram.page.click(
      "body > div> div > div > div > div > div> div > div > div:nth-child(3) > div > button"
    );
    await instagram.page.waitFor(5000);

    await instagram.page.waitFor(
      "body > div > div> div > div > div > div> div > div > div:nth-child(3) > div > button"
    );
    await instagram.page.click(
      "body > div > div> div > div > div > div> div > div > div:nth-child(3) > div > button"
    );
    await instagram.page.waitFor(5000);
    await instagram.page.waitFor(
      "body > div> div > div > div > div > div > div > div > div:nth-child(3) > div > button"
    );
    await instagram.page.click(
      "body > div> div > div > div > div > div > div > div > div:nth-child(3) > div > button"
    );
    await instagram.page.waitFor(5000);
    await instagram.page.waitFor(5000);
  },

  fromSaved: async (from, to) => {
    await instagram.page.goto(Saved_URL, {
      waitUntil: "networkidle2",
    });
    await instagram.page.waitFor(5000);

    if (from != 1) {
      //down key to move to required section
      // 10 down=> j==1
      p = 0;
      while (p <= from) {
        //move down *10
        for (let ptr = 1; ptr <= 10; ptr++)
          instagram.page.keyboard.press("ArrowDown");
        await instagram.page.waitFor(5000);

        //delay 5 secs
      }
    }
    for (let j = 1; j <= 7; j++) {
      for (let i = 1; i < 4; i++) {
        //selects 1st row only: nth-child(1) update 1 to other number for different row
        let posts = await instagram.page.click(
          // "#react-root > section > main > div > div > div > div > div > div:nth-child(" +
          //   j +
          //   ")>div>div>a"

          "#react-root > section > main > div > div > div > article > div > div > div:nth-child(" +
            j +
            ") > div:nth-child(" +
            i +
            ")"
        );

        // for (let i = 0; i < 4; i++) {
        // let post = posts[i];
        // console.log(posts);
        // await instagram.page.waitFor(2000);

        // await posts.click();
        await instagram.page.waitFor(5000);
        const imgs = await instagram.page.$eval(
          "body > div> div > div > article > div > div > div > div > div:nth-child(1) > div > div > video[src]",
          (img) => img.getAttribute("src")
        );

        console.log(imgs);
        await instagram.page.waitFor(1000);

        //download video/image file
        Downloader.downloadFile(imgs, "./videos", "user_" + (i + j));

        await instagram.page.waitFor(5000);
        // get the name document.querySelector("head > meta:nth-child(44)"): BELOW Eg
        //<meta name="twitter:title" content="Sonali Bhadauria (LiveToDance) (@sonali.bhadauria) • Instagram reel">

        //close the insta post
        await instagram.page.click("body > div > div > button > div");

        await instagram.page.waitFor(5000);
        //
      }
    }
  },

  closeBrowser: async () => {
    await instagram.browser.close();
  },
};

module.exports = instagram;
