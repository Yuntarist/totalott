<template>
  <div class="find-container">
    <input
      id="find_id"
      type="radio"
      name="tabs"
      @click="select = 'USD'"
      class="find-input"
      checked
    />

    <input
      id="find_pwd"
      type="radio"
      name="tabs"
      class="find-input"
      @click="select = 'JPY'"
    />
    <label for="find_id" class="find_id_label">아이디 찾기</label>
    <label for="find_pwd" class="find_pwd_label">비밀번호 찾기</label>

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

.find-input {
  display: none;
}

label {
  display: inline-flex;
  width: 49%;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-family: "dohyeon";
  font-weight: 600;
  text-align: center;
  color: black;
}

label:hover {
  border: 1px solid black;
  box-shadow: 5px 3px 3px gray;
  color: #7c7c7c;
  cursor: pointer;
}

#find_id:checked ~ .find_pwd_label {
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  /* box-shadow: 0px 2px 0px rgb(168 168 168); */
  color: #7c7c7c;
  border-radius: 0 20px 0 0;
}
#find_id:checked ~ .find_id_label {
  font-weight: 100;
  color: #fff;
  border-right: 2px solid #000000;
  border-radius: 20px 0 0 0;
}

#find_pwd:checked ~ .find_id_label {
  border-bottom: 1px solid #000000;
  box-shadow: 0px 2px 0px rgb(168, 168, 168);
  color: #7c7c7c;
  text-shadow: 1px 1px 0.3px #a2a2a2;
}
#find_pwd:checked ~ .find_pwd_label {
  font-weight: 100;
  color: #002376;
}
</style>
