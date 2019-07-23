<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Progress" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-progress :percentage="value1" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">置灰</h5>
        <div class="box">
          <van-progress inactive :percentage="value1" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">样式定制</h5>
        <div class="box">
          <van-progress :percentage="value2" color="#f2826a" pivot-text="橙色" />
        </div>

        <div class="box">
          <van-progress :percentage="value3" color="#f44" pivot-text="红色" />
        </div>

        <div class="box">
          <van-progress :percentage="value1" color="#7232dd" pivot-text="紫色" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Progress} from 'vant'
export default {
  components: {
    [Progress.name]: Progress
  },
  data () {
    return {
      mainHeight: '0px',
      value1: 50,
      value2: 30,
      value3: 75
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
    padding: 10px 15px;
    background: #f5f5f5;
  }

  .title5 {
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    margin: 15px 0;
  }
</style>
