<template>
  <div>회원정보에 등록된 정보로 찾을 수 있습니다.</div>
  아이디 : <input type="text" v-model="ididfind" /><br />
  이메일 : <input type="text" v-model="emailfind2" />
  <button @click="pwdfind()">비번찾기!</button>
  <p>임시비밀번호 :{{ passcome }}</p>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return { emailfind2: "", ididfind: "", passcome: "" };
  },
  methods: {
    pwdfind() {
      axios
        .post("/pwdfind", {
          idid: this.ididfind,
          email2: this.emailfind2,
          passcome: this.passcome,
        })
        .then((res) => {
          if (res.data.result === 0) {
            this.passcome = "존재하지 않는 회원입니다.";
          } else if (res.data.result === 2) {
            this.passcome = "아이디 찾기를 해주세요.";
          } else {
            this.passcome = res.data;
          }
        });
    },
  },
};
</script>

<style></style>
