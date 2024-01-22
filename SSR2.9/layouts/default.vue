<template>
  <div>
    <!-- 跳转区 nuxt-link -->
    <AppHeader></AppHeader>
    <!-- 展示区，相当于routerview -->
    <nuxt />
  </div>
</template>
<script>
import AppHeader from "./app-header.vue";
export default {
  // // layout层级中间件
  // // 1. 引用外部中间件
  // middleware: 'auth',
  // // 2. 使用内部中间件
  // middleware({ store, route, redirect, params, query, req, res }) {
  //   // - store： 状态树信息，vuex的相关信息
  //   // - route：目标路由的信息
  //   // - redirect：强制跳转
  //   // - param：param参数信息
  //   // - query：query参数信息
  //   // - req：请求的req信息
  //   // - res：响应的res信息

  //   // 强跳转到登录页面
  //   redirect("/login");

  //   // 全局守卫业务
  //   console.log("全局前置路由守卫 —— layouts布局");
  // },
  components: { AppHeader },
};
</script>
