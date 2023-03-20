<template>
  <!-- <nav>
    <router-link to="/">1.홈페이지</router-link> |
    <router-link to="/about2">2.메인(노드서버 킬것)</router-link> |
    <router-link to="/about3">3.로그인</router-link> |
    <router-link to="/about4">4.회원가입</router-link> |
    <router-link to="/about5">5.아이디 & 비밀번호 찾기</router-link> |
    <router-link to="/about6">6.예측 할인</router-link> |
    <router-link to="/about7">7.예측 할인</router-link> |
    <router-link to="/about8">8.Q & A</router-link> |
  </nav> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: white;
}
nav a.router-link-exact-active {
  color: grey;
}
</style>
