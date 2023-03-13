const puppeteer = require("puppeteer-core");
const urlMap = new Map([
  [
    "steam",
    "https://store.steampowered.com/search/?specials=1&filter=topsellers&supportedlang=english&ndl=1",
  ],
]);
// steam 시작
const steam_title = [];
const steam_price = [];
const steam_discount_percent = [];
const steam_discount_price = [];
const steam_aTag = [];
const steam_new_title = [];
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe",
    // 'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'"C:/Program Files/Google/Chrome/Application/chrome.exe",
    // headless: false,
    // 노트북으로 할 때 크롬 경로를 다시 지정해 줄것.
  });
  const page = await browser.newPage();
  let urlKeys = urlMap.keys();
  for (var v of urlKeys) {
    var url = urlMap.get(v);
    await page.goto(url);
    await page.waitForSelector("a:nth-child(1)");
    for (let i = 11; i < 21; i++) {
      const title = await page.$eval(
        "a:nth-child(" + i + ") div.col.search_name.ellipsis span.title",
        (x) => x.innerHTML
      );
      const price = await page.$eval(
        "a:nth-child(" +
          i +
          ") div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_price.discounted.responsive_secondrow span strike",
        (x) => x.innerHTML
      );
      const discount_percent = await page.$eval(
        "a:nth-child(" +
          i +
          ") div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_discount.responsive_secondrow span",
        (x) => x.innerHTML
      );
      const discount_price = await page.$eval(
        "a:nth-child(" +
          i +
          ") div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_price.discounted.responsive_secondrow",
        (x) => x.innerHTML
      );
      const aTag = await page.$eval(
        "#search_resultsRows a:nth-child(" + i + ") div.col.search_capsule",
        (x) => x.innerHTML
      );
      steam_price.push(
        `<div class="steam_price">` + price.replace(">", "") + `</div>`
      );
      steam_discount_percent.push(
        `<div class="steam_discount_percent">` +
          discount_percent.replace(">", "") +
          `</div>`
      );
      steam_discount_price.push(
        `<div class="steam_discount_price">` +
          discount_price.substr(-28, 9).replace(">", "") +
          `</div>`
      );
      steam_aTag.push(aTag.substr(60, 7).replace("/", ""));
      steam_title.push(title);
    }
    for (let j = 0; j < steam_aTag.length; j++) {
      steam_new_title.push(
        `<div class="steam_new_title"><a href="https://store.steampowered.com/app/${steam_aTag[j]}" target="_blank">` +
          steam_title[j] +
          `</a></div>`
      );
    }
  }
  await browser.close();
})();
// gamesgate 시작
const urlMap2 = new Map([
  [
    "gamersgate",
    "https://www.gamersgate.com/games/?price_discounted=on&platform=pc",
  ],
]);
const gamersgate_title = [];
const gamersgate_price = [];
const gamersgate_discount_percent = [];
const gamersgate_discount_price = [];
const gamersgate_aTag = [];
const gamersgate_new_title = [];
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
    await page.waitForSelector(
      "body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child(1)"
    );
    for (let i = 1; i < 11; i++) {
      const title = await page.$eval(
        "div:nth-child(" +
          i +
          ") > div > div.catalog-item--description > div.catalog-item--title > a",
        (x) => x.innerHTML
      );
      const price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > div > div.catalog-item--description > div.catalog-item--price > div",
        (x) => x.innerHTML
      );
      const discount_percent = await page.$eval(
        "div:nth-child(" + i + ") > div > ul > li > span",
        (x) => x.innerHTML
      );
      const discount_price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > div > div.catalog-item--description > div.catalog-item--price > span",
        (x) => x.innerHTML
      );
      gamersgate_aTag.push(
        title
          .replace(/ /g, "-")
          .replace(":", "")
          .replace("/", "-")
          .replace("é", "e")
          .replace("(", "")
          .replace(")", "")
          .replace("™-", "")
          .toLowerCase()
      );
      gamersgate_title.push(title);
      gamersgate_price.push(
        `<div class="gamersgate_price">` +
          price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
          `</div>`
      );
      gamersgate_discount_percent.push(
        `<div class="gamersgate_discount_percent">` +
          discount_percent +
          `</div>`
      );
      gamersgate_discount_price.push(
        `<div class="gamersgate_discount_price">` + discount_price + `</div>`
      );
    }
    for (let j = 0; j < gamersgate_aTag.length; j++) {
      gamersgate_new_title.push(
        `<div class="gamersgate_new_title"><a href="https://www.gamersgate.com/product/${gamersgate_aTag[j]}" target="_blank">` +
          gamersgate_title[j] +
          `</a></div>`
      );
    }
  }
  await browser.close();
})();
// greenmangaming 시작
const urlMap3 = new Map([
  ["greenmangaming", "https://www.greenmangaming.com/ko/all-games/on-sale/"],
]);
const greenmangaming_title = [];
const greenmangaming_price = [];
const greenmangaming_discount_percent = [];
const greenmangaming_discount_price = [];
const greenmangaming_new_title = [];
const greenmangaming_aTag = [];
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
    await page.waitForSelector(
      "#hits > div:nth-child(2) > div > ol > li:nth-child(1)"
    );
    for (let i = 1; i < 11; i++) {
      const title = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > p",
        (x) => x.innerHTML
      );
      const price = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > div.prices-section > div.prices > span.prev-price",
        (x) => x.innerHTML
      );
      const discount_percent = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > div.prices-section > div.discount > p",
        (x) => x.innerHTML
      );
      const discount_price = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > div.prices-section > div.prices > span.current-price",
        (x) => x.innerHTML
      );
      greenmangaming_title.push(title);
      greenmangaming_price.push(
        `<div class="greenmangaming_price">` + price + `</div>`
      );
      greenmangaming_discount_percent.push(
        `<div class="greenmangaming_discount_percent">` +
          discount_percent +
          `</div>`
      );
      greenmangaming_discount_price.push(
        `<div class="greenmangaming_discount_price">` +
          discount_price +
          `</div>`
      );
      greenmangaming_aTag.push(
        title
          .replace(/ /g, "-")
          .replace(":", "")
          .replace("/", "-")
          .replace("é", "e")
          .replace("(", "")
          .replace(")", "")
          .replace("™-", "")
          .toLowerCase()
      );
    }
    for (let j = 0; j < greenmangaming_aTag.length; j++) {
      greenmangaming_new_title.push(
        `<div class="greenmangaming_new_title"><a href="https://www.greenmangaming.com/ko/games/${greenmangaming_aTag[j]}-pc" target="_blank">` +
          greenmangaming_title[j] +
          `</a></div>`
      );
    }
    await browser.close();
  }
})();
// dream 시작
const urlMap4 = new Map([
  ["dream", "https://www.dreamgame.com/en/games?orderby=30"],
]);
const dream_title = [];
const dream_price = [];
const dream_discount_percent = [];
const dream_discount_price = [];
const dream_new_title = [];
const dream_aTag = [];
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
    await page.waitForSelector(
      "#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child(14)"
    );
    for (let i = 6; i < 16; i++) {
      const title = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardtitle",
        (x) => x.innerHTML
      );
      const price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardprice > s",
        (x) => x.innerHTML
      );
      const discount_percent = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardprice > span",
        (x) => x.innerHTML
      );
      const discount_price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardprice",
        (x) => x.innerHTML
      );
      dream_aTag.push(
        title
          .replace(/ /g, "-")
          .replace(":", "")
          .replace("/", "-")
          .replace("é", "e")
          .replace("(", "")
          .replace(")", "")
          .replace("™-", "")
          .replace("&", "")
          .toLowerCase()
      );
      dream_title.push(title.replace("&n", ""));
      dream_price.push(
        `<div class="dream_price">` + price.replace("&n", "") + `</div>`
      );
      dream_discount_percent.push(
        `<div class="dream_discount_percent">` +
          discount_percent.replace("&n", "") +
          `</div>`
      );
      dream_discount_price.push(
        `<div class="dream_discount_price">` +
          discount_price.substr(0, 7).replace("&n", "") +
          `</div>`
      );
    }
    for (let j = 0; j < dream_aTag.length; j++) {
      dream_new_title.push(
        `<div class="dream_new_title"><a href="https://www.dreamgame.com/en/${dream_aTag[j]}" target="_blank">` +
          dream_title[j] +
          `</a></div>`
      );
    }
  }
  await browser.close();
  /* 2.mongoDB에 저장하는 코드 */
  const mongoose = require("mongoose");
  const USER = "dtd";
  const PWD = 123123;
  const HOST = "127.0.0.1:27017";
  const DB = "trif";
  const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(mongodbURL, { useNewUrlParser: true })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));
  const maincrawling = require("./DB/maincrawling.js");
  module.exports = maincrawling;
  // 디비에 담기전에 깔끔하게 정리해서 넣을 수 있도록 변수안에 넣음
  // steam
  const a1 = steam_title;
  const a2 = steam_price;
  const a3 = steam_discount_percent;
  const a4 = steam_discount_price;
  const a7 = steam_new_title;
  // gamersgate
  const b1 = gamersgate_title;
  const b2 = gamersgate_price;
  const b3 = gamersgate_discount_percent;
  const b4 = gamersgate_discount_price;
  const b6 = gamersgate_new_title;
  // greenmangaming
  const c1 = greenmangaming_title;
  const c2 = greenmangaming_price;
  const c3 = greenmangaming_discount_percent;
  const c4 = greenmangaming_discount_price;
  const c6 = greenmangaming_new_title;
  // dream
  const d1 = dream_title;
  const d2 = dream_price;
  const d3 = dream_discount_percent;
  const d4 = dream_discount_price;
  const d6 = dream_new_title;
  const main = async () => {
    const _data = {
      steam_title: `${a1}`,
      steam_price: `${a2}`,
      steam_discount_percent: `${a3}`,
      steam_discount_price: `${a4}`,
      steam_new_title: `${a7}`,
      gamersgate_title: `${b1}`,
      gamersgate_price: `${b2}`,
      gamersgate_discount_percent: `${b3}`,
      gamersgate_discount_price: `${b4}`,
      gamersgate_new_title: `${b6}`,
      greenmangaming_title: `${c1}`,
      greenmangaming_price: `${c2}`,
      greenmangaming_discount_percent: `${c3}`,
      greenmangaming_discount_price: `${c4}`,
      greenmangaming_new_title: `${c6}`,
      dream_new_title: `${d6}`,
      dream_price: `${d2}`,
      dream_discount_percent: `${d3}`,
      dream_discount_price: `${d4}`,
    };
    const new_maincraling = new maincrawling(_data);
    const t = await new_maincraling.save();
    console.log(t);
  };
  main();
})();
// 플랫폼별 사이트 구조가 모두 달라 반복문을 사용할 수 없었음.
