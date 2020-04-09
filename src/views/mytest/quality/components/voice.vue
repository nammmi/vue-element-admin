<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>语音</span>
        </div>
        <!-- <div style="margin-bottom:50px;">
          <el-col :sm="6">
            <el-card class="box-card" :sm="6">
              <div slot="header" class="clearfix">
                <span>业务可用率</span>
              </div>
              <div style="margin-bottom:50px;">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <div class="box-card el-card__header" :sm="6">
              <div slot="header" class="clearfix">
                <span>接口失败率</span>
              </div>
            </div>
            <div class="myclass">
              <div :sm="12" class="myclass">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
              <div class="myclass" :sm="12">
                <img
                  class="rp"
                  src="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"
                />
              </div>
            </div>
          </el-col>
          <el-col :sm="6">
            <el-card class="box-card" :sm="6">
              <div slot="header" class="clearfix">
                <span>新增严重问题数</span>
              </div>
              <div style="margin-bottom:50px;">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card class="box-card" :sm="6">
              <div slot="header" class="clearfix">
                <span>遗留严重问题数</span>
              </div>
              <div style="margin-bottom:50px;">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card class="box-card" :sm="6">
              <div slot="header" class="clearfix">
                <span>首结果平均响应时间</span>
              </div>
              <div style="margin-bottom:50px;">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card class="box-card" :sm="6">
              <div slot="header" class="clearfix">
                <span>首结果较长响应时间占比(3s)</span>
              </div>
              <div style="margin-bottom:50px;">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card class="box-card" :sm="6">
              <div slot="header" class="clearfix">
                <span>尾结果平均响应时间</span>
              </div>
              <div style="margin-bottom:50px;">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card class="box-card" :sm="6">
              <div slot="header" class="clearfix">
                <span>尾结果较长响应时间占比(0.3s)</span>
              </div>
              <div style="margin-bottom:50px;">
                <el-row
                  v-for="item in qua"
                  :key="item.id"
                  :span="4"
                  class="text-left"
                >{{ reportmonth }}{{ item.title }}</el-row>
              </div>
            </el-card>
          </el-col>
        </div> -->
        <component :is="PanelGroup" :reportmonth="reportmonth" :voicedata="voicedata" />
      </el-card>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './PanelGroup'
export default {
  name: 'Voice',
  components: { PanelGroup },
  // PanelGroup：'PanelGroup',
  props: {
    reportmonth: {
      type: Object,
      default: Date()
    },
    voicedata: {
      type: Object,
      default: null
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
      PanelGroup: 'PanelGroup'
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
