<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>APP性能</span>
        </div>
        <component :is="PerformPanelGroup" :reportmonth="reportmonth" :performdata="performdata" />
      </el-card>
    </el-row>
  </div>
</template>

<script>
import PerformPanelGroup from './PerformPanelGroup'

export default {
  name: 'Perform',
  components: { PerformPanelGroup },
  // PanelGroup：'PanelGroup',
  props: {
    reportmonth: {
      type: Object,
      default: Date()
    },
    performdata: {
      type: Object,
      default: function() {
        return { num: 111, cpl: 222 }
      }
    }
  },
  data() {
    return {
      qua: [
        {
          title: 'How to do lists in Vue',
          id: 1,
          publishedAt: '2016-04-10'
        }
      ],
      PerformPanelGroup: 'PerformPanelGroup'
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
  // padding: 30px;
  margin-bottom: 32px;
}
.myclass {
  display: inline-block;
  word-wrap: break-all;
}
.rp {
  // background-image: url("https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191");
  height: 100px;
  width: 100px;
  text-align: right;
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
