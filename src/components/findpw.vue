<template>
  <div>
    <h2>비밀번호 찾기</h2>
  </div>
  <div>비밀번호를 찾으려 하는 아이디</div>
  <br />
  <div>
    <input id="find" type="text" v-model="fid" />
    <button class="psub" @click="submit()">확인</button>
    <p class="userid imsg">아이디를 입력하세요.</p>
    <p>{{ findpwd }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      fid: "",
      findpwd: "",
    };
  },
  mounted: function () {
    const password = document.querySelector("#find");
    const msg = document.querySelector(".imsg");
    const sub = document.querySelector(".psub");

    function userId() {
      if (password.value == "") {
        msg.style.display = "block";
      } else {
        msg.style.display = "none";
      }
    }
    password.addEventListener("click", userId);
    password.addEventListener("keyup", userId);

    sub.addEventListener("click", () => {
      if (password.value == "") {
        msg.style.display = "none";
      } else {
        msg.style.display = "none";
      }
    });
  },
  methods: {
    submit: function () {
      axios.get("/about5/" + this.fid).then((res) => {
        if (res.data.result === 1) {
          this.findpwd = "존재하지 않는 아이디입니다.";
        } else {
          alert("인증되었습니다");
        }
      });
    },
  },
};
</script>

<style>
.imsg {
  display: none;
}
</style>
