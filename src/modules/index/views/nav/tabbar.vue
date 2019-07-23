<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Tabbar" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-tabbar v-model="active1" :fixed="false" @change="handleChange">
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
          </van-tabbar>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义颜色</h5>
        <div class="box">
          <van-tabbar v-model="active2" :fixed="false" active-color="#07c160">
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
          </van-tabbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Tabbar, TabbarItem} from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      mainHeight: '0px',
      active1: 0,
      active2: 1
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

    handleChange (active) {
      console.log(active)
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
