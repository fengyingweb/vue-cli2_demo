<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="List" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <van-list
          v-model="isLoading"
          :finished="isFinished"
          finished-text="没有更多了"
          @load="handleLoad">
          <van-cell v-for="item in list" :key="item" title="" :value="item<10 ? ('0'+item) : item" :center="true" />
          <van-loading slot="loading" class="list-loading" type="spinner" color="#333" />
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {List, Loading} from 'vant'
export default {
  components: {
    [List.name]: List,
    [Loading.name]: Loading
  },
  data () {
    return {
      mainHeight: '0px',
      isLoading: false,
      isFinished: false,
      list: []
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

    handleLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.isLoading = false
        if (this.list.length >= 40) {
          this.isFinished = true // 数据全部加载完成
        }
      }, 500)
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
    margin: 15px 0;
  }

  .list-loading {
    margin: 10px auto;
  }
</style>
