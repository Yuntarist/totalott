<template>
  <hr />
  <div class="container">
    <h2>Login</h2>
    <form>
      <div class="form-item">
        <span class="material-icons-outlined"> account_circle </span>
        <input
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
          class="login-input"
          type="password"
          id="pass"
          placeholder="비밀번호"
          required
        />
      </div>

      <button class="loginpagebtn" type="submit">LOGIN</button><br />
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
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style src="../assets/3.Loginpage.css"></style>
