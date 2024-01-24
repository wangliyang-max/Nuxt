export default ({$axios, redirect, route, store, app:{$cookies}})=>{
  // axios的配置

  // 基本配置
  $axios.defaults.timeout = 10000;
  // 请求拦截
  $axios.onRequest((config)=>{
    // 请求之前处理，添加token
    config.headers.token = store.state.user.token
    console.log("请求拦截器", config)
    return config
  })
  // 响应拦截
  $axios.onResponse((res)=>{
    if(res.data.code===200){
      console.log("响应拦截器", res.data)
      return res.data
    }else{
        if(res.data.code===2 && route.fullPath!=='/login'){
          redirect('/login?path='+route.fullPath)
        }
    }
  })
  // 错误处理
  $axios.onError((err)=>{
    return err
  })

}
