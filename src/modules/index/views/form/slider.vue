<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Slider" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法 value: {{value1}}</h5>
        <div class="box">
          <van-slider v-model="value1" @change="handleChange" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">指定选择范围 value: {{value2}}</h5>
        <div class="box">
          <van-slider v-model="value2" :min="10" :max="90" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用 value: {{value3}}</h5>
        <div class="box">
          <van-slider v-model="value3" disabled />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">指定步长 value: {{value4}}</h5>
        <div class="box">
          <van-slider v-model="value4" :step="10" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义样式 value: {{value5}}</h5>
        <div class="box">
          <van-slider v-model="value5" bar-height="4px" active-color="#f56" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义按钮</h5>
        <div class="box">
          <van-slider v-model="value6" active-color="#f56">
            <div slot="button" class="custom-button">{{value6}}</div>
          </van-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Slider} from 'vant'
export default {
  components: {
    [Slider.name]: Slider
  },
  data () {
    return {
      mainHeight: '0px',
      value1: 50,
      value2: 30,
      value4: 40,
      value3: 20,
      value5: 45,
      value6: 50
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
      this.$toast('当前值: ' + val)
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
    margin: 20px 0;
  }

  .custom-button {
    width: 26px;
    height: 18px;
    background: #f56;
    border-radius: 9px;
    font-size: 14px;
    color: #fff;
    line-height: 18px;
    text-align: center;
  }
</style>
