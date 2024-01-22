export default ({app, redirect, param,query,store})=>{
  // app: vue实例
  // redirect：强制重定向
  // console.log("插件配置——全局路由守卫")
  // app.router.beforeEach((to,from, next)=>{
  //   // next('/login'), next(true), next(false) 不能这样使用，但是可以使用next()
  //   if(to.name === 'login' || to.name === 'reg'){
  //     next()
  //   }else{
  //     redirect({name:'login'})
  //   }
  // })
  // app.router.afterEach((to,from)=>{
  //   console.log("插件配置全局后置守卫")
  // })
}
