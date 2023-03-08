<template>
  <hr />

  <h1>자주하는 질문</h1>
  <div class="qna-body">
    <div>
      <details>
        <summary>
          <a href="#" class="alist">Steam은 어떻게 설치하나요 ?</a>
        </summary>
        <p>
          <a href="https://store.steampowered.com/about/" target="_blank"
            >스팀 설치 사이트</a
          >
        </p>
      </details>
    </div>
    <div>
      <a href="#" class="alist">Gamesgate는 어떻게 설치하나요 ?</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">Greengaming은 어떻게 설치하나요 ?</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">Dreamgame은 어떻게 설치하나요 ?</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist"
        >활성화 키를 받으려면 계정을 만들어야 하나요 ?</a
      >
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">확인 메일을 받지 못했습니다.</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">비밀번호는 어떻게 변경하나요 ?</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">이메일은 어떻게 변경하나요 ?</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">내 계정 삭제하는 방법</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">게임이 작동하지 않습니다.</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">게임키란 ?</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">지불 방법</a>
      <p></p>
    </div>
    <div>
      <a href="#" class="alist">게임주문을 환불/취소할 수 있나요 ?</a>
      <p></p>
    </div>
  </div>
  <div class="btn-circle">
    <div class="bt-add">
      <button class="circle" @click="dd"></button>
      <button class="circle2" @click="dd"></button>
    </div>
    <div class="modal-background hide">
      <div class="modal-box">
        <div>
          {{ date }}
          <br />
          <span>무엇을 도와드릴까요?</span>
          <p><button class="list-bt" @click="ds">도움말</button></p>
          <p><button class="list-bt" @click="da">dd</button></p>
          <p><button class="list-bt">dd</button></p>
          <p><button class="list-bt">dd</button></p>
          {{ test }}
        </div>
        <span class="xxx"><a href="#" class="x" @click="xx">X</a></span>
        <br />
      </div>
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
      date: "",
      test: "",
      steamdown: "",
    };
  },
  mounted: function () {
    const button = document.querySelector(".circle");
    const button2 = document.querySelector(".circle2");
    const modal = document.querySelector(".modal-background");
    const x = document.querySelector(".x");
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
    button2.addEventListener("click", () => {
      modal.style.display = "none";
    });
    x.addEventListener("click", () => {
      modal.style.display = "none";
    });
  },
  methods: {
    dd: function () {
      let today = new Date();
      var year = today.getFullYear();
      var month = ("0" + (today.getMonth() + 1)).slice(-2);
      var day = ("0" + today.getDate()).slice(-2);
      var dateString = year + "년" + month + "월" + day + "일";
      this.date = dateString;
    },
    ds: function () {
      this.test = "d";
    },
    da: function () {
      this.test = "s";
    },
    xx: function () {
      this.test = "";
    },
  },
};
</script>

<style>
.btn-circle {
  bottom: 0;
  position: fixed;
  left: 750px;
  width: 100%;
}
.btn-circle .circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.btn-circle .circle2 {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.qna-body {
  /* border: 1px solid #fff; */
  font-size: 30px;
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
  border-radius: 10px;
  width: 390px;
  height: 550px;
  margin-left: 640px;
  color: black;
  position: fixed;
}
.x {
  font-size: 30px;
  color: black;
  text-decoration: none;
}
.x:hover {
  color: black;
}
.alist {
  color: #fff;
  text-decoration: none;
}
.alist:hover {
  color: #d4d4d4;
}
</style>
