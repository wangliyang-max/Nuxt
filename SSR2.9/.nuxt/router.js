import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _142857fc = () => interopDefault(import('..\\pages\\goods\\index.vue' /* webpackChunkName: "pages/goods/index" */))
const _ac95f1da = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _866d0184 = () => interopDefault(import('..\\pages\\reg.vue' /* webpackChunkName: "pages/reg" */))
const _0e55f5de = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _d2edf5e2 = () => interopDefault(import('..\\pages\\goods\\comment.vue' /* webpackChunkName: "pages/goods/comment" */))
const _2bbb5093 = () => interopDefault(import('..\\pages\\goods\\comment\\index.vue' /* webpackChunkName: "pages/goods/comment/index" */))
const _547c5e60 = () => interopDefault(import('..\\pages\\goods\\comment\\_uid.vue' /* webpackChunkName: "pages/goods/comment/_uid" */))
const _1185ef96 = () => interopDefault(import('..\\pages\\test\\secondRouter.vue' /* webpackChunkName: "pages/test/secondRouter" */))
const _3fe53808 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7b02eeea = () => interopDefault(import('..\\pages\\goods\\_id.vue' /* webpackChunkName: "pages/goods/_id" */))
const _15a9b27c = () => interopDefault(import('..\\pages\\goods\\_id\\producer.vue' /* webpackChunkName: "pages/goods/_id/producer" */))
const _c5687d0e = () => interopDefault(import('..\\pages\\goods\\_id\\_sid.vue' /* webpackChunkName: "pages/goods/_id/_sid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/goods",
    component: _142857fc,
    name: "goods"
  }, {
    path: "/login",
    component: _ac95f1da,
    name: "login"
  }, {
    path: "/reg",
    component: _866d0184,
    name: "reg"
  }, {
    path: "/user",
    component: _0e55f5de,
    name: "user"
  }, {
    path: "/goods/comment",
    component: _d2edf5e2,
    children: [{
      path: "",
      component: _2bbb5093,
      name: "goods-comment"
    }, {
      path: ":uid",
      component: _547c5e60,
      name: "goods-comment-uid"
    }]
  }, {
    path: "/test/secondRouter",
    component: _1185ef96,
    name: "test-secondRouter"
  }, {
    path: "/",
    component: _3fe53808,
    name: "index"
  }, {
    path: "/goods/:id",
    component: _7b02eeea,
    name: "goods-id",
    children: [{
      path: "producer",
      component: _15a9b27c,
      name: "goods-id-producer"
    }, {
      path: ":sid?",
      component: _c5687d0e,
      name: "goods-id-sid"
    }]
  }, {
    path: "/index",
    component: _3fe53808,
    name: "home"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
