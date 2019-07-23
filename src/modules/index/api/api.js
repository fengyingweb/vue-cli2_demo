import request from '@/utils/http'
const {APPLICATION_NAME} = window.environment.apiserver

export const getMenus = (params = {}) => {
  return request({
    url: `${APPLICATION_NAME}/getMenus`,
    method: 'post',
    data: params
  }).then(res => res)
}
