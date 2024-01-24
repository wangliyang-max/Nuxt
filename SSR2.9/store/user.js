export const state = ()=>({
  err:1,
  msg:"未登录",
  token:'',
  data:{title:"初始数据"}
})

export const mutations = {
  M_UPDATE_USER(state, payload){
    state.err = payload.err
    state.msg = payload.msg
    state.token = payload.token
    state.data = payload.data
  }
}

export const actions ={
  A_UPDATE_USER({commit, state}, payload){
    commit('M_UPDATE_USER',payload)
  }
}

export const getters = {
  getDToken(state){
    return state.token
  }
}

