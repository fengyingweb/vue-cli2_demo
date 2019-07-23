<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Pagination" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-pagination
            v-model="currentPage1"
            :total-items="24"
            :items-per-page="5"
            @change="handlePageChange"/>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">简单用法</h5>
        <div class="box">
          <van-pagination
            v-model="currentPage2"
            :page-count="12"
            mode="simple"/>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">显示省略号</h5>
        <div class="box">
          <van-pagination
            v-model="currentPage3"
            :total-items="125"
            :show-page-size="3"
            force-ellipses/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Pagination} from 'vant'
export default {
  components: {
    [Pagination.name]: Pagination
  },
  data () {
    return {
      mainHeight: '0px',
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 3
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

    handlePageChange (val) {
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
