<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="SubmitBar" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-submit-bar
            :price="3050"
            button-text="提交订单"
            tip="你的收货地址不支持同城送, 我们已为你推荐快递"
            @submit="onSubmit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {SubmitBar} from 'vant'
export default {
  components: {
    [SubmitBar.name]: SubmitBar
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
    },

    onSubmit (val) {
      this.$toast('提交订单')
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
    margin-bottom: 20px;
  }
</style>
