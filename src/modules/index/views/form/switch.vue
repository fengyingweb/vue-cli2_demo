<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Switch" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法 checked: {{checked}}</h5>
        <div class="box">
          <van-switch v-model="checked" @change="handleChange" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用</h5>
        <div class="box">
          <van-switch v-model="checked2" disabled />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">加载状态</h5>
        <div class="box">
          <van-switch v-model="checked" loading />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义大小</h5>
        <div class="box">
          <van-switch v-model="checked" size="24px" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义颜色</h5>
        <div class="box">
          <van-switch v-model="checked" size="24px" active-color="#07c160" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Switch} from 'vant'
export default {
  components: {
    [Switch.name]: Switch
  },
  data () {
    return {
      mainHeight: '0px',
      checked: true,
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
    padding: 10px 15px;
    background: #f5f5f5;
  }

  .title5 {
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    margin-bottom: 20px;
  }
</style>
