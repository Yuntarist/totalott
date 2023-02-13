const axios = require("axios"); //requset 보다 좀더 편리하고 기능이추가 사이트 끌어오기 용하다
const cheerio = require("cheerio"); //제이쿼리 문법을 살짝 묻힘 선택자용도
const url =
  "https://isthereanydeal.com/#/";
const url2 = 'https://isthereanydeal.com/#/page:game/info?plain=hogwartslegacy'
axios.get(url2).then((res) => {
  let rank = [];
  let left = [];

  let $ = cheerio.load(res.data);
  for (let i = 0; i <= 10; i++) {
   
    $(".noticeable").each(function () {
      rank.push($(this).text());
    });
    $("a.").each(function () {
      left.push($(this).text());
    });

    // console.log(`${rank[i]}`);
    console.log(`${left[i]}`);
  }

});
