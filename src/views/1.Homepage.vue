<template>
  <div class="background">
    <hr />
    <img src="../assets/TRIFlogo.png" id="Homelogo" />
    <div>We are TRIF</div>
    <div id="txt1">
      <div>
        당신이 하고싶은 <span>게임</span><br />
        여러개의 <span>플랫폼</span><br />
        <div><span> 할인폭</span> 지금 바로 확인</div>
      </div>
    </div>
    <br />
    <div id="txt2">간단하게 검색하고 빠르게 조회하실 수 있습니다</div>
    <div id="txt2">실시간으로 가장 큰 할인폭을 확인하세요</div>
    <br />
    <button id="btn" @click="move">START</button>
    <!-- 버튼 왼쪽에도 마크 추가하기 -->
    <div>배경사진 1 = 어두운 곳에서 게임하는 게이머의 뒷모습</div>
    <div>배경사진 편집하기</div>
    <img src="../assets/steam.png" id="steam" />
    <img src="../assets/xbox.png" id="xbox" />
    <img src="../assets/gamersgate.png" id="gamersgate" />
    <img src="../assets/greenmangaming.png" id="greenmangaming" />
    <img src="../assets/dreamgame.png" id="dreamgame" />
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    move: function () {
      window.location.href = "./about2";
    },
  },
};
</script>

<style>
body {
  background-color: #1b1b1b;
  background-size: cover;
}
.background {
  background-image: url("C:/Users/ds/Desktop/totalott/src/assets/홈페이지백그라운드화면.png");
  background-size: cover;
  width: auto;
  height: 800px;
}
div {
  color: white;
  font-weight: bold;
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
}
#txt2 {
  color: gray;
}
span {
  color: skyblue;
}
#Homelogo {
  width: 100px;
  height: 100px;
}
#steam {
  width: 100px;
  height: 100px;
}
#epic {
  width: 100px;
  height: 100px;
}
#xbox {
  width: 250px;
  height: 100px;
}
#gamersgate {
  width: 100px;
  height: 100px;
}
#greenmangaming {
  width: 130px;
  height: 130px;
}
#dreamgame {
  width: 100px;
  height: 100px;
}
</style>
