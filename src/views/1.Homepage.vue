<template>
  <div class="background">
    <hr />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div id="homepageTitle">
      We are <span id="title1">T</span><span id="title2">R</span
      ><span id="title3">I</span><span id="title4">F</span>
    </div>
    <div>
      <div id="txt1">
        당신이 찾는 <span id="spanstyle">게임</span><br />
        여러개의 <span id="spanstyle">플랫폼</span><br />
        <div><span id="spanstyle"> 할인폭</span> 지금 바로 확인</div>
      </div>
    </div>
    <br />
    <div id="txt2">간단하게 검색하고 빠르게 조회하실 수 있습니다</div>
    <div id="txt2">실시간으로 가장 큰 할인폭을 확인하세요</div>
    <br />
    <button id="btn" @click="move">START</button>
    <br />
    <br />
    <img src="../assets/TRIFlogo.png" id="triflogo" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
  <footer>
    <!-- 플랫폼 로고들 밑으로 내리기 -->
    <img src="../assets/steam.png" id="steam" />
    <img src="../assets/xbox.png" id="xbox" />
    <img src="../assets/gamersgate.png" id="gamersgate" />
    <img src="../assets/greenmangaming.png" id="greenmangaming" />
    <img src="../assets/dreamgame.png" id="dreamgame" />
  </footer>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    move: function () {
      window.location.href = './about2'
    }
  }
}
</script>

<style>
#triflogo {
  width: 150px;
  height: 150px;
}
#homepageTitle {
  font-size: 50px;
  color: white;
  text-shadow: -1px 0 #1b1b1b, 0 1px #1b1b1b, 1px 0 #1b1b1b, 0 -1px #1b1b1b;
}
body {
  background-color: #1b1b1b;
  background-size: cover;
}
.background {
  background-image: url('D:/yhs/PROJECT_FIN/totalott/src/assets/홈페이지백그라운드화면.jpg');
  background-size: cover;
  width: auto;
  height: 800px;
}
div {
  /* color: #1b1b1b; */
  font-weight: bold;
  /* text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white; */
}
#btn {
  width: 600px;
  height: 80px;
  background-color: skyblue;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
  color: white;
}
#btn:hover {
  background-color: rgb(112, 158, 175);
}
#txt1 {
  font-size: 45px;
  color: #1b1b1b;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
#txt2 {
  color: white;
}
#spanstyle {
  color: skyblue;
  text-shadow: -1px 0 #1b1b1b, 0 1px #1b1b1b, 1px 0 #1b1b1b, 0 -1px #1b1b1b;
}
#steam {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
#epic {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
#xbox {
  width: 250px;
  height: 70px;
  margin-left: 10px;
  margin-bottom: 20px;
}
#gamersgate {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
#greenmangaming {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
#dreamgame {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
#title1 {
  color: blue;
}
#title2 {
  color: red;
}
#title3 {
  color: yellow;
}
#title4 {
  color: white;
}
</style>
