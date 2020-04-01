import request from '@/utils/request'

export function getDataList(query) {
  return request({
    url: '/vue-element-admin/mytest/list',
    method: 'get',
    params: query
  })
}
