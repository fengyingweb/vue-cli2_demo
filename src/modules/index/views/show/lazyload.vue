<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Lazyload" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box" v-for="(img, i) in imageList1" :key="i">
          <div class="lazy-wrapper">
            <img class="lazy-img" v-lazy="img" />
          </div>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">背景图片加载</h5>
        <div class="box" v-for="(img, i) in imageList2" :key="i">
          <div class="lazy-wrapper lazy-bg" v-lazy:background-image="img"></div>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">懒加载模块</h5>
        <lazy-component>
          <div class="box" v-for="(img, i) in imageList3" :key="i">
            <div class="lazy-wrapper">
              <img class="lazy-img" v-lazy="img" />
            </div>
          </div>
        </lazy-component>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Vue from 'vue'
import {Lazyload} from 'vant'
Vue.use(Lazyload, {
  lazyComponent: true
})
const img1 = require('@/assets/preview1.jpg')
const img2 = require('@/assets/preview2.jpg')
const img3 = require('@/assets/preview3.jpg')
const img4 = require('@/assets/preview4.jpg')
const img5 = require('@/assets/preview5.jpg')
const img6 = require('@/assets/preview6.jpg')
const img7 = require('@/assets/preview7.jpg')
const img8 = require('@/assets/preview8.jpg')
export default {
  data () {
    return {
      mainHeight: '0px',
      imageList1: [img1, img2, img3, img4],
      imageList2: [img5, img6],
      imageList3: [img7, img8]
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
    padding: 10px 15px;
    background: #f5f5f5;
  }

  .title5 {
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 15px 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .5);
  }

  .lazy-wrapper {
    width: 310px;
    height: 250px;
  }

  .lazy-bg {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .lazy-img {
    width: 100%;
    height: 100%;
  }
</style>
