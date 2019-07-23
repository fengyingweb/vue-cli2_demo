<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="SwitchCell" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <van-cell-group title="基础用法">
        <van-switch-cell v-model="checked1" title="标题" @change="handleChange"></van-switch-cell>
      </van-cell-group>

      <van-cell-group title="禁用">
        <van-switch-cell v-model="checked2" title="标题"></van-switch-cell>
      </van-cell-group>

      <van-cell-group title="加载状态">
        <van-switch-cell v-model="checked1" loading title="标题"></van-switch-cell>
      </van-cell-group>

      <van-cell-group title="自定义颜色">
        <van-switch-cell v-model="checked1" active-color="#07c160" title="标题"></van-switch-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {SwitchCell} from 'vant'
export default {
  components: {
    [SwitchCell.name]: SwitchCell
  },
  data () {
    return {
      mainHeight: '0px',
      checked1: true,
      checked2: true
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
    handleChange (val) {
      console.log(val)
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
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }
</style>
