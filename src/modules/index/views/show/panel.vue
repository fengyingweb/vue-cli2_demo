<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Panel" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-panel title="标题" desc="描述信息" status="状态">
            <div class="panel-content">内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容</div>
          </van-panel>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">高级用法</h5>
        <div class="box">
          <van-panel title="标题" desc="描述信息" status="状态">
            <div class="panel-content">内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容,内容</div>
            <div class="panel-footer" slot="footer">
              <van-button size="small" type="danger" plain>取消</van-button>
              <van-button size="small" type="danger">确认</van-button>
            </div>
          </van-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Panel} from 'vant'
export default {
  components: {
    [Panel.name]: Panel
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
    margin-bottom: 15px;
  }
  .panel-content {
    padding: 10px 15px;
    font-size: 16px;
  }
  .panel-footer {
    text-align: right;
  }
</style>
