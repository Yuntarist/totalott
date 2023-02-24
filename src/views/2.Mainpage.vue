<template>
  <hr />
  <button class="loginbtn" @click="move1">로그인</button>
  <button class="newaccountbtn" @click="move2">회원가입</button>
  <br />
  <br />
  <br />
  <input class="searchBar" type="text" placeholder="검색" />
  <div class="item" v-html="number"></div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
// import puppeteer from 'puppeteer-core'
export default {
  name: "app",
  data() {
    return {
      number: "",
    };
  },
  created() {
    this.number = `<div class="spinner-border text-info" role="status"></div>정보를 불러오는 중`;
    axios.get("/about2").then((res) => {
      this.number = res.data;
      console.log(res);
    });
  },
  methods: {
    move1: function () {
      window.location.href = "./about3";
    },
    move2: function () {
      window.location.href = "./about4";
    },
  },
};

// 2.mainpage에 새로고침시 다시 로딩을 하지 않고 기존 데이터가 나올 수 있도록 만들기
</script>

<style src="../assets/2.Mainpage.css"></style>
