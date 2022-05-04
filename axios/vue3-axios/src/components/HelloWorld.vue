
<template>
  <button @click="test">打印this</button>
  <button @click="getData">获取数据</button>
</template>

<script>
import axios from "../axios/index";
export default {
  methods: {
    test() {
      console.log(this.$axios);
    },
    getData() {
      console.log(axios);
      axios
        .get("/hello/hi")
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
