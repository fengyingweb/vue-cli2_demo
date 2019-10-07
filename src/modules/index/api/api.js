import request from '@/utils/http'
import apiUrl from './apiUrl'

export const getMenus = (params = {}) => {
  return request({
    url: apiUrl.getMenus,
    method: 'post',
    data: params
  }).then(res => res)
}
