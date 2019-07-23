import ls from './storage/local_storage'
import _ from 'lodash'
import cookie from 'js-cookie'
import './polyfill'

const environment = window.environment

/**
 * 判断是否登录
 * @param {*} router 路由
 */
export function checkLogin (router) {
  if (router) {
    router.beforeEach((to, from, next) => {
      const pathName = window.location.pathname
      const url = pathName + window.location.hash
      const user = ls.getObject('user')
      const ssoToken = cookie.get(environment.securityKey)
      const filterUrl = process.env.urlNoAuthority
      const isFilterUrl = !!(_.findIndex(filterUrl, u => u === to.path) + 1) // 过滤不需要鉴权的页面
      if (cookie.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
        next({
          replace: true,
          name: 'locking'
        })
      } else if (cookie.get('locking') === '0' && to.name === 'locking') {
        next(false)
      } else {
        if ((!user || !ssoToken) && !isFilterUrl && to.path !== '/login' && to.path !== '/authority') { // 用户或者cookie不存在跳转登录
          // 记录访问的地址
          /* ls.addItem('historyUrl', JSON.stringify({
            historyUrl: window.location.href,
            account: ''
          }));
          window.location.href = '/#/login';
          if (pathName === '/') {
            router.push('login');
          } */
          next()
        } else if (ssoToken && user && (url === '/#/login' || to.path === '/login' || to.path === '/authority')) {
          window.location.href = environment.index
        } else {
          next()
        }
      }
    })
  } else {
    const ssoToken = cookie.get(environment.securityKey)
    const user = ls.getObject('user')
    if (!ssoToken || !user) {
      // 记录访问的地址
      ls.addItem('historyUrl', JSON.stringify({
        historyUrl: window.location.href,
        account: ''
      }))
      window.location.href = '/#/login'
    }
  }
}

/**
 * 生产环境上跳转错误页面
 */
export function navigateError () {
  if (process.env.NODE_ENV !== 'development') {
    window.location.href = window.location.origin + window.environment.pathName + '/error.html'
  }
}

/**
 * 过滤路由权限
 * @param routes  需要权限校验的路由
 * @returns {Array} 有权限的路由

export function filterRouterAuth(routes) {
  let menus = ls.getObject('menus');
  let authRoutes = [];
  menus.forEach(menu => {
    let href = window.location.href;
    if (href.indexOf(menu.fdFrontLink) > 0) {
      routes.forEach(route => {

      });
    }
  });
  return [];
} */
