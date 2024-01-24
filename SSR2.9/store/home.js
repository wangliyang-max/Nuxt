export const state = ()=>({
  err:1,
  data:{
    title:"home中的data"
  }
})

export const mutations = {
  M_UPDATE_HOME(state, payload){
    state.err = payload.err
    state.data = payload.data
  }
}


export const actions ={
  A_UPDATE_HOME({commit, state}, payload){
    // 异步处理
    commit('M_UPDATE_HOME',{
      err:0,
      data:"home模块action所传递的数据"
    })
  }
}

export const getters = {
  getData(state){
    return state.data
  }
}
