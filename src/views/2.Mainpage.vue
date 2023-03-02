<template>
  <hr />
  <button class="loginbtn" @click="move1">로그인</button>
  <button class="newaccountbtn" @click="move2">회원가입</button>
  <br />
  <br />
  <br />
  <br />
  <br />
  <!-- <div class="all">{{ all }}</div> -->
  <div class="steam">{{ steam }}</div>
  <div class="steam_title">{{ steam_title }}</div>
  <div class="gamersgate">{{ gamersgate }}</div>
  <div class="greenmangaming">{{ greenmangaming }}</div>
  <div class="dream">{{ dream }}</div>
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
      gamersgate: '',
      greenmangaming: '',
      dream: ''
    }
  },
  mounted() {
    axios.all([
      axios.get('steam' + this.steam).then((res) => (this.steam = res.data))
    ]),
      axios
        .get('steam_title' + this.steam_title)
        .then((res) => (this.steam_title = res.data)),
      axios
        .get('gamersgate' + this.gamersgate)
        .then((res) => (this.gamersgate = res.data)),
      axios
        .get('greenmangaming' + this.greenmangaming)
        .then((res) => (this.greenmangaming = res.data)),
      axios.get('dream' + this.dream).then((res) => (this.dream = res.data))
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
