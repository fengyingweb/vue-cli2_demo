<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Collapse" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="有赞微商城" name="1">
            <div class="item-text">提供多样店铺模板，快速搭建网上商城</div>
          </van-collapse-item>

          <van-collapse-item title="有赞零售" name="2">
            <div class="item-text">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</div>
          </van-collapse-item>

          <van-collapse-item title="有赞美业" name="3" disabled>
            <div class="item-text">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</div>
          </van-collapse-item>
        </van-collapse>
      </div>

      <div class="main-item">
        <h5 class="title5">手风琴</h5>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="有赞微商城" name="1">
            <div class="item-text">提供多样店铺模板，快速搭建网上商城</div>
          </van-collapse-item>

          <van-collapse-item title="有赞零售" name="2">
            <div class="item-text">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</div>
          </van-collapse-item>

          <van-collapse-item title="有赞美业" name="3">
            <div class="item-text">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</div>
          </van-collapse-item>
        </van-collapse>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义标题和内容</h5>
        <van-collapse v-model="activeName2" accordion>
          <van-collapse-item name="1">
            <div slot="title">有赞微商城<van-icon class="title-icon" name="question-o"/></div>
            <div class="item-text">提供多样店铺模板，快速搭建网上商城</div>
          </van-collapse-item>

          <van-collapse-item title="有赞零售" icon="shop-o" name="2">
            <div class="item-text">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</div>
          </van-collapse-item>

          <van-collapse-item title="有赞美业" name="3" value="内容">
            <div class="item-text">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Collapse, CollapseItem} from 'vant'
export default {
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  data () {
    return {
      mainHeight: '0px',
      activeNames: ['1'],
      activeName: '1',
      activeName2: '1'
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
    padding-top: 10px;
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }
  .title-icon {
    margin-left: 5px;
    vertical-align: middle;
  }
</style>
