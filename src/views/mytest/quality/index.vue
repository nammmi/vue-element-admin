<template>
  <div class="dashboard-editor-container">
    <div
      class="card-panel"
      style="background: rgb(255, 255, 255); padding: 16px 16px 16px; margin-bottom: 32px;"
    >
      <el-row :gutter="24">
        <el-col :sm="8">
          <label>产品：</label>
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
          <label>时间：</label>
          <el-date-picker
            v-model="time"
            type="month"
            format="yyyy-MM"
            value-format="yyyy-MM"
            placeholder="Release time"
            :picker-options="pickerOptions"
            @change="gettime2"
          />
        </el-col>
        <el-col :sm="2">
          <!-- v-loading="loading" -->
          <el-button type="success" class="share" @click="share">分享</el-button>
        </el-col>
      </el-row>
    </div>
    <component :is="myform" :reportmonth="reportmonth" />
    <component :is="voice" :reportmonth="reportmonth" :voicedata="voicedata" />
    <component :is="phonetic" :reportmonth="reportmonth" :phoneticdata="phoneticdata" />
    <component :is="emoji" :reportmonth="reportmonth" :phoneticdata="emojidata" />
    <component :is="cash" :reportmonth="reportmonth" :phoneticdata="cashdata" />
    <component :is="skin" :reportmonth="reportmonth" :phoneticdata="skindata" />
    <component :is="perform" :reportmonth="reportmonth" :phoneticdata="performdata" />
    <component :is="problem" :reportmonth="reportmonth" :phoneticdata="problemdata" />
    <component :is="statistic" :reportmonth="reportmonth" :phoneticdata="statisticdata" />
  </div>
  <!-- <div class="app-container"> -->

  <!-- </div> -->
</template>
<script>
// import { mytestfunc } from '@/api/mytestapi'
// import mytestSelect from '@/components/DragSelect'
import myform from './components/myform'
import voice from './components/voice'
import phonetic from './components/phonetic'
import emoji from './components/emoji'
import cash from './components/cash'
import skin from './components/skin'
import perform from './components/perform'
import problem from './components/problem'
import statistic from './components/statistic'
import { getPhoneticData } from '@/api/mytestapi'
import { getVoiceData } from '@/api/mytestapi'
import { getEmojiData } from '@/api/mytestapi'
import { getCashData } from '@/api/mytestapi'
import { getSkinData } from '@/api/mytestapi'
import { getPerformData } from '@/api/mytestapi'
import { getProblemData } from '@/api/mytestapi'
import { getStatisticData } from '@/api/mytestapi'
export default {
  name: 'ArticleList',
  components: { myform, voice, phonetic, emoji, cash, skin, perform, problem, statistic },
  filters: {},
  data() {
    return {
      myform: 'myform',
      voice: 'voice',
      phonetic: 'phonetic',
      emoji: 'emoji',
      cash: 'cash',
      skin: 'skin',
      perform: 'perform',
      problem: 'problem',
      statistic: 'statistic',
      value: '讯飞输入法',
      options: [{ value: 1, label: '讯飞输入法' }],
      time: '',
      reportmonth: { time: '' },
      voicedata: {},
      phoneticdata: {},
      emojidata: { 'num': 111, 'cpl': 222 },
      cashdata: { 'num': 111, 'cpl': 222 },
      skindata: { 'num': 111, 'cpl': 222 },
      performdata: { 'num': 111, 'cpl': 222 },
      problemdata: { 'num': 111, 'cpl': 222 },
      statisticdata: { 'num': 111, 'cpl': 222 },
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
      // this.reportmonth = this.time
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
    },
    gettime2() {
      this.reportmonth.time = this.time
      getVoiceData(this.time).then(response => {
        this.voicedata = response.data[0]
      })
      getPhoneticData(this.time).then(response => {
        this.phoneticdata = response.data[0]
      })
      getEmojiData(this.time).then(response => {
        this.getEmojiData = response.data[0]
      })
      getCashData(this.time).then(response => {
        this.getCashData = response.data[0]
      })
      getSkinData(this.time).then(response => {
        this.getSkinData = response.data[0]
      })
      getPerformData(this.time).then(response => {
        this.getPerformData = response.data[0]
      })
      getProblemData(this.time).then(response => {
        this.getProblemData = response.data[0]
      })
      getStatisticData(this.time).then(response => {
        this.getStatisticData = response.data[0]
      })
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
