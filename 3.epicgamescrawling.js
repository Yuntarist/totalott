const puppeteer = require('puppeteer-core')

// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  [
    'epicgames',
    'https://store.epicgames.com/ko/browse?sortBy=relevancy&sortDir=DESC&priceTier=tierDiscouted&category=Game&count=40&start=0'
  ]
])
const epicgames_title = []
const epicgames_price = []
const epicgames_discount_percent = []
const epicgames_discount_price = []
;(async () => {
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe',
    headless: false

    // 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
  })
  const page = await browser.newPage()

  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap.keys()
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap.get(v)
    await page.goto(url)

    // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
    await page.waitForSelector(
      '#dieselReactWrapper > div > div.css-1vplx76 > main > div:nth-child(3) > div > div > div > div > section > div > section > div > section > section > ul > li:nth-child(1)'
    )
    for (let i = 1; i < 21; i++) {
      let title = await page.$eval(
        'li:nth-child(' +
          i +
          ') > div > div > a > div > div > div.css-hkjq8i > div.css-n55ojx > div > div',
        (x) => x.innerHTML
      )
      let price = await page.$eval(
        'li:nth-child(' +
          i +
          ') div > div > a > div > div > div.css-hkjq8i > div.css-1q7njkh > div > div:nth-child(2) > div > div:nth-child(1) > span > div',
        (x) => x.innerHTML
      )
      let discount_percent = await page.$eval(
        'li:nth-child(' +
          i +
          ') div > div > a > div > div > div.css-hkjq8i > div.css-1q7njkh > div > div:nth-child(1) > span > div',
        (x) => x.innerHTML
      )
      let discount_price = await page.$eval(
        'li:nth-child(' +
          i +
          ') div > div > a > div > div > div.css-hkjq8i > div.css-1q7njkh > div > div:nth-child(2) > div > div:nth-child(2) > span',
        (x) => x.innerHTML
      )
      epicgames_title.push(title)
      epicgames_price.push(price)
      epicgames_discount_percent.push(discount_percent)
      epicgames_discount_price.push(discount_price)
    }
    console.log(epicgames_title)
    console.log(epicgames_price)
    console.log(epicgames_discount_percent)
    console.log(epicgames_discount_price)
  }

  await browser.close()
})()
