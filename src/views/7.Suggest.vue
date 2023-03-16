<template>
  <br />
  <div class="mainpage">
    <img src="../assets/images.jpg" class="reddeadredemtion_img" />
    <span> 이 게임의 다음 예상 할인 값:</span>
    <button @click="tensor1">분석시작</button>
    <br />
    <span id="result1"></span>
  </div>
</template>

<script>
/* eslint-disable */
// import tf from '@tensorflow'
export default {
  name: 'app',
  data() {
    return {
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
      onedollar: 0,
      red: 0
    }
  },
  methods: {
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
    }
  }
}
</script>

<style></style>
