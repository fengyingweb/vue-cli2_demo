<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Tag" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-tag>标签</van-tag>
          <van-tag type="danger">标签</van-tag>
          <van-tag type="primary">标签</van-tag>
          <van-tag type="success">标签</van-tag>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">空闲样式</h5>
        <div class="box">
          <van-tag plain>标签</van-tag>
          <van-tag type="danger" plain>标签</van-tag>
          <van-tag type="primary" plain>标签</van-tag>
          <van-tag type="success" plain>标签</van-tag>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">圆角样式</h5>
        <div class="box">
          <van-tag round>标签</van-tag>
          <van-tag type="danger" round>标签</van-tag>
          <van-tag type="primary" round>标签</van-tag>
          <van-tag type="success" round>标签</van-tag>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">标记样式</h5>
        <div class="box">
          <van-tag mark>标签</van-tag>
          <van-tag type="danger" mark>标签</van-tag>
          <van-tag type="primary" mark>标签</van-tag>
          <van-tag type="success" mark>标签</van-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Tag} from 'vant'
export default {
  components: {
    [Tag.name]: Tag
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
    margin-bottom: 15px;
  }
</style>
