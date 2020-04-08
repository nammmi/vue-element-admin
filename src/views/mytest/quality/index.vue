<template>
  <div class="dashboard-editor-container">
    <div class="card-panel" style="background: rgb(255, 255, 255); padding: 16px 16px 16px; margin-bottom: 32px;">
      <el-row :gutter="24">
        <el-col :sm="8">
          <el-label>产品：</el-label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>

        <el-col :sm="14">
          <el-label>时间：</el-label>
          <el-date-picker
            v-model="time"
            type="month"
            format="yyyy-MM"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="Release time"
            :picker-options="pickerOptions"
          />
        </el-col>
        <el-col :sm="2">
          <el-button v-loading="loading" type="success" class="share" @click="share">Draft</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Buttons</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn blue-btn" to="/documentation/index">
              Documentation
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn light-blue-btn" to="/icon/index">
              Icons
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn pink-btn" to="/excel/export-excel">
              Excel
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn green-btn" to="/table/complex-table">
              Table
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn tiffany-btn" to="/example/create">
              Form
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn yellow-btn" to="/theme/index">
              Theme
            </router-link>
          </el-col>
        </div>
      </el-card>
    </el-row>-->
    <component :is="myform" />
  </div>
  <!-- <div class="app-container"> -->

  <!-- </div> -->
</template>
<script>
// import { mytestfunc } from '@/api/mytestapi'
// import mytestSelect from '@/components/DragSelect'
import myform from './components/myform'
export default {
  name: 'ArticleList',
  components: { myform },
  filters: {},
  data() {
    return {
      myform: 'myform',
      value: '讯飞输入法',
      options: [{ value: 1, label: '讯飞输入法' }],
      time: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  created() {},
  methods: {
    share() {
      // console.log(this.postForm)
      // this.$refs.postForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$notify({
      //       title: '成功',
      //       message: '发布文章成功',
      //       type: 'success',
      //       duration: 2000
      //     })
      //     this.postForm.status = 'published'
      //     this.loading = false
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.share {
  text-align: r;
}
.goodsType {
  width: 200px;
  // height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
}
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
