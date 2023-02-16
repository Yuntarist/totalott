<template>
  <hr />
  <div>이벤트 모달 창 만들고 이름과 전화번호 주소 몽고DB로 저장하기.</div>
  <div v-html="number"></div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      number: "",
    };
  },
  mounted() {
    this.number = "크롤링중...";
    axios.get("/about1").then((res) => {
      this.number = res.data;
    });
  },
  methods: {},
};
</script>

<style></style>
