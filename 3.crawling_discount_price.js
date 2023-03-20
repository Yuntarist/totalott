const puppeteer = require("puppeteer-core");
// Red_Dead_Redemption_2
const urlMap1 = new Map([
  [
    "is_there_any_deal_Red_Dead_Redemption_2",
    "https://isthereanydeal.com/game/reddeadredemptionii/history/?shop%5B%5D=steam&generate=Select+Stores",
  ],
]);
// 빈 배열 2개 선언
const Red_Dead_Redemption_2_price = [];
const Red_Dead_Redemption_2_discount_price = [];
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe",
    // 'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'"C:/Program Files/Google/Chrome/Application/chrome.exe",
    // headless: false,
    // 노트북으로 할 때 크롬 경로를 다시 지정해 줄것.
  });
  const page = await browser.newPage();
  let urlKeys = urlMap1.keys();
  for (var v of urlKeys) {
    var url = urlMap1.get(v);
    await page.goto(url);
    await page.waitForSelector("div:nth-child(2)");
    for (let i = 2; i < 50; i++) {
      if (i % 2 == 1) {
        const price1 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(2) > span.lg2__price",
          (x) => x.innerHTML
        );

        const price2 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(3) > span.lg2__price.lg2__price--new",
          (x) => x.innerHTML
        );
        Red_Dead_Redemption_2_price.push(price1.replaceAll("$", ""));
        Red_Dead_Redemption_2_discount_price.push(price2.replaceAll("$", ""));
      }
    }
    console.log("Red_Dead_Redemption_2_price :" + Red_Dead_Redemption_2_price);
    console.log(
      "Red_Dead_Redemption_2_discount_price :" +
        Red_Dead_Redemption_2_discount_price
    );
  }
  await browser.close();
})();
// Sky_rim
const urlMap2 = new Map([
  [
    "is_there_any_deal_sky_rim",
    "https://isthereanydeal.com/game/elderscrollsvskyrimspecialedition/history/?shop%5B%5D=steam&generate=Select+Stores",
  ],
]);
// 빈 배열 2개 선언
const Sky_rim_price = [];
const Sky_rim_discount_price = [];
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe",
    // 'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'"C:/Program Files/Google/Chrome/Application/chrome.exe",
    // headless: false,
    // 노트북으로 할 때 크롬 경로를 다시 지정해 줄것.
  });
  const page = await browser.newPage();
  let urlKeys = urlMap2.keys();
  for (var v of urlKeys) {
    var url = urlMap2.get(v);
    await page.goto(url);
    await page.waitForSelector("div:nth-child(2)");
    for (let i = 2; i < 80; i++) {
      if (i % 2 == 1) {
        const price1 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(2) > span.lg2__price",
          (x) => x.innerHTML
        );

        const price2 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(3) > span.lg2__price.lg2__price--new",
          (x) => x.innerHTML
        );
        Sky_rim_price.push(price1.replaceAll("$", ""));
        Sky_rim_discount_price.push(price2.replaceAll("$", ""));
      }
    }
    console.log("Sky_rim_price:" + Sky_rim_price);
    console.log("Sky_rim_discount_price:" + Sky_rim_discount_price);
  }
  await browser.close();
})();
// PUBG
const urlMap3 = new Map([
  [
    "is_there_any_PUBG",
    "https://isthereanydeal.com/game/playerunknownsbattlegrounds/history/?shop%5B%5D=steam&generate=Select+Stores",
  ],
]);
// 빈 배열 2개 선언
const PUBG_price = [];
const PUBG_discount_price = [];
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe",
    // 'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'"C:/Program Files/Google/Chrome/Application/chrome.exe",
    // headless: false,
    // 노트북으로 할 때 크롬 경로를 다시 지정해 줄것.
  });
  const page = await browser.newPage();
  let urlKeys = urlMap3.keys();
  for (var v of urlKeys) {
    var url = urlMap3.get(v);
    await page.goto(url);
    await page.waitForSelector("div:nth-child(2)");
    for (let i = 2; i < 34; i++) {
      if (i % 2 == 1) {
        const price1 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(2) > span.lg2__price",
          (x) => x.innerHTML
        );

        const price2 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(3) > span.lg2__price.lg2__price--new",
          (x) => x.innerHTML
        );
        PUBG_price.push(price1.replaceAll("$", ""));
        PUBG_discount_price.push(price2.replaceAll("$", ""));
      }
    }
    console.log("PUBG_price:" + PUBG_price);
    console.log("PUBG_discount_price:" + PUBG_discount_price);
  }
  await browser.close();
})();
// Terraria
const urlMap4 = new Map([
  [
    "is_there_any_Terraria",
    "https://isthereanydeal.com/game/terraria/history/?shop%5B%5D=steam&generate=Select+Stores",
  ],
]);
const Terraria_price = [];
const Terraria_discount_price = [];
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe",
    // 'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'"C:/Program Files/Google/Chrome/Application/chrome.exe",
    // headless: false,
    // 노트북으로 할 때 크롬 경로를 다시 지정해 줄것.
  });
  const page = await browser.newPage();
  let urlKeys = urlMap4.keys();
  for (var v of urlKeys) {
    var url = urlMap4.get(v);
    await page.goto(url);
    await page.waitForSelector("div:nth-child(2)");
    for (let i = 2; i < 100; i++) {
      if (i % 2 == 1) {
        const price1 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(2) > span.lg2__price",
          (x) => x.innerHTML
        );

        const price2 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(3) > span.lg2__price.lg2__price--new",
          (x) => x.innerHTML
        );
        Terraria_price.push(price1.replaceAll("$", ""));
        Terraria_discount_price.push(price2.replaceAll("$", ""));
      }
    }
    console.log("Terraria_price:" + Terraria_price);
    console.log("Terraria_discount_price:" + Terraria_discount_price);
  }
  await browser.close();
})();
// Dark_Soul_3
const urlMap5 = new Map([
  [
    "is_there_any_Dark_Soul_3",
    "https://isthereanydeal.com/game/darksoulsiii/history/?shop%5B%5D=steam&generate=Select+Stores",
  ],
]);
const Dark_Soul_3_price = [];
const Dark_Soul_3_discount_price = [];
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe",
    // 'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'"C:/Program Files/Google/Chrome/Application/chrome.exe",
    // headless: false,
    // 노트북으로 할 때 크롬 경로를 다시 지정해 줄것.
  });
  const page = await browser.newPage();
  let urlKeys = urlMap5.keys();
  for (var v of urlKeys) {
    var url = urlMap5.get(v);
    await page.goto(url);
    await page.waitForSelector("div:nth-child(2)");
    for (let i = 2; i < 50; i++) {
      if (i % 2 == 0) {
        const price1 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(2) > span.lg2__price",
          (x) => x.innerHTML
        );

        const price2 = await page.$eval(
          "#historyLogContent > div:nth-child(" +
            i +
            ") > div > div:nth-child(3) > span.lg2__price.lg2__price--new",
          (x) => x.innerHTML
        );
        Dark_Soul_3_price.push(price1.replaceAll("$", ""));
        Dark_Soul_3_discount_price.push(price2.replaceAll("$", ""));
      }
    }
    console.log("Dark_Soul_3_price:" + Dark_Soul_3_price);
    console.log("Dark_Soul_3_discount_price:" + Dark_Soul_3_discount_price);
  }
  await browser.close();
})();
