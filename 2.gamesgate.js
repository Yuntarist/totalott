const puppeteer = require("puppeteer-core");

// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  [
    "gamersgate",
    "https://www.gamersgate.com/games/?price_discounted=on&platform=pc",
  ],
]);
const gamersgate_title = [];
const gamersgate_price = [];
const gamersgate_discount_percent = [];
const gamersgate_discount_price = [];
(async () => {
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  const browser = await puppeteer.launch({
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe",
    // headless: false,

    // 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
  });
  const page = await browser.newPage();

  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap.keys();
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap.get(v);
    await page.goto(url);

    // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
    await page.waitForSelector(
      "body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child(1)"
    );
    for (let i = 1; i < 21; i++) {
      let title = await page.$eval(
        "div:nth-child(" +
          i +
          ") > div > div.catalog-item--description > div.catalog-item--title > a",
        (x) => x.innerHTML
      );
      let price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > div > div.catalog-item--description > div.catalog-item--price > div",
        (x) => x.innerHTML
      );
      let discount_percent = await page.$eval(
        "div:nth-child(" + i + ") > div > ul > li > span",
        (x) => x.innerHTML
      );
      let discount_price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > div > div.catalog-item--description > div.catalog-item--price > span",
        (x) => x.innerHTML
      );
      gamersgate_title.push(title);
      gamersgate_price.push(
        price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      );
      gamersgate_discount_percent.push(discount_percent);
      gamersgate_discount_price.push(discount_price);
    }
    console.log(v + " (title)", gamersgate_title);
    console.log(v + " (price)", gamersgate_price);
    console.log(v + " (dispercent)", gamersgate_discount_percent);
    console.log(v + " (disprice)", gamersgate_discount_price);
  }

  await browser.close();
})();
// body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child(1) > div > div.catalog-item--description > div.catalog-item--title > a
// body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child(19) > div > div.catalog-item--description > div.catalog-item--price > div
// body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child(19) > div > ul > li > span
// body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child(19) > div > div.catalog-item--description > div.catalog-item--price > span
