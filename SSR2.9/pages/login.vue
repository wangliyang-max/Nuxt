<template>
  <div class="login">
    <h1>登录</h1>
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      console.log("点击登录按钮");
      this.$axios({
        url: "/api/login",
        method: "post",
        data: {
          username: "yang",
          password: "123456",
        },
      }).then((res) => {
        // 同步vuex和cookie
        this.$store.commit("user/M_UPDATE_USER", res);
        this.$cookies.set("user", res);

        // 跳转
        if (
          !this.$route.query.path ||
          /login|reg/.test(this.$route.query.path)
        ) {
          this.$router.replace("/user");
        } else {
          this.$router.replace(this.$route.query.path);
        }
      });
    },
  },
};
</script>
