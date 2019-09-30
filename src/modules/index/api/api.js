import request from '@/utils/http'

export const getMenus = (params = {}) => {
  return request({
    url: `/api/server/getMenus`,
    method: 'post',
    data: params
  }).then(res => res)
}
