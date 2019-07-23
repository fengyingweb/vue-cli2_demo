<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="NavBar" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="handleClickRight"></van-nav-bar>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">高级用法</h5>
        <div class="box">
          <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow>
            <van-icon slot="right" name="search" />
          </van-nav-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {NavBar} from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar
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

    // 点击左边图标
    onClickLeft () {
      this.$toast('返回')
    },

    // 点击右边按钮
    handleClickRight () {
      this.$toast('按钮')
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
    margin-bottom: 20px;
  }
</style>
