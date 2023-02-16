const puppeteer = require('puppeteer-core')

const urlMap = new Map([
  [
    'steam',
    'https://store.steampowered.com/search/?specials=1&filter=topsellers&supportedlang=english&ndl=1'
  ]
])

// steam 시작
const steam_titles = []
const steam_price = []
const steam_discount_percent = []
const steam_discount_price = []
;(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'
    // headless: false,
  })
  const page = await browser.newPage()
  let urlKeys = urlMap.keys()
  for (var v of urlKeys) {
    var url = urlMap.get(v)
    await page.goto(url)
    await page.waitForSelector('a:nth-child(1)')
    for (let i = 1; i < 21; i++) {
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
      steam_titles.push(title)
      steam_price.push(price)
      steam_discount_percent.push(discount_percent)
      steam_discount_price.push(discount_price.substr(-28, 9))
    }
    console.log(v + ' (title)', steam_titles)
    console.log(v + ' (price)', steam_price)
    console.log(v + ' (dispercent)', steam_discount_percent)
    console.log(v + ' (disprice)', steam_discount_price)
    // 스팀 끝
  }
  await browser.close()
})()

// gamesgate 시작
const urlMap2 = new Map([
  [
    'gamersgate',
    'https://www.gamersgate.com/games/?price_discounted=on&platform=pc'
  ]
])
const gamersgate_title = []
const gamersgate_price = []
const gamersgate_discount_percent = []
const gamersgate_discount_price = []
;(async () => {
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'
    // headless: false,

    // 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
  })
  const page = await browser.newPage()

  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap2.keys()
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap2.get(v)
    await page.goto(url)

    // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
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
    console.log(v + ' (title)', gamersgate_title)
    console.log(v + ' (price)', gamersgate_price)
    console.log(v + ' (dispercent)', gamersgate_discount_percent)
    console.log(v + ' (disprice)', gamersgate_discount_price)
  }

  await browser.close()
})()

// greenmangaming 시작
const urlMap3 = new Map([
  ['greenmangaming', 'https://www.greenmangaming.com/ko/all-games/on-sale/']
])
const greenmangaming_title = []
const greenmangaming_price = []
const greenmangaming_discount_percent = []
const greenmangaming_discount_price = []
;(async () => {
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'
    // headless: false,

    // 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
  })
  const page = await browser.newPage()

  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap3.keys()
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap3.get(v)
    await page.goto(url)

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
    console.log(v + ' (title)', greenmangaming_title)
    console.log(v + ' (price)', greenmangaming_price)
    console.log(v + ' (dispercent)', greenmangaming_discount_percent)
    console.log(v + ' (disprice)', greenmangaming_discount_price)
  }

  await browser.close()
})()

// dreamgame 시작
const urlMap4 = new Map([
  ['dream', 'https://www.dreamgame.com/en/games?orderby=30']
])
const dream_title = []
const dream_price = []
const dream_discount_percent = []
const dream_discount_price = []
;(async () => {
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'
    // headless: false,

    // 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
  })
  const page = await browser.newPage()

  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap4.keys()
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap4.get(v)
    await page.goto(url)

    // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
    await page.waitForSelector(
      '#TwoColumns > div.row > div.col-lg-9 > div.row.row-cols-2.row-cols-sm-2.row-cols-md-4.row-cols-lg-4.row-cols-xl-4.gx-3 > div:nth-child(14)'
    )
    for (let i = 1; i < 21; i++) {
      let title = await page.$eval(
        'div:nth-child(' +
          i +
          ') > a > div > div.card-body.mh-150 > p.cardtitle',
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
        'div:nth-child(' +
          i +
          ') > a > div > div.card-body.mh-150 > p.cardprice',
        (x) => x.innerHTML
      )
      dream_title.push(title)
      dream_price.push(price)
      dream_discount_percent.push(discount_percent)
      dream_discount_price.push(discount_price.substr(0, 7))
    }
    console.log(v + ' (title)', dream_title)
    console.log(v + ' (price)', dream_price)
    console.log(v + ' (dispercent)', dream_discount_percent)
    console.log(v + ' (disprice)', dream_discount_price)
  }

  await browser.close()
})()

// xbox 시작
const urlMap5 = new Map([
  ['xbox', 'https://www.xbox.com/ko-kr/games/all-games?cat=onsale'] // xbox 타이틀
])
;(async () => {
  const xboxTitle = []
  const xboxPrice = []
  const discountPrice = []
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  // puppeteer는 비동기 함수이므로 모든 것에 async await가 들어가야함.
  const browser = await puppeteer.launch({
    // launch는
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe' // 각자의 컴퓨터에 설치 되어있는 크롬의 경로를 적을것. \금지
    // headless: false,
  })
  // 타이틀
  const page = await browser.newPage()
  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap5.keys()
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap5.get(v)
    await page.goto(url)

    await page.waitForSelector(
      '#ContentBlockList_1 > div.thecatalog > div.gameList > div.gameDivsWrapper > div:nth-child(4)'
    )
    for (let i = 4; i < 24; i++) {
      const title = await page.$eval(
        // $eval() 첫번째 인자로는 선택자를( $() 에 넣던 선택자 ), 두번째인자로는 콜백함수를 받게 된다.
        'div:nth-child(' + i + ') > a > div > h3',
        (x) => x.innerHTML
      )
      const price = await page.$eval(
        'div:nth-child(' + i + ') > a > div > div > s',
        (x) => x.innerHTML
      )
      const disprice = await page.$eval(
        'div:nth-child(' + i + ') > a > div > div > span.x-hidden-focus',
        (x) => x.innerHTML
      )
      xboxTitle.push(title)
      xboxPrice.push(price.substr(40)) // substr 글자 잘라내는 코드
      discountPrice.push(disprice)
    }
    console.log(v + ' (title)', xboxTitle)
    console.log(v + ' (price)', xboxPrice)
    console.log(v + ' (disprice)', discountPrice)
  }
  await browser.close()
})()
