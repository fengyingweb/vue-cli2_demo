<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Rate" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法 value: {{value1}}</h5>
        <div class="box">
          <van-rate v-model="value1" @change="handleChange" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义图标 value: {{value2}}</h5>
        <div class="box">
          <van-rate
            v-model="value2"
            icon="like"
            void-icon="like-o"
            color="#f56"
            void-color="#f67"
            @change="handleChange" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义样式 value: {{value3}}</h5>
        <div class="box">
          <van-rate
            v-model="value3"
            :size="25"
            :count="6"
            color="#07c160"
            void-color="#ceefe8"
            @change="handleChange" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用状态 value: {{value4}}</h5>
        <div class="box">
          <van-rate
            v-model="value4"
            :size="25"
            disabled
            @change="handleChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Rate} from 'vant'
export default {
  components: {
    [Rate.name]: Rate
  },
  data () {
    return {
      mainHeight: '0px',
      value1: 3,
      value2: 3,
      value3: 4,
      value4: 2
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
