<template>
  <hr />
  <button class="loginbtn" @click="move1">로그인</button>
  <button class="newaccountbtn" @click="move2">회원가입</button>
  <button class="cookies_delete" @click="del()">로그아웃</button>
  <br />
  <br />
  <br />
  <div class="login-user">{{ user }}님 환영합니다.</div>
  <input class="searchBar" type="text" placeholder="검색" />
  <div class="dtd">{{ dtd }}</div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      dtd: "",
      user: "",
    };
  },
  mounted() {
    axios.get("/main", this.user).then((res) => {
      this.user = res.data;
      if (this.user === res.data) {
        console.log(this.user);
        // let loginbtn = document.querySelector(".loginbtn");
        // let newaccountbtn = document.querySelector(".newaccountbtn");
        // loginbtn.style.display = "none";
        // newaccountbtn.style.display = "none";
        let loginuser = document.querySelector(".login-user");
        let del = document.querySelector(".cookies_delete");
        loginuser.style.display = "block";
        del.style.display = "block";
      } else {
        console.log(this.user);
        let loginbtn = document.querySelector(".loginbtn");
        let newaccountbtn = document.querySelector(".newaccountbtn");
        loginbtn.style.display = "block";
        newaccountbtn.style.display = "block";
        let loginuser = document.querySelector(".login-user");
        let del = document.querySelector(".cookies_delete");
        loginuser.style.display = "none";
        del.style.display = "none";
      }
    });
    axios.get("/about2" + this.dtd).then((res) => (this.dtd = res.data));
  },
  methods: {
    move1: function () {
      window.location.href = "/about3";
    },
    move2: function () {
      window.location.href = "/about4";
    },
    del: function () {
      axios.get("/delete", this.user).then((res) => {
        this.user = res.data;
      });
      let loginbtn = document.querySelector(".loginbtn");
      let newaccountbtn = document.querySelector(".newaccountbtn");
      loginbtn.style.display = "none";
      newaccountbtn.style.display = "none";
      let loginuser = document.querySelector(".login-user");
      let del = document.querySelector(".cookies_delete");
      loginuser.style.display = "none";
      del.style.display = "none";
    },
  },
};

// 2.mainpage에 새로고침시 다시 로딩을 하지 않고 기존 데이터가 나올 수 있도록 만들기
</script>

<style src="../assets/2.Mainpage.css"></style>
