<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="PullRefresh" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <van-pull-refresh v-model="isRefresh" @refresh="handleRefresh" style="height: 100%">
        <div class="main-item">
          <h5 class="title5">基础用法</h5>
          <div class="box">
            <span>刷新次数: {{count}}</span>
          </div>
        </div>
        <div slot="loading" class="ref-loading">
          <van-loading type="spinner" color="#333" />
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {PullRefresh, Loading} from 'vant'
export default {
  components: {
    [PullRefresh.name]: PullRefresh,
    [Loading.name]: Loading
  },
  data () {
    return {
      mainHeight: '0px',
      count: 0,
      isRefresh: false
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

    handleRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isRefresh = false
        this.count++
      }, 2000)
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
    background: #f8f8f8;
  }

  .title5 {
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    margin-bottom: 20px;
    font-size: 18px;
  }
</style>
