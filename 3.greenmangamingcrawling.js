const puppeteer = require("puppeteer-core");

// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  ["greenmangaming", "https://www.greenmangaming.com/ko/all-games/on-sale/"],
]);
const greenmangaming_title = [];
const greenmangaming_price = [];
const greenmangaming_discount_percent = [];
const greenmangaming_discount_price = [];
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
      "#hits > div:nth-child(2) > div > ol > li:nth-child(1)"
    );
    for (let i = 1; i < 21; i++) {
      let title = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > p",
        (x) => x.innerHTML
      );
      let price = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > div.prices-section > div.prices > span.prev-price",
        (x) => x.innerHTML
      );
      let discount_percent = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > div.prices-section > div.discount > p",
        (x) => x.innerHTML
      );
      let discount_price = await page.$eval(
        "li:nth-child(" +
          i +
          ") > div > div > div > div > div > div > div.top-section > div.prices-section > div.prices > span.current-price",
        (x) => x.innerHTML
      );
      greenmangaming_title.push(title);
      greenmangaming_price.push(price);
      greenmangaming_discount_percent.push(discount_percent);
      greenmangaming_discount_price.push(discount_price);
    }
    console.log(v + " (title)", greenmangaming_title);
    console.log(v + " (price)", greenmangaming_price);
    console.log(v + " (dispercent)", greenmangaming_discount_percent);
    console.log(v + " (disprice)", greenmangaming_discount_price);
  }

  await browser.close();
})();
