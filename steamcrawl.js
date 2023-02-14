const puppeteer = require('puppeteer-core')

// 각 원자재 이름과 URL 정보가 있는 MAP을 생성
const urlMap = new Map([
  ['steam', 'https://store.steampowered.com/search/?filter=topsellers'] // 스팀 탑셀러
  // ['epicgames', 'https://store.epicgames.com/ko/collection/top-sellers'], // 에픽 게임즈 탑셀러
  // ['xbox', 'https://www.xbox.com/ko-kr/games/all-games?cat=pcgames'] // xbox pc 게임 탑셀러
])
;(async () => {
  // puppeteer 실행 (puppeteer-core가 아닌 puppeteer를 설치하면 내장 크로미움으로 실행되므로 executablePath 설정 불필요)
  // puppeteer는 비동기 함수이므로 모든 것에 async await가 들어가야함.
  const browser = await puppeteer.launch({
    executablePath:
      'C:/Users/ds/AppData/Local/Google/Chrome/Application/chrome.exe' // 각자의 컴퓨터에 설치 되어있는 크롬의 경로를 적을것. \금지
    //,headless : false
  })
  const page = await browser.newPage()
  // url map에서 Key 값을 가져와서 반복문 실행
  let urlKeys = urlMap.keys()
  for (var v of urlKeys) {
    // map에 저장된 url 가져와서 순차적으로 방문
    var url = urlMap.get(v)
    await page.goto(url)

    // 가격 보여지는 DIV가 페이지 나타나면, 가격 값을 가져 옴
    await page.waitForSelector('a:nth-child(1)') // 위치지정 - copy css selector
    for (let i = 1; i < 21; i++) {
      const title = await page.$eval(
        'a:nth-child(' + i + ') div.col.search_name.ellipsis span.title', // 위치지정 - copy css selector
        (x) => x.innerHTML // 이게 뭔지 모르겠는데 없으면 작동안됨.
      )
      // title안에 있는 nth-child(2)를 하나씩 증가 시킬 때 나오는 title의 이름이 변함.
      console.log(v, ':', title)
    }
  }
  await browser.close()
})()
// 상위 20개만 다른사이트로 해보기
// async await 지우기
// for 문을 돌려 한개만 나오는 것이 아닌 다른 게임들도 나올 수 있도록 해야 한다.
// 금액과 할인금액역시 나타낼 수 있도록 만들기
