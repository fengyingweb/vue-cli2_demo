<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="NumberKeyboard" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">默认样式 {{'num: ' + num}}</h5>
        <div class="btn-box">
          <van-button @touchstart.native.stop="handleOpenKeyboard('default')">弹出默认键盘</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义样式</h5>
        <div class="btn-box">
          <van-button @touchstart.native.stop="handleOpenKeyboard('custom')">弹出自定义键盘</van-button>
        </div>
      </div>
    </div>
    <van-number-keyboard
      :show="show"
      :theme="theme"
      extra-key="."
      close-button-text="完成"
      @blur="show = false"
      @input="handleInput"
      @delete="handleDelete" />
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {NumberKeyboard, Button} from 'vant'
export default {
  components: {
    [NumberKeyboard.name]: NumberKeyboard,
    [Button.name]: Button
  },
  data () {
    return {
      mainHeight: '0px',
      show: false,
      theme: 'default',
      num: ''
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

    handleOpenKeyboard (theme) {
      this.show = true
      this.theme = theme
      this.num = ''
    },

    handleInput (val) {
      this.$toast(val)
      this.num += val + ''
    },

    handleDelete () {
      if (this.num.length) {
        let nums = this.num.split('')
        let len = nums.length
        let nnums = nums.splice(len - 1, 1)
        this.num = nums.join('')
        this.$toast(nnums[0])
      }
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

  .btn-box {
    margin-bottom: 20px;
  }
</style>
