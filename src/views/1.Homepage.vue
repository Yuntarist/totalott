<template>
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

  <div>이름정하기 / 로고 만들기 / 왼쪽 상단에 버튼 추가하기</div>
  <div>배경사진 1 = 어두운 곳에서 게임하는 게이머의 뒷모습</div>
  <img src="../assets/steam.png" id="steam" />
  <img src="../assets/epic.png" id="epic" />
  <img src="../assets/xbox.png" id="xbox" />
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
      window.location.href = './2.About.vue'
    }
  }
}
</script>

<style>
body {
  background-image: url('D:\yhs\PROJECT_FIN\totalott\src\assets\gamer.jpg');
  background-color: #1b1b1b;
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
</style>
