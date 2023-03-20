<template>
  <div class="pwf-head">회원정보에 등록된 정보로 찾을 수 있습니다.</div>
  <div class="pwf-box1">
    <span class="pwf-span">아이디 </span>
    <input type="text" v-model="ididfind" class="pwf-input1" />
  </div>
  <div class="pwf-box2">
    <span class="pwf-span">이메일 </span>
    <input type="text" v-model="emailfind2" class="pwf-input2" />
    <button @click="pwdfind()" class="pwf-btn">확인</button>
  </div>
  <p class="pwf-p">임시비밀번호 :{{ passcome }}</p>
  <button class="cookies_delete" @click="mypage">메인페이지</button>
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
        .post("/about5up", {
          email: this.emailfind2,
          id: this.ididfind,
          passcome: this.passcome,
        })
        .then((res) => {
          if (res.data.result === 0) {
            console.log(res);
            this.passcome = "존재하지 않는 회원입니다.";
          } else if (res.data.result === 2) {
            this.passcome = "아이디 찾기를 해주세요.";
          } else {
            this.passcome = res.data;
          }
        });
    },
    mypage: function () {
      window.location.href = "/about2";
    },
  },
};
</script>

<style scoped>
/* .pwf-span {
    position: absolute;
  } */
.pwf-head {
  padding: 20px;
}
.pwf-input1 {
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 2.5px;
  margin-bottom: 20px;
}
.pwf-input2 {
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 2.5px;
  margin-bottom: 20px;
}
.pwf-p {
  padding-bottom: 20px;
}
.pwf-btn {
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  color: #888;
  border: 2px solid #888;
  background: #ddd;
  padding: 8px 5px;
}
.pwf-box1 {
  margin-right: 60px;
}
.pwf-box2 {
  margin-right: 10px;
}
</style>
