const puppeteer = require("puppeteer-core");

// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  ["xbox", "https://www.xbox.com/ko-kr/games/all-games?cat=onsale"], // xbox 타이틀
]);
(async () => {
  const xboxTitle = [];
  const xboxPrice = [];
  const discountPrice = [];
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  // puppeteer는 비동기 함수이므로 모든 것에 async await가 들어가야함.
  const browser = await puppeteer.launch({
    // launch는
    executablePath:
      "C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe", // 각자의 컴퓨터에 설치 되어있는 크롬의 경로를 적을것. \금지
    // headless: false,
  });
  // 타이틀
  const page = await browser.newPage();
  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap.keys();
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap.get(v);
    await page.goto(url);

    await page.waitForSelector(
      "#ContentBlockList_1 > div.thecatalog > div.gameList > div.gameDivsWrapper > div:nth-child(4)"
    );
    for (let i = 4; i < 24; i++) {
      const title = await page.$eval(
        // $eval() 첫번째 인자로는 선택자를( $() 에 넣던 선택자 ), 두번째인자로는 콜백함수를 받게 된다.
        "div:nth-child(" + i + ") > a > div > h3",
        (x) => x.innerHTML
      );
      const price = await page.$eval(
        "div:nth-child(" + i + ") > a > div > div > s",
        (x) => x.innerHTML
      );
      const disprice = await page.$eval(
        "div:nth-child(" + i + ") > a > div > div > span.x-hidden-focus",
        (x) => x.innerHTML
      );
      xboxTitle.push(title);
      xboxPrice.push(price.substr(40)); // substr 글자 잘라내는 코드
      discountPrice.push(disprice);
    }
    console.log(v + " (title)", xboxTitle);
    console.log(v + " (price)", xboxPrice);
    console.log(v + " (disprice)", discountPrice);
  }
  await browser.close();
})();
// #ContentBlockList_1 > div.thecatalog > div.gameList > div.gameDivsWrapper > div:nth-child(4) > a > div > h3
// #ContentBlockList_1 > div.thecatalog > div.gameList > div.gameDivsWrapper > div:nth-child(4) > a > div > h3
