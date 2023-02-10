<template>
  <hr />
  <br />
  <br />
  <br />
  <div id="txt1">
    이곳에선 플랫폼 상관없이 모든 영화 드라마의 랭킹을 확인할 수 있습니다!
  </div>
  <br />
  <button id="btn" @click="move">통합 OTT 플레이 하기!</button>
  <div>
    플랫폼에 관계없이 사람들이 가장 많이 본 영화와 드라마를 확인 하세요!
  </div>
  <div>모든 배경 색상은 #1b1b1b로 통일.</div>
  <div>폰트 바꾸기 및 글자 크기 조정</div>
  <div>이름정하기 / 로고 만들기 / 왼쪽 상단에 버튼 추가하기</div>
  <div>배경 사진을 만들어 보기</div>
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
}
#btn {
  width: 900px;
  height: 40px;
  background-color: skyblue;
  border-radius: 10px;
}
#btn:hover {
  background-color: rgb(112, 158, 175);
}
#txt1 {
  font-size: 45px;
}
</style>
