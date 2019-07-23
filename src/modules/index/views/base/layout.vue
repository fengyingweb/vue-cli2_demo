<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Layout" left-arrow fixed :z-index="999" @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <van-row class="row">
          <van-col class="col" :span="8">span: 8</van-col>
          <van-col class="col" :span="8">span: 8</van-col>
          <van-col class="col" :span="8">span: 8</van-col>
        </van-row>

        <van-row class="row">
          <van-col class="col" :span="4">span: 4</van-col>
          <van-col class="col" :span="10" :offset="4">span: 10 offset: 4</van-col>
        </van-row>
      </div>

      <div class="main-item">
        <h5 class="title5">在列元素之间增加间距</h5>
        <van-row class="row" gutter="16">
          <van-col class="col" span="8">span: 8</van-col>
          <van-col class="col" span="8">span: 8</van-col>
          <van-col class="col" span="8">span: 8</van-col>
        </van-row>
      </div>

      <div class="main-item">
        <h5 class="title5">Flex 布局</h5>
        <van-row class="row" type="flex">
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
        </van-row>

        <van-row class="row" type="flex" justify="center">
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
        </van-row>

        <van-row class="row" type="flex" justify="end">
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
        </van-row>

        <van-row class="row" type="flex" justify="space-between">
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
        </van-row>

        <van-row class="row" type="flex" justify="space-around">
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
          <van-col class="col" span="6">span: 6</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Row, Col} from 'vant'
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col
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
  .row {
    margin-bottom: 15px;
  }
  .col {
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    color: #fff;
    &:nth-child(odd) {
      background: #4080ff;
    }

    &:nth-child(even) {
      background: #409eff
    }
  }
</style>
