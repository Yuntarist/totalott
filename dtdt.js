const axios = require('axios') // request 용도
const cheerio = require('cheerio') // 선택자용도

const url = 'https://store.steampowered.com/charts/topselling/KR'
axios.get(url).then((res) => {
  let title = []
  let pricecut = []
  let currentprice = []
  let regularprice = []

  let $ = cheerio.load(res.data)
  $(
    'document.querySelector("#pageContent > section:nth-child(2) > table > tbody > tr:nth-child(17) > td:nth-child(1) > a")'
  ).each(function () {
    title.push($(this).text())
  }),
    $('<td class="t-st3__num">0%</td>').each(function () {
      pricecut.push($(this).text())
    }),
    $('<td class="t-st3__price s-low">$59.99</td>').each(function () {
      currentprice.push($(this).text())
    }),
    $('<td data-tab-content="prices" class="t-st3__price">$59.99</td>').each(
      function () {
        regularprice.push($(this).text())
      }
    )
  console.log(
    '플랫폼:' + title,
    '할인율:' + pricecut,
    '할인가:' + currentprice,
    '정가:' + regularprice
  )
})
