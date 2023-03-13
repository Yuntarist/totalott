<template>
  <hr />
  <div class="login-user">{{ user }}님의 페이지</div>
  <div>할인 추천 목록</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    axios.get("/main", this.user).then((res) => {
      this.user = res.data;
      if (res.data.length >= 1) {
        console.log(this.user);
      }
    });
  },
  methods: {},
};
</script>

<style></style>
