<template>
  <hr />
  <div>아이디 찾기</div>
  이메일 : <input type="text" v-model="emailfind" />
  <button @click="idfind()">아이디찾기!</button>
  <p>아이디 : {{ emailcome }}</p>
  <div>비밀번호 찾기</div>
  아이디 : <input type="text" v-model="ididfind" /><br />
  이메일 : <input type="text" v-model="emailfind2" />
  <button @click="pwdfind()">비번찾기!</button>
  <p>임시비밀번호 :{{ passcome }}</p>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      emailfind: "",
      emailcome: "",
      emailfind2: "",
      ididfind: "",
      passcome: "",
    };
  },
  methods: {
    idfind() {
      axios.post("/about5/" + this.emailfind).then((res) => {
        if (res.data.result === 1) {
          this.emailcome = "존재하지 않는 회원입니다.";
        } else {
          this.emailcome = res.data;
        }
      });
    },
    pwdfind() {
      axios
        .post("/about5up", {
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
