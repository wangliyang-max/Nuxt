<template>
  <div>
    <h1>首页</h1>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let res = await $axios({ url: "/api/home" });
    console.log("获取到的数据是", res);
    return {
      title: res.data.title,
    };
  },
  // async fetch({ $axios }) {
  //   let res = await $axios({ url: "/data/list.json" });
  //   console.log("获取到的数据是", res);
  //   return {
  //     title: res.data.title,
  //   };
  // },
};
</script>
