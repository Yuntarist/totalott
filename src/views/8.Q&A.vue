<template>
  <hr />
  <h1>자주하는 질문</h1>
  <div class="qna-body">
    <div v-for="(item, i) in list" :key="i">
      <details class="alist">
        <summary>{{ item }}</summary>
        <div>
          <!-- 각각 배열에 담긴 주소 -->
          <a style="font-size: 20px" :href="link[i]" target="_blank"
            ><div class="text-size">
              {{ answer[i] }}
            </div></a
          >
        </div>
      </details>
    </div>
  </div>
  <div class="btn-circle" @click="modalA()">
    <div class="bt-add">
      <button class="circle" @click="today">
        <img src="../assets/qna.png" alt="" style="width: 50px" />
      </button>
    </div>
    <div class="modal-background hide">
      <div class="modal-box">
        <div>
          {{ date }}
          <br />
          <div class="modal-header">
            <span class="sptime" style="display: none">
              <div class="bot-all">
                <img class="bot-img" src="../assets/qna.png" alt="TRIF" />
                <span class="bot-text">고객센터</span><br />
                <span class="bot-say" style="color: black"
                  >안녕하세요. 무엇을 도와드릴까요?</span
                >
              </div>
            </span>
          </div>
          <div class="qna-all" style="display: none">
            <div class="qna-text" style="display: none">
              <div class="qna-box" @click="qna1()">
                <a href="#">게임문의</a>
              </div>
              <div class="qna-box" @click="qna2()">
                <a href="#">결제문의</a>
              </div>
              <div class="qna-box" @click="qna3()">
                <a href="#">계정문의</a>
              </div>
              <div class="qna-box" @click="qna4()">
                <a href="#">버그문의</a>
              </div>
              <div class="qna-box" @click="qna5()">
                <a href="#">1대1 문의</a>
              </div>
              <br />
            </div>
          </div>
          <div class="answer" style="display: none">
            {{ test }}
          </div>
          <div class="qna-result" style="display: none">
            <a
              style="text-decoration: none"
              href="https://www.gamersgate.com/support/game-related/how-to-install-games/"
              target="_blank"
              >{{ modalqna }}</a
            >
          </div>
          <div class="answer2" style="display: none">
            {{ test2 }}
          </div>
          <div class="qna-result2" style="display: none">
            <a
              style="text-decoration: none"
              href="https://www.dreamgame.com/en/payment-methods"
              target="_blank"
              >{{ modalqna2 }}</a
            >
          </div>
          <div class="answer3" style="display: none">
            {{ test3 }}
          </div>
          <div class="qna-result3" style="display: none">
            <a
              style="text-decoration: none"
              href="https://wingamestore.zendesk.com/hc/en-us/articles/360033289272-2-Step-Authentication"
              target="_blank"
              >{{ modalqna3 }}</a
            >
          </div>
          <div class="answer4" style="display: none">
            {{ test4 }}
          </div>
          <div class="qna-result4" style="display: none">
            <a
              style="text-decoration: none"
              href="https://www.gamersgate.com/support/game-related/black-or-flickering-screen/"
              target="_blank"
              >{{ modalqna4 }}</a
            >
          </div>
          <div class="answer5" style="display: none">
            {{ test5 }}
          </div>
          <textarea
            style="display: none"
            v-model="qna"
            placeholder="문의내용을 자세하게 적어주세요."
            name=""
            id="qnaContent"
            cols="30"
            rows="10"
          ></textarea
          ><button style="display: none" class="qbt" @click="qsubmit()">
            제출
          </button>
          <div>
            <span class="sptime2" style="display: none">
              <div class="bot-all">
                <img class="bot-img" src="../assets/qna.png" alt="TRIF" />
                <span class="bot-text">고객센터</span><br />
                <span style="color: black"
                  ><div class="bot-end">소중한 의견 감사합니다 !</div>
                </span>
              </div>
            </span>
          </div>
        </div>
        <div class="xmodal">
          <span class="x" @click="xx">X</span>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      list: [
        'Steam 사이트 알려주세요',
        'Gamesgate 사이트 알려주세요',
        'Greenmangaming 사이트 알려주세요',
        'Dreamgame 사이트 알려주세요',
        '확인 메일을 받지 못했습니다.',
        '결제는 안전한가요?',
        '게임키란?',
        '활성화 키는 어떻게 작동합니까?',
        '키를 전 세계적으로 활성화할 수 있습니까?',
        '잘못된 키 문제'
      ],
      answer: [
        'Steam 설치 사이트',
        'Gamesgate 사이트',
        'Greenmangaming 사이트',
        'Dreamgame 사이트',
        '받은 편지함이나 스팸 폴더에 확인 이메일이 도착하지 않은 경우 새 이메일을 보내드릴 수 있도록 지원팀에 문의 하십시오.',
        '네! 우리는 귀하의 모든 개인 데이터를 안전하게 유지하기 위해 특별한 암호화를 사용하고 있습니다.',
        '게임 키는 일련의 숫자와 숫자로 구성된 일련 번호입니다. 이 키는 Steam, Epic, Nintendo 등과 같은 게임 플랫폼에서 활성화할 수 있는 개인 소유권 증명입니다. 게임 키는 게임에 대해 한 번만 교환할 수 있으므로 계정에서 게임을 받을 수 있습니다. 나중에 컴퓨터에서 이미 게임을 제거한 경우에도 언제든지 게임을 다시 다운로드하고 계정을 통해 플레이할 수 있습니다. 게임 키는 게임 코드, 활성화 코드 또는 제품 코드라고도 합니다.',
        "결제 후 계정의 '주문'에서 고유한 개인 게임 키를 받게 되며 해당 플랫폼에서 활성화할 수 있습니다. 제품 페이지는 게임 키가 적합한 플랫폼을 지정합니다. 활성화되면 게임을 다운로드, 설치 및 플레이할 수 있습니다. 키 활성화에 적합한 플랫폼을 모르십니까? 고객 서비스에 문의해 주시면 기꺼이 귀하의 질문에 답변해 드리겠습니다",
        "활성화 키는 때때로 국가 제한이 적용됩니다. 이 정보는 제품 페이지의 '제한 사항'에서 볼 수 있습니다.",
        '이것은 다음과 같은 상황에서 일반적으로 발생합니다. - 키가 잘못 삽입된 경우: 키의 숫자가 잘못 삽입되었거나 키의 일부가 누락되었을 수 있습니다. 이를 방지하려면 활성화 시 키를 복사(CTRL + V) 및 붙여넣기(CTRL + C)하는 것이 좋습니다.'
      ],
      link: [
        'https://store.steampowered.com/about/',
        'https://www.gamersgate.com/',
        'https://www.greenmangaming.com/ko/all-games/on-sale/',
        'https://www.dreamgame.com/',
        '#',
        '#',
        '#',
        '#',
        '#',
        '#'
      ],
      dada: '',
      date: '',
      test: '',
      test2: '',
      test3: '',
      test4: '',
      test5: '',
      modalqna: '',
      modalqna2: '',
      modalqna3: '',
      modalqna4: '',
      qna: '',
      data: ''
    }
  },
  methods: {
    modalA: function () {
      const button = document.querySelector('.circle')
      const modal = document.querySelector('.modal-background')
      const answer = document.querySelector('.answer')
      const answer2 = document.querySelector('.answer2')
      const answer3 = document.querySelector('.answer3')
      const answer4 = document.querySelector('.answer4')
      const sptime = document.querySelector('.sptime')
      const sptime2 = document.querySelector('.sptime2')
      const qnaText = document.querySelector('.qna-text')
      const qnaResult = document.querySelector('.qna-result')
      const qnaResult2 = document.querySelector('.qna-result2')
      const qnaResult3 = document.querySelector('.qna-result3')
      const qnaResult4 = document.querySelector('.qna-result4')
      const qnaAll = document.querySelector('.qna-all')
      const x = document.querySelector('.x')
      const qbt = document.querySelector('.qbt')
      button.addEventListener('click', () => {
        modal.style.display = 'block'
        setTimeout(() => {
          sptime.style.display = 'block'
        }, 1000)
        setTimeout(() => {
          qnaAll.style.display = 'block'
          qnaText.style.display = 'block'
        }, 2000)
      })
      x.addEventListener('click', () => {
        modal.style.display = 'none'
        answer.style.display = 'none'
        answer2.style.display = 'none'
        answer3.style.display = 'none'
        answer4.style.display = 'none'
        qnaResult.style.display = 'none'
        qnaResult2.style.display = 'none'
        qnaResult3.style.display = 'none'
        qnaResult4.style.display = 'none'
        qnaAll.style.display = 'none'
      })
      qbt.addEventListener('click', () => {
        sptime2.style.display = 'block'
      })
    },
    today: function () {
      let today = new Date()
      var year = today.getFullYear()
      var month = ('0' + (today.getMonth() + 1)).slice(-2)
      var day = ('0' + today.getDate()).slice(-2)
      var dateString = year + '년' + month + '월' + day + '일'
      this.date = dateString
    },
    qna1: function () {
      const answer = document.querySelector('.answer')
      const qnaResult = document.querySelector('.qna-result')
      answer.style.display = 'block'
      this.test = '게임문의'
      setTimeout(() => {
        qnaResult.style.display = 'block'
        this.modalqna = '게임은 어떻게 설치하나요 ?'
      }, 2000)
    },
    qna2: function () {
      const answer2 = document.querySelector('.answer2')
      const qnaResult2 = document.querySelector('.qna-result2')
      answer2.style.display = 'block'
      this.test2 = '결제문의'
      setTimeout(() => {
        qnaResult2.style.display = 'block'
        this.modalqna2 = '지불방법'
      }, 2000)
    },
    qna3: function () {
      const answer3 = document.querySelector('.answer3')
      const qnaResult3 = document.querySelector('.qna-result3')
      answer3.style.display = 'block'
      this.test3 = '계정문의'
      setTimeout(() => {
        qnaResult3.style.display = 'block'
        this.modalqna3 = '2단계인증'
      }, 2000)
    },
    qna4: function () {
      const answer4 = document.querySelector('.answer4')
      const qnaResult4 = document.querySelector('.qna-result4')
      answer4.style.display = 'block'
      this.test4 = '버그문의'
      setTimeout(() => {
        qnaResult4.style.display = 'block'
        this.modalqna4 = '게임 실행 시 검은색/깜빡이는 화면'
      }, 2000)
    },
    qna5: function () {
      const answer5 = document.querySelector('.answer5')
      const qnaContent = document.querySelector('#qnaContent')
      const qbt = document.querySelector('.qbt')
      answer5.style.display = 'block'
      this.test5 = '1대1 문의'
      setTimeout(() => {
        qnaContent.style.display = 'block'
        qbt.style.display = 'block'
      }, 2000)
    },
    qsubmit: function () {
      this.Qtext = 'DB에 저장중'
      const qnaContent = document.querySelector('#qnaContent')
      const qbt = document.querySelector('.qbt')
      axios
        .post('./about8', {
          qna: this.qna
        })
        .then((res) => (this.Qtext = res.data))
      qnaContent.style.display = 'none'
      qbt.style.display = 'none'
    }
  }
}
</script>

<style src="../assets/8.css"></style>
