<template>
  <hr />

  <h2>자주하는 질문</h2>
  <div class="qna-body">
    <div>
      <a href="#" class="aa">Steam은 어떻게 설치하나요 ?</a>
    </div>
    <div>
      <a href="#">Gamesgate는 어떻게 설치하나요 ?</a>
    </div>
    <div>
      <a href="#">Greengaming은 어떻게 설치하나요 ?</a>
    </div>
    <div>
      <a href="#">Dreamgame은 어떻게 설치하나요 ?</a>
    </div>
    <div>
      <a href="#">활성화 키를 받으려면 계정을 만들어야 하나요 ?</a><br />
    </div>
    <div>
      <a href="#">확인 메일을 받지 못했습니다.</a>
    </div>
    <div>
      <a href="#">비밀번호는 어떻게 변경하나요 ?</a>
    </div>
    <div>
      <a href="#">이메일은 어떻게 변경하나요 ?</a>
    </div>
    <div>
      <a href="#">내 계정 삭제하는 방법</a>
    </div>
    <div>
      <a href="#">게임이 작동하지 않습니다.</a>
    </div>
    <div>
      <a href="#">게임키란 ?</a>
    </div>
    <div>
      <a href="#">지불 방법</a>
    </div>
    <div>
      <a href="#">게임주문을 환불/취소할 수 있나요 ?</a>
    </div>
    <div>
      <a href="#">게임키란 ?</a>
    </div>
  </div>
  <div class="btn-circle">
    <button class="circle"></button>
  </div>
  <div class="modal-background hide">
    <div class="modal-box">
      모달 테스트
      <span><a href="#" class="x">X</a></span>
    </div>
  </div>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      dada: "",
    };
  },
  mounted: function () {
    const button = document.querySelector(".circle");
    const modal = document.querySelector(".modal-background");
    const x = document.querySelector(".x");
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
    x.addEventListener("click", () => {
      modal.style.display = "none";
    });
  },
  methods: {},
};
</script>

<style>
.btn-circle {
  bottom: 0;
  position: fixed;
  left: 750px;
  width: 100%;
}
.btn-circle button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.qna-body {
  border: 1px solid #fff;
}
.hide {
  display: none;
}
.modal-box {
  position: absolute;
  top: 280px;
  left: calc(50vw - 200px);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 390px;
  height: 550px;
  margin-left: 650px;
  color: black;
  position: fixed;
}
.x {
  font-size: 30px;
  margin-left: 200px;
  color: black;
}
.x:hover {
  color: black;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: #d4d4d4;
}
</style>
