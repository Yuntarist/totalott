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
      <p>{{ data2 }}</p>
      <button class="loginpagebtn" @click="read()">LOGIN</button><br />
      <button @click="login()">LOGIN</button><br />
      <h1>{{ data3 }}</h1>

      <div class="find-login">
        <a href="./about5">아이디 / 비밀번호찾기</a>
      </div>
      <br />
      <p class="new-login">
        계정이 없으신가요? <a href="#"> Create an Account</a>
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
      data2: "",
    };
  },
  methods: {
    read: function () {
      this.data2 = "DB 데이터 읽는중...";
      axios
        .post("/about3/" + this.loginid)
        .then((res) => {
          this.data2 = alert(res.data);
          window.location.href = "/about2";
        })
        .catch((err) => {
          this.data2 = alert(err.data);
        });
>>>>>>> 6d506c5a199aa592b9f4f86ad96c313e73bbd1a2
    },
  },
};
</script>

<style src="../assets/3.Loginpage.css"></style>
