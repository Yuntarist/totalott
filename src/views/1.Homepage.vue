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
    <!-- <img src="../assets/TRIFlogo.png" id="triflogo" /> -->
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
    <img src="../assets/gamersgate.png" id="gamersgate" />
    <img src="../assets/greenmangaming.png" id="greenmangaming" />
    <img src="../assets/dreamgame.png" id="dreamgame" />
  </footer>
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
      window.location.href = "/about2";
    },
  },
};
</script>

<style src="../assets/1.Homepage.css"></style>
