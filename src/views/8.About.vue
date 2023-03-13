<template>
  <hr />

  <h1>자주하는 질문</h1>
  <div class="qna-body">
    <div v-for="(item, i) in list" :key="i">
      <details class="alist">
        <summary>{{ item }}</summary>
        <div>{{ answer[i] }}</div>
      </details>
    </div>
  </div>
  <div class="btn-circle" @click="modalA()">
    <div class="bt-add">
      <button class="circle" @click="today"></button>
    </div>
    <div class="modal-background hide">
      <div class="modal-box">
        <div>
          {{ date }}
          <br />
          <div class="modal-header">
            <span class="sptime" style="display: none">
              안녕하세요. 무엇을 도와드릴까요?</span
            >
          </div>
          <div class="qna-text" style="display: none">
            <div class="qna-box" @click="qna1()"><a href="#">게임문의</a></div>
            <div class="qna-box" @click="qna2()"><a href="#">결제문의</a></div>
            <div class="qna-box" @click="qna3()"><a href="#">계정문의</a></div>
            <div class="qna-box" @click="qna4()"><a href="#">버그문의</a></div>
            <div class="qna-box" @click="qna5()"><a href="#">할인문의</a></div>
          </div>
          <div class="answer" style="display: none">
            {{ test }}
          </div>
          <div class="qna-result" style="display: none">
            {{ qna }}
          </div>
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
      answer: ["steam 설치 사이트", "수정중1", "수정중2", "수정중3"],
      dada: "",
      date: "",
      test: "",
      qna: "",
    };
  },
  methods: {
    modalA: function () {
      const button = document.querySelector(".circle");
      const modal = document.querySelector(".modal-background");
      const answer = document.querySelector(".answer");
      const sptime = document.querySelector(".sptime");
      const qnaText = document.querySelector(".qna-text");
      const x = document.querySelector(".x");

      button.addEventListener("click", () => {
        modal.style.display = "block";
        setTimeout(() => {
          sptime.style.display = "block";
        }, 1000);
        setTimeout(() => {
          qnaText.style.display = "block";
        }, 2000);
      });
      x.addEventListener("click", () => {
        modal.style.display = "none";
        answer.style.display = "none";
      });
    },

    today: function () {
      let today = new Date();
      var year = today.getFullYear();
      var month = ("0" + (today.getMonth() + 1)).slice(-2);
      var day = ("0" + today.getDate()).slice(-2);
      var dateString = year + "년" + month + "월" + day + "일";
      this.date = dateString;
    },
    qna1: function () {
      const answer = document.querySelector(".answer");
      const qnaResult = document.querySelector(".qna-result");
      answer.style.display = "block";
      this.test = "게임문의";
      setTimeout(() => {
        qnaResult.style.display = "block";
        this.qna = "수정중";
      }, 2000);
    },
    qna2: function () {
      const answer = document.querySelector(".answer");
      answer.style.display = "block";
      this.test = "결제문의";
    },
    qna3: function () {
      const answer = document.querySelector(".answer");
      answer.style.display = "block";
      this.test = "계정문의";
    },
    qna4: function () {
      const answer = document.querySelector(".answer");
      answer.style.display = "block";
      this.test = "버그문의";
    },
    qna5: function () {
      const answer = document.querySelector(".answer");
      answer.style.display = "block";
      this.test = "할인문의";
    },
  },
};
</script>

<style src="../assets/8.css"></style>
