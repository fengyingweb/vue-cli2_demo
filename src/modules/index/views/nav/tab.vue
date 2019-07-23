<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Tab" left-arrow fixed :z-index="9999" @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-tabs v-model="active1" @change="handleChange">
            <van-tab title="标签1">内容1</van-tab>
            <van-tab title="标签2">内容2</van-tab>
            <van-tab title="标签3">内容3</van-tab>
            <van-tab title="标签4">内容4</van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">横向滚动</h5>
        <div class="box">
          <van-tabs v-model="active2">
            <van-tab v-for="num in 8" :key="num" :title="'标签' + num">内容{{num}}</van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用标签</h5>
        <div class="box">
          <van-tabs>
            <van-tab v-for="num in 4" :key="num" :title="'标签' + num" :disabled="num === 2">内容{{num}}</van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">样式风格</h5>
        <div class="box">
          <van-tabs type="card">
            <van-tab v-for="num in 4" :key="num" :title="'标签' + num">内容{{num}}</van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">粘性布局</h5>
        <div class="box">
          <van-tabs sticky>
            <van-tab v-for="num in 4" :key="num" :title="'标签' + num">内容{{num}}</van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义标签</h5>
        <div class="box">
          <van-tabs>
            <van-tab v-for="num in 4" :key="num">
              <div slot="title">
                <van-icon name="more-o" />
                标签{{num}}
              </div>
              <div>内容{{num}}</div>
            </van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">切换动画</h5>
        <div class="box">
          <van-tabs animated>
            <van-tab v-for="num in 4" :key="num" :title="'标签' + num">内容{{num}}</van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">滑动切换</h5>
        <div class="box">
          <van-tabs animated swipeable>
            <van-tab v-for="num in 4" :key="num" :title="'标签' + num">内容{{num}}</van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Tab, Tabs} from 'vant'
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data () {
    return {
      mainHeight: '0px',
      active1: 2,
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
    },

    handleChange (index, title) {
      console.log(index)
      console.log(title)
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
