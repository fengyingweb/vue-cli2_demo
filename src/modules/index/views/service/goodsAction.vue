<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="GoodsAction" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-goods-action>
            <van-goods-action-mini-btn
              icon="chat-o"
              text="客服"
              @click="onClickMiniBtn"
            />
            <van-goods-action-mini-btn
              :info="5"
              icon="cart-o"
              text="购物车"
              @click="onClickMiniBtn"
            />
            <van-goods-action-big-btn
              text="加入购物车"
              @click="onClickBigBtn"
            />
            <van-goods-action-big-btn
              primary
              text="立即购买"
              @click="onClickBigBtn"
            />
          </van-goods-action>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant'
export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
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

    onClickMiniBtn () {
      this.$toast('点击图标')
    },

    onClickBigBtn () {
      this.$toast('点击按钮')
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
