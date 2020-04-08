<template>
  <div>
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>质量结论{{ reportmonth }}</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-row v-for="item in qua" :key="item.id" :span="4" class="text-left">{{ item.title }}</el-row>
          <!-- <el-row :span="4" class="text-left">Documentation</el-row>
          <el-row :span="4" class="text-left">Documentation</el-row>-->
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Myform',
  props: {
    reportmonth: {
      type: String,
      default: Date()
    }
  },
  data() {
    return {
      qua: [{
        title: 'How to do lists in Vue',
        id: 1,
        publishedAt: '2016-04-10'
      },
      {
        title: 'How to do lists in Vue',
        id: 2,
        publishedAt: '2016-04-10'
      },
      {
        title: 'How to do lists in Vue',
        id: 3,
        publishedAt: '2016-04-10'
      },
      {
        title: 'How to do lists in Vue',
        id: 4,
        publishedAt: '2016-04-10'
      }]
    }
  },
  methods: {
    share() {}
  }
}
</script>

<style lang="scss" scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item {
  min-height: 100px;
}
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
