<template>
  <div class="app-container">hello
    <div>test</div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Author">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template slot-scope="{row}">
          <router-link :to="'/example/edit/'+row.id" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  <!-- <el-button @click="visible = true">按钮</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog> -->
  <el-table
      v-loading="listLoading2"
      :data="tableData"
      fit
      highlight-current-row
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.id2 }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
        <template slot-scope="scope">
        <span>{{ scope.row.timestamp2 | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="scope">
        <span>{{ scope.row.addr }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination2 v-show="total>0" :total="total2" :page.sync="listQuery2.page" :limit.sync="listQuery2.limit" @pagination="getDataList" />
  </div>
  <!-- </div> -->
</template>
<script>
// import { mytestfunc } from '@/api/mytestapi'
// import mytestSelect from '@/components/DragSelect'
import { fetchList } from '@/api/article'
import { getDataList } from '@/api/mytestapi'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import Pagination2 from '@/components/Pagination'
export default {
  name: 'ArticleList',
  components: { Pagination, Pagination2 },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      total2: 0,
      listLoading: true,
      listLoading2: true,
      tableData: [{ id: 1, date: Date(), address: 'sss', name: 'ddd' }],
      listQuery: {
        page: 1,
        limit: 20
      },
      listQuery2: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
    this.getDataList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    getDataList() {
      this.listLoading = true
      getDataList(this.listQuery2).then(response => {
        this.tableData = response.data.items
        this.total2 = response.data.total
        this.listLoading2 = false
      })
    }
  }
}
</script>

<style scoped>
/* .radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
} */
/* .edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
} */
</style>
