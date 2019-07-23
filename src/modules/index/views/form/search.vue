<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Search" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-search v-model="value" placeholder="请输入搜索关键词" @search="handleSearch" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">监听事件对象</h5>
        <div class="box">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="handleSearch"
            @cancel="handleCancel" />
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">高级用法</h5>
        <div class="box">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            label="地址"
            shape="round"
            @search="handleSearch">
            <div slot="action" @click="handleSearch(value)">搜索</div>
          </van-search>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Search} from 'vant'
export default {
  components: {
    [Search.name]: Search
  },
  data () {
    return {
      mainHeight: '0px',
      value: ''
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

    handleSearch (val) {
      console.log(val)
    },

    handleCancel (val) {
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
    padding: 10px 0px;
    background: #f5f5f5;
  }

  .title5 {
    padding-left: 15px;
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }
</style>
