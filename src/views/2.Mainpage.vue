<template>
  <hr />
  <button class="loginbtn" @click="move1">로그인</button>
  <button class="newaccountbtn" @click="move2">회원가입</button>
  <br />
  <br />
  <br />
  <br />
  <br />
  <!-- v-html을 이용할 경우 DB안에 저장된 HTML태그도 적용되는걸 확인할 수 있다
  DB에 들어가는 것들에 전부 a태그를 넣어 모달창을 실행할 수 있도록 해볼것 230307. -->
  <div class="steam_title" v-html="steam_title + steam"></div>
  <!-- <div class="steam" v-html="steam"></div> -->
  <!-- <div class="gamersgate_title" v-html="gamersgate_title"></div>
  <div class="gamersgate">{{ gamersgate }}</div>
  <div class="greenmangaming_title" v-html="greenmangaming_title"></div>
  <div class="greenmangaming">{{ greenmangaming }}</div>
  <div class="dream_title" v-html="dream_title"></div>
  <div class="dream">{{ dream }}</div> -->
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      steam: '',
      steam_title: '',
      gamersgate_title: '',
      gamersgate: '',
      greenmangaming_title: '',
      greenmangaming: '',
      dream_title: '',
      dream: ''
    }
  },
  mounted() {
    axios.all([
      axios
        .get('steam_title' + this.steam_title)
        .then((res) => (this.steam_title = res.data.replaceAll(',', ''))),
      // 마지막의 res.data에 편집가능
      axios
        .get('steam' + this.steam)
        .then((res) => (this.steam = res.data.replaceAll(',', ''))),
      axios
        .get('gamersgate_title' + this.gamersgate_title)
        .then((res) => (this.gamersgate_title = res.data)),
      axios
        .get('gamersgate' + this.gamersgate)
        .then((res) => (this.gamersgate = res.data)),
      axios
        .get('greenmangaming_title' + this.greenmangaming_title)
        .then((res) => (this.greenmangaming_title = res.data)),
      axios
        .get('greenmangaming' + this.greenmangaming)
        .then((res) => (this.greenmangaming = res.data)),
      axios
        .get('dream_title' + this.dream_title)
        .then((res) => (this.dream_title = res.data)),
      axios.get('dream' + this.dream).then((res) => (this.dream = res.data))
    ])
  },
  methods: {
    move1: function () {
      window.location.href = './about3'
    },
    move2: function () {
      window.location.href = './about4'
    }
  }
}
</script>
<style src="../assets/2.Mainpage.css"></style>
