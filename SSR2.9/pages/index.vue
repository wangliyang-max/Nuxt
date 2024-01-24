<template>
  <div>
    <h1>首页</h1>
    <!-- <div>{{ title }}</div> -->

    <h3>vuex操作</h3>
    <button @click="getStore">vuex操作</button>
    <div>主模块下的state: {{ bNav }}</div>
    <div>主模块下的getter: {{ getNav }}</div>
    <div>user模块下的state: {{ data }}</div>
    <div>home模块下的state: {{ home }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  async asyncData({ $axios }) {
    let res = await $axios({ url: "/api/home" });
    console.log("获取到的数据是", res);
    return {
      title: res.data && res.data.title,
    };
  },
  // async fetch({ $axios, store }) {
  //   let res = await $axios({ url: "/data/list.json" });
  //   res && store.commit("user/M_UPDATE_USER", { data: res.data });
  //   // console.log("获取到的数据是", res);
  //   // return {
  //   //   title: res.data.title,
  //   // };
  // },
  components: {},
  methods: {
    getStore() {
      // 向user模块发送action请求, 因为user不是主模块，所以需要指明store下的模块名
      // this.$store.dispatch("user/A_UPDATE_USER", {
      //   err: 0,
      //   msg: "登录成功",
      //   token: "假token",
      //   data: {
      //     title: "user模块的action提交",
      //   },
      // });
      this.A_UPDATE_USER({
        err: 0,
        msg: "登录成功",
        token: "假token",
        data: {
          title: "user模块的action提交",
        },
      });

      // 向user模块发出mutation请求, 因为user不是主模块，所以需要指明store下的模块名
      // this.$store.commit("user/M_UPDATE_USER", {
      //   err: 0,
      //   msg: "登录成功",
      //   token: "假token",
      //   data: {
      //     title: "user模块的mutation提交",
      //   },
      // });
      this.M_UPDATE_USER({
        err: 0,
        msg: "登录成功",
        token: "假token",
        data: {
          title: "user模块的mutation提交",
        },
      });
    },
    ...mapActions("user", ["A_UPDATE_USER"]),
    ...mapMutations("user", ["M_UPDATE_USER"]),
  },
  computed: {
    ...mapGetters(["getNav"]),
    ...mapState(["bNav"]),
    ...mapState("user", ["data"]),
    ...mapState({ home: (state) => state.home.data }),
  },
};
</script>
