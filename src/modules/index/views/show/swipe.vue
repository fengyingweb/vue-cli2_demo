<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Swipe" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-swipe :autoplay="3000" indicator-color="#fff">
            <van-swipe-item>
              <div class="swipe-item swipe-bg1">1</div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="swipe-item swipe-bg2">2</div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="swipe-item swipe-bg3">3</div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="swipe-item swipe-bg4">4</div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">图片懒加载</h5>
        <div class="box">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(img, i) in imageList" :key="i">
              <div class="swipe-item-img">
                <img v-lazy="img" />
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Vue from 'vue'
import {Lazyload, Swipe, SwipeItem} from 'vant'
Vue.use(Lazyload, {
  lazyComponent: true
})
const img1 = require('@/assets/preview1.jpg')
const img2 = require('@/assets/preview2.jpg')
const img3 = require('@/assets/preview3.jpg')
const img4 = require('@/assets/preview4.jpg')
const img5 = require('@/assets/preview5.jpg')
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data () {
    return {
      mainHeight: '0px',
      imageList: [img1, img2, img3, img4, img5]
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

  .swipe-item {
    width: 100%;
    height: 150px;
    text-align: center;
    color: #fff;
    line-height: 150px;
  }

  .swipe-bg1 {
    background: #409eff;
  }

  .swipe-bg2 {
    background: #f56;
  }

  .swipe-bg3 {
    background: #07c160;
  }
  .swipe-bg4 {
    background: #e6a23c;
  }

  .swipe-item-img {
    width: 100%;
    height: 300px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
