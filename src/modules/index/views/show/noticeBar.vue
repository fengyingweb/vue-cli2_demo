<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="NoticeBar" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-notice-bar :text="text1" left-icon="volume-o"></van-notice-bar>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">通告栏模式</h5>
        <div class="box">
          <van-notice-bar :text="text1" left-icon="volume-o" mode="closeable"></van-notice-bar>
        </div>

        <div class="box">
          <van-notice-bar :text="text1" left-icon="volume-o" mode="link"></van-notice-bar>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用滚动</h5>
        <div class="box">
          <van-notice-bar :text="text1" left-icon="volume-o" :scrollable="false"></van-notice-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {NoticeBar} from 'vant'
export default {
  components: {
    [NoticeBar.name]: NoticeBar
  },
  data () {
    return {
      mainHeight: '0px',
      text1: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
    }
  },

  methods: {
    ...mapMutations({
      setDirection: 'setDirection'
    }),
    // 返回
    handleClickLeft () {
      this.setDirection({direction: 'reverse'})
      this.$router.go(-1)
    }
  },

  mounted () {
    this.$refs['header'] && (this.mainHeight = window.innerHeight - this.$refs['header'].offsetHeight + 'px')
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .header {
    width: 100%;
    height: 46px;
  }
  .main-wrapper {
    width: 100%;
    padding: 10px 0;
    background: #f5f5f5;
  }

  .title5 {
    padding-left: 15px;
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    margin: 15px 0;
  }
</style>
