const puppeteer = require('puppeteer-core')
exports.ax = async () => {
  let steam = ''
  let gamersgate = ''
  let greenmangaming = ''
  let dream = ''
  // 맵을 다 지우고 async를 하나만 사용함.

  const steam_title = []
  const steam_price = []
  const steam_discount_percent = []
  const steam_discount_price = []
  // ;(async () => {
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  // puppeteer는 비동기 함수이므로 모든 것에 async await가 들어가야함.
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe' // 각자의 컴퓨터에 설치 되어있는 크롬의 경로를 적을것. \금지
    // headless: false
  })
  const page = await browser.newPage()
  // url map에서 Key 값을 가져와서 반복문 실행

  //steam url 출력값
  let url =
    'https://store.steampowered.com/search/?specials=1&filter=topsellers&supportedlang=english&ndl=1'
  await page.goto(url)

  // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
  await page.waitForSelector('a:nth-child(1)')
  for (let i = 1; i < 19; i++) {
    const title = await page.$eval(
      'a:nth-child(' + i + ') div.col.search_name.ellipsis span.title',
      (x) => x.innerHTML
    )
    const price = await page.$eval(
      'a:nth-child(' +
        i +
        ') div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_price.discounted.responsive_secondrow span strike',
      (x) => x.innerHTML
    )
    const discount_percent = await page.$eval(
      'a:nth-child(' +
        i +
        ') div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_discount.responsive_secondrow span',
      (x) => x.innerHTML
    )
    const discount_price = await page.$eval(
      'a:nth-child(' +
        i +
        ') div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_price.discounted.responsive_secondrow',
      (x) => x.innerHTML
    )
    steam_title.push(title)
    steam_price.push(price)
    steam_discount_percent.push(discount_percent)
    steam_discount_price.push(discount_price.substr(-28, 9))
  }

  for (let j = 0; j < 10; j++) {
    let game1 = `<div class="totalSteam"> <span class="totalSteamName">steam</span> : ${steam_title[j]}
      할인률:
      ${steam_discount_percent[j]}
      원가 :
      ${steam_price[j]}
      할인가 :
      ${steam_discount_price[j]}
    </div><hr/>`
    steam += game1
  }
  console.log(steam_title)
  console.log(steam_price)
  console.log(steam_discount_percent)
  console.log(steam_discount_price)
  //css수정하기

  //gamegate 시작
  const gamersgate_title = []
  const gamersgate_price = []
  const gamersgate_discount_percent = []
  const gamersgate_discount_price = []
  let url2 = 'https://www.gamersgate.com/games/?price_discounted=on&platform=pc'
  await page.goto(url2)

  await page.waitForSelector(
    'body > main > section > div > div > div.column.column-content > div > div.catalog-list-decorator > div > div:nth-child(1)'
  )
  for (let i = 1; i < 21; i++) {
    let title = await page.$eval(
      'div:nth-child(' +
        i +
        ') > div > div.catalog-item--description > div.catalog-item--title > a',
      (x) => x.innerHTML
    )
    let price = await page.$eval(
      'div:nth-child(' +
        i +
        ') > div > div.catalog-item--description > div.catalog-item--price > div',
      (x) => x.innerHTML
    )
    let discount_percent = await page.$eval(
      'div:nth-child(' + i + ') > div > ul > li > span',
      (x) => x.innerHTML
    )
    let discount_price = await page.$eval(
      'div:nth-child(' +
        i +
        ') > div > div.catalog-item--description > div.catalog-item--price > span',
      (x) => x.innerHTML
    )
    gamersgate_title.push(title)
    gamersgate_price.push(
      price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    )
    gamersgate_discount_percent.push(discount_percent)
    gamersgate_discount_price.push(discount_price)
  }
  // console.log(gamersgate_title);
  // console.log(gamersgate_price);
  // console.log(gamersgate_discount_percent);
  // console.log(gamersgate_discount_price);
  for (let j = 0; j < 10; j++) {
    const game2 = `<div class="totalGamersgate"> <span class="totalGamersgateName">gamersgate</span> : ${gamersgate_title[j]}
    할인률:
    ${gamersgate_discount_percent[j]}
    원가 :
    ${gamersgate_price[j]}
    할인가 :
    ${gamersgate_discount_price[j]}
  </div>`
    gamersgate += game2
  }

  //greenman 시작
  const greenmangaming_title = []
  const greenmangaming_price = []
  const greenmangaming_discount_percent = []
  const greenmangaming_discount_price = []

  let url3 = 'https://www.greenmangaming.com/ko/all-games/on-sale/'
  await page.goto(url3)

  // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
  await page.waitForSelector(
    '#hits > div:nth-child(2) > div > ol > li:nth-child(1)'
  )
  for (let i = 1; i < 21; i++) {
    let title = await page.$eval(
      'li:nth-child(' +
        i +
        ') > div > div > div > div > div > div > div.top-section > p',
      (x) => x.innerHTML
    )
    let price = await page.$eval(
      'li:nth-child(' +
        i +
        ') > div > div > div > div > div > div > div.top-section > div.prices-section > div.prices > span.prev-price',
      (x) => x.innerHTML
    )
    let discount_percent = await page.$eval(
      'li:nth-child(' +
        i +
        ') > div > div > div > div > div > div > div.top-section > div.prices-section > div.discount > p',
      (x) => x.innerHTML
    )
    let discount_price = await page.$eval(
      'li:nth-child(' +
        i +
        ') > div > div > div > div > div > div > div.top-section > div.prices-section > div.prices > span.current-price',
      (x) => x.innerHTML
    )
    greenmangaming_title.push(title)
    greenmangaming_price.push(price)
    greenmangaming_discount_percent.push(discount_percent)
    greenmangaming_discount_price.push(discount_price)
  }
  // console.log(greenmangaming_title);
  // console.log(greenmangaming_price);
  // console.log(greenmangaming_discount_percent);
  // console.log(greenmangaming_discount_price);
  for (let j = 0; j < 10; j++) {
    let game3 = `<div class="totalGreenmangaming"> <span class="totalGreenmangamingName">greenmangaming</span> : ${greenmangaming_title[j]}
    할인률:
    ${greenmangaming_discount_percent[j]}
    원가 :
    ${greenmangaming_price[j]}
    할인가 :
    ${greenmangaming_discount_price[j]}
  </div>`
    greenmangaming += game3
  }

  //dream 시작
  const dream_title = []
  const dream_price = []
  const dream_discount_percent = []
  const dream_discount_price = []

  //dreamgame url 출력값
  let url4 = 'https://www.dreamgame.com/en/games?orderby=30'
  await page.goto(url4)

  for (let i = 1; i < 21; i++) {
    let title = await page.$eval(
      'div:nth-child(' + i + ') > a > div > div.card-body.mh-150 > p.cardtitle',
      (x) => x.innerHTML
    )
    let price = await page.$eval(
      'div:nth-child(' +
        i +
        ') > a > div > div.card-body.mh-150 > p.cardprice > s',
      (x) => x.innerHTML
    )
    let discount_percent = await page.$eval(
      'div:nth-child(' +
        i +
        ') > a > div > div.card-body.mh-150 > p.cardprice > span',
      (x) => x.innerHTML
    )
    let discount_price = await page.$eval(
      'div:nth-child(' + i + ') > a > div > div.card-body.mh-150 > p.cardprice',
      (x) => x.innerHTML
    )
    dream_title.push(title)
    dream_price.push(price)
    dream_discount_percent.push(discount_percent)
    dream_discount_price.push(discount_price.substr(0, 7))
  }
  // console.log(dream_title);
  // console.log(dream_price);
  // console.log(dream_discount_percent);
  // console.log(dream_discount_price);

  for (let j = 0; j < 10; j++) {
    let game4 = `<div class="totalDreamgame"> <span class="totalDreamgameName">dreamgame</span> : ${dream_title[j]}
    할인률:
    ${dream_discount_percent[j]}
    원가 :
    ${dream_price[j]}
    할인가 :
    ${dream_discount_price[j]}
  </div>`
    dream += game4
  }
  // })()
  let gameworld = steam + gamersgate + greenmangaming + dream
  console.log(gameworld)
  return gameworld
}
