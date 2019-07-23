<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Steps" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-steps :active="active1">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
          </van-steps>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义样式</h5>
        <div class="box">
          <van-steps :active="active1" active-icon="success" active-color="#38f">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
          </van-steps>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">竖状步骤</h5>
        <div class="box">
          <van-steps :active="active2" direction="vertical">
            <van-step>
              <h3>【城市】物流状态1</h3>
              <p>2019-03-21 12:40</p>
            </van-step>
            <van-step>
              <h3>【城市】物流状态2</h3>
              <p>2019-03-21 19:00</p>
            </van-step>
            <van-step>
              <h3>快件已发货</h3>
              <p>2019-03-22 09:30</p>
            </van-step>
            <van-step>
              <h3>交易完成</h3>
              <p>2019-03-22 18:30</p>
            </van-step>
          </van-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Step, Steps} from 'vant'
export default {
  components: {
    [Step.name]: Step,
    [Steps.name]: Steps
  },
  data () {
    return {
      mainHeight: '0px',
      active1: 1,
      active2: 0
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
