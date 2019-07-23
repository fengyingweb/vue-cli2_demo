<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="SwipeCell" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <h5 class="title5">基础用法</h5>
      <van-swipe-cell :left-width="65" :right-width="65">
        <span slot="left" class="text">选择</span>
        <van-cell-group>
          <van-cell title="单元格" value="内容"></van-cell>
        </van-cell-group>
        <span slot="right" class="text">删除</span>
      </van-swipe-cell>

      <h5 class="title5">异步关闭</h5>
      <van-swipe-cell :left-width="65" :right-width="65" :on-close="handleClose">
        <span slot="left" class="text">选择</span>
        <van-cell-group>
          <van-cell title="单元格" value="内容"></van-cell>
        </van-cell-group>
        <span slot="right" class="text">删除</span>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {SwipeCell} from 'vant'
export default {
  components: {
    [SwipeCell.name]: SwipeCell
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

    handleClose (clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗?'
          }).then(() => {
            instance.close()
          })
          break
      }
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
  .text {
    font-size: 16px;
    color: #fff
  }
</style>
