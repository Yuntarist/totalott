<template>
  <div>vue로작성하기</div>
  <form action="" method="post">
    <video id="video0"></video>
    <input type="text" v-model="idruselt" placeholder="아이디를 입력하세요" />
    <input type="text" v-model="pwruselt" placeholder="비밀번호를 입력하세요" />
    <button @click="main()">제출</button>
  </form>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      idruselt: '',
      pwruselt: ''
    }
  },
  methods: {
    main: async function () {
      axios({
        url: 'http://localhost:3000/',
        method: 'POST', // 전송방식을 post로 지정
        data: {
          idruselt: this.idruselt,
          pwruselt: this.pwruselt
        }
      }).then((res) => {
        alert(res.data.message)
      })
    }
  }
}
</script>

<style>
.video0 {
  width: 300px;
  height: 300px;
}
</style>
