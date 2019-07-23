<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Loading" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">Circular</h5>
        <div class="box">
          <van-loading />
          <van-loading class="loading-w" color="white" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">Spinner</h5>
        <div class="box">
          <van-loading type="spinner" />
          <van-loading type="spinner" class="loading-w" color="white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Loading} from 'vant'
export default {
  components: {
    [Loading.name]: Loading
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
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }
  .loading-w {
    margin-left: 20px;
    padding: 10px;
    background: rgba(0, 0, 0, .5);
    border-radius: 3px;
    box-sizing: content-box;
  }
</style>
