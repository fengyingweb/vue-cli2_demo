<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Popup" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="btn-wrapper">
          <van-button type="primary" plain @click="handleOpen1('')">弹出popup</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">弹窗位置</h5>
        <div class="btn-wrapper">
          <van-button type="primary" plain @click="handleOpen1('bottom')">底部弹出</van-button>
          <van-button type="primary" plain @click="handleOpen1('top')">顶部弹出</van-button>
          <van-button type="primary" plain @click="handleOpen1('left')">左边弹出</van-button>
          <van-button type="primary" plain @click="handleOpen1('right')">右边弹出</van-button>
        </div>
      </div>
    </div>

    <van-popup v-model="show" :position="position" :overlay="overlay" @open="handlePopOpen" @close="handlePopClose" @click-overlay="handleClickOverlay">
      <div class="popup-content" :style="popStyle">内容</div>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Button, Popup} from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup
  },
  data () {
    return {
      mainHeight: '0px',
      show: false,
      position: '',
      overlay: true
    }
  },

  computed: {
    popStyle () {
      let {position} = this
      let style = {}
      if (position === '' || position === 'top' || position === 'bottom') {
        style.width = window.innerWidth + 'px'
        style.height = '100px'
      } else {
        style.width = '240px'
        style.height = window.innerHeight + 'px'
      }
      return style
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

    // 弹窗popup
    handleOpen1 (pos) {
      this.show = true
      this.position = pos
    },

    handlePopOpen () {
      this.$toast('open popup')
    },

    handlePopClose () {
      // this.$toast('close popup')
    },

    handleClickOverlay () {
      let toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner'
      })
      setTimeout(() => {
        toast.clear()
      }, 3000)
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
  .btn-wrapper {
    margin-bottom: 20px;
  }
  .popup-content {
    padding-top: 30px;
    width: 375px;
    height: 100px;
    text-align: center;
  }
</style>
