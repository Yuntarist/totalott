<template>
  <hr />
  <br />
  <br />
  <br />
  <div id="txt1">
    <div>
      이 웹사이트 에서는 <br />
      대표적인 플랫폼의 <br />
      영화와 드라마의 <br />
      <div><span>랭킹</span>을 확인하실 수 있습니다!</div>
    </div>
  </div>
  <br />
  <div id="txt2">간단하게 검색하고 빠르게 조회하실 수 있습니다</div>
  <br />
  <button id="btn" @click="move">통합 OTT 플레이 하기!</button>
  <!-- 버튼 왼쪽에도 마크 추가하기 -->
  <div>
    플랫폼에 관계없이 사람들이 가장 많이 본 영화와 드라마를 확인 하세요!
  </div>
  <div>모든 배경 색상은 #1b1b1b로 통일.</div>
  <div>폰트 바꾸기 및 글자 크기 조정</div>
  <div>이름정하기 / 로고 만들기 / 왼쪽 상단에 버튼 추가하기</div>
  <div>배경 사진을 만들어 보기</div>
  <div>배경사진 1 = 마블로고지나가는것처럼 여러 포스터 겹쳐놓기</div>
  <div>배경사진 2 = 로고 여러개 넷플릭스 디즈니 티빙등등</div>
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
  background-color: #1b1b1b;
}
div {
  color: #fff;
  font-weight: bold;
}
#btn {
  width: 900px;
  height: 80px;
  background-color: skyblue;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
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
</style>
