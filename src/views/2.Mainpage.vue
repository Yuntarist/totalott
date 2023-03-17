<template>
  <hr />
  <div class="mainpage">
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
    <button class="Q&A" @click="qa()">고객센터</button>
    <input class="searchBar" type="text" placeholder="검색" />

    <br />
    <br />
    <br />
    <br />
    <br />
    <h4 class="game_title_txt">게임 제목 클릭 시 구매 페이지로 이동합니다</h4>
    <div class="steam">
      <div id="steam">
        <img class="steam_logo" src="../assets/steam.png" /> <br />
        <p class="steam_logo_text">Steam</p>
      </div>
      <div v-html="steam_new_title"></div>
      <div v-html="steam_price"></div>
      <div v-html="steam_discount_percent"></div>
      <div v-html="steam_discount_price"></div>
    </div>
    <hr />
    <div class="gamersgate">
      <div id="gamersgate">
        <img class="gamersgate_logo" src="../assets/gamersgate.png" /> <br />
        <p class="gamersgate_logo_text">Gamersgate</p>
      </div>
      <div v-html="gamersgate_new_title"></div>
      <div v-html="gamersgate_price"></div>
      <div v-html="gamersgate_discount_percent"></div>
      <div v-html="gamersgate_discount_price"></div>
    </div>
    <hr />
    <div class="greenmangaming">
      <div id="greenmangaming">
        <img class="greenmangaming_logo" src="../assets/greenmangaming.png" />
        <br />
        <p class="greenmangaming_logo_text">Greenmangaming</p>
      </div>
      <div v-html="greenmangaming_new_title"></div>
      <div v-html="greenmangaming_price"></div>
      <div v-html="greenmangaming_discount_percent"></div>
      <div v-html="greenmangaming_discount_price"></div>
    </div>
    <hr />
    <div class="dream">
      <div id="dream">
        <img class="dream_logo" src="../assets/dreamgame.png" />
        <br />
        <p class="dream_logo_text">Dream</p>
      </div>
      <div v-html="dream_new_title"></div>
      <div v-html="dream_price"></div>
      <div v-html="dream_discount_percent"></div>
      <div v-html="dream_discount_price"></div>
    </div>
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
      // login관련
      user: '',
      screen_true: true,
      screen_false: false,
      // steam
      steam_new_title: '',
      steam_price: '',
      steam_discount_percent: '',
      steam_discount_price: '',
      // gamersgate
      gamersgate_new_title: '',
      gamersgate_price: '',
      gamersgate_discount_percent: '',
      gamersgate_discount_price: '',
      // greenmangaming
      greenmangaming_new_title: '',
      greenmangaming_price: '',
      greenmangaming_discount_percent: '',
      greenmangaming_discount_price: '',
      // dream
      dream_new_title: '',
      dream_price: '',
      dream_discount_percent: '',
      dream_discount_price: ''
    }
  },
  mounted() {
    /* 멀티 리퀘스트 */
    axios.all([
      // 쿠키관련
      axios.get('/main', this.user).then((res) => {
        this.user = res.data
        if (res.data.length >= 1) {
          console.log(this.user)
          this.screen_true = false
          this.screen_false = true
        }
      }),
      /* steam */
      axios
        .get('steam_new_title' + this.steam_new_title)
        .then((res) => (this.steam_new_title = res.data.replaceAll(',', ''))),
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
        .get('gamersgate_new_title' + this.gamersgate_new_title)
        .then(
          (res) => (this.gamersgate_new_title = res.data.replaceAll(',', ''))
        ),
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
            (this.gamersgate_discount_price = res.data
              .replaceAll('.', '')
              .replaceAll(',', ''))
        ),
      /* greenmangaming */
      axios
        .get('greenmangaming_new_title' + this.greenmangaming_new_title)
        .then(
          (res) =>
            (this.greenmangaming_new_title = res.data.replaceAll(',', ''))
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
        .get('dream_new_title' + this.dream_new_title)
        .then((res) => (this.dream_new_title = res.data.replaceAll(',', ''))),
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
    },
    qa: function () {
      window.location.href = './about8'
    },
    del: function () {
      axios.get('/delete', this.user).then((res) => {
        this.screen_true = true
        this.screen_false = false
        alert(this.user + '님이 로그아웃하셨습니다.')
      })
    },
    mypage: function () {
      window.location.href = '/about7'
    }
  }
}
</script>

<style src="../assets/2.Mainpage.css"></style>
