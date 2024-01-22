export default ({$axios, redirect, route, store})=>{
  // axios的配置

  // 基本配置
  $axios.defaults.timeout = 10000;
  // 请求拦截
  $axios.onRequest((config)=>{
    // 请求之前处理，添加token
    // config.headers.token = '123456'
    console.log("请求拦截器", config.headers)
    return config
  })
  // 响应拦截
  $axios.onResponse((res)=>{
    if(res.data.code===200){
      console.log("响应拦截器", res.data)
      return res.data
    }else{
        if(res.data.code===401){
            // 401是未登录，未登录跳转到登录页面
            redirect('/login')
          }else{
            // 其他错误
        }
    }
  })
  // 错误处理
  $axios.onError((err)=>{
    return error
  })

}
