const puppeteer = require("puppeteer-core");

// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  ["dream", "https://www.dreamgame.com/en/games?orderby=30"],
]);
const dream_title = [];
const dream_price = [];
const dream_discount_percent = [];
const dream_discount_price = [];
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
      "#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child(14)"
    );
    for (let i = 1; i < 21; i++) {
      let title = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardtitle",
        (x) => x.innerHTML
      );
      let price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardprice > s",
        (x) => x.innerHTML
      );
      let discount_percent = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardprice > span",
        (x) => x.innerHTML
      );
      let discount_price = await page.$eval(
        "div:nth-child(" +
          i +
          ") > a > div > div.card-body.mh-150 > p.cardprice",
        (x) => x.innerHTML
      );
      dream_title.push(title);
      dream_price.push(price);
      dream_discount_percent.push(discount_percent);
      dream_discount_price.push(discount_price.substr(0, 7));
    }
    console.log(v + " (title)", dream_title);
    console.log(v + " (price)", dream_price);
    console.log(v + " (dispercent)", dream_discount_percent);
    console.log(v + " (disprice)", dream_discount_price);
  }

  await browser.close();
})();
