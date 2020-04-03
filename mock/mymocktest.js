import Mock from 'mockjs'

const List = []
const count = 100
const echartsList = []

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id2: '@increment',
    timestamp2: +Mock.Random.date('T'),
    name: '@cname',
    addr: '@title(5, 10)'
  }))
}

for (let i = 0; i < 10; i++) {
  var t = Mock.mock({
    id2: '@increment'
  })
  echartsList.push(t.id2)
}

export default [
  {
    url: '/vue-element-admin/mytest/echartsdatalist',
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
