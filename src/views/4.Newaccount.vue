<template>
  <hr />
  <div class="containers">
    <h2>회원가입</h2>
    <form class="form">
      <div class="form-element">
        <input
          v-model="ID"
          class="inputHeight"
          id="id"
          placeholder="아이디"
          required
        />
        <button class="bt">중복확인</button>
      </div>
      <div v-if="!Username">
        영문 대소문자, 숫자를사용하여 4~16자 이내로 사용 가능
      </div>
      <div class="form-element">
        <input
          v-model="pwd"
          class="inputHeight"
          type="password"
          id="password"
          placeholder="비밀번호"
          required
        />
      </div>
      <div v-if="!Password">
        영문 대소문자, 숫자, 특수문자 중 3가지 이상을 포함해 8자리 이상 입력
      </div>
      <div class="form-element">
        <input
          v-model="pwd2"
          class="inputHeight"
          type="password"
          id="password2"
          placeholder="비밀번호 확인"
          required
        />
      </div>
      <div class="form-element">
        <input
          v-model="email"
          class="inputHeight"
          id="eamiladdress"
          placeholder="이메일 주소"
          required
        />
      </div>
      <br />
      <div class="user-informaton">
        <input type="checkbox" required /> (필수) 개인정보 수집 및 이용 동의서
      </div>
      <br />
      <div>
        <button @click="submit">작성완료</button>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
import * as mongoose from "mongoose";
// import * as mongodb from 'mongodb'
export default {
  name: "app",
  data() {
    return { ID: "", pwd: "", pwd2: "", email: "" };
  },
  computed: {
    Username: function () {
      const usernameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
      return this.ID.match(usernameRegex) !== null;
    },
    Password: function () {
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      return this.pwd.match(passwordRegex) !== null;
    },
  },
  methods: {
    submit: function () {
      let dtd = {
        IDdtd: this.ID,
        pwddtd: this.pwd,
        pwd2dtd: this.pwd2,
        emaildtd: this.email,
      };
      axios.post("./about4", dtd);
    },
  },
};
</script>

<style>
.containers {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  width: 700px;
  margin: 10vh auto;
  background: transparent;
  box-shadow: 0 0 15px rgb(255, 255, 255);
  border-radius: 25px;
  height: 800px;
}
.form {
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 85%;
}
.form-element {
  display: flex;
  width: 90%;
  background: transparent;
  margin: 10px auto;
  border-radius: 15px;
  align-items: center;
  border-bottom: 1px solid white;
}
.form-element:hover {
  border: 1px solid white;
}
.inputHeight {
  background: transparent;
  width: 80%;
  height: 50px;
  outline: none;
  border: none;
  margin: auto;
  color: white;
  font-size: 17px;
}
input::placeholder {
  color: rgb(165, 164, 164);
}
/* span {
  user-select: none;
  margin: 5px;
  color: rgb(172, 172, 172);
  background: rgba(85, 81, 81, 0.637);
  padding: 5px;
  border-radius: 18px;
} */
button[type="submit"] {
  width: 180px;
  font-size: 20px;
  margin: 10px auto;
  padding: 8px;
  background: rgba(160, 160, 158, 0.72);
  border: none;
  color: white;
}
.bt {
  font-size: 18px;
  padding: 5px 16px;
  margin: 5px 15px;
  width: 180px;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.7s ease;
}
</style>
<!-- <template>
  <div>vue로작성하기</div>
  <form action="">
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
        url: 'http://localhost:3000/about4',
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
</style> -->
