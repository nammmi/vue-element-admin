import request from '@/utils/request'

export function getDataList(query) {
  return request({
    url: '/vue-element-admin/mytest/list',
    method: 'get',
    params: query
  })
}

export function getEchartsData(type) {
  return request({
    url: '/vue-element-admin/mytest/echartsdatalist',
    method: 'get',
    params: type
  })
}
