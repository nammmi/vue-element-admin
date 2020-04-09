import Mock from 'mockjs'

const List = []
const count = 100

const echartsList = { 'messages': [], 'purchases': [], 'shoppings': [], 'newVisitis': [] }
const echartsList2 = { 'messages': [], 'purchases': [], 'shoppings': [], 'newVisitis': [] }

const voiceDataList = []

// for (let i = 1; i <= 12; i++) {
voiceDataList.push(Mock.mock({
  num: '@integer(1, 20)',
  cpl: '@integer(1, 5)',
  tf: '@boolean',
  date: '2020-01',
  timestamp2: +Mock.Random.date('T')
}))
voiceDataList.push(Mock.mock({
  num: '@integer(1, 20)',
  cpl: '@integer(1, 5)',
  tf: '@boolean',
  date: '2020-02',
  timestamp2: +Mock.Random.date('T')
}))
voiceDataList.push(Mock.mock({
  num: '@integer(1, 20)',
  cpl: '@integer(1, 5)',
  tf: '@boolean',
  date: '2020-03',
  timestamp2: +Mock.Random.date('T')
}))
voiceDataList.push(Mock.mock({
  num: '@integer(1, 20)',
  cpl: '@integer(1, 5)',
  tf: '@boolean',
  date: '2020-04',
  timestamp2: +Mock.Random.date('T')
}))
// }

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id2: '@increment',
    timestamp2: +Mock.Random.date('T'),
    name: '@cname',
    addr: '@title(5, 10)'
  }))
}

for (let i = 0; i < 10; i++) {
  echartsList.messages.push(Mock.mock({
    id2: '@integer(80, 1000)'
  }).id2)
  echartsList.purchases.push(Mock.mock({
    id2: '@integer(80, 1000)'
  }).id2)
  echartsList.shoppings.push(Mock.mock({
    id2: '@integer(80, 1000)'
  }).id2)
  echartsList.newVisitis.push(Mock.mock({
    id2: '@integer(80, 1000)'
  }).id2)
}

for (let i = 0; i < 10; i++) {
  echartsList2.messages.push(Mock.mock({
    id2: '@integer(100, 1000)'
  }).id2)
  echartsList2.purchases.push(Mock.mock({
    id2: '@integer(100, 1000)'
  }).id2)
  echartsList2.shoppings.push(Mock.mock({
    id2: '@integer(100, 1000)'
  }).id2)
  echartsList2.newVisitis.push(Mock.mock({
    id2: '@integer(100, 1000)'
  }).id2)
}

export default [
  {
    url: '/vue-element-admin/mytest/getvoicedata',
    type: 'get',
    response: config => {
      const { date } = config.query
      console.log(date)

      const mockList = voiceDataList.filter(item => {
        if (date && item.date === date) return true
      })
      return {
        code: 20000,
        data: mockList
      }
    }
  },
  {
    url: '/vue-element-admin/mytest/echartsdatalist',
    type: 'get',
    response: config => {
      const { param } = config.query
      console.log(param)
      // console.log(config.url)
      return {
        code: 20000,
        data: {
          expectedData: echartsList[param],
          actualData: echartsList2[param]
        }
      }
    }
  },
  {
    url: '/vue-element-admin/mytest/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20 } = config.query

      const mockList = List.filter(item => {
        return true
      })

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
