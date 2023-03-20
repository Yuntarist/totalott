<template>
  <br />
  <div class="login-user">{{ user }}님의 페이지</div>
  <button class="cookies_delete" @click="mypage">메인페이지</button>
  <br />
  <br />
  <h3>판매량 높은 게임들의 다음할인율 예측하기</h3>
  <h5>분석에 시간이 걸리니 잠시 기다려 주세요</h5>
  <br />
  <div class="mainpage">
    <div class="reddead">
      <img src="../assets/레데리2.jpg" class="red_dead_redemtion_2_img" />
      <span class="reddeadtxt"> 이 게임의 다음 예상 할인 값:</span>
      <button class="reddeadbtn" @click="tensor1">분석시작</button>
      <br />
      <span id="result1"></span>
    </div>
    <br />
    <br />
    <br />
    <div class="PUBG">
      <img src="../assets/배틀그라운드.png" class="PUBG_img" />
      <span class="PUBGtxt"> 이 게임의 다음 예상 할인 값:</span>
      <button @click="tensor2" class="PUBGbtn">분석시작</button>
      <br />
      <span id="result2"></span>
    </div>
    <br />
    <br />
    <br />
    <div class="SKYRIM">
      <img src="../assets/스카이림로고.png" class="Sky_rim_img" />
      <span class="SKYRIMtxt"> 이 게임의 다음 예상 할인 값:</span>
      <button @click="tensor3" class="SKYRIMbtn">분석시작</button>
      <br />
      <span id="result3"></span>
    </div>
    <br />
    <br />
    <br />
    <div class="DARKSOUL">
      <img src="../assets/다크소울3.jpg" class="Dark_soul_3_img" />
      <span class="DARKSOULtxt"> 이 게임의 다음 예상 할인 값:</span>
      <button @click="tensor4" class="DARKSOULbtn">분석시작</button>
      <br />
      <span id="result4"></span>
    </div>
    <br />
    <br />
    <br />
    <div class="Terraria">
      <img src="../assets/terraria.jpg" class="Terraria_img" />
      <span class="Terrariatxt"> 이 게임의 다음 예상 할인 값:</span>
      <button @click="tensor5" class="Terrariabtn">분석시작</button>
      <br />
      <span id="result5"></span>
    </div>
    <br />
  </div>
</template>

