<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Notify" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-button @click="handleOpenNotify1">显示通知消息</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义背景色</h5>
        <div class="box">
          <van-button @click="handleOpenNotify2">自定义配置</van-button>
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
    },

    handleOpenNotify1 () {
      this.$notify({
        message: '通知内容, 通知内容, 通知内容, 通知内容, 通知内容, 通知内容, 通知内容, 通知内容'
      })
    },

    handleOpenNotify2 () {
      this.$notify({
        message: '通知内容, 通知内容, 通知内容, 通知内容, 通知内容, 通知内容, 通知内容, 通知内容',
        duration: 5000,
        background: '#1989fa'
      })
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
