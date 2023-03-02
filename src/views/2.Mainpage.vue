<template>
  <hr />
  <button @click="move1">로그인</button>
  <button @click="move2">회원가입</button>
  <div>이벤트 모달 창 만들고 이름과 전화번호 주소 몽고DB로 저장하기.</div>
  <div class="dtd">{{ dtd }}</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      dtd: "",
    };
  },
  // mounted() {
  //   axios.get("./about2" + this.dtd).then((res) => (this.dtd = res.data));
  // },
  methods: {
    move1: function () {
      window.location.href = "./about3";
    },
    move2: function () {
      window.location.href = "./about4";
    },
  },
};
</script>

<style src="../assets/2.Mainpage.css"></style>
