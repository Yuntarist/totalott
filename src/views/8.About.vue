<template>
  <hr />

  <h1>자주하는 질문</h1>
  <div class="qna-body">
    <div v-for="(item, i) in list" :key="i">
      <details class="alist">
        <summary>{{ item }}</summary>
        <div v-for="(item2, a) in answer" :key="a">
          <a href="#" class="alist"> {{ item2 }}</a>
        </div>
      </details>
    </div>

    <!-- <div>
      <details class="alist">
        <summary>Gamesgate는 어떻게 설치하나요 ?</summary>
        <a href="#">수정중</a>
      </details>
    </div>

    <div>
      <details class="alist">
        <summary>Greengaming은 어떻게 설치하나요 ?</summary>
        <a href="#">수정중</a>
      </details>
    </div>

    <div>
      <details class="alist">
        <summary>Dreamgame은 어떻게 설치하나요 ?</summary>
        <a href="#">수정중</a>
      </details>
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
    </div> -->
  </div>
  <div class="btn-circle">
    <div class="bt-add">
      <button class="circle" @click="dd"></button>
    </div>
    <div class="modal-background hide">
      <div class="modal-box">
        <div>
          {{ date }}
          <br />
          <div class="modal-header">
            <span>무엇을 도와드릴까요?</span>
          </div>
          <div class="qna-box">
            <div><a href="#">게임문의</a></div>
            <div><a href="#">결제문의</a></div>
            <div><a href="#">계정문의</a></div>
            <div><a href="#">버그문의</a></div>
            <div><a href="#">할인문의</a></div>
          </div>
          {{ test }}
        </div>
        <div class="xmodal">
          <span class="x" @click="xx">X</span>
        </div>
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
      list: [
        "Steam은 어떻게 설치하나요 ?",
        "Gamesgate는 어떻게 설치하나요 ?",
        "Greengaming은 어떻게 설치하나요?",
        "Dreamgame은 어떻게 설치하나요 ?",
      ],
      answer: ["steam 설치 사이트", "수정중", "수정중", "수정중"],
      dada: "",
      date: "",
      test: "",
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
      this.test = "수정중";
    },
    da: function () {
      this.test = "수정중";
    },
    xx: function () {
      this.test = "";
    },
  },
};
</script>

<style src="../assets/8.css"></style>
