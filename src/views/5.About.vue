<template>
  <hr />
  <div>
    <h3>아이디 / 비밀번호 찾기</h3>
  </div>
  <div>
    <div>
      <button @click="select = 'fid'">아이디</button>
      <button @click="select = 'fpw'">비밀번호</button>
      <component :is="select"></component>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import fid from "@/components/findid.vue";
import fpw from "@/components/findpw.vue";

export default {
  name: "app",
  data() {
    return {
      select: "fid",
    };
  },
  components: {
    fid,
    fpw,
  },
  methods: {},
};
</script>

<style></style>
