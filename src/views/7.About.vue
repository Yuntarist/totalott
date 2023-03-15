<template>
  <br />
  이 게임의 다음 예상 할인 값: <input type="number" id="key" />
  <button @click="bun">분석시작</button>
  <div id="son_key"></div>
</template>

<script>
/* eslint-disable */
// import tf from '@tensorflow'
export default {
  name: 'app',
  data() {
    return {
      father: [
        59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99,
        59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99, 59.99,
        59.99, 59.99, 59.99, 59.99
      ],
      son: [
        19.79, 19.79, 19.79, 19.79, 29.99, 29.99, 29.99, 29.99, 29.99, 29.99,
        29.99, 29.99, 29.99, 29.99, 29.99, 40.19, 40.19, 40.19, 40.19, 40.19,
        40.19, 40.19, 40.19, 40.19
      ]
    }
  },
  methods: {
    bun() {
      console.log(this.father)
      console.log(this.son)
      let key = document.getElementById('key')
      let son_key = document.getElementById('son_key')
      let kv = Number(key.value)
      let xt = tf.tensor(this.father)
      let yt = tf.tensor(this.son)
      console.log(xt)
      let X = tf.input({ shape: [1] })
      let Y = tf.layers.dense({ units: 1 }).apply(X)
      let model = tf.model({ inputs: X, outputs: Y })
      tfvis.show.modelSummary({ name: 'Model Summary' }, model)
      let compileParam = {
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError
      } // 최적화의 loss 측정방법종류
      model.compile(compileParam)
      model.summary()
      const fitParm = {
        epochs: 1000,
        callbacks: tfvis.show.fitCallbacks(
          { name: 'Training Performance' },
          ['loss', 'mse'],
          { height: 200, callbacks: ['onEpochEnd'] }
        )
      }
      const my = tf.tensor([kv])
      model.fit(xt, yt, fitParm).then((_) => {
        ;(async function () {
          let result = model.predict(my)
          const real_result = await result.arraySync() // 텐서를 다시 배열로 만듬
          son_key.textContent = `아들의 예상키는 ${real_result}$입니다.`
        })()
      })
    }
  }
}
</script>

<style></style>
