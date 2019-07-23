<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Stepper" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-stepper v-model="value1" @change="handleChange"/>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用</h5>
        <div class="box">
          <van-stepper v-model="value2" disabled/>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">高级用法</h5>
        <div class="box">
          <van-stepper v-model="value3" integer :step="2" :min="2" :max="80"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Stepper} from 'vant'
export default {
  components: {
    [Stepper.name]: Stepper
  },
  data () {
    return {
      mainHeight: '0px',
      value1: 1,
      value2: 10,
      value3: 2
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
    padding: 20px 0;
    background: #fff;
  }
</style>
