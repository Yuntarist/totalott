<template>
  <hr />
  <div class="containers">
    <h2>회원가입</h2>
    <form class="form">
      <div class="form-element">
        <input class="inputHeight" id="id" placeholder="아이디" required />
        <button>중복확인</button>
      </div>

      <div class="form-element">
        <input
          class="inputHeight"
          type="password"
          id="password"
          placeholder="비밀번호"
          required
        />
      </div>

      <div class="form-element">
        <input
          class="inputHeight"
          type="password"
          id="password2"
          placeholder="비밀번호 확인"
          required
        />
      </div>
      <div class="form-element">
        <input
          class="inputHeight"
          id="eamiladdress"
          placeholder="이메일 주소"
          required
        />
      </div>
      <div class="form-element">
        <input class="inputHeight" id="name" placeholder="이름" required />
      </div>
      <div class="form-element">
        <input
          class="inputHeight"
          id="nickname"
          placeholder="닉네임"
          required
        />
        <button>중복확인</button>
      </div>
      <div class="form-element">
        <input
          class="inputHeight"
          type="tel"
          id="phoneNum"
          placeholder="휴대폰"
          required
        />
      </div>
      <div class="form-element">
        <input class="inputHeight" id="address" placeholder="주소" required />
        <button>우편번호 검색</button>
      </div>
      <br />
      <div class="user-informaton">
        <input type="checkbox" /> (필수) 개인정보 수집 및 이용 동의서
      </div>
      <br />
      <div>
        <button>회원가입</button>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {}
}
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
button[type='submit'] {
  width: 180px;
  font-size: 20px;
  margin: 10px auto;
  padding: 8px;
  background: rgba(160, 160, 158, 0.72);
  border: none;
  color: white;
}
button {
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
