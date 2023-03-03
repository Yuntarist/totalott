<template>
  <div>
    <h2>아이디 찾기</h2>
  </div>
  <div>이메일</div>
  <div>
    <input type="text" v-model="email" id="useremail" />
    <button class="esub" @click="submit()">확인</button>
    <p class="emailAddress Emsg">이메일 주소를 입력하세요</p>
    <p>{{ findid }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      email: "",
      findid: "",
    };
  },
  mounted: function () {
    const email = document.querySelector("#useremail");
    const msg = document.querySelector(".Emsg");
    const esub = document.querySelector(".esub");

    function emailuser() {
      if (email.value == "") {
        msg.style.display = "block";
      } else {
        msg.style.display = "none";
      }
    }
    email.addEventListener("click", emailuser);
    email.addEventListener("keyup", emailuser);

    esub.addEventListener("click", () => {
      if (email.value == "") {
        msg.style.display = "none";
      } else {
        msg.style.display = "none";
      }
    });
  },
  methods: {
    submit: function () {
      axios.get("/about5/" + this.email).then((res) => {
        if (res.data.result === 1) {
          this.findid = "존재하지 않는 회원입니다.";
        } else {
          alert("인증되었습니다.");
          this.findid = "찾으시는 아이디는 :" + res.data + " 입니다";
        }
      });
    },
  },
};
</script>

<style>
.Emsg {
  display: none;
}
</style>
