<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Area" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-area :area-list="areaList" @change="handleChange"/>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">默认选中</h5>
        <div class="box">
          <van-area :area-list="areaList" value="430100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Area} from 'vant'
import areaList from '../../api/area'
export default {
  components: {
    [Area.name]: Area
  },
  data () {
    return {
      mainHeight: '0px',
      areaList: areaList
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

    handleChange (picker, values, index) {
      console.log(picker)
      console.log(values)
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
</style>