<script>
/* eslint-disable */
// import tf from '@tensorflow'
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      user: '',
      screen_true: true,
      screen_false: false,
      red_dead_redemtion_2_price: [
        59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99,
        59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99,
        59.99, 59.99, 59.99, 59.99
      ],
      red_dead_redemtion_2_discount_price: [
        19.79, 19.79, 19.79, 19.79, 29.99, 29.99, 29.99, 29.99, 29.99, 29.99,
        29.99, 29.99, 29.99, 29.99, 29.99, 40.19, 40.19, 40.19, 40.19, 40.19,
        40.19, 40.19, 40.19, 40.19
      ],
      PUBG_price: [
        29.99, 29.99, 29.99, 29.99, 29.99, 29.99, 29.99, 29.99, 29.99, 29.99,
        29.99, 29.99, 29.99, 29.99, 29.99, 29.99
      ],
      PUBG_discount_price: [
        14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 29.99, 29.99, 29.99,
        29.99, 29.99, 29.99, 29.99, 29.99, 29.99
      ],
      Sky_rim_price: [
        39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99,
        39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99,
        39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99,
        39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99, 39.99
      ],
      Sky_rim_discount_price: [
        9.99, 9.99, 9.99, 9.99, 13.19, 13.19, 15.99, 15.99, 15.99, 13.19, 13.19,
        15.99, 15.99, 19.99, 15.99, 15.99, 15.99, 15.99, 13.19, 15.99, 19.99,
        19.99, 19.99, 13.19, 19.99, 23.99, 23.99, 19.99, 23.99, 23.99, 19.99,
        19.99, 19.99, 19.99, 19.99, 19.99, 19.99, 19.99, 19.99
      ],
      Dark_Soul_3_price: [
        59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99,
        59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99,
        59.99, 59.99, 59.99, 59.99
      ],
      Dark_soul_3_discount_price: [
        14.99, 29.99, 14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 9.99,
        14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 14.99, 14.99,
        14.99, 14.99, 14.99, 14.99
      ],
      Terraria_price: [
        9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99,
        9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99,
        9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99, 9.99,
        9.99, 9.99, 9.99, 29.99, 29.99, 29.99, 29.99, 9.99, 9.99, 9.99, 9.99,
        9.99, 9.99
      ],
      Terraria_discount_price: [
        4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99,
        4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 4.99, 6.99,
        4.99, 4.99, 4.99, 4.99, 4.99, 5.99, 4.99, 5.99, 5.99, 4.99, 5.99, 5.99,
        7.49, 7.49, 7.49, 29.99, 29.99, 29.99, 29.99, 4.99, 6.69, 3.39, 3.39,
        7.49, 2.49
      ],
      onedollar: 0
    }
  },
  mounted() {
    axios.get('/main', this.user).then((res) => {
      this.user = res.data
      if (res.data.length >= 1) {
        console.log(this.user)
      }
    })
  },
  methods: {
    mypage: function () {
      window.location.href = '/about2'
    },
    // red_dead_redemtion_2
    tensor1() {
      let red_dead_redemtion_2 = document.getElementById('result1')
      let kv = 59.99
      let xt = tf.tensor(this.red_dead_redemtion_2_price)
      let yt = tf.tensor(this.red_dead_redemtion_2_discount_price)
      console.log(xt)
      let X = tf.input({ shape: [1] })
      let Y = tf.layers.dense({ units: 1 }).apply(X)
      let model = tf.model({ inputs: X, outputs: Y })
      let compileParam = {
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
      }
      model.compile(compileParam)
      model.summary()
      const fitParm = {
        epochs: 3000 // 연산횟수
      }
      const my = tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          let real_result = await result.arraySync()
          let real_result11 = Math.floor(real_result)
          const url =
            'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              const mydata = real_result11 * data[0].basePrice
              red_dead_redemtion_2.textContent = `이 게임의 다음 예상 값은 ${Math.floor(
                mydata
              ).toLocaleString('ko-KR')} 원입니다.`
              console.log(mydata)
            })
        })()
      })
    },
    // PUBG
    tensor2() {
      let PUBG = document.getElementById('result2')
      let kv = 29.99
      let xt = tf.tensor(this.PUBG_price)
      let yt = tf.tensor(this.PUBG_discount_price)
      console.log(xt)
      let X = tf.input({ shape: [1] })
      let Y = tf.layers.dense({ units: 1 }).apply(X)
      let model = tf.model({ inputs: X, outputs: Y })
      let compileParam = {
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
      }
      model.compile(compileParam)
      model.summary()
      const fitParm = {
        epochs: 3000 // 연산횟수
      }
      const my = tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          let real_result = await result.arraySync()
          let real_result11 = Math.floor(real_result)
          const url =
            'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              const mydata = real_result11 * data[0].basePrice
              PUBG.textContent = `이 게임의 다음 예상 값은 ${Math.floor(
                mydata
              ).toLocaleString('ko-KR')} 원입니다.`
              console.log(mydata)
            })
        })()
      })
    },
    // Sky_rim
    tensor3() {
      let Sky_rim = document.getElementById('result3')
      let kv = 39.99
      let xt = tf.tensor(this.Sky_rim_price)
      let yt = tf.tensor(this.Sky_rim_discount_price)
      console.log(xt)
      let X = tf.input({ shape: [1] })
      let Y = tf.layers.dense({ units: 1 }).apply(X)
      let model = tf.model({ inputs: X, outputs: Y })
      let compileParam = {
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
      }
      model.compile(compileParam)
      model.summary()
      const fitParm = {
        epochs: 3000 // 연산횟수
      }
      const my = tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          let real_result = await result.arraySync()
          let real_result11 = Math.floor(real_result)
          const url =
            'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              const mydata = real_result11 * data[0].basePrice
              Sky_rim.textContent = `이 게임의 다음 예상 값은 ${Math.floor(
                mydata
              ).toLocaleString('ko-KR')} 원입니다.`
              console.log(mydata)
            })
        })()
      })
    },
    // Dark_soul_3
    tensor4() {
      let Dark_soul_3 = document.getElementById('result4')
      let kv = 59.99
      let xt = tf.tensor(this.Dark_Soul_3_price)
      let yt = tf.tensor(this.Dark_soul_3_discount_price)
      console.log(xt)
      let X = tf.input({ shape: [1] })
      let Y = tf.layers.dense({ units: 1 }).apply(X)
      let model = tf.model({ inputs: X, outputs: Y })
      let compileParam = {
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
      }
      model.compile(compileParam)
      model.summary()
      const fitParm = {
        epochs: 3000 // 연산횟수
      }
      const my = tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          let real_result = await result.arraySync()
          let real_result11 = Math.floor(real_result)
          const url =
            'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              const mydata = real_result11 * data[0].basePrice
              Dark_soul_3.textContent = `이 게임의 다음 예상 값은 ${Math.floor(
                mydata
              ).toLocaleString('ko-KR')} 원입니다.`
              console.log(mydata)
            })
        })()
      })
    },
    // Terraria
    tensor5() {
      let Terraria = document.getElementById('result5')
      let kv = 9.99
      let xt = tf.tensor(this.Terraria_price)
      let yt = tf.tensor(this.Terraria_discount_price)
      console.log(xt)
      let X = tf.input({ shape: [1] })
      let Y = tf.layers.dense({ units: 1 }).apply(X)
      let model = tf.model({ inputs: X, outputs: Y })
      let compileParam = {
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
      }
      model.compile(compileParam)
      model.summary()
      const fitParm = {
        epochs: 3000 // 연산횟수
      }
      const my = tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          let real_result = await result.arraySync()
          let real_result11 = Math.floor(real_result)
          const url =
            'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              const mydata = real_result11 * data[0].basePrice
              Terraria.textContent = `이 게임의 다음 예상 값은 ${Math.floor(
                mydata
              ).toLocaleString('ko-KR')} 원입니다.`
              console.log(mydata)
            })
        })()
      })
    }
  }
}
</script>

<style scoped src="../assets/6.Suggest.css"></style>
