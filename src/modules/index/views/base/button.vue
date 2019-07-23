<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Button" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">按钮类型</h5>
        <div class="btn-wrapper">
          <van-button type="default">默认按钮</van-button>
          <van-button type="primary">主要按钮</van-button>
          <van-button type="info">信息按钮</van-button>
          <van-button type="warning">警告按钮</van-button>
          <van-button type="danger">危险按钮</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">朴素按钮</h5>
        <div class="btn-wrapper">
          <van-button type="primary" plain>主要按钮</van-button>
          <van-button type="danger" plain>危险按钮</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用状态</h5>
        <div class="btn-wrapper">
          <van-button type="primary" disabled>主要按钮</van-button>
          <van-button type="danger" disabled>危险按钮</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">加载状态</h5>
        <div class="btn-wrapper">
          <van-button type="primary" loading></van-button>
          <van-button type="danger" loading loading-text="加载中..."></van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">按钮形状</h5>
        <div class="btn-wrapper">
          <van-button type="primary" square>方形按钮</van-button>
          <van-button type="danger" round>圆形按钮</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">按钮尺寸</h5>
        <div class="btn-wrapper">
          <van-button type="primary" size="large">大号按钮</van-button>
          <van-button type="danger" size="normal">普通按钮</van-button>
          <van-button type="info" size="small">小型按钮</van-button>
          <van-button type="warning" size="mini">迷你按钮</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">块状按钮</h5>
        <div class="btn-wrapper">
          <van-button type="primary" block>块状按钮</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Button} from 'vant'
export default {
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      mainHeight: '0px'
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
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
  .btn-wrapper {
    margin-bottom: 20px;
  }
</style>
