<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Card" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-card
            :num="2"
            price="2.00"
            title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
            desc="描述信息"
            :thumb="thumb1"/>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">高级用法</h5>
        <div class="box">
          <van-card
            :num="2"
            tag="标签"
            price="2.00"
            origin-price="10.00"
            title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
            desc="描述信息"
            :thumb="thumb1">
            <div slot="footer">
              <van-button size="mini" round>按钮</van-button>
              <van-button size="mini" round>按钮</van-button>
            </div>
          </van-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Card} from 'vant'
export default {
  components: {
    [Card.name]: Card
  },
  data () {
    return {
      mainHeight: '0px',
      thumb1: require('@/assets/card1.jpg')
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
