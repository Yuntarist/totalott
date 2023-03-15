const puppeteer = require('puppeteer-core')
// Red_Dead_Redemption_2
const urlMap = new Map([
  [
    'is_there_any_deal_Red_Dead_Redemption_2',
    'https://isthereanydeal.com/game/reddeadredemptionii/history/?shop%5B%5D=steam&generate=Select+Stores'
  ]
])
// 빈 배열 2개 선언
const Red_Dead_Redemption_2_price_date = []
const Red_Dead_Redemption_2_discount_price = []
;(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'
    // 'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'"C:/Program Files/Google/Chrome/Application/chrome.exe",
    // headless: false,
    // 노트북으로 할 때 크롬 경로를 다시 지정해 줄것.
  })
  const page = await browser.newPage()
  let urlKeys = urlMap.keys()
  for (var v of urlKeys) {
    var url = urlMap.get(v)
    await page.goto(url)
    await page.waitForSelector('div:nth-child(2)')
    for (let i = 2; i < 50; i++) {
      const price1 = await page.$eval(
        '#historyLogContent > div:nth-child(' +
          i +
          ') > div > div:nth-child(2) > span.lg2__price',
        (x) => x.innerHTML
      )

      const price2 = await page.$eval(
        '#historyLogContent > div:nth-child(' +
          i +
          ') > div > div:nth-child(3) > span.lg2__price.lg2__price--new',
        (x) => x.innerHTML
      )
      Red_Dead_Redemption_2_price_date.push(price1.replaceAll('$', ''))
      Red_Dead_Redemption_2_discount_price.push(price2.replaceAll('$', ''))
    }
    console.log(Red_Dead_Redemption_2_price_date)
    console.log(Red_Dead_Redemption_2_discount_price)
  }
  await browser.close()
})()
