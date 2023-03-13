<template>
  <hr />
  <button class="loginbtn" @click="move1" v-if="screen_true">로그인</button>
  <button class="newaccountbtn" @click="move2" v-if="screen_true">
    회원가입
  </button>
  <div class="login-user" v-if="screen_false">{{ user }}님</div>
  <button class="cookies_delete" @click="mypage" v-if="screen_false">
    마이페이지
  </button>
  <button class="cookies_delete" @click="del()" v-if="screen_false">
    로그아웃
  </button>
  <br />
  <br />
  <br />

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
      screen_true: true,
      screen_false: false,
    };
  },
  mounted() {
    axios.get("/main", this.user).then((res) => {
      this.user = res.data;
      if (res.data.length >= 1) {
        console.log(this.user);
        this.screen_true = false;
        this.screen_false = true;
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
        this.screen_true = true;
        this.screen_false = false;
      });
    },
    mypage: function () {
      window.location.href = "/about6";
    },
  },
};

// 2.mainpage에 새로고침시 다시 로딩을 하지 않고 기존 데이터가 나올 수 있도록 만들기
</script>

<style src="../assets/2.Mainpage.css"></style>
