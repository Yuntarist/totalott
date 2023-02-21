const puppeteer = require('puppeteer-core')

// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  [
    'steam',
    'https://store.steampowered.com/search/?specials=1&filter=topsellers&supportedlang=english&ndl=1'
  ], // 스팀 탑셀러 + 할인중인 항목 필터 걸어놓은 링크
  [
    'gamersgate',
    'https://www.gamersgate.com/games/?price_discounted=on&platform=pc'
  ],
  ['greenmangaming', 'https://www.greenmangaming.com/ko/all-games/on-sale/'],
  ['dream', 'https://www.dreamgame.com/en/games?orderby=30'],
  ['xbox', 'https://www.xbox.com/ko-kr/games/all-games?cat=onsale']
])
const steam_title = []
const steam_price = []
const steam_discount_percent = []
const steam_discount_price = []

let steam = []
let gamersgate = []
let greenmangaming = []
let dreamgame = []
let xbox = []

exports.ax = async () => {
  ;(async () => {
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
    let urlKeys = urlMap.keys()
    console.log(urlKeys) //Map 전체 배열의 값
    let urlKeys1 = urlKeys.next() //next를 사용하면 그안에 원하는 배열을 사용가능(단,순서대로)
    let urlv1 = urlKeys1.value
    console.log(urlv1) //원하는 객체값

    var url1 = urlMap.get(urlv1) //그객체의 url만 출력
    console.log(url1)
    await page.goto(url1) //원하는 객체 url 사이트를 음...읽어준다?

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
      let game1 = `<div>${
        'steam : ' +
        steam_title[j] +
        '할인률: ' +
        steam_discount_percent[j] +
        '원가 : ' +
        steam_price[j] +
        '할인가 : ' +
        steam_discount_price[j]
      }</div>`
      steam.push(game1)
    }
    // console.log(steam_title);
    // console.log(steam_price);
    // console.log(steam_discount_percent);
    // console.log(steam_discount_price);
    //css수정하기

    //gamegate 시작
    const gamersgate_title = []
    const gamersgate_price = []
    const gamersgate_discount_percent = []
    const gamersgate_discount_price = []

    // gamegate url 출력값
    let urlKeys2 = urlKeys.next()
    let urlv2 = urlKeys2.value
    let url2 = urlMap.get(urlv2)
    console.log(url2)
    await page.goto(url2)
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
    // console.log(gamersgate_title);
    // console.log(gamersgate_price);
    // console.log(gamersgate_discount_percent);
    // console.log(gamersgate_discount_price);

    for (let j = 0; j < 10; j++) {
      const game2 = `<div>${
        'gamersgate : ' +
        gamersgate_title[j] +
        '할인률: ' +
        gamersgate_discount_percent[j] +
        '원가 : ' +
        gamersgate_price[j] +
        '할인가 : ' +
        gamersgate_discount_price[j]
      }</div>`
      gamersgate.push(game2)
    }

    //greenman 시작
    const greenmangaming_title = []
    const greenmangaming_price = []
    const greenmangaming_discount_percent = []
    const greenmangaming_discount_price = []

    //greenman url 출력값
    let urlKeys3 = urlKeys.next()
    let urlv3 = urlKeys3.value
    let url3 = urlMap.get(urlv3)
    console.log(url3)
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
      let game3 = `<div>${
        'greenmangaming : ' +
        greenmangaming_title[j] +
        '할인률: ' +
        greenmangaming_discount_percent[j] +
        '원가 : ' +
        greenmangaming_price[j] +
        '할인가 : ' +
        greenmangaming_discount_price[j]
      }</div>`
      greenmangaming.push(game3)
    }

    //dream 시작
    const dream_title = []
    const dream_price = []
    const dream_discount_percent = []
    const dream_discount_price = []

    //dreamgame url 출력값
    let urlKeys4 = urlKeys.next()
    let urlv4 = urlKeys4.value
    let url4 = urlMap.get(urlv4)
    console.log(url4)
    await page.goto(url4)

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
    // console.log(dream_title);
    // console.log(dream_price);
    // console.log(dream_discount_percent);
    // console.log(dream_discount_price);

    for (let j = 0; j < 10; j++) {
      let game4 = `<div>${
        'dreamgame : ' +
        dream_title[j] +
        '할인률: ' +
        dream_discount_percent[j] +
        '원가 : ' +
        dream_price[j] +
        '할인가 : ' +
        dream_discount_price[j]
      }</div> `
      dreamgame.push(game4)
    }

    //xbox 시작
    const xboxTitle = []
    const xboxPrice = []
    const discountPrice = []

    //xbox url 출력값
    let urlKeys5 = urlKeys.next()
    let urlv5 = urlKeys5.value
    let url5 = urlMap.get(urlv5)
    console.log(url5)
    await page.goto(url5)

    await page.waitForSelector(
      '#ContentBlockList_1 > div.thecatalog > div.gameList > div.gameDivsWrapper > div:nth-child(4)'
    )
    for (let i = 4; i < 24; i++) {
      const title = await page.$eval(
        // $eval() 첫번째 인자로는 선택자를( $() 에 넣던 선택자 ), 두번째인자로는 콜백함수를 받게 된다.
        'div:nth-child(' + i + ') > a > div > h3',
        (x) => x.innerHTML
      )
      // console.log(v, ":", title);
      xboxTitle.push(title)
    }

    // 정가
    for (let i = 4; i < 24; i++) {
      const price = await page.$eval(
        'div:nth-child(' + i + ') > a > div > div > s',
        (x) => x.innerHTML
      )
      // console.log(v, ":", price);
      xboxPrice.push(price.substr(40)) // substr 글자 잘라내는 코드
    }

    // 할인가
    // console.log(xboxTitle)
    // console.log(xboxPrice)
    // console.log(discountPrice)

    for (let j = 0; j < 10; j++) {
      let game5 = `<div>${
        'xbox : ' +
        dream_title[j] +
        '할인률: ' +
        dream_discount_percent[j] +
        '원가 : ' +
        dream_price[j] +
        '할인가 : ' +
        dream_discount_price[j]
      }</div>  <br>`
      xbox.push(game5)
    }

    await browser.close()
  })()
  let gameworld = steam + gamersgate + greenmangaming + dreamgame + xbox
  return gameworld.replace(/,/g, '') //배열
}
// 상위 20개만 다른사이트로 해보기
// for 문을 돌려 한개만 나오는 것이 아닌 다른 게임들도 나올 수 있도록 해야 한다.
// 1,2,3 파일합치기 / 뷰로 옮기기 /
// 금액과 할인금액역시 나타낼 수 있도록 만들기
