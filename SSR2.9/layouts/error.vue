<template>
  <div class="error">
    <h1 v-if="error.statusCode">{{ error.message }}</h1>
    <h1 v-else>应用发送异常</h1>
    <!-- <router-link to="/">跳转到home页面</router-link> -->
    <button
      @click="
        () => {
          $router.replace('/index');
        }
      "
    >
      返回首页
    </button>
  </div>
</template>
<script>
export default {
  props: ["error"],
};
</script>
<style scoped>
.error {
  text-align: center;
}
button {
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: large;
}
button:hover {
  cursor: pointer;
  background: rgb(172, 201, 245);
  border: 1px solid white;
  color: white;
}
</style>
