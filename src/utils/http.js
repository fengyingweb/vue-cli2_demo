import axios from 'axios'
import NProgress from 'nprogress'
import { clearStorage } from './storage/clear_storage'
import {Toast} from 'vant'
// import localStorageTool from './storage/local_storage'

// const hashList = ['#/forget', '#/login', '#/register'];

// 创建axios实例
const service = axios.create({
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  headers: {'Pragma': 'no-cache', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json'}
})
// console.log(window.location.hash);
// request拦截器
service.interceptors.request.use(config => {
  NProgress.start()
  // const token = localStorageTool.getItem('token');
  // if (token && (hashList.indexOf(window.location.hash) === -1)) {
  //   console.log(token);
  //   config.headers['accessToken'] = token;
  // }
  return config
}, error => {
  NProgress.done()
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  },
  error => {
    NProgress.done()
    const response = error.response
    if (response) {
      switch (response.status) {
        case 401:
          clearStorage()
          localStorage.setItem('historyUrl', window.location.href)
          window.location.href = './login.html'
          break
        case 500:
          Toast('系统异常')
          break
      }
    }
    console.log('异常:', error)
    return Promise.reject(error)
  }
)

export default service
