<template>
  <div class="find-container">
    <!-- 전환 기능을 넣은 구문 -->
    <button class="id-find" @click="select = 'USD'">
      <h3>아이디 찾기</h3>
    </button>
    <button class="pwd-find" @click="select = 'JPY'">
      <h3>비밀번호 찾기</h3>
    </button>
    <keep-alive>
      <component :is="select"></component>
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable */
import USD from "@/components/idfind.vue";
import JPY from "@/components/pwfind.vue";

export default {
  name: "HomeView",
  data() {
    return {
      select: "USD",
    };
  },
  components: {
    USD,
    JPY,
  },
};
</script>
<style>
.find-container {
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 500px;
  margin: 10vh auto;
  background: transparent;
  box-shadow: 0 0 15px rgb(255, 255, 255);
  border-radius: 25px;
}
.id-find {
  font: bold;
  padding: 5px 56px 20px 55px;
  font-size: 20px;
  background-color: #1b1b1b;
  color: white;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  border-radius: 20px 0px 0px 0px;
}
.pwd-find {
  padding: 5px 55px 20px 56px;
  font-size: 20px;
  background-color: #1b1b1b;
  color: white;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  border-radius: 0px 20px 0px 0px;
}
h3 {
  padding: 0;
  margin: 0;
}
</style>
