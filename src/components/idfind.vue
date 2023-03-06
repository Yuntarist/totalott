<template>
  <div class="idf-doc">회원정보에 등록된 정보로 찾을 수 있습니다.</div>
  <span class="idf-span">이메일 :</span
  ><input class="idf-input" type="text" v-model="emailfind" />
  <button @click="idfind()">확인</button>
  <p class="idf-p">아이디 : {{ emailcome }}</p>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return { emailcome: "", emailfind: "" };
  },
  methods: {
    idfind() {
      axios.post("/about5/" + this.emailfind).then((res) => {
        if (res.data.result === 1) {
          this.emailcome = "존재하지 않는 회원입니다.";
        } else {
          this.emailcome = res.data;
        }
      });
    },
  },
};
</script>

<style>
.idf-doc {
  padding: 10px;
}
.idf-input {
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 1px solid #eee;
  border-radius: 2.5px;
}
.idf-p {
  padding: 10px;
}
.idf-span {
  font-size: 20px;
}
</style>
