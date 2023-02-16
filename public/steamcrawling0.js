const puppeteer = require('puppeteer-core')
// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  [
    'steam',
    'https://store.steampowered.com/search/?specials=1&filter=topsellers&supportedlang=english&ndl=1'
  ] // 스팀 탑셀러 + 할인중인 항목 필터 걸어놓은 링크
  // ['epicgames', 'https://store.epicgames.com/ko/collection/top-sellers'], // 에픽 게임즈 탑셀러
  // ['xbox', 'https://www.xbox.com/ko-kr/games/all-games?cat=pcgames'] // xbox pc 게임 탑셀러
])
const steam_titles = []
const steam_price = []
const steam_discount_percent = []
const steam_discount_price = []
exports.ax =async () => {
  let steam = []
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  // puppeteer는 비동기 함수이므로 모든 것에 async await가 들어가야함.
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe', // 각자의 컴퓨터에 설치 되어있는 크롬의 경로를 적을것. \금지
    // headless: false
  })
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0); 
  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap.keys()
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap.get(v)
    await page.goto(url)

    // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
    await page.waitForSelector('a:nth-child(1)') // 위치지정 - copy css selector
    for (let i = 1; i < 19; i++) {
      const title = await page.$eval(
        // 게임이름
        'a:nth-child(' + i + ') div.col.search_name.ellipsis span.title', // 위치지정 - copy css selector
        (x) => x.innerHTML // 이게 뭔지 모르겠는데 없으면 작동안됨.
      )
      const price = await page.$eval(
        // 할인되기 전 정가
        'a:nth-child(' +
          i +
          ') div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_price.discounted.responsive_secondrow span strike',
        (x) => x.innerHTML
      )
      const discount_percent = await page.$eval(
        // 할인율
        'a:nth-child(' +
          i +
          ') div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_discount.responsive_secondrow span',
        (x) => x.innerHTML
      )
      const discount_price = await page.$eval(
        // 할인가
        'a:nth-child(' +
          i +
          ') div.responsive_search_name_combined div.col.search_price_discount_combined.responsive_secondrow div.col.search_price.discounted.responsive_secondrow',
        (x) => x.innerHTML
      )

      // title안에 있는 nth-child(?)를 하나씩 증가 시킬 때 나오는 title의 이름이 변함.
      // console.log(v, ':', title) // 여기서 v는  urlMap의 키값을 나타낸다.

      // const discount_price2 = push(discount_price)
      // console.log(discount_price2)

      steam_titles.push(title) // 추출 한 값들을 각 배열에 집어넣음.
      steam_price.push(price)
      steam_discount_percent.push(discount_percent)
      steam_discount_price.push(discount_price.substr(-28, 9))
      // steam_discount_price2.push(steam_discount_price.substr(-15))
      // 이름 / 정가 / 할인율 / 할인금액
      // (플랫폼)titles,(플랫폼)price,(플랫폼)discountPercent,(플랫폼)discountPrice
    }
    for(let j= 0; j<10; j++){
      const game = `${'게임 명: '+ steam_titles[j] +'할인률: '+steam_discount_percent[j] +'원가 : ' + steam_price[j]+ '할인가 : ' +steam_discount_price[j]}  <br>`
      steam.push(game)
    }
    console.log(steam)
  }
  await browser.close()
  return steam
 
}

// 상위 20개만 다른사이트로 해보기
// for 문을 돌려 한개만 나오는 것이 아닌 다른 게임들도 나올 수 있도록 해야 한다.
// 1,2,3 파일합치기 / 뷰로 옮기기 /
// 금액과 할인금액역시 나타낼 수 있도록 만들기
