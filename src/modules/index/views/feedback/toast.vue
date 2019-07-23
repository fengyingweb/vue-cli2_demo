<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Toast" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">文字提示</h5>
        <div class="box">
          <van-button @click="handleToast1('提示内容')">文字提示</van-button>
          <van-button @click="handleToast1('这是一条长文字提示，超过一定字数就会换行')">长文提示</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">加载提示</h5>
        <div class="box">
          <van-button @click="handleToast2">加载提示</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">成功/失败提示</h5>
        <div class="box">
          <van-button @click="handleToast3('success', '成功')">成功提示</van-button>
           <van-button @click="handleToast3('fail', '失败')">失败提示</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">高级用法</h5>
        <div class="box">
          <van-button @click="handleToast4">高级用法</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
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
    },

    handleToast1 (val) {
      this.$toast(val)
    },

    handleToast2 () {
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      })
    },

    handleToast3 (type, message) {
      this.$toast[type](message)
    },

    handleToast4 () {
      let toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: '倒计时 5 秒'
      })

      let second = 5
      let timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `倒计时 ${second} 秒`
        } else {
          clearInterval(timer)
          toast.clear()
        }
      }, 1000)
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
</style>
