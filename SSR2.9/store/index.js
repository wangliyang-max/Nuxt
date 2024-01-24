// 模块方式使用vuex

// state —— Nuxt要求必须是一个函数
export const state = ()=>({
  bNav: false,
  bLoading:false
})
// mutations
export const mutations = {
  M_UPDATE_NAV(state, payload) {
    state.bNav = payload;
  },
  M_UPDATE_LOADING(state, payload){
    state.bLoading = payload
  }
}

// action
export const actions = {
    /**
     * nuxtServerInit是store的初始化钩子， 初始化内容到store中
     * @param {*} store store的实例对象
     * @param {*} context 上下文（服务端所有的数据信息）
     */
    nuxtServerInit(store, {app:{$cookies}}) {
      // 从cookie中获取token，放到store中
      let user = $cookies.get("user")?$cookies.get("user"):{err:2, msg:"未登录",token:""};
      // 同步给vuex
      store.commit("user/M_UPDATE_USER", user);
    }
}

// getters
export const getters = {
  getNav(state){
    return state.bNav ? "显示" : "隐藏"
  }
}

