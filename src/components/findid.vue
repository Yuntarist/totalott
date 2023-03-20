<template>
  <div class="idf-doc">회원정보에 등록된 정보로 찾을 수 있습니다.</div>
  <span class="idf-span">이메일</span
  ><input class="idf-input" type="text" v-model="emailfind" />
  <button @click="idfind()" class="idf-btn">확인</button>
  <p class="idf-p">아이디 : {{ emailcome }}</p>
  <button class="cookies_delete" @click="mypage">메인페이지</button>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return { emailcome: "", emailfind: "" };
  },
  methods: {
    idfind() {
      axios.post("/about5", { email: this.emailfind }).then((res) => {
        if (res.data.result === 1) {
          this.emailcome = "존재하지 않는 회원입니다.";
        } else {
          this.emailcome = res.data;
        }
      });
    },
    mypage: function () {
      window.location.href = "/about2";
    },
  },
};
</script>

<style>
.idf-doc {
  padding: 20px;
}
.idf-input {
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 2.5px;
}
.idf-p {
  padding: 10px;
}
.idf-span {
  margin: 5px;
  padding: 5px;
}
.idf-btn {
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  color: #888;
  border: 2px solid #888;
  background: #ddd;
  padding: 8px 5px;
}
</style>
