<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="PasswordInput" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-password-input
            :value="value"
            info="密码为6位数字"
            @focus="show = true"/>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">明文展示</h5>
        <div class="box">
          <van-password-input
            :value="value"
            :mask="false"
            @focus="show = true"/>
        </div>
      </div>
    </div>

    <van-number-keyboard
      :show="show"
      theme="custom"
      close-button-text="完成"
      @blur="show = false"
      @input="handleInput"
      @delete="handleDelete" />
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {PasswordInput, NumberKeyboard} from 'vant'
export default {
  components: {
    [PasswordInput.name]: PasswordInput,
    [NumberKeyboard.name]: NumberKeyboard
  },
  data () {
    return {
      mainHeight: '0px',
      show: false,
      value: ''
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

    handleInput (key) {
      this.value = (this.value + key).substr(0, 6)
    },

    handleDelete () {
      this.value = this.value.substr(0, this.value.length - 1)
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
