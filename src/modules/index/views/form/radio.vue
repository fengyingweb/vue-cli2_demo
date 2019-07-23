<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Radio" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法 value: {{value1}}</h5>
        <div class="box">
          <van-radio-group v-model="value1">
            <van-radio name="1"><span class="radio-text">单选框1</span></van-radio>
            <van-radio name="2"><span class="radio-text">单选框2</span></van-radio>
          </van-radio-group>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用状态 value: {{value2}}</h5>
        <div class="box">
          <van-radio-group v-model="value2" disabled>
            <van-radio name="1"><span class="radio-text">单选框1</span></van-radio>
            <van-radio name="2"><span class="radio-text">单选框2</span></van-radio>
          </van-radio-group>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义颜色</h5>
        <div class="box">
          <van-radio checked-color="#07c160"><span class="radio-text">单选框</span></van-radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Radio, RadioGroup} from 'vant'
export default {
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup
  },
  data () {
    return {
      mainHeight: '0px',
      value1: '1',
      value2: '2',
      checked: true
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
    margin-bottom: 20px;
  }

  .radio-text {
    font-size: 16px;
  }
</style>
