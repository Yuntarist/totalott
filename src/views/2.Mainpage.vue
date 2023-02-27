<template>
  <hr />
  <button class="loginbtn" @click="move1">로그인</button>
  <button class="newaccountbtn" @click="move2">회원가입</button>
  <br />
  <br />
  <input class="searchBar" type="text" placeholder="검색" />
  <br />
  <br />
  <div class="item">{{ read() }}</div>
  <!--form @submit 도 -->
  <!-- v-once를 위에다 추가하면 계속해서 로딩만 됨. -->
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
// import puppeteer from 'puppeteer-core'
export default {
  name: 'app',
  data() {
    return {
      number: '',
      read: ''
    }
  },
  // created() {
  //   this.number = `<div class="spinner-border text-info" role="status"></div><br /`
  //   axios.get('/about2').then((res) => {
  //     this.number = res.data
  //     console.log(res)
  //   })
  // },
  methods: {
    move1: function () {
      window.location.href = './about3'
    },
    move2: function () {
      window.location.href = './about4'
    },
    read: function () {
      this.read = '로딩중...'
      axios.get('/read/' + this.read).then((res) => (this.read = res.data))
    }
  }
}

// 2.mainpage에 새로고침시 다시 로딩을 하지 않고 기존 데이터가 나올 수 있도록 만들기
// 각 플랫폼별 사이에 밑줄 긋기
</script>

<style src="../assets/2.Mainpage.css"></style>
