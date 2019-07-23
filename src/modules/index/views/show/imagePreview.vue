<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="ImagePreview" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-button type="primary" plain @click="handlePreview1">预览图片</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">指定初始位置</h5>
        <div class="box">
          <van-button type="primary" plain @click="handlePreview2">指定初始位置</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {ImagePreview} from 'vant'
const img1 = require('@/assets/preview1.jpg')
const img2 = require('@/assets/preview2.jpg')
const img3 = require('@/assets/preview3.jpg')
const img4 = require('@/assets/preview4.jpg')
export default {
  data () {
    return {
      mainHeight: '0px',
      images: [img1, img2, img3, img4]
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

    handlePreview1 () {
      ImagePreview({
        images: this.images
      })
    },

    handlePreview2 () {
      ImagePreview({
        images: this.images,
        startPosition: 1,
        showIndicators: true,
        onClose (item) {
          console.log(item)
        }
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
    margin: 15px 0;
  }
</style>
