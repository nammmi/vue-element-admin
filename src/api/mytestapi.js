import request from '@/utils/request'

export function getDataList(query) {
  return request({
    url: '/vue-element-admin/mytest/list',
    method: 'get',
    params: query
  })
}

export function getEchartsData(param) {
  return request({
    url: '/vue-element-admin/mytest/echartsdatalist',
    method: 'get',
    params: { param }
  })
}

export function getVoiceData(date) {
  return request({
    url: '/vue-element-admin/mytest/getvoicedata',
    method: 'get',
    params: { date }
  })
}
