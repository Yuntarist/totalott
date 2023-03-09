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
  <div class="steam">
    <div>steam</div>
    <div v-html="steam_title"></div>
    <div v-html="steam_price"></div>
    <div v-html="steam_discount_percent"></div>
    <div v-html="steam_discount_price"></div>
  </div>
  <div class="gamersgate">
    <div>gamersgate</div>
    <div v-html="gamersgate_title"></div>
    <div v-html="gamersgate_price"></div>
    <div v-html="gamersgate_discount_percent"></div>
    <div v-html="gamersgate_discount_price"></div>
  </div>
  <div class="greenmangaming">
    <div>greenmangaming</div>
    <div v-html="greenmangaming_title"></div>
    <div v-html="greenmangaming_price"></div>
    <div v-html="greenmangaming_discount_percent"></div>
    <div v-html="greenmangaming_discount_price"></div>
  </div>
  <div class="dream">
    <div>Dream</div>
    <div v-html="dream_title"></div>
    <div v-html="dream_price"></div>
    <div v-html="dream_discount_percent"></div>
    <div v-html="dream_discount_price"></div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      steam_title: '',
      steam_price: '',
      steam_discount_percent: '',
      steam_discount_price: '',
      gamersgate_title: '',
      gamersgate_price: '',
      gamersgate_discount_percent: '',
      gamersgate_discount_price: '',
      greenmangaming_title: '',
      greenmangaming_price: '',
      greenmangaming_discount_percent: '',
      greenmangaming_discount_price: '',
      dream_title: '',
      dream_price: '',
      dream_discount_percent: '',
      dream_discount_price: ''
    }
  },
  mounted() {
    /* 멀티 리퀘스트 */
    axios.all([
      /* steam */
      axios
        .get('steam_title' + this.steam_title)
        .then((res) => (this.steam_title = res.data.replaceAll(',', ''))),
      // 마지막의 res.data에 편집가능
      axios
        .get('steam_price' + this.steam_price)
        .then((res) => (this.steam_price = res.data.replaceAll(',', ''))),
      axios
        .get('steam_discount_percent' + this.steam_discount_percent)
        .then(
          (res) => (this.steam_discount_percent = res.data.replaceAll(',', ''))
        ),
      axios
        .get('steam_discount_price' + this.steam_discount_price)
        .then(
          (res) => (this.steam_discount_price = res.data.replaceAll(',', ''))
        ),
      /* gamersgate */
      axios
        .get('gamersgate_title' + this.gamersgate_title)
        .then((res) => (this.gamersgate_title = res.data.replaceAll(',', ''))),
      axios
        .get('gamersgate_price' + this.gamersgate_price)
        .then((res) => (this.gamersgate_price = res.data.replaceAll(',', ''))),
      axios
        .get('gamersgate_discount_percent' + this.gamersgate_discount_percent)
        .then(
          (res) =>
            (this.gamersgate_discount_percent = res.data.replaceAll(',', ''))
        ),
      axios
        .get('gamersgate_discount_price' + this.gamersgate_discount_price)
        .then(
          (res) =>
            (this.gamersgate_discount_price = res.data.replaceAll(',', ''))
        ),
      /* greenmangaming */
      axios
        .get('greenmangaming_title' + this.greenmangaming_title)
        .then(
          (res) => (this.greenmangaming_title = res.data.replaceAll(',', ''))
        ),
      axios
        .get('greenmangaming_price' + this.greenmangaming_price)
        .then(
          (res) => (this.greenmangaming_price = res.data.replaceAll(',', ''))
        ),
      axios
        .get(
          'greenmangaming_discount_percent' +
            this.greenmangaming_discount_percent
        )
        .then(
          (res) =>
            (this.greenmangaming_discount_percent = res.data.replaceAll(
              ',',
              ''
            ))
        ),
      axios
        .get(
          'greenmangaming_discount_price' + this.greenmangaming_discount_price
        )
        .then(
          (res) =>
            (this.greenmangaming_discount_price = res.data.replaceAll(',', ''))
        ),
      /* dream */
      axios
        .get('dream_title' + this.dream_title)
        .then((res) => (this.dream_title = res.data.replaceAll(',', ''))),
      axios
        .get('dream_price' + this.dream_price)
        .then((res) => (this.dream_price = res.data.replaceAll(',', ''))),
      axios
        .get('dream_discount_percent' + this.dream_discount_percent)
        .then(
          (res) => (this.dream_discount_percent = res.data.replaceAll(',', ''))
        ),
      axios
        .get('dream_discount_price' + this.dream_discount_price)
        .then(
          (res) => (this.dream_discount_price = res.data.replaceAll(',', ''))
        )
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
