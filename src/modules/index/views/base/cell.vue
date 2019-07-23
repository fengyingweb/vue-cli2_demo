<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Cell" fixed left-arrow @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <van-cell-group title="基础用法">
        <van-cell title="单元格" value="内容"></van-cell>
        <van-cell title="单元格" label="描述信息" value="内容"></van-cell>
      </van-cell-group>

      <van-cell-group title="单元格大小">
        <van-cell title="单元格" size="large" value="内容" border></van-cell>
        <van-cell title="单元格" label="描述信息" size="large" value="内容"></van-cell>
      </van-cell-group>

      <van-cell-group title="展示图标">
        <van-cell title="单元格" value="内容" icon="location-o"></van-cell>
      </van-cell-group>

      <van-cell-group title="展示箭头">
        <van-cell title="单元格" icon="location-o" is-link></van-cell>
        <van-cell title="单元格" value="内容" icon="location-o" is-link></van-cell>
        <van-cell title="单元格" value="内容" icon="location-o" arrow-direction="down" is-link></van-cell>
      </van-cell-group>

      <van-cell-group title="页面跳转">
        <van-cell title="单元格" icon="location-o" is-link url="//youzan.github.io/vant/mobile.html"></van-cell>
        <van-cell title="单元格" icon="location-o" is-link to="/home"></van-cell>
      </van-cell-group>

      <van-cell-group title="高级用法">
        <van-cell icon="shop-o" value="内容" is-link>
          <template slot="title">
            <span class="custom-text">单元格</span>
            <van-tag type="danger">标签</van-tag>
          </template>
        </van-cell>
        <van-cell title="单元格">
          <van-icon slot="right-icon" name="search" class="custom-icon"></van-icon>
        </van-cell>
      </van-cell-group>
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
    padding: 10px 0;
    background: #f5f5f5;
  }
  .custom-icon {
    line-height: 24px;
  }
</style>
