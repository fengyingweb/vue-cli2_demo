<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Badge" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-badge-group class="badge-group" :active-key="activeKey" @change="handleChange">
            <van-badge title="标签名称1"/>
            <van-badge title="标签名称2" info="9"/>
            <van-badge title="标签名称3" info="99"/>
            <van-badge title="标签名称4" info="99+"/>
          </van-badge-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Badge, BadgeGroup} from 'vant'
export default {
  components: {
    [Badge.name]: Badge,
    [BadgeGroup.name]: BadgeGroup
  },
  data () {
    return {
      mainHeight: '0px',
      activeKey: 0
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

    handleChange (key) {
      console.log(key)
      this.activeKey = key
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
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    background: #fefef9;
  }
  .badge-group {
    width: 100px;
  }
</style>
