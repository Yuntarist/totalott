<template>
  <hr />
  <div class="container">
    <h2>Login</h2>
    <form>
      <div class="form-item">
        <span class="material-icons-outlined"> account_circle </span>
        <input
          v-model="loginid"
          class="login-input"
          type="text"
          id="user"
          placeholder="아이디"
          required
        />
      </div>
      <div class="form-item">
        <span class="material-icons-outlined"> lock </span>
        <input
          v-model="loginpwd"
          class="login-input"
          type="password"
          id="pass"
          placeholder="비밀번호"
          required
          autoComplete="off"
        />
      </div>
      <p>{{ data3 }}</p>
      <button class="loginpagebtn" @click="read()">LOGIN</button><br />
      <div class="find-login">
        <a href="./about5">아이디 / 비밀번호찾기</a>
      </div>
      <br />
      <p class="new-login">
        계정이 없으신가요? <a href="./about4"> Create an Account</a>
      </p>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      loginid: "",
      loginpwd: "",
      data3: "",
    };
  },
  methods: {
    read: function () {
      this.data3 = "DB 데이터 읽는중...";
      axios
        .post("/about3", {
          logininid: this.loginid,
          logininpwd: this.loginpwd,
        })
        .then((res) => {
          if (res.data.result === 1) {
            window.location.href = "/about2";
            alert(this.loginid + "님이 로그인하셨습니다.");
          } else if (res.data.result === 0) {
            window.location.href = "/about3";
            alert("아이디가 존재하지 않습니다.");
          } else if (res.data.result === 2) {
            window.location.href = "/about3";
            alert("비밀번호가 틀렸습니다.");
          }
        });
    },
  },
};
</script>

<style src="../assets/3.Loginpage.css"></style>
