/**
 * 接收一个全局上下文参数context
 */
export default ({ store, route, redirect, param, query, req, res }) => {
  // - store： 状态树信息，vuex的相关信息
  // - route：目标路由的信息
  // - redirect：强制跳转
  // - param：param参数信息
  // - query：query参数信息
  // - req：请求的req信息
  // - res：响应的res信息

  // // 强跳转到登录页面
  // redirect('/login')

  // // 全局守卫业务
  // console.log("全局前置路由守卫 —— nuxt.config.js")

}
