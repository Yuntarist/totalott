<template>
  <hr />
  <div class="container">
    <h2>Login</h2>
    <form>
      <div class="form-item">
        <span class="material-icons-outlined"> account_circle </span>
        <input type="text" id="user" placeholder="아이디" required />
      </div>

      <div class="form-item">
        <span class="material-icons-outlined"> lock </span>
        <input type="password" id="pass" placeholder="비밀번호" required />
      </div>

      <button type="submit">LOGIN</button><br />
      <div class="find-login">
        <a href="#">아이디 / 비밀번호찾기</a>
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

<style>
body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  /* background: rgba(0, 0, 0, 0.61); */
}

/* .background {
    background: rgba(0, 0, 0, 0.61);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    filter: blur(5px);
    min-height: 800px;
  } */

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 500px;
  margin: 10vh auto;
  background: transparent;
  box-shadow: 0 0 15px rgb(255, 255, 255);
  border-radius: 25px;
}
h2 {
  font-size: 30px;
}

form {
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 85%;
}
.form-item {
  display: flex;
  width: 90%;
  background: transparent;
  margin: 10px auto;
  border-radius: 15px;
  align-items: center;
  border-bottom: 1px solid white;
}
.form-item:hover {
  border: 1px solid white;
}
input {
  background: transparent;
  width: 80%;
  height: 30px;
  outline: none;
  border: none;
  margin: auto;
  color: white;
  font-size: 17px;
}

span {
  user-select: none;
  margin: 5px;
  color: rgb(172, 172, 172);
  background: rgba(85, 81, 81, 0.637);
  padding: 5px;
  border-radius: 18px;
}
button[type='submit'] {
  width: 180px;
  font-size: 20px;
  margin: 10px auto;
  padding: 8px;
  background: rgba(160, 160, 158, 0.72);
  border: none;
  color: white;
}
button[type='submit']:hover {
  background: rgba(228, 225, 225, 0.678);
}
p:first-of-type {
  margin: 0;
}
.options {
  display: flex;
  margin: 10px auto;
  justify-content: center;
  flex-wrap: wrap;
}
button {
  font-size: 18px;
  padding: 5px 16px;
  margin: 5px 15px;
  width: 180px;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.7s ease;
}
.fb:hover {
  background: rgba(55, 53, 207, 0.637);
  border: none;
  box-shadow: 0 0 2px rgba(55, 53, 207, 0.637);
}
.gl:hover {
  background: rgba(207, 53, 53, 0.671);
  border: none;
  box-shadow: 0 0 2px rgba(207, 53, 53, 0.671);
}

p {
  font-size: 18px;
  margin: 5px;
}
a {
  color: white;
}
a:hover {
  color: grey;
}

@media screen and (max-width: 550px) {
  .container {
    width: 90%;
  }
}
input::placeholder {
  color: rgb(255, 250, 247);
}
.new-login {
  font-size: 15px;
}
</style>
