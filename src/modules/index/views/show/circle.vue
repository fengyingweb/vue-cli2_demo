<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Circle" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="h5">基础用法</h5>
        <div class="box-circle">
          <van-circle
            class="circle"
            v-model="currentVal"
            :rate="rate"
            :speed="speed"
            :text="text" />
          <van-circle
            class="circle"
            v-model="currentVal"
            :rate="rate"
            :speed="speed"
            :text="text"
            color="#07c160"
            fill="#fff"
            layer-color="#ebedf0"
            :stroke-width="60"
            size="120px"
            :clockwise="false" />
        </div>

        <div class="box">
          <van-button type="primary" @click="handleAdd">增加</van-button>
          <van-button type="danger" @click="handleReduce">减少</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Circle} from 'vant'
export default {
  components: {
    [Circle.name]: Circle
  },
  data () {
    return {
      mainHeight: '0px',
      currentVal: 0,
      rate: 30,
      speed: 100
    }
  },

  computed: {
    text () {
      return this.currentVal.toFixed(0) + '%'
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

    handleAdd () {
      if (this.rate < 100) {
        this.rate += 10
      }
    },

    handleReduce () {
      if (this.rate > 0) {
        this.rate -= 10
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
    padding: 10px 15px;
    background: #f5f5f5;
  }

  .title5 {
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box-circle {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .circle {
    margin-left: 15px;
    vertical-align: middle;
  }
</style>
