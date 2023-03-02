const puppeteer = require('puppeteer-core')

const urlMap = new Map([
  [
    'steam',
    'https://store.steampowered.com/search/?specials=1&filter=topsellers&supportedlang=english&ndl=1'
  ]
])

// steam 시작
const steam_title = []
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
      steam_title.push(title.replace('>', ''))
      steam_price.push(price.replace('>', ''))
      steam_discount_percent.push(discount_percent.replace('>', ''))
      steam_discount_price.push(discount_price.substr(-28, 9).replace('>', ''))
    }
    console.log(v + ' (title)', steam_title)
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
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe'
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
  /* 2.mongoDB에 저장하는 코드 */
  const mongoose = require('mongoose')

  const USER = 'dtd'
  const PWD = 123123
  const HOST = '127.0.0.1:27017'
  const DB = 'trif'
  const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

  mongoose.set('strictQuery', false) // 6.0 이후 권장사항
  mongoose
    .connect(mongodbURL, { useNewUrlParser: true })
    .then(() => console.log('connection successful'))
    .catch((err) => console.log(err))
  const maincrawling = require('./DB/maincrawling.js')
  module.exports = maincrawling

  const a1 = steam_title
  const aa1 = Object.values(a1)
  const a2 = steam_price
  const aa2 = Object.values(a2)
  const a3 = steam_discount_percent
  const aa3 = Object.values(a3)
  const a4 = steam_discount_price
  const aa4 = Object.values(a4)
  const a5 = []
  for (let i = 0; i < aa1.length; i++) {
    a5.push(aa1[i])
    a5.push(aa2[i])
    a5.push(aa3[i])
    a5.push(aa4[i])
  }
  // for (let i = 0; i < aa1.length; i++) {
  //   ;`<div><a href= "#">${a5.push(aa1[i])}</a>
  //   ${a5.push(aa2[i])}
  //   ${a5.push(aa3[i])}
  //   ${a5.push(aa4[i])}</div>`
  // }
  const b1 = gamersgate_title
  const bb1 = Object.values(b1)
  const b2 = gamersgate_price
  const bb2 = Object.values(b2)
  const b3 = gamersgate_discount_percent
  const bb3 = Object.values(b3)
  const b4 = gamersgate_discount_price
  const bb4 = Object.values(b4)
  const b5 = []
  for (let i = 0; i < aa1.length; i++) {
    b5.push(bb1[i])
    b5.push(bb2[i])
    b5.push(bb3[i])
    b5.push(bb4[i])
  }
  const c1 = greenmangaming_title
  const cc1 = Object.values(c1)
  const c2 = greenmangaming_price
  const cc2 = Object.values(c2)
  const c3 = greenmangaming_discount_percent
  const cc3 = Object.values(c3)
  const c4 = greenmangaming_discount_price
  const cc4 = Object.values(c4)
  const c5 = []
  for (let i = 0; i < aa1.length; i++) {
    c5.push(cc1[i])
    c5.push(cc2[i])
    c5.push(cc3[i])
    c5.push(cc4[i])
  }
  const d1 = dream_title
  const dd1 = Object.values(d1)
  const d2 = dream_price
  const dd2 = Object.values(d2)
  const d3 = dream_discount_percent
  const dd3 = Object.values(d3)
  const d4 = dream_discount_price
  const dd4 = Object.values(d4)
  const d5 = []
  for (let i = 0; i < aa1.length; i++) {
    d5.push(dd1[i])
    d5.push(dd2[i])
    d5.push(dd3[i])
    d5.push(dd4[i])
  }

  const main = async () => {
    const _data = {
      steam_title: `${a1}`,
      steam_price: `${a2}`,
      steam_discount_percent: `${a3}`,
      steam_discount_price: `${a4}`,
      steam_all: `${a5}`,
      gamersgate_title: `${b1}`,
      gamersgate_price: `${b2}`,
      gamersgate_discount_percent: `${b3}`,
      gamersgate_discount_price: `${b4}`,
      gamersgate_all: `${b5}`,
      greenmangaming_title: `${c1}`,
      greenmangaming_price: `${c2}`,
      greenmangaming_discount_percent: `${c3}`,
      greenmangaming_discount_price: `${c4}`,
      greenmangaming_all: `${c5}`,
      dream_title: `${d1}`,
      dream_price: `${d2}`,
      dream_discount_percent: `${d3}`,
      dream_discount_price: `${d4}`,
      dream_all: `${d5}`
    }
    const new_maincraling = new maincrawling(_data)
    const t = await new_maincraling.save()
    console.log(t)
  }
  main()
})()

// 백틱을 활용할것 근데 왜 됨?
