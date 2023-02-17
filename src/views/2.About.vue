<template>
  <hr />
  <button @click="move1">로그인</button>
  <button @click="move2">회원가입</button>
  <div>이벤트 모달 창 만들고 이름과 전화번호 주소 몽고DB로 저장하기.</div>
  <div v-html="number"></div>
  <h1>
    문구 고치기 - 크롤링중에서 로딩중으로 고치기 <br />
    로딩중일때 스피너 돌아갈 수 있도록 만들기
  </h1>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      number: ''
    }
  },
  mounted() {
    this.number = '할인정보를 불러오는중...'
    axios.get('/about1').then((res) => {
      this.number = res.data
    })
  },
  methods: {
    move1: function () {
      window.location.href = './about3'
    },
    move2: function () {
      window.location.href = './about4'
    }
  }
}
</script>

<style></style>
